// scripts/update-duo.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const OUT = path.join(__dirname, "..", "assets", "data", "duolingo.json");

const USERNAME_ENV = process.env.DUO_PROFILE;
const DUO_USER     = process.env.DUO_USER;
const DUO_PASS     = process.env.DUO_PASS;

function cleanNumber(txt = "") {
  // "120,609" -> 120609 ; "59 139" -> 59139
  return Number(String(txt).replace(/[^\d]/g, "")) || 0;
}

async function fetchPublicProfile(username) {
  // API pública (a veces devuelve 403)
  const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(username)}`;
  const r = await fetch(url, { headers: { "accept": "application/json" }});
  if (!r.ok) throw new Error(`Public API HTTP ${r.status}`);
  const data = await r.json();

  const user = data?.users?.[0];
  if (!user) throw new Error("Public API: empty user");

  const streak   = user?.streak || user?.site_streak || user?.currentStreak?.length || 0;
  const totalXp  = user?.totalXp ?? 0;

  // courses traen xp por idioma
  const languages = (user?.courses || []).map(c => ({
    title: c.title,  // "French", "Spanish", ...
    short: c.learningLanguage, // "fr", "es", ...
    xp: c.xp || 0
  })).sort((a,b)=> (b.xp||0) - (a.xp||0));

  // Algunos campos no están en el API público
  const league      = undefined;
  const top3Count   = undefined;

  return { streak: Number(streak) || 0, totalXp, league, top3Count, languages };
}

async function fetchViaBrowser(username) {
  // Login + lectura del perfil con Playwright (Chromium)
  const { chromium } = await import("playwright");

  const browser = await chromium.launch({ args: ["--no-sandbox"] });
  const ctx  = await browser.newContext();
  const page = await ctx.newPage();

  try {
    // Login
    await page.goto("https://www.duolingo.com/");
    await page.getByRole("button", { name: /i already have an account|ya tengo cuenta|sign in/i }).click().catch(()=>{});
    await page.waitForTimeout(800);

    // Dos posibles formularios (popup o página)
    const userSel = 'input[name="username"], input[name="login"]';
    const passSel = 'input[name="password"]';
    await page.locator(userSel).first().fill(DUO_USER);
    await page.locator(passSel).first().fill(DUO_PASS);
    await page.getByRole("button", { name: /log in|iniciar sesión|sign in/i }).first().click();

    // Espera a estar dentro
    await page.waitForLoadState("networkidle", { timeout: 60000 });

    const profile = username || DUO_USER;
    await page.goto(`https://www.duolingo.com/profile/${encodeURIComponent(profile)}`, { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 60000 });

    // Extrae textos relevantes del perfil (es/inglés)
    const info = await page.evaluate(() => {
      const grabText = () => Array.from(document.querySelectorAll("body *"))
        .slice(0, 4000)
        .map(n => (n.childElementCount ? "" : n.textContent || ""))
        .filter(Boolean)
        .map(t => t.replace(/\s+/g, " ").trim());

      const texts = grabText().join(" • ").toLowerCase();

      const num = (re) => {
        const m = texts.match(re);
        return m ? Number(m[1].replace(/[^\d]/g, "")) : undefined;
      };

      // streak
      let streak = num(/(\d+)\s*(?:día|dias|days?)\s*de\s*racha|(\d+)\s*day\s*streak/i) || 0;

      // total xp
      let totalXp = num(/(\d[\d.,\s]+)\s*(?:exp|xp)\s*(?:totales|total)?/i) || undefined;

      // veces en top 3
      let top3 = num(/(\d+)\s*veces?\s*en\s*el\s*top\s*3|(\d+)\s*times?\s*in\s*top\s*3/i) || undefined;

      // league / division
      const leagues = [
        "bronce","plata","oro","zafiro","rubí","rubi","esmeralda","amatista","perla","obsidiana","diamante",
        "bronze","silver","gold","sapphire","ruby","emerald","amethyst","pearl","obsidian","diamond"
      ];
      const foundLeague = leagues.find(l => texts.includes(l));
      let league = foundLeague ? (foundLeague[0].toUpperCase()+foundLeague.slice(1)) : undefined;
      if (league === "Rubí") league = "Rubí"; // acento

      return { streak, totalXp, top3, league };
    });

    // Idiomas + XP desde la app (marcados en el DOM con banderitas/nombre)
    const langs = await page.evaluate(() => {
      // Buscar tarjetas/filas que tengan nombre de idioma y xp cercano
      const rows = Array.from(document.querySelectorAll("div,li,section")).slice(0, 2000);
      const items = [];
      rows.forEach(row => {
        const t = row.textContent?.trim() || "";
        // Heurística: nombre de idioma + número con XP
        const m = t.match(/\b(english|inglés|spanish|español|french|francés|german|alemán)\b/i);
        const n = t.match(/(\d[\d.,\s]+)\s*(xp|exp)/i);
        if (m && n) {
          const title = m[1];
          const xp = Number(n[1].replace(/[^\d]/g, "")) || 0;
          items.push({ title, xp });
        }
      });
      // Preferir únicos por título con mayor XP
      const map = new Map();
      items.forEach(i => {
        const k = i.title.toLowerCase();
        if (!map.has(k) || map.get(k).xp < i.xp) map.set(k, i);
      });
      return Array.from(map.values());
    });

    await browser.close();

    // Devuelve con lo que tengamos
    return {
      streak: info.streak ?? 0,
      totalXp: info.totalXp,
      top3Count: info.top3,
      league: info.league,
      languages: langs.sort((a,b)=> (b.xp||0) - (a.xp||0))
    };
  } catch (e) {
    await browser.close();
    throw e;
  }
}

async function main() {
  let data;

  const username = USERNAME_ENV || DUO_USER;
  try {
    data = await fetchPublicProfile(username);
  } catch (e) {
    console.warn("[Duolingo] public API failed:", e.message);
    // Fallback Playwright
    data = await fetchViaBrowser(username);
  }

  // Normaliza idiomas (capitaliza)
  const pretty = (s="") => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  const languages = (data.languages || []).map(l => ({
    title: pretty(l.title || l.label || l.lang || ""),
    xp: Number(l.xp) || 0
  }));

  const out = {
    profile: username,
    profileUrl: `https://www.duolingo.com/profile/${encodeURIComponent(username)}`,
    streak: Number(data.streak) || 0,
    totalXp: (data.totalXp != null) ? Number(data.totalXp) : undefined,
    league: data.league,
    top3Count: (data.top3Count != null) ? Number(data.top3Count) : undefined,
    languages,
    lastUpdated: new Date().toISOString()
  };

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(out, null, 2), "utf8");
  console.log("[Duolingo] wrote", OUT, "ok");
}

main().catch(err => {
  console.error("[Duolingo] updater failed:", err);
  process.exit(1);
});