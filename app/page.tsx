/* eslint-disable @next/next/no-img-element -- static SVG logos */
import Link from "next/link";
import { Label } from "@/components/Chrome";
import { formatShort, getAllPosts, getNextPost } from "@/lib/posts";
import { site } from "@/lib/site";
import { Bot } from "@/components/Bot";

const contributions = [
  { k: "Hot Bot", v: "Your own trading team. Specialist bots that snipe, filter and trade on Solana. Co-founded with @0xWhoismax.", href: site.hotbot },
  { k: "Anchorage Digital Bank", v: "Worked with the team on an x402 gateway to an agentic banking platform.", href: "https://www.anchorage.com" },
  { k: "Gate AI", v: "AI lead for internal integrations and product rollout.", href: "https://www.gate.com" },
  { k: "x402", v: "Contributor to open source security guardrails and privacy policy.", href: "https://github.com/ghostmonarch/x402ms" },
  { k: "GhostOps", v: "My internal OS of agents. A year of runs. Everything else is built on it.", href: "https://github.com/GhostOpsandCo/agent-orchestration" },
];

const WORKED = [
  { n: "Coinbase", u: "https://www.coinbase.com", src: "/logos/coinbase.svg", w: 100, text: false },
  { n: "OKX", u: "https://www.okx.com", src: "/logos/okx.svg", w: 64, text: false },
  { n: "Gate", u: "https://www.gate.com", src: "/logos/gate.svg", w: 68, h: 24, text: false },
  { n: "Anchorage Digital", u: "https://www.anchorage.com", src: "/logos/anchorage.svg", w: 100, h: 23, text: false },
  { n: "x402", u: "https://www.x402.org", src: "/logos/x402.svg", w: 47, text: false },
];
const HACKATHONS = [
  { n: "AnsemHack", r: "🏆" },
  { n: "Colosseum", r: "Ongoing" },
  { n: "Meta AI Global", r: "Ongoing" },
];
const WHAT_I_DO = ["Solve big problems", "with unique solutions", "that users love"];
const FACTS = ["Advised UFC champ Khabib in crypto", "BJJ no-gi champ", "Kids MMA instructor"];
// The banner's lineup, mirrored so everyone faces the email.
const CREW = [
  { n: "cloud", x: 11.6, y: 41.6, s: 32 },
  { n: "purple", x: 38.1, y: 16.6, s: 26.3 },
  { n: "blue", x: 25, y: 78.9, s: 28.6 },
  { n: "flame", x: 58.1, y: 54.2, s: 60.4 },
  { n: "red", x: 90.9, y: 44.5, s: 25 },
  { n: "green", x: 88.7, y: 84.6, s: 30.8 },
] as const;

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  const next = getNextPost();
  return (
    <main id="main">
      <section className="hero">
        <div className="frame hero-in">
          <h1 className="name rise">Elijah<br className="br-m" /> Paul</h1>
          <div className="hero-foot rise">
            <div>
              <p className="thesis">
                Building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>. Agentic trading on Solana.
                Joined a hackathon on the final day, won it, went live 24 days later.
              </p>
              <div className="ctas">
                <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>
                <a href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a>
                <a href={`mailto:${site.email}`}>Email</a>
              </div>
            </div>
            <section className="panel glance" aria-label="Hot Bot">
              <Bot name="green" className="perch" flip />
              <p className="panel-title"><a href={site.hotbot} target="_blank" rel="noreferrer"><Bot name="flame" className="mascot" />Hot Bot</a></p>
              <dl className="stats">
                <div><dt>What it is</dt><dd>Agentic Trading as a Service</dd></div>
                <div><dt>Build to launch</dt><dd>24 days. Still shipping.</dd></div>
                <div><dt>Paying beta users</dt><dd>200</dd></div>
                <div><dt>Waitlist</dt><dd>2,000+</dd></div>
                <div>
                  <dt>What I do</dt>
                  <dd><ul className="hacks">{WHAT_I_DO.map((l) => <li key={l}>{l}</li>)}</ul></dd>
                </div>
                <div>
                  <dt>Hackathons entered</dt>
                  <dd><ul className="hacks">{HACKATHONS.map((h) => <li key={h.n}>{h.n} <span>{h.r}</span></li>)}</ul></dd>
                </div>
              </dl>
              <p className="glance-foot">Co-founded with @0xWhoismax</p>
            </section>
          </div>
          <div className="worked rise">
            <p className="kicker">Worked with</p>
            <ul>
              {WORKED.map((l) => (
                <li key={l.n}><a href={l.u} target="_blank" rel="noreferrer" className="logo">
                  <img className="logo-img" src={l.src} alt={l.n} style={{ width: l.w, height: "h" in l ? l.h : undefined }} />
                  {l.text && <span className="logo-txt">{l.n}</span>}
                </a></li>
              ))}
            </ul>
          </div>
          <div className="bio rise">
            <p className="kicker">Random facts</p>
            <ul>{FACTS.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="01" bot="purple" flip>Thinking</Label>
          <ol className="index">
            {next && (
              <li className="reveal">
                <div className="irow next-up">
                  <span className="i-title">{next.title}</span>
                  <span className="i-desc" />
                  <span className="i-meta mono">Next up</span>
                </div>
              </li>
            )}
            {posts.map((p) => (
              <li key={p.slug} className="reveal">
                <Link href={`/writing/${p.slug}`} className="irow">
                  <span className="i-title">{p.title}</span>
                  <span className="i-desc">{p.tldr}</span>
                  <span className="i-meta mono">{formatShort(p.date)}</span>
                </Link>
              </li>
            ))}
            <li className="reveal"><Link href="/writing" className="more mono">All posts →</Link></li>
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="02">My Contributions</Label>
          <ol className="index">
            {contributions.map((r) => (
              <li key={r.k} className="reveal">
                <a href={r.href} target="_blank" rel="noreferrer" className="irow">
                  <span className="i-title">{r.k}</span>
                  <span className="i-desc">{r.v}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="frame grid12">
          <Label n="03">Contact</Label>
          <div className="contact reveal">
            <div>
              <a className="contact-big" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="mono dim">DMs open. <a href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a></p>
            </div>
            <div className="crew" aria-hidden="true">
              {CREW.map((c) => (
                <Bot key={c.n} name={c.n} className="float" flip style={{ left: `${c.x}%`, top: `${c.y}%`, width: `${c.s}%`, marginLeft: `${-c.s / 2}%`, marginTop: `${-c.s / 2}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

