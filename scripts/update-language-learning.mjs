import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const profile = process.env.DUO_PROFILE || "AzulRK";
const endpoint = new URL("https://www.duolingo.com/2017-06-30/users");
endpoint.searchParams.set("username", profile);

const response = await fetch(endpoint, {
  headers: { accept: "application/json" },
});

if (!response.ok) {
  throw new Error(`Duolingo profile request failed with HTTP ${response.status}`);
}

const payload = await response.json();
const user = payload?.users?.[0];

if (!user || !Number.isInteger(user.streak)) {
  throw new Error("Duolingo profile response did not contain a valid streak");
}

const languages = (user.courses || [])
  .map(({ title, xp }) => ({
    title: String(title || "").trim(),
    xp: Number(xp) || 0,
  }))
  .filter(({ title }) => title)
  .sort((a, b) => b.xp - a.xp);

const snapshot = {
  duolingo: {
    profileUrl: `https://www.duolingo.com/profile/${encodeURIComponent(profile)}`,
    streak: user.streak,
    totalXp: Number(user.totalXp) || 0,
    languages,
    snapshotDate: new Date().toISOString(),
  },
};

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(
  scriptDirectory,
  "..",
  "assets",
  "data",
  "language-learning.json",
);

await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
console.log(`Updated ${path.relative(process.cwd(), output)}`);
