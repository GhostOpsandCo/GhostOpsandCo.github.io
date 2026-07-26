export const site = {
  name: "Elijah Paul",
  title: "AI Solutions Architect & Product Builder",
  description:
    "Elijah Paul turns customer and operational problems into working AI products for crypto, fintech, and agentic systems.",
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
    slug: "treasury-router",
    name: "Treasury Router",
    category: "AI financial workflow",
    status: "Working prototype",
    summary:
      "A governed advisor workflow that finds modeled idle-capital opportunities, filters a controlled product library, prepares client materials, and creates a human-confirmed operations handoff.",
    metaDescription:
      "Treasury Router is a governed AI advisor workflow for idle-capital analysis, controlled product matching, client materials, and human-approved handoff.",
    shortOutcome:
      "Turned an AI product idea into a working advisor and x402 merchant workflow that stakeholders could inspect, test, and discuss.",
    image: "/projects/treasury-router.png",
    imageAlt: "Treasury Router public product concept showing its idle-capital workflow",
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
    category: "AI compute procurement",
    status: "Public product foundation",
    summary:
      "A buyer-side compute procurement workflow that compares public GPU pricing and carbon inputs, applies workload constraints, and produces an approval-ready compute plan.",
    metaDescription:
      "GridSynapse compares public GPU pricing and carbon data, applies workload constraints, and produces approval-ready AI compute procurement plans.",
    shortOutcome:
      "Demonstrates how live public inputs, deterministic optimization, and operational approvals can replace spreadsheet-heavy compute sourcing.",
    image: "/projects/gridsynapse.png",
    imageAlt: "GridSynapse operator console comparing AI compute procurement options",
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
      "Created a spend-capped procurement packet and inspectable SkyPilot artifact before any provider action.",
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
    slug: "orelis",
    name: "Orelis",
    category: "Voice agent product",
    status: "Commercial demo",
    summary:
      "A branded inbound voice-agent experience for high-ticket service businesses that captures caller details, qualifies the request, and prepares a booking or operator handoff.",
    metaDescription:
      "Orelis is a voice AI agent for high-ticket service businesses that captures callers, qualifies demand, and prepares bookings or human handoffs.",
    shortOutcome:
      "Shows how an AI voice workflow can make missed-call handling more consistent while preserving a clear human handoff.",
    image: "/projects/orelis.jpg",
    imageAlt: "Orelis voice agent product interface for service businesses",
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
      "Public product and sample voice interaction",
      "Customer-facing workflow designed around service-business intake",
      "Reusable branded experience for different high-ticket categories",
      "Clear handoff boundary for downstream operators",
    ],
    boundary:
      "Orelis is a public commercial demo. Production telephony, CRM integrations, uptime, and customer outcomes depend on the final implementation and are not claimed by this case study.",
    availability:
      "Available for custom voice-agent builds and commercial implementation discussions.",
  },
  {
    slug: "x402-agent-payments",
    name: "Monarch Doctor",
    category: "Agent payment developer tool",
    status: "Open-source developer tool",
    summary:
      "A CLI and CI preflight that detects supported payment-code patterns and can fail a build when money-moving code lacks a detectable policy guard.",
    metaDescription:
      "Monarch Doctor is an open-source CLI and CI preflight that flags supported x402 payment code when a detectable policy guard is missing.",
    shortOutcome:
      "Turns a recurring agent-payment implementation risk into a deterministic check developers can run before release.",
    image: "/projects/monarch.jpg",
    imageAlt: "Monarch Shield banner for the x402 payment preflight tool",
    liveUrl: "https://x402ms.ai/",
    sourceUrl: "https://github.com/GhostMonarch/x402ms",
    primaryAction: "View developer tool",
    primaryIntent: "x402 agent payment developer",
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
      "Deterministic tests for supported patterns",
      "Clear separation between build-time preflight and runtime enforcement",
    ],
    boundary:
      "Monarch Doctor is a build-time static preflight. It is not runtime enforcement, fraud prevention, provider verification, wallet security, regulatory compliance, or settlement validation.",
    availability:
      "Available for open-source use. Related agent-payment workflow and integration work is available as a consulting engagement.",
  },
];

export const services = [
  {
    name: "AI Product Opportunity Sprint",
    timeline: "5–10 business days",
    price: "Typical range: $3.5k–$7.5k",
    summary:
      "Find the expensive customer or operational problem, map the workflow, and define the smallest AI product worth building.",
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
    timeline: "3–8 weeks",
    price: "Typical range: $15k–$40k+",
    summary:
      "Turn the selected workflow into a working product teams and customers can test, including the user experience and required integrations.",
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
    price: "Typical range: $10k–$18k/month",
    summary:
      "Work directly with customers and internal teams to uncover product gaps, shape solutions, and build the path from feedback to adoption.",
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
