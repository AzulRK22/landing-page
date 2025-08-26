import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const REPO_ROOT = process.cwd();
const OUT_DIR   = path.join(REPO_ROOT, "assets", "data");
const OUT_FILE  = path.join(OUT_DIR, "duolingo.json");

const DUO_PROFILE = process.env.DUO_PROFILE || "";   // opcional (para link)
const DUO_USER    = process.env.DUO_USER;
const DUO_PASS    = process.env.DUO_PASS;

if (!DUO_USER || !DUO_PASS) {
  console.error("[Duolingo] Missing DUO_USER or DUO_PASS in secrets.");
  process.exit(1);
}

function normalizeText(t) {
  return (t || "").replace(/\u00a0/g, " ").trim();
}

async function scrape() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto("https://www.duolingo.com/", { waitUntil: "load", timeout: 90000 });

    // login
    await page.getByRole("button", { name: /i already have an account/i }).click();
    await page.getByPlaceholder(/email|username/i).fill(DUO_USER);
    await page.getByPlaceholder(/password/i).fill(DUO_PASS);
    await page.getByRole("button", { name: /log in/i }).click();

    await page.waitForLoadState("networkidle", { timeout: 90000 });

    // intenta abrir perfil si lo pasaste (no es crítico)
    if (DUO_PROFILE) {
      await page.goto(`https://www.duolingo.com/profile/${encodeURIComponent(DUO_PROFILE)}`, {
        waitUntil: "networkidle",
        timeout: 90000,
      });
    }

    // Heurísticas: busca el streak y las lenguas visibles en UI
    let streakText = "";
    const streakNode = page.getByText(/day streak/i).first();
    if (await streakNode.count()) {
      streakText = normalizeText(await streakNode.textContent());
    }

    const streak = (() => {
      const m = streakText.match(/(\d+)\s*day/i);
      return m ? parseInt(m[1], 10) : 0;
    })();

    // lista de idiomas (heurística por etiquetas/lists)
    const langs = new Set();
    const candidates = await page.$$(":is(a, span, div, li)");
    for (const el of candidates) {
      const txt = normalizeText(await el.textContent());
      // filtra strings cortos/típicos de nombres de idioma (ajusta si quieres)
      if (/^(Spanish|English|French|German|Italian|Portuguese|Japanese|Korean|Chinese|Arabic|Dutch|Greek|Hebrew|Hindi|Irish|Norwegian|Polish|Russian|Swedish|Turkish)\b/i.test(txt)) {
        langs.add(txt);
      }
    }

    const data = {
      profile: DUO_PROFILE || null,
      streak,
      languages: Array.from(langs),
      lastUpdated: new Date().toISOString(),
    };

    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(data, null, 2), "utf8");
    console.log("[Duolingo] Saved", OUT_FILE);
  } finally {
    await browser.close();
  }
}

scrape().catch((e) => {
  console.error("[Duolingo] scrape failed:", e);
  process.exit(1);
});