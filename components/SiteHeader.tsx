import Link from "next/link";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="wordmark" href="/" aria-label="Elijah Paul home">
          <span className="wordmark-mark" aria-hidden="true">EP</span>
          <span>
            <strong>Elijah Paul</strong>
            <small>AI Solutions Architect</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="header-availability"><i aria-hidden="true" /> Available for selected work</span>
          <Link className="header-contact" href="/contact">Request a fit call</Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact">Request a fit call</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
