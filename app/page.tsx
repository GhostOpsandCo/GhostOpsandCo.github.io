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

const orelis = getProject("orelis");
const teamTakeDown = getProject("team-take-down");
const treasuryRouter = getProject("treasury-router");
const gridSynapse = getProject("gridsynapse");
const monarchShield = getProject("x402-agent-payments");

const focusSections = [
  {
    project: orelis,
    anchor: "orelis",
    label: "01 / Voice agent offering",
    title: "Orelis is the clearest commercial offer: Faith answers the calls your team misses.",
    lead:
      "A focused voice-agent experience with one proof artifact, one buyer problem, and one setup-call path.",
    artifactNote: "Latest Orelis site capture: Faith example call and setup-call CTA.",
    primary: true,
  },
  {
    project: teamTakeDown,
    anchor: "team-take-down",
    label: "02 / Creator protection",
    title: "Team Take Down turns release protection into a workspace creators can trust.",
    lead:
      "The product is not another vague AI safety claim. It shows the concrete loop: protect the file, watch accessible public sites, organize evidence, approve the request, and check the result.",
    artifactNote: "Creator workspace showing protected release status, evidence, and next actions.",
  },
  {
    project: treasuryRouter,
    anchor: "treasury-router",
    label: "03 / Financial workflow",
    title: "Treasury Router makes a controlled advisor workflow inspectable.",
    lead:
      "This section shows the exact advisor dashboard: idle-capital opportunities, a prioritized client case, recommendation steps, and human review before execution.",
    artifactNote: "Advisor dashboard using illustrative development data.",
    reverse: true,
  },
  {
    project: gridSynapse,
    anchor: "gridsynapse",
    label: "04 / Compute procurement",
    title: "GridSynapse shows the deeper product system: constraints, optimization, and approval.",
    lead:
      "This is the systems-thinking proof. The product turns fragmented GPU sourcing into a decision workflow a buyer can inspect before any provider action.",
    artifactNote: "Public compute procurement product and source-backed workflow.",
  },
  {
    project: monarchShield,
    anchor: "monarch-shield",
    label: "05 / Agent payment safety",
    title: "Monarch Shield gives coding agents a payment safety gate before go-live.",
    lead:
      "The tool has a narrow, useful job: run Doctor, find supported unsafe payment paths, fail CI in strict mode, and keep the boundary around what a preflight can and cannot prove.",
    artifactNote: "Live Monarch Shield site showing Doctor preflight and payment safety boundary.",
    reverse: true,
  },
];

const methodSteps = [
  {
    title: "Find the expensive customer problem",
    copy: "I look for the workflow where delay, ambiguity, risk, or manual coordination is costing the team money or momentum.",
  },
  {
    title: "Design the operating loop",
    copy: "I map the user, inputs, rules, approval points, edge cases, and the smallest product surface that can prove value.",
  },
  {
    title: "Build the inspectable version",
    copy: "I ship the working artifact with clear evidence, source where possible, and honest boundaries around what is not live yet.",
  },
];

const thoughtNotes = [
  {
    title: "The workflow matters more than the model.",
    copy: "Useful AI products are usually won by choosing the right moment, data boundary, handoff, and human approval pattern.",
  },
  {
    title: "A portfolio should let buyers inspect the mechanism.",
    copy: "Screenshots, case details, route boundaries, and source links create more trust than vague capability lists.",
  },
  {
    title: "The boundary is part of the product.",
    copy: "When money, identity, private media, or customer operations are involved, saying what the system does not do is a feature.",
  },
];

const fitQuestions = [
  "What customer or internal workflow is stuck?",
  "Who needs to use or approve the first working version?",
  "What source system, policy, or integration creates the hard part?",
  "What proof would make the next decision easier?",
];

