import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="frame page-head">
      <p className="mono dim">ERR / 404</p>
      <h1 className="page-title">Not found</h1>
      <p className="page-sub"><Link href="/">Back to index →</Link></p>
    </main>
  );
}
