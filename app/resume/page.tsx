import type { Metadata } from "next";
import { capabilities, experience } from "@/lib/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Record",
  description: "Elijah Paul's record: Hot Bot co-founder, AI at Gate, agent payments and orchestration, founder of Non Fungible Arcade, and partnerships across crypto and AI.",
  alternates: { canonical: "/resume" },
};

export default function Record() {
  return (
    <main id="main">
      <header className="page-head frame">
        <p className="mono dim rise">EP / 004 — Record · <a href="/downloads/elijah-paul-resume.pdf" download>PDF ↓</a> · <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
        <h1 className="page-title rise">Record</h1>
        <p className="page-sub rise">Agents, payments and trading systems now. Partnerships, launches and revenue before that.</p>
      </header>
      <section className="frame">
        <ol className="ledger">
          {experience.map((r) => (
            <li key={r.company + r.role} className="grid12 reveal">
              <div className="label mono"><span className="dim">{r.dates}</span></div>
              <div className="ledger-body">
                <h2 className="ledger-t">{r.role} <span className="dim">— {r.company}</span></h2>
                <p>{r.summary}</p>
                <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">—</span><span>Capabilities</span></div>
          <p className="caps mono reveal">{capabilities.join("  ·  ")}</p>
        </div>
      </section>
    </main>
  );
}
