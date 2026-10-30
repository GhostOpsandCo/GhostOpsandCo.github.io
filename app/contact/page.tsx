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
          url: `${site.url}/contact/`,
          mainEntity: { "@type": "Person", name: site.name, email: `mailto:${site.email}`, url: site.url },
        }}
      />
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Bring the customer problem.</h1>
          <p className="lede">
            The most useful first message includes the user, what they cannot do today, why it
            matters, and whether you need a hire, a focused engagement, or an existing product.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="btn" href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="highlights">
            {contactPaths.map((path) => (
              <a key={path.title} href={mailto(path.subject)}>
                <p className="eyebrow">{path.label}</p>
                <strong>{path.title}</strong>
                <p>{path.copy}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
