// scripts/update-duo.mjs
// Actualiza assets/data/duolingo.json con: streak, idiomas (+nivel/xp), stats y achievements.
// Estrategia: 1) API pública (si responde), 2) Playwright (login + scrape del __NEXT_DATA__).

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../assets/data/duolingo.json");

const PROFILE = process.env.DUO_PROFILE || process.env.DUO_USER || "";
const DUO_USER = process.env.DUO_USER || "";
const DUO_PASS = process.env.DUO_PASS || "";

if (!PROFILE) {
  console.error("[Duolingo] DUO_PROFILE vacío.");
  process.exit(1);
}

// ---------- util -------------

async function writeJSON(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log("[Duolingo] wrote", file);
}

function pick(obj, ...keys) {
  for (const k of keys) if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  return undefined;
}

function normalizeCourses(courses) {
  if (!Array.isArray(courses)) return [];
  return courses.map(c => {
    // Algunos esquemas posibles
    const name = c.title || c.name || c.languageString || c.learningLanguageName || c.learningLanguage || "Language";
    const code = (c.code || c.learningLanguage || name || "").toString().toLowerCase();
    const level = c.level ?? c.levelNum ?? c.levels ?? null;
    const xp = c.xp ?? c.points ?? c.xpGained ?? null;
    return { name, code, level, xp };
  });
}

function buildBase(data = {}) {
  return {
    profile: PROFILE,
    profileUrl: `https://www.duolingo.com/profile/${encodeURIComponent(PROFILE)}`,
    streak: 0,
    languages: [],
    stats: undefined,
    achievements: undefined,
    ...data,
    lastUpdated: new Date().toISOString()
  };
}

// ---------- 1) API pública (best-effort) -------------

async function tryPublicAPI(profile) {
  // Varias rutas históricas; Duolingo cambia a veces. Probamos en orden.
  const candidates = [
    `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(profile)}`,
    `https://www.duolingo.com/api/1/users/show?username=${encodeURIComponent(profile)}`
  ];

  for (const url of candidates) {
    const res = await fetch(url, { headers: { "accept": "application/json" } });
    if (!res.ok) {
      console.log(`[PublicAPI] ${res.status} for ${url}`);
      continue;
    }
    const j = await res.json();

    // Esquema #1: { users: [ { ... } ] }
    const u = Array.isArray(j?.users) ? j.users[0] : j?.user || j;
    if (!u) continue;

    const streak = pick(u, "site_streak", "streak", "currentStreak", "streak_extended") || 0;
    const courses = normalizeCourses(
      u.courses || u.language_data || u.languages || u.learningLanguages || []
    );

    // Algunas APIs públicas no dan achievements/stats. Devolvemos lo básico.
    return buildBase({ streak: Number(streak) || 0, languages: courses });
  }

  throw new Error("Public API HTTP 4xx/5xx");
}

// ---------- 2) Playwright (login + scrape) -------------

async function fetchViaBrowser(profile, user, pass) {
  const { chromium } = await import("playwright"); // instalado por el workflow
  const browser = await chromium.launch({ headless: true });
  try {
    const ctx = await browser.newContext({
      locale: "en-US",
      colorScheme: "dark"
    });
    const page = await ctx.newPage();

    // Login
    await page.goto("https://www.duolingo.com/log-in", { waitUntil: "domcontentloaded" });
    await page.fill('input[name="identifier"]', user);
    await page.fill('input[name="password"]', pass);
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForLoadState("networkidle")
    ]);

    // Ir al perfil público
    await page.goto(`https://www.duolingo.com/profile/${encodeURIComponent(profile)}`, {
      waitUntil: "networkidle",
      timeout: 120_000
    });

    // Intento 1: __NEXT_DATA__ (Next.js) – contiene casi todo.
    const data = await page.evaluate(() => {
      const nextEl = document.querySelector('script#__NEXT_DATA__');
      if (!nextEl) return null;
      try { return JSON.parse(nextEl.textContent); } catch { return null; }
    });

    let out = buildBase();

    // Buscador profundo: encuentra el primer objeto que tenga ciertas claves
    const deepFind = (node, predicate) => {
      const seen = new Set();
      const stack = [node];
      while (stack.length) {
        const cur = stack.pop();
        if (!cur || typeof cur !== "object") continue;
        if (seen.has(cur)) continue;
        seen.add(cur);
        if (predicate(cur)) return cur;
        for (const k of Object.keys(cur)) stack.push(cur[k]);
      }
      return null;
    };

    if (data) {
      // Diferentes builds de Duolingo pueden cambiar la ruta exacta.
      // Buscamos objetos que tengan racha/niveles/xp.
      const userNode = deepFind(data, o =>
        ("streak" in o || "site_streak" in o) || Array.isArray(o.courses)
      );

      const streak =
        pick(userNode ?? {}, "streak", "site_streak", "currentStreak") || 0;

      const courses =
        normalizeCourses(userNode?.courses || userNode?.learningLanguages || []);

      // Stats (best-effort)
      const statsNode = deepFind(data, o =>
        ("totalXp" in o) || ("league" in o) || ("top3" in o)
      );
      const stats = statsNode
        ? {
            totalXp: statsNode.totalXp ?? undefined,
            league: statsNode.league ?? undefined,
            top3: statsNode.top3 ?? undefined
          }
        : undefined;

      // Achievements (best-effort)
      const achNode = deepFind(data, o => Array.isArray(o.achievements));
      const achievements = Array.isArray(achNode?.achievements)
        ? achNode.achievements
            .map(a => ({ name: a.name || a.title || a.badgeName || "Achievement" }))
            .slice(0, 10)
        : undefined;

      out = buildBase({
        streak: Number(streak) || 0,
        languages: courses,
        stats,
        achievements
      });
    } else {
      // Intento 2: heurística DOM (por si __NEXT_DATA__ no aparece)
      const dom = await page.evaluate(() => ({
        text: document.body.innerText || "",
        langs: Array.from(document.querySelectorAll('[class*="flag"], [class*="language"]'))
          .slice(0, 20)
          .map(n => n.textContent?.trim())
          .filter(Boolean)
      }));

      const m = dom.text.match(/(\d+)\s+(?:day|days|día|días)\s+streak/i);
      const streak = m ? Number(m[1]) : 0;
      const languages = [...new Set(dom.langs)].slice(0, 10).map(name => ({ name, code: name.toLowerCase() }));

      out = buildBase({ streak, languages });
    }

    return out;
  } finally {
    await browser.close();
  }
}

// ---------- main -------------

async function main() {
  let data;
  try {
    data = await tryPublicAPI(PROFILE);
    console.log("[Duolingo] public API ok");
  } catch (e) {
    console.warn("[Duolingo] public API failed:", e.message);
    if (!DUO_USER || !DUO_PASS) {
      console.warn("[Duolingo] missing DUO_USER/DUO_PASS. Writing minimal file.");
      data = buildBase({ streak: 0, languages: [] });
    } else {
      console.log("[Duolingo] switching to Playwright scrape…");
      data = await fetchViaBrowser(PROFILE, DUO_USER, DUO_PASS);
    }
  }

  await writeJSON(OUT, data);
}

main().catch(err => {
  console.error("[Duolingo] updater failed:", err);
  process.exit(1);
});