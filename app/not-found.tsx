import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="site-shell">
        <p className="eyebrow">404</p>
        <h1>This page is not part of the current build.</h1>
        <p>Return to the portfolio or inspect the available product case studies.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Home</Link>
          <Link className="button button-outline" href="/work">Selected work</Link>
        </div>
      </div>
    </main>
  );
}
