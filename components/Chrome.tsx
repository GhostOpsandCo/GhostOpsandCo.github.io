import Link from "next/link";
import { site } from "@/lib/site";
import { Bot, type BotName } from "./Bot";
import { NavLinks } from "./NavLinks";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Trench Notes" },
];

export function Header() {
  return (
    <header className="hdr">
      <div className="frame hdr-in">
        <Link href="/" className="mark" aria-label="Elijah Paul, home">
          <Bot name="cloud" className="mark-bot" />
          Elijah Paul
        </Link>
        <nav aria-label="Primary" className="hdr-nav">
          <NavLinks items={nav} />
          <a href={site.x} target="_blank" rel="noreferrer" className="hdr-x">X</a>
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
          <p className="mono dim">Phoenix, AZ</p>
        </div>
        <ul className="ftr-links mono">
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><a href={site.x} target="_blank" rel="noreferrer">X / {site.xHandle}</a></li>
          <li><a href={site.github} target="_blank" rel="noreferrer">GitHub / GhostOpsandCo</a></li>
          <li><a href="/rss.xml">RSS</a></li>
        </ul>
        <p className="mono dim ftr-note">God calls us to serve others. I try to live that in business and in life.</p>
      </div>
    </footer>
  );
}

export function Label({ n, children, bot, flip }: { n: string; children: React.ReactNode; bot?: BotName; flip?: boolean }) {
  return (
    <div className={`label mono${bot ? " label-bot" : ""}`}>
      <span className="dim">{n}</span>
      <span>{children}</span>
      {bot && <Bot name={bot} className="float" flip={flip} />}
    </div>
  );
}
