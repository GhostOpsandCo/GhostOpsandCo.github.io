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
const ventureLabs = getProject("venture-labs");
const monarchShield = getProject("x402-agent-payments");

const focusSections = [
  {
    project: ventureLabs,
    anchor: "venture-labs",
    tone: "venture",
    title: "Venture Labs: decide what deserves engineering time before you build.",
    lead:
      "Founders and teams waste weeks when every idea sounds promising. Venture Labs forces each idea through research, risk review, a build/hold/kill decision, and the handoff engineering needs next.",
    sectionSummary:
      "A control-room concept for teams with too many product ideas and no strict way to decide what moves forward.",
    useCase:
      "Venture review, product validation, pre-build planning, AI workflow design, and launch readiness.",
    audience:
      "Founders, venture studios, AI teams, operators, and product leaders with more ideas than engineering capacity.",
    interestSubject: "product decision system like Venture Labs",
    learnMoreLabel: "Discuss a decision system",
    artifactNote: "Doc-backed Venture Labs concept showing a sample queue, decision gate, stage controls, and launch-readiness work.",
    proofLabel: "Startup ideas",
    proofCue: "A control room turns raw ideas into build, hold, or kill decisions.",
    primary: true,
  },
  {
    project: orelis,
    anchor: "orelis",
    tone: "orelis",
    title: "Orelis: stop letting qualified calls die in voicemail.",
    lead:
      "Faith answers missed and after-hours calls, asks the right questions, and gives the operator a usable handoff.",
    sectionSummary:
      "A voice-agent product for service businesses that cannot afford to let serious calls turn into voicemail.",
    useCase:
      "Missed calls, overflow, after-hours requests, intake routing, and service qualification.",
    audience:
      "High-ticket service businesses, local operators, clinics, agencies, home services, and sales teams where one missed call can matter.",
    interestSubject: "voice agent like Orelis",
    learnMoreLabel: "Discuss a voice-agent build",
    artifactNote: "Latest Orelis site capture: Faith example call and setup-call CTA.",
    proofLabel: "Missed calls",
    proofCue: "A voice agent answers, qualifies, and hands off the caller.",
  },
  {
    project: teamTakeDown,
    anchor: "team-take-down",
    tone: "team",
    title: "Team Take Down: protect creator media before copies spread.",
    lead:
      "It prepares the release, watches public sites, saves evidence, and keeps the creator in control before any request is sent.",
    sectionSummary:
      "A creator protection platform for people whose video or audio can be copied, impersonated, or re-uploaded.",
    useCase:
      "Protect a release, monitor accessible public sites, collect proof, prepare takedown requests, and track outcomes.",
    audience:
      "Creators, talent managers, agencies, and rights teams with high-value video or audio releases.",
    interestSubject: "creator protection workflow like Team Take Down",
    learnMoreLabel: "Discuss creator protection",
    artifactNote: "Creator workspace showing protected release status, evidence, and next actions.",
    proofLabel: "Creator leaks",
    proofCue: "A creator workspace prepares releases, watches public sites, and saves proof.",
  },
  {
    project: treasuryRouter,
    anchor: "treasury-router",
    tone: "treasury",
    title: "Treasury Router: turn idle capital into a client-ready review.",
    lead:
      "The dashboard finds the next account to review, explains the route, and keeps execution behind human approval.",
    sectionSummary:
      "A governed advisor prototype for ranking modeled idle-capital opportunities and preparing client review packets.",
    useCase:
      "Portfolio review, treasury routing, advisor prioritization, client approval, and operations handoff.",
    audience:
      "Fintech, wealth, crypto treasury, and advisor teams that need controlled AI workflows with clear boundaries.",
    interestSubject: "controlled financial workflow like Treasury Router",
    learnMoreLabel: "Discuss a financial workflow",
    artifactNote: "Advisor dashboard using illustrative development data.",
    proofLabel: "Advisor reviews",
    proofCue: "An advisor dashboard ranks idle-capital cases and keeps approval human.",
  },
  {
    project: gridSynapse,
    anchor: "gridsynapse",
    tone: "grid",
    title: "GridSynapse: compare GPU options without rebuilding the spreadsheet.",
    lead:
      "It compares cost, region, carbon, policy, and workload tradeoffs before the team commits spend.",
    sectionSummary:
      "A compute planning workflow that turns scattered provider information into a ranked shortlist a team can review.",
    useCase:
      "GPU sourcing, AI workload planning, procurement comparison, budget review, and deployment planning.",
    audience:
      "AI teams, infrastructure buyers, procurement leads, and founders trying to buy compute without spreadsheet drift.",
    interestSubject: "compute procurement product like GridSynapse",
    learnMoreLabel: "Discuss compute procurement",
    artifactNote: "Public compute procurement product and source-backed workflow.",
    proofLabel: "GPU buying",
    proofCue: "A compute planner compares provider options before spend is committed.",
  },
  {
    project: monarchShield,
    anchor: "monarch-shield",
    tone: "monarch",
    title: "Monarch Shield: catch unsafe agent-payment paths before money moves.",
    lead:
      "It gives developers a local preflight for payment code before real funds can move.",
    sectionSummary:
      "An open-source safety check for developers building x402, wallet, stablecoin, card, paid API, or paid MCP flows.",
    useCase:
      "Pre-release payment review, CI blocking, policy guard checks, and reproducible proof packs.",
    audience:
      "Developers, coding-agent teams, protocol builders, and startups shipping agent-payment workflows.",
    interestSubject: "payment-safety tool like Monarch Shield",
    learnMoreLabel: "Discuss payment safety",
    artifactNote: "Public Monarch Shield site capture showing the build-time payment safety preflight.",
    proofLabel: "Payment code",
    proofCue: "A CLI preflight catches unsafe agent-payment paths before release.",
  },
];

