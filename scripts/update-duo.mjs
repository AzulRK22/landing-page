// Duolingo profile fetcher (público) con fallback a login (opcional) usando Playwright.
// Usa DUO_PROFILE para leer un perfil público.
// Si además defines DUO_USER + DUO_PASS, intentará login si el modo público no devuelve datos válidos.
//
// Env:
//   DUO_PROFILE  -> username público (recomendado)
//   DUO_USER     -> usuario/login (opcional: puede ser username o email)
//   DUO_PASS     -> contraseña (opcional)
//
// Salida: assets/data/duolingo.json

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_PATH = path.resolve(__dirname, "..", "assets", "data", "duolingo.json");

const ENV = {
  DUO_PROFILE: (process.env.DUO_PROFILE || "").trim(),
  DUO_USER: (process.env.DUO_USER || "").trim(),
  DUO_PASS: (process.env.DUO_PASS || "").trim()
};

function pretty(obj) { return JSON.stringify(obj, null, 2); }

// ------------------------- util JSON -------------------------
async function readPrev() {
  try { return JSON.parse(await fs.readFile(OUT_PATH, "utf8")); }
  catch { return null; }
}
async function writeJSON(data) {
  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, pretty(data) + "\n", "utf8");
}

// --------------------- extracción genérica -------------------
function parseStreakFromText(text) {
  // "123 day streak", "123 days", "123 días", etc.
  const re = /\b(\d{1,4})\s*(day|days|día|días)\s*(streak|racha)?\b/i;
  const m = text.match(re);
  return m ? Number(m[1]) : null;
}

const KNOWN_LANGS = new Set([
  "Spanish","English","French","German","Italian","Portuguese","Japanese","Korean","Chinese","Russian","Arabic",
  "Esperanto","Turkish","Hindi","Dutch","Swedish","Norwegian","Polish","Greek","Irish","Hebrew","Ukrainian",
  "Czech","Indonesian","Romanian","Danish","Finnish","Hungarian","Thai","Vietnamese","Swahili","Haitian Creole",
  "Welsh","High Valyrian","Navajo","Latin","Scottish Gaelic","Yiddish","Zulu","Klingon","Catalan","Galician","Basque"
]);

function extractLanguagesFromText(text) {
  const found = [];
  for (const lang of KNOWN_LANGS) {
    const re = new RegExp(`\\b${lang}\\b`, "i");
    if (re.test(text)) found.push(lang);
  }
  return [...new Set(found)].sort((a, b) => a.localeCompare(b));
}

async function scrapeProfile(page, username) {
  const PROFILE_URL = `https://www.duolingo.com/profile/${encodeURIComponent(username)}?via=share`;
  await page.goto(PROFILE_URL, { waitUntil: "networkidle", timeout: 90_000 });
  await page.waitForTimeout(2500);
  const bodyText = await page.evaluate(() => document.body.innerText || "");
  const streak = parseStreakFromText(bodyText) ?? 0;
  const languages = extractLanguagesFromText(bodyText);
  return { username, streak: { days: streak }, languages };
}

// -------------------------- login ----------------------------
async function loginAndScrape(page, userForProfile) {
  // Página de login directa (más estable que modal)
  await page.goto("https://www.duolingo.com/log-in", { waitUntil: "networkidle", timeout: 90_000 });

  // Busca campos de texto y password de forma robusta
  const userLocator = page.locator('input[type="email"], input[name="email"], input[type="text"]');
  const passLocator = page.locator('input[type="password"]');
  await userLocator.first().waitFor({ timeout: 30_000 });
  await userLocator.first().fill(ENV.DUO_USER);
  await passLocator.first().fill(ENV.DUO_PASS);

  // Intenta click en algún botón de login típico; si no, Enter
  const loginBtn = page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Iniciar sesión")');
  if (await loginBtn.first().isVisible().catch(() => false)) {
    await loginBtn.first().click({ timeout: 10_000 }).catch(() => {});
  } else {
    await passLocator.first().press("Enter").catch(() => {});
  }

  // Espera a que redireccione / cargue sesión
  await page.waitForLoadState("networkidle", { timeout: 60_000 });
  await page.waitForTimeout(2500);

  // Usa el username visible si no te pasaron DUO_PROFILE
  const profileName =
    userForProfile ||
    (await page.evaluate(() => {
      // Heurística: algún enlace a /profile/<user>
      const a = Array.from(document.querySelectorAll('a[href*="/profile/"]'))[0];
      if (!a) return null;
      const m = a.getAttribute("href").match(/\/profile\/([^/?#]+)/);
      return m ? decodeURIComponent(m[1]) : null;
    })) ||
    ENV.DUO_USER;

  return await scrapeProfile(page, profileName);
}

// ----------------------------- main --------------------------
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119 Safari/537.36",
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  let result = null;
  const preferPublic = Boolean(ENV.DUO_PROFILE);
  const canLogin = Boolean(ENV.DUO_USER && ENV.DUO_PASS);

  try {
    if (preferPublic) {
      console.log(`▶ Public scrape for @${ENV.DUO_PROFILE}`);
      result = await scrapeProfile(page, ENV.DUO_PROFILE);
      // Si no obtuvo nada razonable y podemos loguear, fallback
      if ((result.streak.days ?? 0) === 0 && canLogin) {
        console.log("… public data looked empty → trying login mode");
        result = await loginAndScrape(page, ENV.DUO_PROFILE);
      }
    } else if (canLogin) {
      console.log("▶ Login mode (no DUO_PROFILE provided)");
      result = await loginAndScrape(page, null);
    } else {
      console.error("✖ Provide DUO_PROFILE (public) OR DUO_USER+DUO_PASS (login).");
      process.exit(1);
    }

    const nowISO = new Date().toISOString();
    const prev = await readPrev();

    const final = {
      username: result.username,
      streak: { days: Number.isFinite(result.streak?.days) ? result.streak.days : (prev?.streak?.days ?? 0) },
      languages: result.languages?.length ? result.languages : (prev?.languages ?? []),
      updatedAt: nowISO
    };

    // Escribe siempre (aunque no cambie) para mantener updatedAt fresco
    await writeJSON(final);
    console.log(`✓ duolingo.json updated: ${final.streak.days} day(s), ${final.languages.join(", ") || "—"}`);
  } catch (err) {
    console.error("✖ Update error:", err.message);
    process.exitCode = 0;
  } finally {
    await browser.close();
  }
})();