function PillList({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="v8-pills" aria-label={label}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectFocusSection({
  project,
  anchor,
  label,
  title,
  lead,
  artifactNote,
  primary = false,
  reverse = false,
}: {
  project: Project;
  anchor: string;
  label: string;
  title: string;
  lead: string;
  artifactNote: string;
  primary?: boolean;
  reverse?: boolean;
}) {
  return (
    <section
      className={`v8-section v8-project-section${primary ? " v8-project-primary" : ""}${reverse ? " v8-project-reverse" : ""}`}
      id={anchor}
      aria-labelledby={`${anchor}-title`}
    >
      <div className="site-shell v8-project-grid">
        <figure className="v8-artifact">
          <div className="v8-artifact-shot">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1440}
              height={1100}
              sizes="(max-width: 900px) 92vw, 52vw"
              priority={primary}
            />
          </div>
          <figcaption>
            <span>{project.status}</span>
            <strong>{artifactNote}</strong>
          </figcaption>
        </figure>

        <div className="v8-project-copy">
          <p className="eyebrow">{label}</p>
          <h2 id={`${anchor}-title`}>{title}</h2>
          <p className="v8-large-copy">{lead}</p>

          <div className="v8-detail-stack" aria-label={`${project.name} breakdown`}>
            <div>
              <strong>What it does</strong>
              <p>{project.whatItDoes}</p>
            </div>
            <div>
              <strong>Benefits</strong>
              <ul>
                {project.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Keywords</strong>
              <PillList items={project.keywords} label={`${project.name} keywords`} />
            </div>
            <div>
              <strong>Boundary</strong>
              <p>{project.boundary}</p>
            </div>
          </div>

          <div className="v8-actions">
            <Link className="button button-primary" href={`/work/${project.slug}`}>Inspect case study</Link>
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
      </div>
    </section>
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
              "voice AI agents",
              "creator protection",
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

      <section className="v8-hero" aria-labelledby="hero-title">
        <div className="site-shell v8-hero-grid">
          <div className="v8-hero-copy">
            <div className="v8-person">
              <Image src="/headshot.jpg" alt="Elijah Paul" width={58} height={58} priority />
              <div>
                <strong>Elijah Paul</strong>
                <span>AI Solutions Architect / Product Builder</span>
              </div>
            </div>
            <p className="eyebrow">Crypto, fintech, voice AI, creator protection, and agentic systems</p>
            <h1 id="hero-title">Elijah Paul turns customer problems into working AI products.</h1>
            <p className="v8-hero-lede">
              I work with crypto, fintech, and AI teams to find product gaps, design the workflow,
              and build the version customers and internal teams can actually test.
            </p>
            <div className="v8-hero-actions">
              <a className="button button-primary" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="button button-outline" href="#work">See the work</Link>
              <Link className="v8-resume-link" href="/resume">Resume and background</Link>
            </div>
          </div>

          <figure className="v8-hero-artifact">
            <Image
              src={orelis.image}
              alt={orelis.imageAlt}
              width={1440}
              height={1100}
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
            />
            <figcaption>
              <span>Lead proof artifact</span>
              <strong>Orelis: Faith example call, setup-call CTA, and the voice-agent workflow.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="v8-section v8-work-intro" id="work" aria-labelledby="work-title">
        <div className="site-shell v8-work-intro-grid">
          <div>
            <p className="eyebrow">Inspectable work</p>
            <h2 id="work-title">Five product systems, each with a clear problem, artifact, and reason to care.</h2>
          </div>
          <p>
            Orelis handles missed high-ticket calls. Team Take Down protects creator releases.
            Treasury Router stages advisor decisions. GridSynapse plans compute procurement.
            Monarch Shield checks agent-payment code before funds move.
          </p>
        </div>
      </section>

      {focusSections.map((section) => (
        <ProjectFocusSection key={section.project.slug} {...section} />
      ))}

      <section className="v8-section v8-method-section" id="method" aria-labelledby="method-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <p className="eyebrow">How I build</p>
            <h2 id="method-title">A simple operating model for useful AI products.</h2>
          </div>
          <ol className="v8-method-list">
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

      <section className="v8-section v8-thoughts" id="thinking" aria-labelledby="thinking-title">
        <div className="site-shell v8-thoughts-grid">
          <div>
            <p className="eyebrow">How I think</p>
            <h2 id="thinking-title">The products are different, but the judgment pattern is consistent.</h2>
          </div>
          <div className="v8-thought-list">
            {thoughtNotes.map((note, index) => (
              <article key={note.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{note.title}</strong>
                <p>{note.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v8-section v8-fit-section" id="contact" aria-labelledby="contact-title">
        <div className="site-shell v8-fit">
          <div>
            <p className="eyebrow eyebrow-light">Request a fit call</p>
            <h2 id="contact-title">Hiring for this skill set or building something customers need to test?</h2>
            <p>
              Send the product, customer problem, or role. I will tell you where I can help and what I
              would examine first.
            </p>
            <div className="v8-fit-actions">
              <a className="button button-inverse" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="text-link text-link-light" href="/work">See all case studies</Link>
            </div>
          </div>
          <div className="v8-fit-card">
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
