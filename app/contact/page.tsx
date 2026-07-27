import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Elijah Paul about AI solutions architecture roles, customer-led product builds, crypto and fintech workflows, or selected product opportunities.",
  alternates: { canonical: "/contact" },
};

const contactPaths = [
  {
    label: "Full-time role",
    title: "Hire an AI solutions architect who builds",
    copy: "Best for customer-facing AI solutions, product, or forward-deployed work across crypto, fintech, and AI infrastructure.",
    action: "Discuss a role",
    subject: "AI solutions role",
  },
  {
    label: "Product engagement",
    title: "Fix a workflow and build the working version",
    copy: "Best when customers or internal teams are describing a valuable product gap that has not become a clear implementation yet.",
    action: "Describe the product problem",
    subject: "AI product engagement",
  },
  {
    label: "Product opportunity",
    title: "Use, partner on, license, or acquire selected work",
    copy: "Best for Orelis, Team Take Down, GridSynapse, Monarch Shield, or a related implementation built around your market and technical stack.",
    action: "Discuss a product",
    subject: "Portfolio product opportunity",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Elijah Paul",
          url: `${site.url}/contact`,
          mainEntity: { "@type": "Person", name: site.name, email: `mailto:${site.email}`, url: site.url },
        }}
      />
      <section className="contact-page-hero">
        <div className="site-shell contact-page-grid">
          <div>
            <p className="eyebrow eyebrow-light">Contact</p>
            <h1>Bring the customer problem. I will help make the product path clear.</h1>
          </div>
          <div>
            <p>
              The most useful first message includes the user, what they cannot do today, why it
              matters to the business, and whether you need a hire, a focused engagement, or an
              existing product.
            </p>
            <a className="button button-inverse" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-shell contact-paths">
          {contactPaths.map((path) => (
            <article key={path.title}>
              <p className="eyebrow">{path.label}</p>
              <h2>{path.title}</h2>
              <p>{path.copy}</p>
              <a className="button button-outline" href={mailto(path.subject)}>{path.action}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band section-soft">
        <div className="site-shell direct-links">
          <div><span>LinkedIn</span><a href={site.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/elijahpaul</a></div>
          <div><span>GitHub</span><a href={site.github} target="_blank" rel="noreferrer">github.com/GhostOpsandCo</a></div>
          <div><span>Location</span><strong>Phoenix, Arizona · Remote</strong></div>
        </div>
      </section>
    </main>
  );
}
