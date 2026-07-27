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
          url: `${site.url}/about`,
          mainEntity: {
            "@type": "Person",
            name: site.name,
            image: `${site.url}/headshot.jpg`,
            jobTitle: site.title,
            description: site.description,
            sameAs: [site.linkedin, site.github],
          },
        }}
      />

      <section className="about-hero">
        <div className="site-shell about-hero-grid">
          <div className="about-portrait">
            <Image src="/headshot.jpg" alt="Elijah Paul" fill loading="eager" sizes="(max-width: 760px) 100vw, 42vw" />
          </div>
          <div className="about-intro">
            <p className="eyebrow">About</p>
            <h1>I build the bridge between a customer problem and a product that works.</h1>
            <p className="large-copy">
              I am an AI solutions architect and product builder working across crypto, fintech, and
              AI. I am strongest when customers are describing a real problem,
              the opportunity is valuable, and the product path is not obvious yet.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">View my work</Link>
              <a className="button button-outline" href={mailto("Role or product conversation")}>Start a conversation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-shell about-copy-grid">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>Customer-led, technically grounded, commercially useful.</h2>
          </div>
          <div className="large-copy">
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
          </div>
        </div>
      </section>

      <section className="section-band section-soft" aria-labelledby="strength-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What I bring</p>
              <h2 id="strength-title">Four parts of the same job</h2>
            </div>
          </div>
          <div className="strength-grid">
            {strengths.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-dark">
        <div className="site-shell principle-grid">
          <div>
            <p className="eyebrow eyebrow-light">Principle</p>
            <h2>AI is useful when it improves a real decision or workflow.</h2>
          </div>
          <div>
            <p>
              I do not start with a model and search for somewhere to put it. I start with the user,
              the cost of the current process, the controls the company needs, and the outcome that
              would justify changing behavior.
            </p>
            <p>
              That is the pattern across my work: decision support for advisors, compute procurement,
              voice intake, and agent-payment developer tooling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
