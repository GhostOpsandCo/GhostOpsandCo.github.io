import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { mailto, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Product Consulting & Solutions Architecture",
  description:
    "AI product strategy, solution architecture, working product builds, and embedded customer-facing implementation for crypto, fintech, and AI teams.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Product Consulting & Solutions Architecture | Elijah Paul",
    description:
      "Turn a customer or operating problem into a scoped product, working build, and implementation path.",
    url: "/services",
    images: ["/projects/gridsynapse.png"],
  },
};

const fitSignals = [
  "Customers keep asking for a workflow the current product does not handle.",
  "The team has an AI opportunity, but the user, controls, and product path are still unclear.",
  "A strategic prospect needs a credible prototype before committing to an integration or pilot.",
  "Feedback is reaching sales and support, but not becoming clear product requirements fast enough.",
];

const faqs = [
  {
    question: "Do you only advise, or do you build the product too?",
    answer:
      "Both. I can audit and scope the opportunity, then build the working web product, agent workflow, or implementation foundation that your team and customers can test.",
  },
  {
    question: "What kinds of teams are the best fit?",
    answer:
      "Crypto exchanges, fintech platforms, AI infrastructure companies, and focused startups with a real customer or operating problem and access to the people who use the workflow.",
  },
  {
    question: "Do you replace the internal product or engineering team?",
    answer:
      "No. I work across customers, product, and engineering to reduce ambiguity, create the first credible version, and give the internal team a clearer implementation path.",
  },
  {
    question: "Can you work inside an existing product and technical stack?",
    answer:
      "Yes. The normal starting point is the current customer journey, product constraints, data sources, and release process. The solution should fit the company instead of becoming an isolated prototype.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Elijah Paul AI Product Consulting",
            url: `${site.url}/services`,
            description:
              "Customer-led AI product strategy, solutions architecture, and working product builds for crypto, fintech, and AI companies.",
            areaServed: "Worldwide",
            founder: { "@type": "Person", name: site.name, url: site.url },
            serviceType: services.map((service) => service.name),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">AI product services</p>
          <h1>Turn a costly workflow problem into a product people can test.</h1>
          <p className="lede">
            I find the real bottleneck, design the operating flow, and build the first credible version.
          </p>
          <div className="actions"><a className="btn btn-primary" href={mailto("AI product opportunity")}>Describe the problem</a></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Ways to work together</h2>
          <ul className="rows" style={{ marginTop: 28 }}>
            {services.map((service) => (
              <li key={service.name} style={{ padding: "28px 0" }}>
                <h3>{service.name}</h3>
                <p className="muted">{service.summary}</p>
                <dl className="dl" style={{ margin: "18px 0" }}>
                  <div><dt>Timeline</dt><dd>{service.timeline}</dd></div>
                  <div><dt>Investment</dt><dd>{service.price}</dd></div>
                  <div><dt>Deliverables</dt><dd>{service.deliverables.join(" · ")}</dd></div>
                </dl>
                <a className="link arrow" href={mailto(service.subject)}>Ask about this engagement</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <h2>Good fit</h2>
          <ul className="prose">{fitSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <h2>Common questions</h2>
          <div>
            {faqs.map((item) => (
              <details className="faq" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
