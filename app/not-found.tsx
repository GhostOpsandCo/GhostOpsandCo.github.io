import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>Nothing here.</h1>
          <div className="actions">
            <Link className="btn btn-primary" href="/">Home</Link>
            <Link className="btn" href="/writing">Writing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
