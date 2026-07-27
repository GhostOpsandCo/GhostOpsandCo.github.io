import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { mailto, projects, services, site, type Project } from "@/lib/site";

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
    learnMoreLabel: "Talk about a similar voice-agent build",
    artifactNote: "Latest Orelis site capture: Faith example call and setup-call CTA.",
    primary: true,
  },
  {
    project: teamTakeDown,
    anchor: "team-take-down",
    title: "Team Take Down: protect a creator release before copies spread.",
    lead:
      "The workspace connects protected uploads, public-site watch, evidence, creator approval, and outcome tracking.",
    sectionSummary:
      "A creator protection platform for people whose video or audio can be copied, impersonated, or re-uploaded.",
    useCase:
      "Protect a release, monitor accessible public sites, collect proof, prepare takedown requests, and track outcomes.",
    audience:
      "Creators, talent managers, agencies, and rights teams with high-value video or audio releases.",
    interestSubject: "creator protection workflow like Team Take Down",
    learnMoreLabel: "Talk about a similar creator-protection build",
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
    learnMoreLabel: "Talk about a similar financial workflow",
    artifactNote: "Advisor dashboard using illustrative development data.",
  },
  {
    project: gridSynapse,
    anchor: "gridsynapse",
    title: "GridSynapse: compare GPU options without rebuilding the spreadsheet.",
    lead:
      "It helps teams see cost, region, carbon, policy, and workload tradeoffs before they commit to a provider.",
    sectionSummary:
      "A compute planning workflow that turns scattered provider information into a ranked shortlist a team can review.",
    useCase:
      "GPU sourcing, AI workload planning, procurement comparison, budget review, and deployment planning.",
    audience:
      "AI teams, infrastructure buyers, procurement leads, and founders trying to buy compute without spreadsheet drift.",
    interestSubject: "compute procurement product like GridSynapse",
    learnMoreLabel: "Talk about a similar procurement workflow",
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
    learnMoreLabel: "Talk about a similar payment-safety tool",
    artifactNote: "Live Monarch Shield site showing the build-time payment safety preflight.",
  },
];

const methodSteps = [
  {
    title: "Find the real problem",
    copy: "I start with the place where customers, operators, or internal teams are already stuck.",
  },
  {
    title: "Map the work",
    copy: "I turn calls, spreadsheets, handoffs, rules, and edge cases into a product flow people can follow.",
  },
  {
    title: "Ship the useful version",
    copy: "I build the screen, workflow, or prototype that lets the team test the idea with real people.",
  },
];

const buyingSituations = [
  {
    service: services[0],
    title: "Find the product worth building",
    actionLabel: "Ask about the sprint",
    bestWhen:
      "Customers or internal teams keep asking for something, but the product path is still unclear.",
    outcome:
      "You leave with the problem, user, workflow, first product surface, and build plan clearly defined.",
  },
  {
    service: services[1],
    title: "Build the first usable version",
    actionLabel: "Ask about the build",
    bestWhen:
      "You know the problem matters and need a working product, agent workflow, or prototype people can test.",
    outcome:
      "You get the product experience, logic, controls, and handoff needed to evaluate the idea with real users.",
  },
  {
    service: services[2],
    title: "Bring me into the team",
    actionLabel: "Ask about embedded help",
    bestWhen:
      "You need someone who can sit between customers, product, sales, and engineering and keep the build moving.",
    outcome:
      "You get hands-on product judgment, customer discovery, solution design, prototypes, and implementation support.",
  },
];

const thoughtNotes = [
  {
    title: "Most AI projects fail in the handoff.",
    copy: "The model can be good and the product can still fail if the user, data, approval, and next action are unclear.",
  },
  {
    title: "Show the work, not just the claim.",
    copy: "A serious portfolio should make the product, role, limits, and working artifact easy to judge.",
  },
  {
    title: "The limit matters.",
    copy: "When money, identity, private media, or customer operations are involved, the page should say what the system does and what it does not do.",
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
    label: "What I do",
    copy: "Turn customer workflows into usable AI products, prototypes, and implementation plans.",
  },
  {
    label: "Best fit",
    copy: "Teams with customer demand, a broken workflow, or a product idea that needs the first useful version.",
  },
];

function ProjectFocusSection({
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
              <strong>My role</strong>
              <p>{project.role}</p>
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
              I work with crypto, fintech, voice AI, and creator-protection teams to turn a real
              workflow problem into a screen, agent, or prototype people can try.
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
            <h2 id="work-title">Proof: five products that show how I think and build.</h2>
          </div>
          <p>
            Each one shows the user, the problem, what I built, what works today, and what is not
            being claimed. That is the fastest way to understand whether I can help with your build.
          </p>
        </div>
      </section>

      {focusSections.map((section) => (
        <ProjectFocusSection key={section.project.slug} {...section} />
      ))}

      <section className="v8-section v8-offer-section" id="services" aria-labelledby="services-title">
        <div className="site-shell v8-offer">
          <div className="v8-section-head">
            <h2 id="services-title">What you can buy from me</h2>
            <p>
              If you have a product problem worth fixing, I can help you decide what to build,
              build the first useful version, or work inside the team while the product takes shape.
            </p>
          </div>

          <div className="v8-offer-list">
            {buyingSituations.map(({ service, title, actionLabel, bestWhen, outcome }) => (
              <article key={service.name} className="v8-offer-row">
                <div>
                  <strong>{title}</strong>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                </div>
                <dl>
                  <div>
                    <dt>Best when</dt>
                    <dd>{bestWhen}</dd>
                  </div>
                  <div>
                    <dt>You get</dt>
                    <dd>{outcome}</dd>
                  </div>
                  <div>
                    <dt>Timeline</dt>
                    <dd>{service.timeline}</dd>
                  </div>
                </dl>
                <a className="button button-outline" href={mailto(service.subject)}>
                  {actionLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v8-section v8-method-section" id="method" aria-labelledby="method-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <h2 id="method-title">How I work</h2>
            <p>
              I start with the customer problem, map the workflow, build the first usable version,
              and keep the limits clear.
            </p>
          </div>
          <ol className="v8-method-list">
            {methodSteps.map((step) => (
              <li key={step.title}>
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
            {thoughtNotes.map((note) => (
              <article key={note.title}>
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
