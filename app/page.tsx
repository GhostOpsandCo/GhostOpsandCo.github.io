import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { mailto, projects, site, type Project } from "@/lib/site";

function getProject(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing project: ${slug}`);
  }

  return project;
}

const gridSynapse = getProject("gridsynapse");
const treasuryRouter = getProject("treasury-router");
const orelis = getProject("orelis");
const monarchDoctor = getProject("x402-agent-payments");

const proofProjects = [
  { project: gridSynapse, href: "#gridsynapse", label: "01" },
  { project: treasuryRouter, href: "#treasury-router", label: "02" },
  { project: orelis, href: "#orelis", label: "03" },
  { project: monarchDoctor, href: "#monarch-doctor", label: "04" },
];

const methodSteps = [
  {
    title: "Start with the expensive customer problem",
    copy: "I look for the workflow where delay, ambiguity, or manual coordination is costing the team money or momentum.",
  },
  {
    title: "Design the operating system",
    copy: "I map the user, controls, data inputs, decision rules, approval points, and the smallest useful product surface.",
  },
  {
    title: "Build the inspectable version",
    copy: "I ship the working artifact with honest boundaries so customers, teammates, and leadership can test the real thing.",
  },
];

const fitQuestions = [
  "What customer or internal workflow is stuck?",
  "Who needs to use or approve the first working version?",
  "What source system, policy, or integration creates the hard part?",
  "What proof would make the next decision easier?",
];

function ProjectTags({ project }: { project: Project }) {
  return (
    <div className="v7-tags" aria-label={`${project.name} capabilities`}>
      {project.skills.slice(0, 4).map((skill) => (
        <span key={`${project.slug}-${skill}`}>{skill}</span>
      ))}
    </div>
  );
}

function CaseSection({
  project,
  anchor,
  label,
  title,
  lead,
}: {
  project: Project;
  anchor: string;
  label: string;
  title: string;
  lead: string;
}) {
  const facts = [
    { label: "Problem", value: project.challenge },
    { label: "Role", value: project.role },
    { label: "Built", value: project.approach[0] },
    { label: "Works today", value: project.proof.slice(0, 2).join("; ") },
    { label: "Boundary", value: project.boundary },
  ];

  return (
    <section className="v7-section v7-case-section" id={anchor} aria-labelledby={`${anchor}-title`}>
      <div className="site-shell v7-case">
        <div className="v7-case-copy">
          <p className="eyebrow">{label}</p>
          <h2 id={`${anchor}-title`}>{title}</h2>
          <p className="v7-large-copy">{lead}</p>
          <ProjectTags project={project} />

          <div className="v7-detail-table" aria-label={`${project.name} case details`}>
            {facts.map((fact) => (
              <div key={`${project.slug}-${fact.label}`}>
                <strong>{fact.label}</strong>
                <p>{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="v7-actions">
            <Link className="button button-primary" href={`/work/${project.slug}`}>Read case study</Link>
            {project.liveUrl ? (
              <a className="button button-outline" href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.primaryAction}
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                Inspect source
              </a>
            ) : null}
          </div>
        </div>

        <figure className="v7-artifact">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={1100}
            sizes="(max-width: 900px) 92vw, 44vw"
          />
          <figcaption>
            <span>{project.status}</span>
            <strong>{project.name}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function SupportingProject({ project, href }: { project: Project; href: string }) {
  return (
    <article className="v7-support-card">
      <div className="v7-support-image">
        <Image src={project.image} alt={project.imageAlt} width={900} height={700} sizes="(max-width: 760px) 92vw, 40vw" />
      </div>
      <div className="v7-support-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="v7-detail-table v7-detail-table-compact">
          <div>
            <strong>Role</strong>
            <p>{project.role}</p>
          </div>
          <div>
            <strong>Evidence</strong>
            <p>{project.proof[0]}</p>
          </div>
          <div>
            <strong>Boundary</strong>
            <p>{project.boundary}</p>
          </div>
        </div>
        <div className="v7-actions">
          <Link className="button button-outline" href={href}>Read case study</Link>
          {project.liveUrl ? (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.primaryAction}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

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

      <section className="v7-hero" aria-labelledby="hero-title">
        <div className="site-shell v7-hero-grid">
          <div className="v7-hero-copy">
            <div className="v7-person">
              <Image src="/headshot.jpg" alt="Elijah Paul" width={56} height={56} priority />
              <div>
                <strong>Elijah Paul</strong>
                <span>AI Solutions Architect / Product Builder</span>
              </div>
            </div>
            <p className="eyebrow">Crypto, fintech, AI teams, and agentic systems</p>
            <h1 id="hero-title">Elijah Paul turns customer problems into working AI products.</h1>
            <p className="v7-hero-lede">
              I work with crypto, fintech, and AI teams to find product gaps, design the workflow,
              and build the version customers and internal teams can actually test.
            </p>
            <div className="v7-hero-actions">
              <Link className="button button-primary" href="#contact">Request a fit call</Link>
              <Link className="button button-outline" href="#work">See the work</Link>
              <Link className="v7-resume-link" href="/resume">Resume and background</Link>
            </div>
            <ul className="v7-hero-signals" aria-label="How Elijah creates value">
              <li>Find the bottleneck</li>
              <li>Design the workflow</li>
              <li>Build the testable product</li>
            </ul>
          </div>

          <aside className="v7-hero-proof" aria-label="Featured product proof">
            <div className="v7-proof-top">
              <span>Featured proof</span>
              <strong>{gridSynapse.name}</strong>
            </div>
            <div className="v7-proof-image">
              <Image
                src={gridSynapse.image}
                alt={gridSynapse.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 92vw, 42vw"
              />
            </div>
            <div className="v7-proof-body">
              <p>{gridSynapse.shortOutcome}</p>
              <div className="v7-proof-actions">
                <Link className="text-link" href="/work/gridsynapse">Inspect case study</Link>
                <a className="text-link" href={gridSynapse.liveUrl} target="_blank" rel="noreferrer">Open product</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="v7-section v7-index-section" id="work" aria-labelledby="work-title">
        <div className="site-shell">
          <div className="v7-section-head">
            <p className="eyebrow">Inspectable work</p>
            <h2 id="work-title">Four product systems, each with the mechanism and boundary visible.</h2>
            <p>
              Each project shows the customer problem, what I built, why it matters, and what
              can be inspected next.
            </p>
          </div>
          <div className="v7-proof-grid">
            {proofProjects.map(({ project, href, label }) => (
              <Link className="v7-proof-card" href={href} key={project.slug}>
                <span>{label}</span>
                <strong>{project.name}</strong>
                <small>{project.category}</small>
                <p>{project.shortOutcome}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CaseSection
        project={gridSynapse}
        anchor="gridsynapse"
        label="Flagship case study"
        title="GridSynapse turns messy compute sourcing into an approval-ready product workflow."
        lead="The strongest proof is not a claim. It is a product surface a buyer can inspect: public inputs, deterministic optimization, a procurement packet, and clear limits before any provider action."
      />

      <CaseSection
        project={treasuryRouter}
        anchor="treasury-router"
        label="Financial workflow case study"
        title="Treasury Router shows product judgment in a controlled AI finance workflow."
        lead="The work is valuable because the system does not pretend an AI should move money. It turns advisor analysis, suitability constraints, client materials, and operations handoff into a governed prototype."
      />

      <section className="v7-section v7-section-soft" aria-labelledby="supporting-work-title">
        <div className="site-shell">
          <div className="v7-section-head">
            <p className="eyebrow">Additional proof</p>
            <h2 id="supporting-work-title">The same pattern across voice AI and agent payments.</h2>
            <p>
              Each project is included because it makes the skill set inspectable: customer problem,
              workflow design, product surface, and honest operating boundary.
            </p>
          </div>
          <div className="v7-support-grid">
            <SupportingProject project={orelis} href="/work/orelis" />
            <SupportingProject project={monarchDoctor} href="/work/x402-agent-payments" />
          </div>
        </div>
      </section>

      <section className="v7-section" id="method" aria-labelledby="method-title">
        <div className="site-shell v7-method">
          <div className="v7-section-head">
            <p className="eyebrow">Working method</p>
            <h2 id="method-title">A simple operating model for useful AI products.</h2>
          </div>
          <ol className="v7-method-grid">
            {methodSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v7-section v7-section-dark" id="contact" aria-labelledby="contact-title">
        <div className="site-shell v7-fit">
          <div>
            <p className="eyebrow eyebrow-light">Request a fit call</p>
            <h2 id="contact-title">Hiring for this skill set or building something customers need to test?</h2>
            <p>
              Send the product, customer problem, or role. I will tell you where I can help and what I
              would examine first.
            </p>
            <div className="v7-fit-actions">
              <a className="button button-inverse" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="text-link text-link-light" href="/work">See the work</Link>
            </div>
          </div>
          <div className="v7-fit-card">
            <strong>A useful first note answers four questions.</strong>
            <ul>
              {fitQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
