// scripts/update-duo.mjs
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Fallback a Playwright sólo si hace falta
let chromium;
async function lazyPlaywright() {
  if (!chromium) ({ chromium } = await import("playwright"));
  return chromium;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "../assets/data/duolingo.json");

// Config desde env/vars
const PROFILE = (process.env.DUO_PROFILE || "AzulRK").trim();
const PROFILE_URL = `https://www.duolingo.com/profile/${encodeURIComponent(PROFILE)}`;

function normalizeUserPayload(json) {
  // Formatos conocidos: {users:[{siteStreak, streakData, courses:[{title, learningLanguageName, learningLanguage}]}]}
  const user = json?.users?.[0] || json?.user || json;
  if (!user) return null;

  const streak =
    user.siteStreak ??
    user.totalStreak ??
    user.streakData?.currentStreak?.length ??
    user.streak ??
    0;

  const langs = Array.isArray(user.courses)
    ? user.courses
        .map(c => c.title || c.learningLanguageName || c.learningLanguage || c.fromLanguageName)
        .filter(Boolean)
    : [];

  return { streak: Number.isFinite(streak) ? streak : 0, languages: [...new Set(langs)] };
}

async function fetchViaPublicAPI(profile) {
  const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(profile)}`;
  const res = await fetch(url, {
    // Evita cache CDN
    headers: { "pragma": "no-cache", "cache-control": "no-cache" }
  });
  if (!res.ok) throw new Error(`Public API HTTP ${res.status}`);
  const json = await res.json();
  const parsed = normalizeUserPayload(json);
  if (!parsed) throw new Error("Public API: unexpected shape");
  return parsed;
}

async function fetchViaBrowser(profile) {
  const { chromium } = await lazyPlaywright();
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
    locale: "en-US"
  });
  const page = await ctx.newPage();

  // Visita el dominio y usa fetch desde el mismo origen (evita CORS)
  await page.goto("https://www.duolingo.com/", { waitUntil: "domcontentloaded", timeout: 60000 });

  const payload = await page.evaluate(async (p) => {
    const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(p)}`;
    const r = await fetch(url, { credentials: "omit" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }, profile);

  await browser.close();

  const parsed = normalizeUserPayload(payload);
  if (!parsed) throw new Error("Browser fetch: unexpected shape");
  return parsed;
}

async function main() {
  let data;
  try {
    // 1) Intenta API pública directa (rápida y sin dependencias)
    data = await fetchViaPublicAPI(PROFILE);
  } catch (e1) {
    console.warn("[Duolingo] public API failed:", e1?.message || e1);
    // 2) Fallback: usa navegador para hacer el mismo fetch desde el origen Duolingo
    data = await fetchViaBrowser(PROFILE);
  }

  const out = {
    profile: PROFILE,
    profileUrl: PROFILE_URL,
    streak: data.streak ?? 0,
    languages: Array.isArray(data.languages) ? data.languages : [],
    lastUpdated: new Date().toISOString()
  };

  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(out, null, 2), "utf8");
  console.log("[Duolingo] written:", OUT_PATH, out);
}

main().catch(err => {
  console.error("[Duolingo] updater failed:", err);
  process.exit(1);
});