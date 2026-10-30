import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Daily notes from Elijah Paul on building Hot Bot, agentic trading, AI agents, x402, and shipping in public.",
  alternates: { canonical: "/writing" },
  openGraph: { title: "Writing | Elijah Paul", description: "Building in public: Hot Bot, agentic trading, AI agents, and x402.", url: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <main id="main-content">
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="shell">
          <p className="eyebrow">Writing · <a className="link" href="/rss.xml">RSS</a></p>
          <h1>Building in public.</h1>
          <p className="lede">Short TLDR notes on what we&apos;re shipping at Hot Bot, agentic trading, and AI agents.</p>
        </div>
      </section>
      <section style={{ paddingBottom: 96 }}>
        <div className="shell"><PostList posts={posts} /></div>
      </section>
    </main>
  );
}
