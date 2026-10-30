import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Elijah Paul, an AI solutions architect and product builder working across customer problems, product design, technical implementation, and go-to-market.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Elijah Paul | AI Solutions Architect & Product Builder",
    description: "Customer-led AI product work for crypto, fintech, and agentic systems.",
    url: "/about",
    images: ["/headshot.jpg"],
  },
};

const strengths = [
  ["Customer signal", "I work directly with users and commercial teams to separate real demand from feature noise."],
  ["Product judgment", "I reduce an ambiguous opportunity to the first workflow worth testing."],
  ["Working build", "I create the product surface, decision logic, and implementation path instead of stopping at a deck."],
  ["Commercial context", "I connect product decisions to adoption, revenue, partnerships, and what a buyer must believe."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "About Elijah Paul",
          url: `${site.url}/about/`,
          mainEntity: { "@id": `${site.url}/#person`, "@type": "Person", name: site.name },
        }}
      />
      <section className="hero">
        <div className="narrow">
          <Image className="portrait" src="/headshot.jpg" alt="Elijah Paul" width={264} height={264} loading="eager" />
          <p className="eyebrow">About</p>
          <h1>I build the bridge between a customer problem and a product that works.</h1>
          <div className="prose">
            <p>
              I am an AI solutions architect and product builder working across crypto, fintech, and
              AI. I am strongest when customers are describing a real problem,
              the opportunity is valuable, and the product path is not obvious yet.
            </p>
            <p>
              Right now I&apos;m building <a href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a> with
              @0xWhoismax: agentic swarm trading on Solana. We co-won the ClawPump × Ansem AnsemHack.
              Before that I led AI product work at Gate.
            </p>
            <p>
              Over the last six years, I have worked with founders and internal teams across crypto,
              AI, and early-stage technology. The work has moved from distribution and partnerships
              toward product audits, solution architecture, workflow design, and working AI builds.
            </p>
            <p>
              That commercial background matters. It helps me recognize when a product problem is
              actually a positioning problem, when a requested feature will not change adoption, and
              when a focused build can open a customer, partnership, or new revenue path.
            </p>
            <h2>AI is useful when it improves a real decision or workflow.</h2>
            <p>
              I do not start with a model and search for somewhere to put it. I start with the user,
              the cost of the current process, the controls the company needs, and the outcome that
              would justify changing behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="eyebrow">What I bring</h2>
          <div className="highlights" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {strengths.map(([title, copy]) => (
              <div key={title}><strong>{title}</strong><p>{copy}</p></div>
            ))}
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href="/work">View my work</Link>
            <a className="btn" href={mailto("Role or product conversation")}>Start a conversation</a>
          </div>
        </div>
      </section>
    </main>
  );
}
