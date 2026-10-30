import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  date: string;
  tldr: string;
  tags: string[];
  html: string;
};

const postsDir = join(process.cwd(), "content", "posts");
const queueDir = join(process.cwd(), "content", "queue");

function slugFromFile(file: string) {
  const base = file.replace(/\.md$/, "");
  return /^\d{4}-\d{2}-\d{2}-/.test(base) ? base.slice(11) : base.replace(/^\d{2,3}-/, "");
}

// The scheduler publishes the lowest-numbered queue file next.
export function getNextPost(): { title: string } | null {
  const file = readdirSync(queueDir).filter((name) => /^\d{2,3}-.+\.md$/.test(name)).sort()[0];
  if (!file) return null;
  return { title: String(matter(readFileSync(join(queueDir, file), "utf8")).data.title) };
}

export function getAllPosts(): Post[] {
  return readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = readFileSync(join(postsDir, file), "utf8");
      const { data, content } = matter(raw);
      const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
      return {
        slug: String(data.slug ?? slugFromFile(file)),
        title: String(data.title),
        date,
        tldr: String(data.tldr ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatShort(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}
