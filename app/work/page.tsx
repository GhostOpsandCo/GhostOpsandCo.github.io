import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Systems Elijah Paul has designed and shipped: agent payments, agent orchestration, voice agents, treasury workflows, and creator protection.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <main id="main">
      <header className="page-head frame">
        <p className="mono dim rise">EP / 003 — Work · {String(projects.length).padStart(2, "0")} systems</p>
        <h1 className="page-title rise">Work</h1>
        <p className="page-sub rise">Systems with explicit boundaries: what they do, what they don&apos;t, and the proof behind each.</p>
      </header>
      <section className="frame">
        <div className="table-head table-work mono dim"><span>No.</span><span>System</span><span>Type</span><span>Status</span></div>
        <ol className="index index-flush">
          {projects.map((p, i) => (
            <li key={p.slug} className="reveal">
              <Link href={`/work/${p.slug}`} className="trow trow-work">
                <span className="mono dim">{String(i + 1).padStart(2, "0")}</span>
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
