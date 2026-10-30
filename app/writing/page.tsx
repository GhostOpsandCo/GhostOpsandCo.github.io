import type { Metadata } from "next";
import Link from "next/link";
import { Bot } from "@/components/Bot";
import { formatShort, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Elijah Paul writing from the build: Hot Bot, agentic trading, x402 agent payments and running a year of agents on GhostOps.",
  alternates: { canonical: "/writing", types: { "application/rss+xml": "/rss.xml" } },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  return (
    <main id="main">
      <header className="page-head frame">
        <Bot name="purple" className="page-bot float" flip />
        <p className="mono dim rise">{posts.length} entries / <a href="/rss.xml">RSS</a></p>
        <h1 className="page-title rise">Writing</h1>
        <p className="page-sub rise">Notes from the build. Agents, payments, trading. Posted in the order it happened.</p>
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
                <span className="mono dim t-tags">{p.tags.slice(0, 2).join(" / ")}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
