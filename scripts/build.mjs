// Builds the site: reads content/ and writes dist/index.html + dist/data.json
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const out = "dist";
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const mdFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")) : []);
const asList = (v) => (Array.isArray(v) ? v.map(String) : v ? String(v).split(",").map((s) => s.trim()).filter(Boolean) : []);

const entries = {};
for (const f of mdFiles("content/entries")) {
  const { data, content } = matter(fs.readFileSync(path.join("content/entries", f), "utf8"));
  if (!data.title) { console.warn(`Skipped ${f}: no title`); continue; }
  entries[f.slice(0, -3)] = {
    title: String(data.title),
    category: data.category ? String(data.category) : "Uncategorized",
    tags: asList(data.tags),
    source: data.source ? String(data.source) : "",
    summary: data.summary ? String(data.summary) : "",
    body: (data.body ? String(data.body) : content).trim(),
  };
}

const quiz = {};
for (const f of mdFiles("content/quiz")) {
  const { data } = matter(fs.readFileSync(path.join("content/quiz", f), "utf8"));
  if (!data.question || !data.answer) { console.warn(`Skipped ${f}: needs question and answer`); continue; }
  quiz[f.slice(0, -3)] = { q: String(data.question), a: String(data.answer), source: data.deck ? String(data.deck) : "" };
}

const fit = {};
if (fs.existsSync("content/fit")) {
  for (const f of fs.readdirSync("content/fit").filter((f) => f.endsWith(".json"))) {
    try { fit[f.slice(0, -5)] = JSON.parse(fs.readFileSync(path.join("content/fit", f), "utf8")); }
    catch (e) { console.warn(`Skipped ${f}: invalid JSON (${e.message})`); }
  }
}

const data = {
  repo: process.env.GITHUB_REPOSITORY || "",
  branch: process.env.GITHUB_REF_NAME || "main",
  built: new Date().toISOString(),
  entries, quiz, fit,
};
fs.writeFileSync(path.join(out, "data.json"), JSON.stringify(data));
fs.copyFileSync("src/index.html", path.join(out, "index.html"));
fs.writeFileSync(path.join(out, ".nojekyll"), "");
console.log(`Built ${Object.keys(entries).length} entries, ${Object.keys(quiz).length} quiz cards, ${Object.keys(fit).length} fit families.`);
