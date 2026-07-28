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
    title: "Venture Labs: the agentic orchestration system behind serious builds.",
    lead:
      "It shows how I structure agents, evidence, state, approvals, QA, and launch controls before a team spends engineering time.",
    sectionSummary:
      "A full orchestration artifact for teams that need a stricter path from idea to build decision.",
    useCase:
      "Agentic workflow design, startup validation, venture review, product planning, red-team review, and pre-build decision gates.",
    audience:
      "Founders, venture studios, AI teams, operators, and product leaders with more ideas than engineering capacity.",
    interestSubject: "agentic orchestration system like Venture Labs",
    learnMoreLabel: "Talk about a similar orchestration system",
    artifactNote: "Rendered dashboard artifact showing the venture queue, decision gate, stage controls, and artifact readiness.",
    proofLabel: "Agent orchestration",
    proofCue: "A control room routes ideas through evidence, gates, QA, and launch boundaries.",
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
    learnMoreLabel: "Talk about a similar voice-agent build",
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
    learnMoreLabel: "Talk about a similar creator-protection build",
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
    learnMoreLabel: "Talk about a similar financial workflow",
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
    learnMoreLabel: "Talk about a similar procurement workflow",
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
    learnMoreLabel: "Talk about a similar payment-safety tool",
    artifactNote: "Live Monarch Shield site showing the build-time payment safety preflight.",
    proofLabel: "Payment code",
    proofCue: "A CLI preflight catches unsafe agent-payment paths before release.",
  },
];

const methodSteps = [
  {
    title: "Find the expensive bottleneck",
    copy: "I start with the call, ticket, spreadsheet, handoff, or approval step that slows customers or the team down.",
    output: "You know the buyer, user, workflow, and first screen worth building.",
  },
  {
    title: "Turn it into a product path",
    copy: "I map the rules, edge cases, source systems, and decisions into a flow people can review.",
    output: "Your team can see what gets built before engineering burns weeks.",
  },
  {
    title: "Ship the testable version",
    copy: "I build the screen, agent flow, or prototype far enough for a real user to try.",
    output: "You can decide to sell it, fund it, expand it, or stop.",
  },
];

const buyingSituations = [
  {
    service: services[0],
    title: "Stop guessing what to build",
    actionLabel: "Ask about the sprint",
    bestWhen:
      "Customers or operators keep asking for something, but no one has turned it into a clear product path.",
    outcome:
      "You get the user, workflow, first screen, build plan, and risks in writing.",
  },
  {
    title: "Build the first usable version",
    service: services[1],
    actionLabel: "Ask about the build",
    bestWhen:
      "The problem is real and you need a working screen, agent, or prototype before committing to a larger build.",
    outcome:
      "You get the product surface, core logic, review points, and handoff your team can test.",
  },
  {
    service: services[2],
    title: "Add product judgment to the team",
    actionLabel: "Ask about embedded help",
    bestWhen:
      "Customers, product, sales, and engineering all see the problem differently and the build needs a clear owner.",
    outcome:
      "You get hands-on discovery, product judgment, prototypes, implementation support, and sharper customer feedback.",
  },
];

const thoughtNotes = [
  {
    title: "The user path beats the model choice",
    check: "Who uses it, who approves it, what can go wrong, and what happens next.",
    copy: "A strong model still fails when the product gives people no clear action.",
  },
  {
    title: "Proof before the claim",
    check: "The product screen, role, source, current state, and boundary.",
    copy: "A buyer should see the product, my role, the source, and the limit before believing the headline.",
  },
  {
    title: "Limits protect the sale",
    check: "Money movement, identity, private media, customer operations, and provider setup.",
    copy: "Trust-heavy products sell better when the page is clear about what the system does and does not do.",
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
    copy: "Customers keep asking for something your current product or workflow cannot handle.",
  },
  {
    label: "What I build",
    copy: "Agent workflows, product dashboards, decision systems, and prototypes people can test.",
  },
  {
    label: "Best fit",
    copy: "Crypto, fintech, voice AI, creator-protection, and teams where approval and trust matter.",
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
            <div className="v8-detail-proof">
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
            <div className="v8-detail-boundary">
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
              </div>
            </div>
            <h1 id="hero-title">I turn customer problems into working AI products.</h1>
            <p className="v8-hero-lede">
              I help crypto, fintech, voice AI, creator-protection, and venture teams turn
              high-stakes workflows into agentic product systems with clear screens, state,
              approvals, QA, and a version people can actually test.
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
            <h2 id="work-title">Start with the orchestration system, then inspect the products.</h2>
          </div>
          <p>
            Venture Labs shows the operating system behind my work: route the problem, gather the
            evidence, force the decision, and keep QA visible. The other projects show that same
            pattern applied to voice agents, creator protection, finance, compute, and payment
            safety.
          </p>
        </div>
      </section>

      <section className="v8-proof-index-section" aria-labelledby="proof-index-title">
        <div className="site-shell v8-proof-index-wrap">
          <div className="v8-proof-index-head">
            <h2 id="proof-index-title">Pick the system or product problem closest to yours.</h2>
            <p>
              Start with agent orchestration if you need the system behind a build. Choose a product
              example if you want to see a specific market workflow.
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

      <section className="v8-section v8-offer-section" id="services" aria-labelledby="services-title">
        <div className="site-shell v8-offer">
          <div className="v8-section-head">
            <h2 id="services-title">What you can hire me to do</h2>
            <p>
              Hire me when customers keep asking for something, the workflow is unclear, and your
              team needs a first version people can use.
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

      <section className="v8-section v8-method-section" id="method" aria-labelledby="method-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <h2 id="method-title">How I work</h2>
            <p>
              I find the stuck workflow, design the product path, build the first usable version,
              and keep the limits clear.
            </p>
          </div>
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
      </section>

      <section className="v8-section v8-thoughts" id="thinking" aria-labelledby="thinking-title">
        <div className="site-shell">
          <div className="v8-section-head">
            <h2 id="thinking-title">How I build when money, trust, or identity are involved.</h2>
            <p>
              When a product touches money, identity, or reputation, I make the approval path,
              evidence, and failure path visible before anyone has to trust it.
            </p>
          </div>
          <div className="v8-thought-list">
            <div className="v8-thought-table-head" aria-hidden="true">
              <span>Principle</span>
              <span>What I check</span>
              <span>Why it matters</span>
            </div>
            {thoughtNotes.map((note) => (
              <article key={note.title}>
                <strong>{note.title}</strong>
                <span>{note.check}</span>
                <p>{note.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v8-section v8-fit-section" id="contact" aria-labelledby="contact-title">
        <div className="site-shell v8-fit">
          <div>
            <h2 id="contact-title">Have a stuck workflow that should become a product?</h2>
            <p>
              Send the customer problem, product idea, or role. I will tell you where I can help and
              what I would check first.
            </p>
            <div className="v8-fit-actions">
              <a className="button button-inverse" href={mailto("AI product fit call")}>Request a fit call</a>
              <Link className="text-link text-link-light" href="/work">View all case studies</Link>
            </div>
          </div>
          <div className="v8-fit-card">
            <strong>A strong first note answers four questions.</strong>
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
