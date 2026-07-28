import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "out");
const siteUrl = "https://elijahpaul.io";

const pages = [
  ["/", "index.html"],
  ["/work", "work/index.html"],
  ["/work/venture-labs", "work/venture-labs/index.html"],
  ["/work/orelis", "work/orelis/index.html"],
  ["/work/team-take-down", "work/team-take-down/index.html"],
  ["/work/treasury-router", "work/treasury-router/index.html"],
  ["/work/gridsynapse", "work/gridsynapse/index.html"],
  ["/work/x402-agent-payments", "work/x402-agent-payments/index.html"],
  ["/services", "services/index.html"],
  ["/about", "about/index.html"],
  ["/resume", "resume/index.html"],
  ["/contact", "contact/index.html"],
];

const requiredFiles = [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "manifest.webmanifest",
  "downloads/elijah-paul-resume.pdf",
  "projects/venture-labs-control-room.png",
  "projects/orelis-latest.png",
  "projects/team-take-down.png",
  "projects/treasury-router-dashboard.png",
  "projects/gridsynapse.png",
  "projects/monarch-shield.png",
  "treasuryrouter/index.html",
];

const failures = [];
const titles = new Set();
const descriptions = new Set();

function fail(message) {
  failures.push(message);
}

for (const file of requiredFiles) {
  if (!existsSync(join(output, file))) fail(`Missing exported file: ${file}`);
}

for (const [route, file] of pages) {
  const filePath = join(output, file);
  if (!existsSync(filePath)) {
    fail(`Missing page for ${route}: ${file}`);
    continue;
  }

  const html = readFileSync(filePath, "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}/`;

  if (!title) fail(`${route} has no title`);
  else if (titles.has(title)) fail(`${route} repeats title: ${title}`);
  else titles.add(title);

  if (!description) fail(`${route} has no meta description`);
  else if (descriptions.has(description)) fail(`${route} repeats its meta description`);
  else descriptions.add(description);

  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
    fail(`${route} has the wrong canonical; expected ${canonical}`);
  }
  if (!html.includes("<main")) fail(`${route} has no main landmark`);
  if (!html.includes("<h1")) fail(`${route} has no primary heading`);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      fail(`${route} contains invalid JSON-LD`);
    }
  }
}

const robotsPath = join(output, "robots.txt");
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, "utf8");
  if (!robots.includes("Allow: /")) fail("robots.txt does not allow public crawling");
  if (!robots.includes(`${siteUrl}/sitemap.xml`)) fail("robots.txt does not declare the sitemap");
}

const sitemapPath = join(output, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  for (const [route] of pages) {
    const url = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}/`;
    if (!sitemap.includes(`<loc>${url}</loc>`)) fail(`Sitemap is missing ${url}`);
  }
}

if (failures.length) {
  console.error("Static-site audit failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Static-site audit passed for ${pages.length} public pages and ${requiredFiles.length} required files.`);