const methodSteps = [
  {
    title: "Find the stuck handoff",
    copy: "I start with the call, ticket, spreadsheet, approval, or source system where the work breaks.",
    output: "The buyer, user, problem, and first screen are clear.",
  },
  {
    title: "Design the product flow",
    copy: "I map the rules, edge cases, data sources, approvals, and failure states into a flow a real user can follow.",
    output: "Scope, risks, and handoffs are visible before the build.",
  },
  {
    title: "Build the first testable version",
    copy: "I build the screen, dashboard, voice flow, CLI check, or prototype far enough for a buyer or operator to use.",
    output: "You can decide to sell, fund, expand, integrate, or stop.",
  },
];

const buyingSituations = [
  {
    service: services[0],
    title: "Find the product worth building",
    actionLabel: "Request a sprint call",
    bestWhen:
      "Customers or operators keep asking for something, but no one has turned it into a clear product and build plan.",
    outcome:
      "You get the buyer, workflow, first screen, build plan, risks, and a build/hold/stop recommendation.",
  },
  {
    title: "Ship the first useful version",
    service: services[1],
    actionLabel: "Request a build call",
    bestWhen:
      "The problem is real and you need a working screen, agent, or prototype before committing to a larger build.",
    outcome:
      "You get the product surface, core logic, controls, review points, and handoff your team can test.",
  },
  {
    service: services[2],
    title: "Add product judgment to the team",
    actionLabel: "Request an embedded call",
    bestWhen:
      "Customers, product, sales, and engineering all see the problem differently and the build needs a clear owner.",
    outcome:
      "You get customer discovery, product shaping, prototypes, technical planning, implementation support, and feedback loops.",
  },
];

const problemSignals = [
  {
    problem: "Customers keep asking for a tool, but the first product is still unclear.",
    fix: "I turn the calls, tickets, demos, and edge cases into one buildable path.",
  },
  {
    problem: "The team has an AI demo, but not a product a buyer or operator can use.",
    fix: "I design the screen, flow, controls, and handoff that make the idea usable.",
  },
  {
    problem: "Sales hears the pain, engineering gets vague requirements.",
    fix: "I translate the market signal into scope, proof, risks, and the first version.",
  },
  {
    problem: "Money, identity, private media, or approvals make the build risky.",
    fix: "I keep the human review points, limits, and failure states visible.",
  },
];

const thoughtNotes = [
  {
    title: "User path",
    check: "Who uses it, who approves it, what can go wrong, and what happens next.",
  },
  {
    title: "Proof",
    check: "The product screen, role, source, current state, and boundary.",
  },
  {
    title: "Limits",
    check: "Money movement, identity, private media, customer operations, and provider setup.",
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
    label: "Hire me when",
    copy: "A customer need is obvious, but the product, workflow, or next build is not.",
  },
  {
    label: "What I build",
    copy: "Dashboards, voice agents, workflow tools, payment checks, and decision systems.",
  },
  {
    label: "Best fit",
    copy: "High-stakes work where money, identity, approvals, or reputation are involved.",
  },
];

