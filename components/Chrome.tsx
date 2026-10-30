import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Record" },
];

export function Header() {
  return (
    <header className="hdr">
      <div className="frame hdr-in">
        <Link href="/" className="mark" aria-label="Elijah Paul, home">
          <span className="mark-dot" aria-hidden="true" />
          Elijah Paul
        </Link>
        <nav aria-label="Primary" className="hdr-nav">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <a href={site.x} target="_blank" rel="noreferrer" className="hdr-x">X ↗</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="frame ftr-grid">
        <div>
          <p className="ftr-big">Elijah Paul</p>
          <p className="mono dim">Phoenix, AZ / 33.45° N, 112.07° W</p>
        </div>
        <ul className="ftr-links mono">
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.x} target="_blank" rel="noreferrer">X / {site.xHandle}</a></li>
          <li><a href={site.github} target="_blank" rel="noreferrer">GitHub / GhostOpsandCo</a></li>
          <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="/rss.xml">RSS</a></li>
        </ul>
        <p className="mono dim ftr-note">God calls us to serve others. I try to live that in business and in life.</p>
      </div>
    </footer>
  );
}

export function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="label mono">
      <span className="dim">{n}</span>
      <span>{children}</span>
    </div>
  );
}
