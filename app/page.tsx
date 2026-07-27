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
    title: "Orelis: stop letting qualified calls die in voicemail.",
    lead:
      "Faith answers the call, qualifies the request, and gives the operator a clean next step.",
    sectionSummary:
      "A voice-agent product for service businesses that need every serious inquiry handled the same way, even after hours.",
    useCase:
      "Missed calls, overflow, after-hours requests, intake routing, and service qualification.",
    audience:
      "High-ticket service businesses, local operators, clinics, agencies, home services, and sales teams where one missed call can matter.",
    interestSubject: "voice agent like Orelis",
    learnMoreLabel: "Learn more about similar voice-agent projects",
    artifactNote: "Latest Orelis site capture: Faith example call and setup-call CTA.",
    primary: true,
  },
  {
    project: teamTakeDown,
    anchor: "team-take-down",
    title: "Team Take Down: protect a creator release before the leak becomes the workflow.",
    lead:
      "The workspace connects protected uploads, public-site watch, evidence, creator approval, and outcome tracking.",
    sectionSummary:
      "A creator protection platform for people whose video or audio can be copied, impersonated, or re-uploaded.",
    useCase:
      "Protect a release, monitor accessible public sites, collect proof, prepare takedown requests, and track outcomes.",
    audience:
      "Creators, talent managers, agencies, and rights teams with high-value video or audio releases.",
    interestSubject: "creator protection workflow like Team Take Down",
    learnMoreLabel: "Learn more about similar creator-protection projects",
    artifactNote: "Creator workspace showing protected release status, evidence, and next actions.",
  },
  {
    project: treasuryRouter,
    anchor: "treasury-router",
    title: "Treasury Router: turn idle capital into an advisor-ready decision path.",
    lead:
      "The dashboard finds the next client case, explains the route, and keeps execution behind human approval.",
    sectionSummary:
      "A governed advisor prototype for ranking modeled idle-capital opportunities and preparing client review packets.",
    useCase:
      "Portfolio review, treasury routing, advisor prioritization, client approval, and operations handoff.",
    audience:
      "Fintech, wealth, crypto treasury, and advisor teams that need controlled AI workflows with clear boundaries.",
    interestSubject: "controlled financial workflow like Treasury Router",
    learnMoreLabel: "Learn more about similar financial workflow projects",
    artifactNote: "Advisor dashboard using illustrative development data.",
  },
  {
    project: gridSynapse,
    anchor: "gridsynapse",
    title: "GridSynapse: replace GPU sourcing chaos with an approval-ready compute plan.",
    lead:
      "It compares public provider inputs against real constraints so teams can choose before they spend.",
    sectionSummary:
      "A compute procurement workflow that ranks options by cost, region, carbon, policy, and workload fit.",
    useCase:
      "GPU sourcing, AI workload planning, procurement comparison, budget review, and deployment planning.",
    audience:
      "AI teams, infrastructure buyers, procurement leads, and founders trying to buy compute without spreadsheet drift.",
    interestSubject: "compute procurement product like GridSynapse",
    learnMoreLabel: "Learn more about similar procurement workflow projects",
    artifactNote: "Public compute procurement product and source-backed workflow.",
  },
  {
    project: monarchShield,
    anchor: "monarch-shield",
    title: "Monarch Shield: catch unsafe agent-payment paths before money moves.",
    lead:
      "A local CLI and CI gate gives reviewers a deterministic preflight before launch.",
    sectionSummary:
      "An open-source safety check for developers building x402, wallet, stablecoin, card, paid API, or paid MCP flows.",
    useCase:
      "Pre-release payment review, CI blocking, policy guard checks, and reproducible proof packs.",
    audience:
      "Developers, coding-agent teams, protocol builders, and startups shipping agent-payment workflows.",
    interestSubject: "payment-safety tool like Monarch Shield",
    learnMoreLabel: "Learn more about similar agent-payment safety projects",
    artifactNote: "Live Monarch Shield site showing Doctor preflight and payment safety boundary.",
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

const profileNotes = [
  {
    label: "Role",
    copy: "AI Solutions Architect / Product Builder",
  },
  {
    label: "Focus",
    copy: "Crypto, fintech, voice AI, creator protection, and agentic workflows.",
  },
  {
    label: "Best fit",
    copy: "Teams with a valuable product problem, messy workflow, or prototype that needs to become inspectable.",
  },
];

function ProjectFocusSection({
  index,
  project,
  anchor,
  title,
  lead,
  sectionSummary,
  useCase,
  audience,
  interestSubject,
  learnMoreLabel,
  artifactNote,
  primary = false,
}: {
  index: number;
  project: Project;
  anchor: string;
  title: string;
  lead: string;
  sectionSummary: string;
  useCase: string;
  audience: string;
  interestSubject: string;
  learnMoreLabel: string;
  artifactNote: string;
  primary?: boolean;
}) {
  return (
    <section
      className={`v8-section v8-project-section${primary ? " v8-project-primary" : ""}`}
      id={anchor}
      aria-labelledby={`${anchor}-title`}
    >
      <article className="site-shell v8-project-article">
        <div className="v8-project-kicker" aria-label={`${project.name} project number and category`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>
        <div className="v8-project-copy">
          <h2 id={`${anchor}-title`}>{title}</h2>
          <p className="v8-large-copy">{lead}</p>

          <div className="v8-detail-stack" aria-label={`${project.name} breakdown`}>
            <div>
              <strong>Summary</strong>
              <p>{sectionSummary}</p>
            </div>
            <div>
              <strong>Use case</strong>
              <p>{useCase}</p>
            </div>
            <div>
              <strong>Who it is for</strong>
              <p>{audience}</p>
            </div>
            <div>
              <strong>Proof</strong>
              <p>{project.shortOutcome}</p>
            </div>
            <div>
              <strong>Why it matters</strong>
              <ul>
                {project.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Boundary</strong>
              <p>{project.boundary}</p>
            </div>
          </div>

          <div className="v8-actions">
            <a className="button button-primary" href={mailto(`Interested in a ${interestSubject}`)}>
              {learnMoreLabel}
            </a>
            <Link className="text-link" href={`/work/${project.slug}`}>View case study</Link>
            {project.liveUrl ? (
              <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.primaryAction}
              </a>
            ) : null}
          </div>
        </div>

        <figure className="v8-artifact">
          <div className="v8-artifact-shot">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1440}
              height={1100}
              sizes="(max-width: 900px) 92vw, 34vw"
              priority={primary}
            />
          </div>
          <figcaption>
            <span>{project.category}</span>
            <strong>{artifactNote}</strong>
          </figcaption>
        </figure>
      </article>
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
                <span>Available for serious product builds</span>
              </div>
            </div>
            <h1 id="hero-title">Elijah Paul turns customer problems into working AI products.</h1>
            <p className="v8-role-title">AI Solutions Architect / Product Builder</p>
            <p className="v8-hero-lede">
              I work with crypto, fintech, and AI teams to find product gaps, design the workflow,
              and build the version customers and internal teams can actually test.
            </p>
            <div className="v8-hero-actions">
              <a className="button button-primary" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="button button-outline" href="#work">View my work</Link>
              <Link className="v8-resume-link" href="/resume">Resume and background</Link>
            </div>
          </div>

          <aside className="v8-profile-brief" aria-label="Profile summary">
            {profileNotes.map((note) => (
              <div key={note.label}>
                <strong>{note.label}</strong>
                <p>{note.copy}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="v8-section v8-work-intro" id="work" aria-labelledby="work-title">
        <div className="site-shell v8-work-intro-grid">
          <div>
            <h2 id="work-title">View my work: five product systems built around expensive problems.</h2>
          </div>
          <p>
            Orelis handles missed high-ticket calls. Team Take Down protects creator releases.
            Treasury Router stages advisor decisions. GridSynapse plans compute procurement.
            Monarch Shield checks agent-payment code before funds move.
          </p>
        </div>
      </section>

      {focusSections.map((section, index) => (
        <ProjectFocusSection key={section.project.slug} index={index} {...section} />
      ))}

      <section className="v8-section v8-method-section" id="method" aria-labelledby="method-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <h2 id="method-title">How I turn messy demand into a product customers can test.</h2>
            <p>
              The job is not to make an impressive demo. The job is to find the point where a customer
              is stuck, design the operating loop, and ship the smallest version that proves the decision.
            </p>
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
            <h2 id="thinking-title">How I think when the product touches money, trust, or identity.</h2>
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
            <h2 id="contact-title">Hiring for this skill set or building something customers need to test?</h2>
            <p>
              Send the product, customer problem, or role. I will tell you where I can help and what I
              would examine first.
            </p>
            <div className="v8-fit-actions">
              <a className="button button-inverse" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="text-link text-link-light" href="/work">View all case studies</Link>
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
