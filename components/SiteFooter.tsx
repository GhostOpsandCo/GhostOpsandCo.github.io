import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Elijah Paul · Phoenix, Arizona</span>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/writing">Writing</Link>
            <a href="/rss.xml">RSS</a>
            <a href={site.x} target="_blank" rel="noreferrer">X</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </nav>
        </div>
        <p className="footer-note">God calls us to serve others, and I strive to follow that calling in business and life.</p>
      </div>
    </footer>
  );
}
