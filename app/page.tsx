import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { mailto, projects, site } from "@/lib/site";

const audiencePaths = [
  {
    label: "Hiring full-time",
    title: "Add a customer-led AI product builder",
    copy: "I work between customers, product, and engineering to turn ambiguous needs into working products and implementation plans.",
    href: "/resume",
    action: "Review experience",
  },
  {
    label: "Need a product built",
    title: "Go from product gap to a testable build",
    copy: "I can audit the workflow, design the solution, build the product foundation, and help the team validate it with users.",
    href: "/services",
    action: "View services",
  },
  {
    label: "Exploring a product",
    title: "Inspect, use, license, or acquire selected work",
    copy: "Each case study identifies what works today, the operating boundary, and the most relevant next step.",
    href: "/work",
    action: "Browse products",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            url: site.url,
            image: `${site.url}/headshot.jpg`,
            jobTitle: site.title,
            description: site.description,
            sameAs: [site.linkedin, site.github],
            knowsAbout: [
              "AI product development",
              "AI solutions architecture",
              "agentic AI",
              "financial technology",
              "crypto infrastructure",
              "x402 payments",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Elijah Paul Portfolio",
            url: site.url,
            description: site.description,
          },
        ]}
      />

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-product-scene" aria-hidden="true">
          <div className="hero-shot hero-shot-primary">
            <Image src="/projects/gridsynapse.png" alt="" fill loading="eager" sizes="(max-width: 760px) 92vw, 58vw" />
          </div>
          <div className="hero-shot hero-shot-secondary">
            <Image src="/projects/treasury-router.png" alt="" fill loading="eager" sizes="(max-width: 760px) 72vw, 38vw" />
          </div>
          <div className="hero-shot hero-shot-tertiary">
            <Image src="/projects/orelis.jpg" alt="" fill loading="eager" sizes="(max-width: 760px) 40vw, 20vw" />
          </div>
        </div>
        <div className="site-shell hero-content">
          <div className="identity-line">
            <Image src="/headshot.jpg" alt="Elijah Paul" width={48} height={48} loading="eager" />
            <span>AI Solutions Architect <b>Product Builder</b></span>
          </div>
          <h1 id="hero-title">Elijah Paul turns customer problems into working AI products.</h1>
          <p>
            I work with crypto, fintech, and AI teams to find product gaps, design the workflow,
            and build the version customers and internal teams can actually test.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">View selected work</Link>
            <a className="button button-secondary" href={mailto("AI role or product build")}>Work with me</a>
            <Link className="hero-resume-link" href="/resume">View resume</Link>
          </div>
          <div className="capability-line" aria-label="Selected capabilities">
            <span>Advisor workflows</span>
            <span>Compute optimization</span>
            <span>Voice agents</span>
            <span>x402 payments</span>
          </div>
        </div>
      </section>

      <section className="proof-rail" aria-label="Portfolio summary">
        <div className="site-shell proof-rail-grid">
          <div><strong>04</strong><span>Working product systems</span></div>
          <div><strong>$20M+</strong><span>Launch revenue contributed</span></div>
          <div><strong>$100M+</strong><span>Ecosystem and trading volume supported</span></div>
          <div><strong>$50M</strong><span>Founder-built venture valuation</span></div>
        </div>
      </section>

      <section className="section-band section-intro">
        <div className="site-shell intro-grid">
          <div>
            <p className="eyebrow">What I do</p>
            <h2>I find the expensive bottleneck, then build the product that removes it.</h2>
          </div>
          <div className="large-copy">
            <p>
              My work sits between customer feedback, product strategy, solution architecture, and
              implementation. I am most useful when a team has a real market opportunity but the path
              from customer need to working product is still unclear.
            </p>
            <p>
              The case studies below show the operating workflow, my role, what works today, and the
              boundaries that still require real integrations or production validation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band selected-work-band" aria-labelledby="selected-work-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="selected-work-title">Products built to be used, tested, and improved</h2>
            </div>
            <Link className="text-link" href="/work">View all work</Link>
          </div>
          <div className="project-grid project-grid-editorial">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index < 2} reverse={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-soft" aria-labelledby="paths-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choose the relevant path</p>
              <h2 id="paths-title">How I can create value</h2>
            </div>
          </div>
          <div className="path-grid">
            {audiencePaths.map((path, index) => (
              <article className="path-item" key={path.title}>
                <span className="path-index">0{index + 1}</span>
                <p className="path-label">{path.label}</p>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
                <Link className="text-link" href={path.href}>{path.action}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-dark" aria-labelledby="method-title">
        <div className="site-shell method-layout">
          <div>
            <p className="eyebrow eyebrow-light">Working method</p>
            <h2 id="method-title">From customer signal to usable product</h2>
          </div>
          <ol className="method-list">
            <li><span>01</span><div><strong>Find the bottleneck</strong><p>Listen to customers, inspect the current workflow, and identify where value is being lost.</p></div></li>
            <li><span>02</span><div><strong>Design the operating flow</strong><p>Define the user, decision logic, controls, data contracts, and the smallest credible product.</p></div></li>
            <li><span>03</span><div><strong>Build and validate</strong><p>Ship the working version, test it with real users, and turn feedback into product priorities.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section-band section-soft" aria-labelledby="services-title">
        <div className="site-shell service-preview">
          <div>
            <p className="eyebrow">Available for selected work</p>
            <h2 id="services-title">Product strategy that ends in something usable</h2>
            <p>
              Start with a focused product opportunity sprint, a working AI product build, or an
              embedded solutions role alongside customers and your internal team.
            </p>
          </div>
          <div className="service-preview-actions">
            <Link className="button button-primary" href="/services">View services</Link>
            <a className="button button-outline" href={mailto("AI product opportunity")}>Describe the problem</a>
          </div>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contact-title">
        <div className="site-shell contact-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">Start a useful conversation</p>
            <h2 id="contact-title">Hiring for this skill set or have a workflow worth fixing?</h2>
          </div>
          <div>
            <p>
              Send the product, customer problem, or role. I will tell you where I can help and what I
              would examine first.
            </p>
            <a className="button button-inverse" href={mailto("AI product or solutions conversation")}>Email Elijah</a>
          </div>
        </div>
      </section>
    </main>
  );
}
