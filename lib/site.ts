export const site = {
  name: "Elijah Paul",
  title: "AI Solutions Architect & Product Builder",
  description:
    "AI product builder helping crypto, fintech, voice AI, and creator-protection teams turn stuck workflows into products people can test, buy, or approve.",
  url: "https://elijahpaul.io",
  email: "elijah@elijahpaul.io",
  linkedin: "https://www.linkedin.com/in/elijahpaul",
  github: "https://github.com/GhostOpsandCo",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  metaDescription: string;
  shortOutcome: string;
  whatItDoes: string;
  benefits: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
  primaryAction: string;
  primaryIntent: string;
  skills: string[];
  role: string;
  challenge: string;
  approach: string[];
  workflow: string[];
  proof: string[];
  boundary: string;
  availability: string;
};

export const projects: Project[] = [
  {
    slug: "orelis",
    name: "Orelis",
    category: "Voice agent product",
    status: "Commercial voice-agent demo",
    summary:
      "A focused inbound voice-agent offer for service businesses. Faith answers routed calls, qualifies the request, and prepares a booking request, structured summary, or human handoff.",
    metaDescription:
      "Orelis is a configurable AI voice-assistant service for service businesses that handles routed inbound-call intake, qualification, and prepared booking or human handoff.",
    shortOutcome:
      "Turns missed-call risk into a clear intake, qualification, and handoff workflow that a service business can evaluate from a real example call.",
    whatItDoes:
      "Orelis gives a service business one approved voice assistant, one routed number, and one call flow for missed calls, after-hours inquiries, and overflow.",
    benefits: [
      "Captures high-intent inbound demand when the team cannot answer.",
      "Keeps qualification, urgency, and next-step details consistent.",
      "Gives operators a scan-ready handoff instead of a vague voicemail.",
    ],
    keywords: ["voice AI", "missed calls", "high-ticket services", "intake", "qualification", "handoff"],
    image: "/projects/orelis-latest.png",
    imageAlt: "Latest Orelis website showing Faith, the example voice call, and Book a setup call action",
    liveUrl: "https://orelis.io/",
    primaryAction: "Open product",
    primaryIntent: "voice AI agent for service businesses",
    skills: ["Voice AI", "Conversation design", "B2B SaaS", "Lead qualification", "Product UX"],
    role:
      "Product positioning, conversation workflow, service-business use case, brand direction, UX, demo experience, and commercial packaging.",
    challenge:
      "High-ticket service businesses lose opportunities when inbound calls go unanswered or qualification and handoff details are inconsistent.",
    approach: [
      "Designed a clear caller journey from greeting through qualification and next step.",
      "Kept the experience focused on business outcomes instead of generic chatbot features.",
      "Created a branded product surface that can be adapted to different service categories.",
      "Made human escalation and operator handoff part of the workflow rather than an exception.",
    ],
    workflow: [
      "Answer the inbound request",
      "Capture contact and service details",
      "Qualify urgency and fit",
      "Prepare a booking, summary, or operator handoff",
      "Give the business a consistent follow-up record",
    ],
    proof: [
      "Public product site with Faith as the primary example assistant",
      "Listen-only 1:44 example call with identifying details redacted",
      "Visible setup-call CTA and handoff summary pattern",
      "Public boundary language for providers, workflow approval, and results",
    ],
    boundary:
      "Orelis is a public commercial demo. Production telephony, CRM integrations, uptime, booking behavior, and customer outcomes depend on the final provider setup and tested workflow.",
    availability:
      "Available for custom voice-agent builds and commercial implementation discussions.",
  },
  {
    slug: "team-take-down",
    name: "Team Take Down",
    category: "Creator protection platform",
    status: "Public product foundation",
    summary:
      "A release-first creator protection workflow that prepares protected videos, watches accessible public sites after release, organizes proof, prepares takedown requests, and tracks outcomes with creator review.",
    metaDescription:
      "Team Take Down is a creator protection platform for release preparation, public-site leak checks, evidence organization, takedown support, and outcome tracking.",
    shortOutcome:
      "Turns leak cleanup into one controlled workspace from protected upload to evidence, creator approval, takedown support, and checked result.",
    whatItDoes:
      "Team Take Down clears private file details, adds private video and audio match signals, checks the finished MP4, watches accessible public sites, and keeps evidence and takedown follow-up connected.",
    benefits: [
      "Protects releases before they go public instead of reacting after proof is scattered.",
      "Keeps match reasons, screenshots, filing routes, receipts, and outcomes in one place.",
      "Keeps the creator in control of the final legal approval before any request is sent.",
    ],
    keywords: ["creator protection", "release watch", "digital fingerprinting", "evidence workflow", "takedown support", "privacy"],
    image: "/projects/team-take-down.png",
    imageAlt: "Team Take Down creator workspace showing protected release status, priorities, and recent protection activity",
    liveUrl: "https://teamtakedown.xyz/",
    primaryAction: "Open product",
    primaryIntent: "creator content protection workflow",
    skills: ["Creator protection", "AI workflows", "Digital fingerprinting", "Evidence systems", "Privacy UX", "Human review"],
    role:
      "Product strategy, creator workflow, privacy boundary, evidence model, dashboard UX, release positioning, and launch planning.",
    challenge:
      "Creators need a way to protect private media before release, recognize possible copies after release, organize proof, and approve takedown action without building a permanent media library or losing control of legal decisions.",
    approach: [
      "Designed the workflow around release preparation, not only post-leak cleanup.",
      "Kept private media minimization, creator approval, evidence capture, and outcome checks visible in the product model.",
      "Separated possible-copy detection from confirmed legal action so the product does not overclaim what it can see.",
      "Built the creator workspace around the actions a creator actually needs next: protect, find, remove, and track.",
    ],
    workflow: [
      "Upload and prepare a protected MP4",
      "Remove private file details and add private match signals",
      "Watch accessible public sites after release",
      "Organize source links, screenshots, match reasons, and filing route",
      "Ask the creator to approve the request and track the outcome",
    ],
    proof: [
      "Public marketing site and creator workspace surface",
      "Release Watch, evidence, review, request, and result states",
      "Public privacy boundary that avoids whole-internet or guaranteed-removal claims",
      "Creator-approved legal action model instead of autonomous takedowns",
    ],
    boundary:
      "Team Take Down watches public sites it can legally access. It does not search private groups, locked accounts, paywalls, encrypted services, or the whole internet, and it does not guarantee every edited copy will be found or removed.",
    availability:
      "Available as a creator-protection product foundation and selected implementation discussion.",
  },
  {
    slug: "treasury-router",
    name: "Treasury Router",
    category: "AI financial workflow",
    status: "Working advisor prototype",
    summary:
      "A governed advisor workspace that surfaces modeled idle-capital opportunities, stages client cases, filters approved routes, prepares client materials, and keeps execution behind human approval.",
    metaDescription:
      "Treasury Router is a governed AI advisor workflow for modeled idle-capital analysis, controlled product matching, client materials, and human-approved handoff.",
    shortOutcome:
      "Turns an AI financial workflow idea into a working advisor surface that stakeholders can inspect, test, and discuss without giving the AI authority over funds.",
    whatItDoes:
      "Treasury Router ranks idle-capital opportunities across a VIP book, opens the highest-impact client case, prepares an advisor review path, and creates a clean handoff packet.",
    benefits: [
      "Shows advisors which client case deserves attention first.",
      "Turns route analysis into a packet a human can review with the client.",
      "Protects the workflow with deterministic controls and explicit execution boundaries.",
    ],
    keywords: ["AI treasury", "idle capital", "advisor workflow", "financial UX", "human approval", "x402"],
    image: "/projects/treasury-router-dashboard.png",
    imageAlt: "Treasury Router advisor dashboard showing idle-capital opportunities and a client case workflow",
    liveUrl: "https://treasuryrouter.xyz/treasuryrouter/",
    primaryAction: "View public concept",
    primaryIntent: "AI financial advisor workflow",
    skills: ["AI product strategy", "Next.js", "TypeScript", "x402", "Financial UX", "Human approval"],
    role:
      "Product strategy, workflow design, UX/UI, recommendation architecture, report design, prototyping, and x402 testnet implementation.",
    challenge:
      "VIP advisors need a faster way to identify idle balances, compare controlled product routes, explain tradeoffs, document approval, and hand a clean packet to operations without giving an AI agent authority over client funds.",
    approach: [
      "Mapped the advisor journey from opportunity detection through client approval and operations review.",
      "Kept suitability, allocation, and eligibility logic deterministic while using Gate AI to explain and prepare materials.",
      "Separated client-facing recommendations from internal operations packets and execution boundaries.",
      "Added an x402 testnet proof-of-flow for paid, permissioned access to a structured recommendation package.",
    ],
    workflow: [
      "Detect a modeled idle-capital opportunity",
      "Apply client constraints and route-governance rules",
      "Compare recommendation paths and rationale",
      "Prepare advisor and client materials",
      "Record human approval and create an operations handoff",
    ],
    proof: [
      "Working multi-step advisor product foundation",
      "Deterministic route filtering and recommendation logic",
      "Client packet and internal operations report generation",
      "x402 testnet merchant access and human-review work-order flow",
    ],
    boundary:
      "Built while working with Gate AI. The public material shows a working prototype using deterministic development data. It does not use live client funds, a live Gate execution API, or autonomous execution.",
    availability:
      "This employer-context case study demonstrates product and solution-architecture capability. It is not offered for acquisition or independent licensing.",
  },
  {
    slug: "gridsynapse",
    name: "GridSynapse",
    category: "Compute planning",
    status: "Public product foundation",
    summary:
      "A buyer-side compute planning workflow that compares public GPU pricing and carbon inputs, applies workload constraints, and gives teams a ranked shortlist before they buy.",
    metaDescription:
      "GridSynapse compares public GPU pricing and carbon data, applies workload constraints, and helps teams review compute options before they commit spend.",
    shortOutcome:
      "Demonstrates how live public inputs, deterministic optimization, and operational approvals can replace spreadsheet-heavy compute sourcing.",
    whatItDoes:
      "GridSynapse turns fragmented compute options into a ranked procurement plan using workload constraints, public price inputs, carbon inputs, and deterministic optimization.",
    benefits: [
      "Helps buyers compare providers without relying on scattered spreadsheets.",
      "Makes the tradeoff between cost, region, policy, carbon, and workload visible.",
      "Prepares the review packet before any reservation, provisioning, or spend.",
    ],
    keywords: ["AI compute", "GPU procurement", "optimization", "OR-Tools", "Supabase", "decision systems"],
    image: "/projects/gridsynapse.png",
    imageAlt: "GridSynapse operator console comparing compute options",
    liveUrl: "https://www.gridsynapse.xyz",
    sourceUrl: "https://github.com/GhostOpsandCo/gridsynapse-mvp",
    primaryAction: "Open product",
    primaryIntent: "AI compute optimization software",
    skills: ["Optimization", "OR-Tools", "Next.js", "FastAPI", "Supabase", "Data validation"],
    role:
      "Product direction, information architecture, procurement workflow, optimization requirements, UX/UI, data-source integration, and release controls.",
    challenge:
      "Compute buyers need to compare fragmented provider options against cost, carbon, workload, region, and policy constraints without treating modeled capacity as guaranteed inventory.",
    approach: [
      "Normalized public provider catalog inputs into a comparable decision model.",
      "Used deterministic optimization instead of opaque AI allocation decisions.",
      "Separated measured public inputs from modeled capacity, latency, and availability.",
      "Created a spend-capped review packet and SkyPilot artifact before any provider action.",
    ],
    workflow: [
      "Define workload and policy constraints",
      "Compare public price and carbon inputs",
      "Validate the ranked recommendation",
      "Prepare procurement and deployment artifacts",
      "Record the decision without reserving or purchasing resources",
    ],
    proof: [
      "Publicly inspectable repository and working web product",
      "Public catalog pricing and UK carbon-intensity inputs",
      "Deterministic OR-Tools recommendation engine",
      "Supabase-backed decision history with preview write protection",
    ],
    boundary:
      "GridSynapse uses public pricing and carbon inputs. Capacity, latency, and availability are modeled. It does not discover guaranteed inventory, reserve GPUs, provision infrastructure, or spend money.",
    availability:
      "Available as a portfolio product foundation for product partnerships, custom implementation discussions, or acquisition inquiries.",
  },
  {
    slug: "x402-agent-payments",
    name: "Monarch Shield",
    category: "Agent payment safety infrastructure",
    status: "Open-source developer tool",
    summary:
      "A local-first CLI and CI safety gate for agent payment stacks. It detects supported money-moving code paths and blocks unsafe payment flows before they go live.",
    metaDescription:
      "Monarch Shield is an open-source CLI and CI preflight for agent payment stacks, x402 flows, wallets, stablecoins, cards, paid APIs, and paid MCP tools.",
    shortOutcome:
      "Turns agent-payment release risk into a deterministic preflight developers and coding agents can run before real funds move.",
    whatItDoes:
      "Monarch Shield gives coding agents and developers one command to inspect supported payment code, catch unsafe paths, and keep a safety check in CI before launch.",
    benefits: [
      "Blocks obvious unsafe payment paths before users, wallets, cards, stablecoins, or paid APIs touch code.",
      "Gives reviewers reproducible proof packs instead of vague security claims.",
      "Works locally without an account, API key, or hosted dependency to start.",
    ],
    keywords: ["agent payments", "x402", "payment safety", "CLI", "CI gate", "coding agents"],
    image: "/projects/monarch-shield.png",
    imageAlt: "Monarch Shield website showing agent payment safety infrastructure and build-time preflight",
    liveUrl: "https://x402ms.ai/",
    sourceUrl: "https://github.com/GhostMonarch/x402ms",
    primaryAction: "View developer tool",
    primaryIntent: "agent payment safety gate",
    skills: ["x402", "CLI tooling", "CI/CD", "Static analysis", "Agent payments", "TypeScript"],
    role:
      "Product wedge, developer workflow, policy-guard model, CLI experience, CI behavior, testing, documentation, and public release.",
    challenge:
      "Agent-payment code can be merged without an explicit preflight policy check, leaving teams to find an avoidable implementation gap late in review.",
    approach: [
      "Focused on one detectable release-time failure mode rather than broad security claims.",
      "Built a command developers can run locally or in CI with strict failure behavior.",
      "Made findings deterministic and inspectable so teams can reproduce the result.",
      "Kept runtime payment authorization and settlement outside the tool's scope.",
    ],
    workflow: [
      "Scan a codebase for supported payment-code patterns",
      "Check for a detectable policy guard",
      "Report the finding with a reproducible command",
      "Fail CI in strict mode when the guard is missing",
      "Return control to the developer before release",
    ],
    proof: [
      "MIT-licensed public repository",
      "Installable CLI and CI-oriented strict mode",
      "Public evidence tied to shipped code",
      "Clear separation between build-time preflight and runtime enforcement",
    ],
    boundary:
      "Monarch Shield is a build-time and CI preflight. It is not runtime enforcement by itself, fraud prevention, provider verification, wallet security, regulatory compliance, or settlement validation.",
    availability:
      "Available for open-source use. Related agent-payment workflow and integration work is available as a consulting engagement.",
  },
];

