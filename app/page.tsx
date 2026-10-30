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

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main id="main">
      <section className="hero">
        <div className="frame hero-in">
          <p className="now-line mono rise"><span className="live" aria-hidden="true" />Now building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a></p>
          <h1 className="name rise">Elijah<br className="br-m" /> Paul</h1>
          <div className="hero-foot rise">
            <p className="thesis">
              Building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>. Agentic trading on Solana.
              Joined a hackathon on the final day, won it, went live 24 days later.
              We aren&apos;t a wrapper.
            </p>
            <dl className="spec mono">
              <div><dt>Now</dt><dd>Shipping Hot Bot</dd></div>
              <div><dt>Then</dt><dd>AI at Gate</dd></div>
              <div><dt>Side</dt><dd>GhostOps / Monarch Shield</dd></div>
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
            <li className="reveal"><Link href="/writing" className="more mono">Everything I&apos;ve written →</Link></li>
          </ol>
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

