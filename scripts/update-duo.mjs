// scripts/update-duo.mjs
import fs from "fs/promises";
import path from "path";
import { chromium } from "playwright";

const OUT_PATH = path.join(process.cwd(), "assets", "data", "duolingo.json");
const DUO_PROFILE = process.env.DUO_PROFILE || process.env.DUO_USER || "";
const DUO_USER = process.env.DUO_USER || "";
const DUO_PASS = process.env.DUO_PASS || "";

if (!DUO_PROFILE) {
  console.error("DUO_PROFILE (o DUO_USER) requerido.");
  process.exit(1);
}

async function fetchViaAPI(page, profile) {
  // Llama al endpoint público autenticado
  const res = await page.evaluate(async (profile) => {
    try {
      const r = await fetch(
        `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(profile)}`,
        { credentials: "include" }
      );
      if (!r.ok) return { ok: false, status: r.status };
      const j = await r.json();
      return { ok: true, j };
    } catch (e) {
      return { ok: false, status: "net" };
    }
  }, profile);

  if (!res.ok) throw new Error("Public API HTTP " + res.status);

  const user = res.j?.users?.[0] || res.j?.user || res.j;
  if (!user) throw new Error("No user payload");

  const streak =
    user.streak ||
    user.site_streak ||
    user.siteStreak ||
    user?.streakData?.currentStreak?.length ||
    0;

  const totalXp = user.totalXp ?? user.total_xp ?? null;

  // cursos → idiomas
  let languages = [];
  const courses = user.courses || user.language_data || [];
  if (Array.isArray(courses)) {
    languages = courses.map((c) => ({
      code: c.learningLanguage || c.language || c.language_code || "",
      name:
        c.title || c.title_localized || c.title_en || c.name || (c.learningLanguage || "").toUpperCase(),
      xp: Number(c.xp ?? c.points ?? 0),
      level: c.level ?? c.levelProgress?.level ?? null,
    }));
  } else if (typeof courses === "object") {
    languages = Object.keys(courses).map((code) => {
      const d = courses[code] || {};
      return {
        code,
        name: d.language_string || d.title || code,
        xp: Number(d.points || d.xp || 0),
        level: d.level || null,
      };
    });
  }

  return { streak, totalXp, languages };
}

async function scrapeExtras(page) {
  // Raspa textos globales de la página del perfil
  const txt = await page.evaluate(() => document.body.innerText);

  const findNum = (re) => {
    const m = txt.match(re);
    if (!m) return null;
    const raw = (m[1] || m[0]).replace(/[^\d]/g, "");
    return raw ? parseInt(raw, 10) : null;
  };

  // Top-3 (es/en)
  const top3 = findNum(/(?:veces en el top\s*3|top\s*3\s*times)\D*(\d+)/i);

  // League (map básica)
  let league = null;
  if (/Diamond|Diamante/i.test(txt)) league = "Diamond";
  else if (/Obsidian|Obsidiana/i.test(txt)) league = "Obsidian";
  else if (/Ruby|Rub[ií]/i.test(txt)) league = "Ruby";
  else if (/Emerald|Esmeralda/i.test(txt)) league = "Emerald";
  else if (/Pearl|Perla/i.test(txt)) league = "Pearl";
  else if (/Sapphire|Zafiro/i.test(txt)) league = "Sapphire";
  else if (/Amethyst|Amatista/i.test(txt)) league = "Amethyst";
  else if (/Gold|Oro/i.test(txt)) league = "Gold";
  else if (/Silver|Plata/i.test(txt)) league = "Silver";
  else if (/Bronze|Bronce/i.test(txt)) league = "Bronze";

  // "3 SEMANAS" cerca de Diamond (o "3 WEEKS")
  const diamondWeeks = findNum(/(\d+)\s*(?:weeks|semanas).{0,16}(?:Diamond|Diamante)/i);

  return { league, top3, diamondWeeks };
}

async function main() {
  const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  const page = await browser.newPage();

  // 1) Login
  await page.goto("https://www.duolingo.com/log-in", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(800);
  const emailSel = 'input[name="login"], input[name="identifier"], input[type="email"], [data-test="email-input"]';
  const passSel  = 'input[name="password"], input[type="password"], [data-test="password-input"]';
  await page.fill(emailSel, DUO_USER);
  await page.fill(passSel, DUO_PASS);
  const btnSel = 'button[type="submit"], button[data-test="register-button"], button[data-test="login-button"]';
  await page.click(btnSel).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 45000 }).catch(() => {});

  // 2) Ir al perfil
  await page.goto(`https://www.duolingo.com/profile/${encodeURIComponent(DUO_PROFILE)}`, {
    waitUntil: "domcontentloaded",
  });
  await page.waitForLoadState("networkidle", { timeout: 45000 }).catch(() => {});

  // 3) API + extras
  let core = { streak: 0, totalXp: null, languages: [] };
  try {
    core = await fetchViaAPI(page, DUO_PROFILE);
  } catch (e) {
    console.warn("[Duolingo] public API failed:", e.message);
  }
  const extras = await scrapeExtras(page);

  const payload = {
    profile: DUO_PROFILE,
    profileUrl: `https://www.duolingo.com/profile/${encodeURIComponent(DUO_PROFILE)}`,
    streak: core.streak || 0,
    languages: core.languages || [],
    stats: {
      totalXp: core.totalXp ?? null,
      league: extras.league ?? null,
      top3: extras.top3 ?? null,
      diamondWeeks: extras.diamondWeeks ?? null,
    },
    lastUpdated: new Date().toISOString(),
  };

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2), "utf8");
  console.log("[Duolingo] wrote", OUT_PATH);

  await browser.close();
}

main().catch((e) => {
  console.error("[Duolingo] updater failed:", e);
  process.exit(1);
});