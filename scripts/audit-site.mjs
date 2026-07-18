import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([".git"]);
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function count(source, expression) {
  return [...source.matchAll(expression)].length;
}

function localTarget(documentPath, reference) {
  if (
    !reference ||
    reference.startsWith("#") ||
    /^(?:[a-z]+:|\/\/)/i.test(reference)
  ) {
    return null;
  }

  const clean = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!clean) return null;
  const resolved = clean.startsWith("/")
    ? path.join(root, clean)
    : path.resolve(path.dirname(documentPath), clean);

  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    return path.join(resolved, "index.html");
  }
  return resolved;
}

const files = walk(root);
const documents = files.filter((file) => {
  if (!file.endsWith(".html")) return false;
  return /<!doctype\s+html/i.test(fs.readFileSync(file, "utf8"));
});
const canonicals = new Map();

for (const file of documents) {
  const source = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const robots =
    source.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)/i)?.[1] ??
    "";
  const isIndexable = !robots.toLowerCase().includes("noindex");
  const required = [
    ["title", /<title\b/gi],
    ["description", /<meta\s+name=["']description["']/gi],
    ["robots", /<meta\s+name=["']robots["']/gi],
    ["canonical", /<link\b[^>]*rel=["']canonical["']/gi],
    ["h1", /<h1\b/gi],
  ];

  for (const [label, expression] of required) {
    const total = count(source, expression);
    if (total !== 1) errors.push(`${relative}: expected one ${label}, found ${total}`);
  }

  if (isIndexable) {
    for (const [label, expression] of [
      ["Open Graph title", /<meta\s+property=["']og:title["']/gi],
      ["Open Graph URL", /<meta\s+property=["']og:url["']/gi],
      ["Twitter card", /<meta\s+name=["']twitter:card["']/gi],
    ]) {
      const total = count(source, expression);
      if (total !== 1) {
        errors.push(`${relative}: expected one ${label}, found ${total}`);
      }
    }
  }

  if (count(source, /assets\/js\/analytics\.js/gi) !== 1) {
    errors.push(`${relative}: shared analytics must be included exactly once`);
  }

  const canonical = source.match(
    /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i,
  )?.[1];
  if (canonical && isIndexable) {
    if (canonicals.has(canonical)) {
      errors.push(
        `${relative}: duplicate canonical also used by ${canonicals.get(canonical)}`,
      );
    } else {
      canonicals.set(canonical, relative);
    }
  }

  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const target = localTarget(file, match[1]);
    if (target && !fs.existsSync(target)) {
      errors.push(`${relative}: broken local reference ${match[1]}`);
    }
  }

  for (const match of source.matchAll(/\bhref=["']([^"']*#[^"']+)["']/gi)) {
    const [referencePath, fragment] = match[1].split("#", 2);
    if (!fragment || /^(?:[a-z]+:|\/\/)/i.test(referencePath)) continue;
    const target = referencePath ? localTarget(file, referencePath) : file;
    if (!target || !fs.existsSync(target) || !target.endsWith(".html")) continue;
    const targetSource = fs.readFileSync(target, "utf8");
    const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`\\bid=["']${escaped}["']`, "i").test(targetSource)) {
      errors.push(`${relative}: missing fragment target ${match[1]}`);
    }
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (new Set(sitemapUrls).size !== sitemapUrls.length) {
  errors.push("sitemap.xml: duplicate URL");
}
for (const canonical of canonicals.keys()) {
  if (!sitemapUrls.includes(canonical)) {
    errors.push(`sitemap.xml: missing indexable canonical ${canonical}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Audit passed: ${documents.length} standalone pages, ${canonicals.size} indexable canonicals, ${sitemapUrls.length} sitemap URLs.`,
  );
}
