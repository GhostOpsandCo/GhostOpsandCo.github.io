import type { Metadata } from "next";
import Link from "next/link";
import { Bot } from "@/components/Bot";
import { formatShort, getAllPosts } from "@/lib/posts";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thinking",
  description: "Elijah Paul writing from the build: Hot Bot, agentic trading, x402 agent payments and running a year of agents on GhostOps.",
  alternates: { canonical: "/writing", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: { type: "website", locale: "en_US", title: "Thinking | Elijah Paul", url: "/writing", images: [ogImage] },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  return (
    <main id="main">
      <header className="page-head frame">
        <Bot name="purple" className="page-bot float" flip />
        <p className="mono dim rise">{posts.length} posts</p>
        <h1 className="page-title rise">Thinking</h1>
        <p className="page-sub rise">Notes from the build, posted as it happens.</p>
      </header>
      <section className="frame">
        <div className="table-head mono dim"><span>Date</span><span>Title</span><span>Tags</span></div>
        <ol className="index index-flush">
          {posts.map((p) => (
            <li key={p.slug} className="reveal">
              <Link href={`/writing/${p.slug}`} className="trow">
                <span className="mono dim">{formatShort(p.date)}</span>
                <span>
                  <span className="t-title">{p.title}</span>
                  <span className="t-desc">{p.tldr}</span>
                </span>
                <span className="mono dim t-tags">{p.tags.slice(0, 2).join(", ")}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