export const services = [
  {
    name: "AI Product Opportunity Sprint",
    timeline: "5-10 business days",
    price: "Typical range: $3.5k-$7.5k",
    summary:
      "Find the customer or operations problem worth building before your team spends weeks on the wrong thing.",
    deliverables: [
      "Customer and workflow audit",
      "Problem and opportunity map",
      "Product concept and operating flow",
      "Prioritized requirements and build plan",
    ],
    subject: "AI Product Opportunity Sprint",
  },
  {
    name: "AI Product Build",
    timeline: "3-8 weeks",
    price: "Typical range: $15k-$40k+",
    summary:
      "Turn the selected workflow into a working product people can test, including the screens, logic, controls, and required integrations.",
    deliverables: [
      "Product and solution architecture",
      "Working web product or agent workflow",
      "Deterministic controls and human approvals",
      "Testing, release readiness, and handoff",
    ],
    subject: "AI Product Build",
  },
  {
    name: "Embedded AI Solutions Architect",
    timeline: "Monthly engagement",
    price: "Typical range: $10k-$18k/month",
    summary:
      "Work with customers, product, sales, and engineering to find gaps, shape the product, and keep the build moving.",
    deliverables: [
      "Customer-facing solution discovery",
      "Product audits and technical design",
      "Prototypes, demos, and implementation support",
      "Product feedback and go-to-market alignment",
    ],
    subject: "Embedded AI Solutions Architect",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
