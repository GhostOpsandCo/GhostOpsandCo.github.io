import Link from "next/link";
import { Label } from "@/components/Chrome";
import { formatShort, getAllPosts } from "@/lib/posts";
import { experience } from "@/lib/resume";
import { projects, site } from "@/lib/site";

const now = [
  { k: "Hot Bot", v: "A private swarm of specialist trading agents on Solana. Co-founded with @0xWhoismax.", meta: "2026 — now", href: site.hotbot },
  { k: "AnsemHack", v: "Entered the ClawPump × Ansem hackathon on its final day. Co-won.", meta: "Oct 2026", href: site.hotbotX },
  { k: "Monarch Shield", v: "A CI linter that fails builds when x402 payments can fire without a policy check.", meta: "2026", href: "https://github.com/ghostmonarch/x402ms" },
  { k: "GhostOps", v: "An internal OS of agents: routing, evidence loops, hard gates, reviewed memory.", meta: "2025 — now", href: "https://github.com/GhostOpsandCo/agent-orchestration" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-field" aria-hidden="true" />
        <div className="frame hero-in">
          <p className="mono dim hero-kicker rise">EP / 001 — Index</p>
          <h1 className="name rise">Elijah<br className="br-m" /> Paul</h1>
          <div className="hero-foot rise">
            <p className="thesis">
              Building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>, a swarm of trading agents on Solana.
              Before that, guardrails for x402 agent payments and a year of agent orchestration.
            </p>
            <dl className="spec mono">
              <div><dt>Now</dt><dd>Co-founder, Hot Bot</dd></div>
              <div><dt>Prev</dt><dd>Gate · x402</dd></div>
              <div><dt>Base</dt><dd>Phoenix, AZ</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="01">Now</Label>
          <ol className="index">
            {now.map((r) => (
              <li key={r.k} className="reveal">
                <a href={r.href} target="_blank" rel="noreferrer" className="irow">
                  <span className="i-title">{r.k}</span>
                  <span className="i-desc">{r.v}</span>
                  <span className="i-meta mono">{r.meta}</span>
                  <span className="i-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="02">Writing</Label>
          <ol className="index">
            {posts.map((p) => (
              <li key={p.slug} className="reveal">
                <Link href={`/writing/${p.slug}`} className="irow">
                  <span className="i-title">{p.title}</span>
                  <span className="i-desc">{p.tldr}</span>
                  <span className="i-meta mono">{formatShort(p.date)}</span>
                  <span className="i-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
            <li className="reveal"><Link href="/writing" className="more mono">All writing →</Link></li>
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="03">Selected work</Label>
          <ol className="index">
            {projects.map((p, i) => (
              <li key={p.slug} className="reveal">
                <Link href={`/work/${p.slug}`} className="irow">
                  <span className="i-title"><span className="mono dim i-n">{String(i + 1).padStart(2, "0")}</span>{p.name}</span>
                  <span className="i-desc">{p.category}</span>
                  <span className="i-meta mono">{shortStatus(p.status)}</span>
                  <span className="i-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="04">Record</Label>
          <ol className="index">
            {experience.map((r) => (
              <li key={r.company + r.role} className="reveal">
                <Link href="/resume" className="irow">
                  <span className="i-title">{r.company}</span>
                  <span className="i-desc">{r.role}</span>
                  <span className="i-meta mono">{r.dates.replace(/January |February |March |April |May |June |July |August |September |October |November |December /g, "")}</span>
                  <span className="i-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="05">Contact</Label>
          <div className="contact reveal">
            <a className="contact-big" href={`mailto:${site.email}`}>{site.email}</a>
            <p className="mono dim">DMs open at <a href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

function shortStatus(s: string) {
  if (/open-source/i.test(s)) return "Open source";
  if (/prototype/i.test(s)) return "Prototype";
  if (/demo/i.test(s)) return "Demo";
  if (/concept/i.test(s)) return "Concept";
  return "Foundation";
}