function ProjectFocusSection({
  project,
  anchor,
  tone,
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
  tone: string;
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
      className={`v8-section v8-project-section v8-project-tone-${tone}${primary ? " v8-project-primary" : ""}`}
      id={anchor}
      aria-labelledby={`${anchor}-title`}
    >
      <article className="site-shell v8-project-article">
        <div className="v8-project-copy">
          <h2 id={`${anchor}-title`}>{title}</h2>
          <p className="v8-large-copy">{lead}</p>

          <div className="v8-detail-stack" aria-label={`${project.name} breakdown`}>
            <div>
              <strong>What it is</strong>
              <p>{sectionSummary}</p>
            </div>
            <div>
              <strong>Use case</strong>
              <p>{useCase}</p>
            </div>
            <div>
              <strong>Who it helps</strong>
              <p>{audience}</p>
            </div>
            <div>
              <strong>My role</strong>
              <p>{project.role}</p>
            </div>
            <div className="v8-detail-proof">
              <strong>What exists today</strong>
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
            <div className="v8-detail-boundary">
              <strong>What I am not claiming</strong>
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
              preload={primary}
              loading={primary ? "eager" : "lazy"}
              fetchPriority={primary ? "high" : "auto"}
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
              </div>
            </div>
            <h1 id="hero-title">I turn customer problems into AI products people can use.</h1>
            <p className="v8-hero-lede">
              I work with crypto, fintech, voice AI, creator-protection, and venture teams
              when customers or operators are stuck in a workflow worth fixing. I map the work,
              design the product, build the first usable version, and show what is real,
              what is assumed, and what still needs approval.
            </p>
            <div className="v8-hero-actions">
              <a className="button button-primary" href={mailto("AI product fit call")}>Request a product-fit call</a>
              <Link className="button button-outline" href="#work">View product examples</Link>
              <Link className="v8-resume-link" href="/resume">Resume and background</Link>
            </div>
          </div>

          <figure className="v8-hero-proof" aria-label="Featured product example">
            <div className="v8-hero-proof-shot">
              <Image
                src={ventureLabs.image}
                alt={ventureLabs.imageAlt}
                width={1440}
                height={1100}
                priority
                sizes="(max-width: 900px) 100vw, 1040px"
              />
            </div>
            <figcaption>
              <strong>Featured example: Venture Labs</strong>
              <span>A doc-backed control room concept for build, hold, or kill decisions. Public products and live examples are below.</span>
            </figcaption>
          </figure>

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

      <section className="v8-section v8-problems-section" aria-labelledby="problems-title">
        <div className="site-shell v8-problems">
          <div className="v8-section-head">
            <h2 id="problems-title">The problems I am hired to fix.</h2>
            <p>
              If the team can feel the opportunity but cannot turn it into a clear product,
              this is where I help.
            </p>
          </div>
          <div className="v8-problem-list">
            {problemSignals.map((item) => (
              <article key={item.problem}>
                <strong>{item.problem}</strong>
                <p>{item.fix}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v8-section v8-offer-section" id="services" aria-labelledby="services-title">
        <div className="site-shell v8-offer">
          <div className="v8-section-head">
            <h2 id="services-title">Hire me to find the product, build it, or lead the work.</h2>
            <p>
              Use a sprint when you need clarity, a build when the problem is already selected,
              or an embedded role when customer discovery and delivery need one owner.
            </p>
          </div>

          <div className="v8-offer-list">
            <div className="v8-offer-table-head" aria-hidden="true">
              <span>Engagement</span>
              <span>Best when</span>
              <span>You get</span>
              <span>Timeline</span>
              <span>Action</span>
            </div>
            {buyingSituations.map(({ service, title, actionLabel, bestWhen, outcome }) => (
              <article key={service.name} className="v8-offer-row">
                <div className="v8-offer-main">
                  <strong>{title}</strong>
                  <h3>{service.name}</h3>
                  <p className="v8-offer-price">{service.price}</p>
                  <p>{service.summary}</p>
                </div>
                <dl className="v8-offer-details">
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

      <section className="v8-proof-index-section" id="work" aria-labelledby="proof-index-title">
        <div className="site-shell v8-proof-index-wrap">
          <div className="v8-proof-index-head">
            <h2 id="proof-index-title">Start with the work, not the claim.</h2>
            <p>
              Pick the problem closest to yours. Each example shows what I built, who it helps,
              what exists today, and what I will not overclaim.
            </p>
          </div>
          <nav className="v8-proof-index" aria-label="Project proof index">
            {focusSections.map(({ project, anchor, proofLabel, proofCue, tone }) => (
              <a
                key={project.slug}
                href={`#${anchor}`}
                aria-label={`Jump to ${project.name}`}
                data-tone={tone}
              >
                <span>{proofLabel}</span>
                <strong>{project.name}</strong>
                <p>{proofCue}</p>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {focusSections.map((section) => (
        <ProjectFocusSection key={section.project.slug} {...section} />
      ))}

      <section className="v8-section v8-method-section" id="method" aria-labelledby="method-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <h2 id="method-title">How I work</h2>
            <p>
              I start where the work breaks, build the first version people can use,
              and keep the trust points visible.
            </p>
          </div>
          <div className="v8-method-grid">
            <div>
              <div className="v8-method-table-head" aria-hidden="true">
                <span>Step</span>
                <span>What happens</span>
                <span>Output</span>
              </div>
              <ol className="v8-method-list">
                {methodSteps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong>
                    <p>{step.copy}</p>
                    <span>{step.output}</span>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="v8-trust-checks" aria-label="Trust checks">
              <strong>Trust checks</strong>
              {thoughtNotes.map((note) => (
                <div key={note.title}>
                  <span>{note.title}</span>
                  <p>{note.check}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="v8-section v8-fit-section" id="contact" aria-labelledby="contact-title">
        <div className="site-shell v8-fit">
          <div>
            <h2 id="contact-title">Have a stuck workflow that should become a product?</h2>
            <p>
              Tell me the customer problem, current workaround, product idea, or role you need
              filled. I will reply with where I can help, what I would check first, and which
              engagement fits.
            </p>
            <div className="v8-fit-actions">
              <a className="button button-inverse" href={mailto("AI product fit call")}>Request a product-fit call</a>
              <Link className="text-link text-link-light" href="/work">View all case studies</Link>
            </div>
          </div>
          <div className="v8-fit-card">
            <strong>Include four details.</strong>
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
