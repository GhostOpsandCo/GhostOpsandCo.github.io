import type { Metadata } from "next";
import Link from "next/link";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience of Elijah Paul, an AI solutions architect and product builder across crypto, fintech, agent workflows, product strategy, and implementation.",
  alternates: { canonical: "/resume" },
};

const experience = [
  {
    company: "Gate",
    role: "Leading AI",
    dates: "June 2026 – Present",
    summary:
      "Working across customer feedback, product strategy, UX, and implementation to improve Gate AI products and identify Gate-native AI opportunities.",
    bullets: [
      "Designed and built Treasury Router, a governed advisor workflow for identifying modeled idle-capital opportunities and preparing human-approved product recommendations.",
      "Built an x402 testnet merchant workflow that packages a paid recommendation into an institutional work order while preserving policy and execution boundaries.",
      "Audited Gate Router product experience, documentation, differentiation, and US market positioning based on enterprise prospect feedback.",
      "Translated pricing, performance, migration, and reliability objections into product requirements and a tighter enterprise adoption path.",
    ],
  },
  {
    company: "Independent Consultant",
    role: "AI Product, Growth & Revenue Lead",
    dates: "April 2024 – Present",
    summary:
      "Helping founders and internal teams turn customer and operating problems into clearer products, working builds, partnerships, and commercial paths.",
    bullets: [
      "Built AI, agent, and infrastructure product foundations spanning compute procurement, voice workflows, and agent payments.",
      "Led partnership and revenue work across AI and crypto infrastructure projects, contributing to eight-figure ecosystem growth.",
      "Expanded qualified partner pipelines by improving product positioning, partner alignment, and customer-facing workflows.",
    ],
  },
  {
    company: "Independent Consultant",
    role: "Strategic Partnerships & Growth Lead",
    dates: "February 2020 – April 2024",
    summary:
      "Worked with digital-asset teams on launches, exchange relationships, liquidity coordination, ecosystem growth, and go-to-market execution.",
    bullets: [
      "Contributed to more than $20M in primary launch revenue across client and project engagements.",
      "Supported projects that reached more than $100M in trading and ecosystem volume through distribution, liquidity, and launch coordination.",
      "Built working relationships across exchanges, investors, market makers, founders, and infrastructure partners.",
    ],
  },
  {
    company: "Non Fungible Arcade",
    role: "Founder",
    dates: "May 2021 – August 2023",
    summary:
      "Founded a web3 gaming platform designed to help independent developers launch and monetize games through digital ownership and community distribution.",
    bullets: [
      "Helped grow the platform to a $50M venture-backed valuation.",
      "Built partnerships across game studios, infrastructure providers, exchanges, and NFT marketplaces.",
      "Represented the company at GDC, SXSW, Token2049, Miami NFT Week, and industry media appearances.",
    ],
  },
  {
    company: "Fit Start Training",
    role: "Revenue Performance Lead",
    dates: "January 2018 – February 2020",
    summary:
      "Owned sales performance, conversion improvement, team execution, and revenue systems for a high-ticket service business.",
    bullets: [
      "Managed an $8M+ annual revenue target while exceeding quota by more than 25%.",
      "Improved close rates from 38% to 62% by identifying and fixing conversion bottlenecks.",
      "Led a four-person performance turnaround and built KPI systems supporting three consecutive growth quarters.",
    ],
  },
];

const capabilities = [
  "AI solutions architecture",
  "AI product strategy",
  "Customer workflow analysis",
  "Agentic AI and x402",
  "Financial product UX",
  "Product prototyping",
  "Technical requirements",
  "Human approval systems",
  "Partnerships and GTM",
];

export default function ResumePage() {
  return (
    <main id="main-content">
      <section className="page-hero resume-hero">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="eyebrow">Resume</p>
            <h1>AI solutions architecture with product and commercial judgment.</h1>
          </div>
          <div className="large-copy">
            <p>
              I work directly with customers and internal teams to find product gaps, design practical
              AI solutions, and build the version a company can test and bring to market.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/downloads/elijah-paul-resume.pdf" download>Download PDF resume</a>
              <a className="button button-outline" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-shell resume-layout">
          <aside className="resume-aside">
            <div>
              <p className="eyebrow">Capabilities</p>
              <ul className="plain-list">
                {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Selected work</p>
              <p>Orelis, Team Take Down, Treasury Router, GridSynapse, and Monarch Shield.</p>
              <Link className="text-link" href="/work">View case studies</Link>
            </div>
          </aside>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.role}`}>
                <div className="experience-heading">
                  <div><p>{item.company}</p><h2>{item.role}</h2></div>
                  <span>{item.dates}</span>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <ul className="evidence-list">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="site-shell contact-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">Hiring?</p>
            <h2>Looking for someone who can face the customer and build the solution?</h2>
          </div>
          <div>
            <p>I am most interested in AI solutions, product, and forward-deployed roles across crypto, fintech, and AI infrastructure.</p>
            <a className="button button-inverse" href={mailto("AI solutions role")}>Discuss a role</a>
          </div>
        </div>
      </section>
    </main>
  );
}
