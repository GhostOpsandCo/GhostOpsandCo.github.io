import type { Metadata } from "next";
import Link from "next/link";
import { Bot } from "@/components/Bot";
import { ogImage, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "What Elijah Paul has shipped: Monarch Shield for x402 payments, Treasury Router at Gate, Venture Labs on GhostOps, Orelis voice agents, Team Take Down and GridSynapse.",
  alternates: { canonical: "/work" },
  openGraph: { type: "website", locale: "en_US", title: "Work | Elijah Paul", url: "/work", images: [ogImage] },
};

export default function WorkIndex() {
  return (
    <main id="main">
      <header className="page-head frame">
        <Bot name="green" className="page-bot float" flip />
        <p className="mono dim rise">{projects.length} shipped</p>
        <h1 className="page-title rise">Work</h1>
        <p className="page-sub rise">What I&apos;ve shipped, with the limits spelled out.</p>
      </header>
      <section className="frame">
        <div className="table-head table-work mono dim"><span>System</span><span>Type</span><span>Status</span></div>
        <ol className="index index-flush">
          {projects.map((p) => (
            <li key={p.slug} className="reveal">
              <Link href={`/work/${p.slug}`} className="trow trow-work">
                <span>
                  <span className="t-title">{p.name}</span>
                  <span className="t-desc">{p.shortOutcome}</span>
                </span>
                <span className="mono dim">{p.category}</span>
                <span className="mono dim">{p.status}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
