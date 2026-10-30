/* eslint-disable @next/next/no-img-element -- static SVG mascots */
import Link from "next/link";
import { Label } from "@/components/Chrome";
import { formatShort, getAllPosts } from "@/lib/posts";
import { experience } from "@/lib/resume";
import { projects, site } from "@/lib/site";

const now = [
  { k: "Hot Bot", v: "Your own trading team. Specialist bots that snipe, filter and trade on Solana. Co-founded with @0xWhoismax.", meta: "2026 / now", href: site.hotbot },
  { k: "AnsemHack", v: "Joined on the final day. Took the W.", meta: "Oct 2026", href: site.hotbotX },
  { k: "Monarch Shield", v: "Your agent can pay without a policy check? Build fails.", meta: "2026", href: "https://github.com/ghostmonarch/x402ms" },
  { k: "GhostOps", v: "My internal OS of agents. A year of runs. Everything else is built on it.", meta: "2025 / now", href: "https://github.com/GhostOpsandCo/agent-orchestration" },
];

const WORKED = [
  { n: "Coinbase", u: "https://www.coinbase.com", src: "/logos/coinbase.svg", w: 100, text: false },
  { n: "OKX", u: "https://www.okx.com", src: "/logos/okx.svg", w: 64, text: false },
  { n: "Gate", u: "https://www.gate.com", src: "/logos/gate.svg", w: 68, h: 24, text: false },
  { n: "Anchorage Digital", u: "https://www.anchorage.com", src: "/logos/anchorage.svg", w: 100, h: 23, text: false },
  { n: "x402", u: "https://www.x402.org", src: "/logos/x402.svg", w: 47, text: false },
];
const SWARM = [
  { n: "ResearchBot", v: "Finds coins that fit your rules.", src: "/bots/research.svg" },
  { n: "SniperBot", v: "Buys the moment one checks out.", src: "/bots/sniper.svg" },
  { n: "TraderBot", v: "Runs the position inside your rules.", src: "/bots/trader.svg" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main id="main">
      <section className="hero">
        <div className="frame hero-in">
          <p className="now-line mono rise">Now building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a></p>
          <h1 className="name rise">Elijah<br className="br-m" /> Paul</h1>
          <div className="hero-foot rise">
            <div>
              <p className="thesis">
                Building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>. Agentic trading on Solana.
                Joined a hackathon on the final day, won it, went live 24 days later.
                We aren&apos;t a wrapper.
              </p>
              <div className="ctas">
                <a className="pill pill-solid" href={site.hotbot} target="_blank" rel="noreferrer"><img src="/bots/flame.svg" alt="" width={18} height={18} className="mascot" />Hot Bot ↗</a>
                <a className="pill" href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a>
                <a className="pill" href={`mailto:${site.email}`}>Email</a>
              </div>
            </div>
            <section className="panel glance" aria-label="At a glance">
              <p className="kicker">At a glance</p>
              <dl className="stats">
                <div><dt>Building</dt><dd><img src="/bots/flame.svg" alt="" width={18} height={18} className="mascot bob" />Hot Bot <span className="up">● Live</span></dd></div>
                <div><dt>AnsemHack</dt><dd>Co-won</dd></div>
                <div><dt>Build to launch</dt><dd>24 days</dd></div>
                <div><dt>Before</dt><dd>AI at Gate</dd></div>
                <div><dt>Launch revenue</dt><dd>$20M+</dd></div>
                <div><dt>Shipped</dt><dd>{projects.length} projects</dd></div>
              </dl>
              <p className="glance-foot">Phoenix, AZ · Co-founder with @0xWhoismax</p>
            </section>
          </div>
          <div className="worked rise">
            <p className="kicker">Worked with</p>
            <ul>
              {WORKED.map((l) => (
                <li key={l.n}><a href={l.u} target="_blank" rel="noreferrer" aria-label={l.n} className="logo">
                  <span className="logo-img" style={{ WebkitMaskImage: `url(${l.src})`, maskImage: `url(${l.src})`, width: l.w, height: "h" in l ? l.h : undefined }} />
                  {l.text && <span className="logo-txt">{l.n}</span>}
                </a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="01">Log</Label>
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
            <li className="reveal"><Link href="/writing" className="more mono">Full log →</Link></li>
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="02">Now</Label>
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
          <div className="panel swarm reveal">
            <p className="kicker">The Hot Bot swarm</p>
            <ul>
              {SWARM.map((b, i) => (
                <li key={b.n}><img src={b.src} alt="" width={56} height={56} className="bob" style={{ animationDelay: `${i * -0.8}s` }} /><b>{b.n}</b><span>{b.v}</span></li>
              ))}
            </ul>
            <p className="glance-foot">Each bot does one job. You set the rules, they run the trade.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="03">Shipped</Label>
          <ol className="index">
            {projects.map((p, i) => (
              <li key={p.slug} className="reveal">
                <Link href={`/work/${p.slug}`} className="irow">
                  <span className="i-title"><span className="mono dim i-n">{String(i + 1).padStart(2, "0")}</span>{p.name}</span>
                  <span className="i-desc">{p.shortOutcome}</span>
                  <span className="i-meta mono">{p.status}</span>
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
            <p className="mono dim">DMs open. <a href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

