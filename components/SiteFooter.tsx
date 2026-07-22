import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <strong>Elijah Paul</strong>
          <p>AI products for crypto, fintech, and agentic systems.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <p className="footer-note">
          God calls us to serve others, and I strive to follow that calling in business and life.
        </p>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Elijah Paul</span>
        <span>Phoenix, Arizona · Available for remote work</span>
      </div>
    </footer>
  );
}
