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

      <section className="page-hero">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="eyebrow">AI product services</p>
            <h1>Turn a costly workflow problem into a product people can test.</h1>
          </div>
          <div className="large-copy">
            <p>
              I work with customers and internal teams to find the real bottleneck, design the
              operating flow, and build the first credible version. The goal is a better product and
              a clear path to adoption, not an AI feature looking for a use case.
            </p>
            <a className="button button-primary" href={mailto("AI product opportunity")}>Describe the problem</a>
          </div>
        </div>
      </section>

      <section className="section-band" aria-labelledby="engagements-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ways to work together</p>
              <h2 id="engagements-title">Start at the level your problem requires</h2>
            </div>
          </div>
          <div className="services-stack">
            {services.map((service, index) => (
              <article className="service-row" key={service.name}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-title-block">
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                </div>
                <dl className="service-details">
                  <div><dt>Timeline</dt><dd>{service.timeline}</dd></div>
                  <div><dt>Investment</dt><dd>{service.price}</dd></div>
                </dl>
                <div className="service-deliverables">
                  <span>Typical deliverables</span>
                  <ul>
                    {service.deliverables.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a className="button button-outline" href={mailto(service.subject)}>Ask about this engagement</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-soft" aria-labelledby="fit-title">
        <div className="site-shell split-reading">
          <div>
            <p className="eyebrow">Good fit</p>
            <h2 id="fit-title">The signal is usually already visible</h2>
          </div>
          <ul className="signal-list">
            {fitSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </div>
      </section>

      <section className="section-band" aria-labelledby="faq-title">
        <div className="site-shell faq-layout">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">What the engagement looks like</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="site-shell contact-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">Start with the bottleneck</p>
            <h2>Tell me what customers cannot do today.</h2>
          </div>
          <div>
            <p>Include the user, current workflow, and business impact. I will respond with where I would start.</p>
            <a className="button button-inverse" href={mailto("Customer workflow worth fixing")}>Email Elijah</a>
          </div>
        </div>
      </section>
    </main>
  );
}
