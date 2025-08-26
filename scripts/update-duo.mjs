// scripts/update-duo.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const OUT_DIR  = 'assets/data';
const OUT_FILE = path.join(OUT_DIR, 'duolingo.json');

const profile  = process.env.DUO_PROFILE?.trim() || 'azulrk22';
const user     = process.env.DUO_USER || '';
const pass     = process.env.DUO_PASS || '';

/** Objeto de salida con valores seguros por defecto */
const out = {
  profile,
  profileUrl: `https://www.duolingo.com/profile/${profile}`,
  streak: 0,
  languages: [],
  lastUpdated: new Date().toISOString()
};

async function writeOut() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify(out, null, 2), 'utf8');
  console.log('[duo] wrote', OUT_FILE, out);
}

async function scrape() {
  const browser = await chromium.launch({ headless: true, args: ['--disable-gpu', '--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  // Bloquea recursos pesados para acelerar y reducir timeouts
  await page.route('**/*', route => {
    const rt = route.request().resourceType();
    if (rt === 'image' || rt === 'media' || rt === 'font' || rt === 'stylesheet') {
      return route.abort();
    }
    route.continue();
  });

  // (A) Login es opcional; lo hacemos solo si hay credenciales
  if (user && pass) {
    console.log('[duo] logging in…');
    await page.goto('https://www.duolingo.com/log-in', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.fill('input[name="identifier"]', user);
    await page.fill('input[name="password"]', pass);
    await Promise.race([
      page.click('button[type="submit"]'),
      page.waitForTimeout(2000) // por si el botón dispara XHR y no navegación
    ]);
    // da unos segundos a que se hidrate sesión
    await page.waitForTimeout(5000);
  }

  // (B) Perfil público
  const url = `https://www.duolingo.com/profile/${profile}`;
  console.log('[duo] visiting profile:', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Espera breve para que React hidrate parte del DOM
  await page.waitForTimeout(5000);

  // 1) Intenta encontrar la racha por texto visible
  const html = await page.content();

  // Varios patrones que suelen aparecer (“X day streak”, “racha de X días”, etc.)
  const streakMatchers = [
    /(\d+)\s*day(?:s)?\s*streak/i,
    /racha\s+de\s+(\d+)\s*d/i
  ];
  for (const rx of streakMatchers) {
    const m = html.match(rx);
    if (m) {
      const n = parseInt(m[1], 10);
      if (!Number.isNaN(n)) {
        out.streak = n;
        break;
      }
    }
  }

  // 2) Extrae idiomas: probamos algunos selectores y, si no, texto plano
  try {
    const langsFromDom = await page.$$eval(
      '[data-test*="language"], [data-test*="course"], [class*="language"], [class*="Course"]',
      els => Array.from(new Set(
        els.map(el => (el.getAttribute('aria-label') || el.textContent || '')
          .replace(/\s+/g, ' ')
          .trim())
          .filter(txt => txt && txt.length <= 30)
      ))
    );
    if (langsFromDom?.length) {
      out.languages = langsFromDom;
    } else {
      // fallback por regex sobre el HTML
      const rxLang = /(?:Language|Idioma|Course|Curso)\s*[:：]\s*([A-Za-zÀ-ÖØ-öø-ÿ ]{2,30})/g;
      const found = [];
      for (const m of html.matchAll(rxLang)) {
        const name = (m[1] || '').trim();
        if (name && !found.includes(name)) found.push(name);
      }
      out.languages = found;
    }
  } catch (e) {
    // si falla, dejamos lenguajes vacío
  }

  await browser.close();
}

(async () => {
  try {
    await scrape();
  } catch (err) {
    console.error('[Duolingo] scrape failed:', err);
    // No lanzamos el error; seguimos para escribir JSON y no romper el workflow
  } finally {
    await writeOut();
    process.exit(0); // evita que GitHub Actions marque fallo
  }
})();