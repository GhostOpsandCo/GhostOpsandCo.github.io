import type { Metadata } from "next";
import Link from "next/link";
import { formatShort, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Field notes from Elijah Paul on Hot Bot, agentic trading, x402 agent payments, and agent orchestration.",
  alternates: { canonical: "/writing", types: { "application/rss+xml": "/rss.xml" } },
};

export default function WritingIndex() {
  const posts = getAllPosts();
  return (
    <main id="main">
      <header className="page-head frame">
        <p className="mono dim rise">EP / 002 — Writing · {String(posts.length).padStart(2, "0")} entries · <a href="/rss.xml">RSS</a></p>
        <h1 className="page-title rise">Writing</h1>
        <p className="page-sub rise">Field notes on agents, payments, and trading systems, published in the order they happened.</p>
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
