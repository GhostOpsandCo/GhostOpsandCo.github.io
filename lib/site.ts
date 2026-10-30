export const site = {
  name: "Elijah Paul",
  title: "Co-founder of Hot Bot",
  description:
    "Elijah Paul is the co-founder of Hot Bot, agentic trading on Solana. Co-won AnsemHack and went live in 24 days. Previously led AI at Gate.",
  url: "https://elijahpaul.io",
  email: "elijah@elijahpaul.io",
  github: "https://github.com/GhostOpsandCo",
  x: "https://x.com/elijahintek",
  linkedin: "https://www.linkedin.com/in/elijahpaul",
  xHandle: "@elijahintek",
  hotbot: "https://usehotbot.com",
  hotbotX: "https://x.com/usehotbot",
};

export const sameAs = [site.x, site.linkedin, site.github];

export const ogImage = { url: "/og.png", width: 1200, height: 630, alt: "Elijah Paul, co-founder of Hot Bot" };

export type Section = { h: string; lines: string[] };

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  metaDescription: string;
  shortOutcome: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
  skills: string[];
  sections: Section[];
  limits: string[];
};

export const projects: Project[] = [
  {
    slug: "x402-agent-payments",
    name: "Monarch Shield",
    category: "x402 payment safety",
    status: "Open source",
    summary: "One command that fails your build when an agent can pay without a policy check.",
    metaDescription:
      "Monarch Shield is an open-source CLI and CI check for x402 agent payments. It fails the build when a paid client call has no policy guard. Local, no account, no API key.",
    shortOutcome: "Fails the build when an agent can pay without a policy check.",
    keywords: ["x402", "agent payments", "CI", "CLI", "static analysis", "open source"],
    image: "/projects/monarch-shield.png",
    imageAlt: "Monarch Shield website: agents move money now, run this first",
    liveUrl: "https://x402ms.ai/",
    sourceUrl: "https://github.com/GhostMonarch/x402ms",
    skills: ["x402", "CLI tooling", "CI/CD", "Static analysis", "TypeScript"],
    sections: [
      {
        h: "Agents Have Wallets Now",
        lines: [
          "Copy the x402 quickstart, ship it, and your agent pays whatever it gets asked to pay.",
          "No spend limit. No deny path.",
          "You find out when the bill shows up.",
        ],
      },
      {
        h: "Run This First",
        lines: [
          "npx @monarch-shield/x402 doctor --ci --strict",
          "Doctor scans JS and TS for paid client calls.",
          "No recognized abort or deny before payment? The build fails.",
          "If it can't finish the analysis, it fails closed.",
        ],
      },
      {
        h: "No Fake Guards",
        lines: [
          "Hooks that only log don't pass.",
          "Hooks registered after the paid call don't pass.",
          "Abort branches that can never run don't pass.",
          "Lookalikes don't pass either.",
        ],
      },
      {
        h: "Where It Runs",
        lines: [
          "On your machine. No account, no API key.",
          "JSON for CI, SARIF for code scanning, a GitHub Action for PRs.",
          "MIT licensed.",
        ],
      },
    ],
    limits: [
      "It runs at build time. It doesn't block a payment at runtime.",
      "It checks one file and follows its imports. It doesn't prove your policy is right.",
    ],
  },
  {
    slug: "treasury-router",
    name: "Treasury Router",
    category: "AI advisor workflow",
    status: "Prototype",
    summary: "Built at Gate. An advisor workspace that finds idle capital across a VIP book and preps the client case. A human signs off on every move.",
    metaDescription:
      "Treasury Router: an AI advisor workflow built at Gate. Finds modeled idle capital, stages client cases, preps materials, and keeps every move behind human approval. Includes an x402 testnet flow.",
    shortOutcome: "Finds idle capital, preps the case. A human approves every move.",
    keywords: ["AI advisor", "idle capital", "x402", "Gate", "human approval"],
    image: "/projects/treasury-router-dashboard.png",
    imageAlt: "Treasury Router advisor dashboard with idle-capital opportunities and a client case",
    liveUrl: "https://treasuryrouter.xyz/treasuryrouter/",
    skills: ["Product strategy", "Next.js", "TypeScript", "x402", "Financial UX"],
    sections: [
      {
        h: "The Ask",
        lines: [
          "VIP advisors sit on books full of idle balances.",
          "Finding them, comparing routes and writing it up for the client takes hours.",
          "And nobody wants an AI touching client funds.",
        ],
      },
      {
        h: "The Build",
        lines: [
          "Rank the idle capital across the book.",
          "Open the biggest client case first.",
          "Filter to approved routes only. That logic is deterministic, not a model guessing.",
          "Gate AI writes the explanation and the client packet.",
          "The advisor approves. Ops gets a clean handoff.",
        ],
      },
      {
        h: "x402 on Testnet",
        lines: [
          "A paid recommendation, packaged as a work order and paid for over x402.",
          "Policy stays in place. Execution stays with humans.",
        ],
      },
    ],
    limits: [
      "Prototype on development data.",
      "No live client funds, no live Gate execution API, no autonomous execution.",
    ],
  },
  {
    slug: "venture-labs",
    name: "Venture Labs",
    category: "Idea to build, with a kill switch",
    status: "Concept",
    summary: "The GhostOps control room for deciding what deserves engineering time. Every idea has to survive a red report before anyone writes code.",
    metaDescription:
      "Venture Labs is the GhostOps control room for startup ideas: research, a red report that tries to kill the idea, a build/hold/kill gate, then PRD, build, QA and launch.",
    shortOutcome: "Every idea has to survive a red report before anyone writes code.",
    keywords: ["GhostOps", "venture studio", "decision gates", "agents"],
    image: "/projects/venture-labs-control-room.png",
    imageAlt: "Venture Labs dashboard with a venture queue, decision gate and stage controls",
    skills: ["Agent orchestration", "Product strategy", "QA gates"],
    sections: [
      {
        h: "Too Many Ideas",
        lines: [
          "Agents make it cheap to start things.",
          "That's the problem. You end up building everything and finishing nothing.",
        ],
      },
      {
        h: "Try to Kill It First",
        lines: [
          "Idea comes in. Agents build the research pack.",
          "Then a red report. Its only job is to kill the idea.",
          "Build, hold or kill. Written down.",
          "Only a build gets a PRD, architecture, QA and a launch plan.",
        ],
      },
      {
        h: "Runs on GhostOps",
        lines: [
          "Same harness as everything else I run.",
          "Roles, state, evidence and hard gates. No agent skips a stage.",
        ],
      },
    ],
    limits: [
      "The dashboard is a concept built from the internal GhostOps docs.",
      "It's not a live ops dashboard and not a customer result.",
    ],
  },
  {
    slug: "orelis",
    name: "Orelis",
    category: "Voice agent",
    status: "Demo",
    summary: "Faith picks up the calls your team misses, qualifies the caller and hands you a summary you can act on.",
    metaDescription:
      "Orelis is a voice agent for service businesses. Faith answers missed and after-hours calls, qualifies the caller, and preps a booking request or a human handoff.",
    shortOutcome: "Picks up the calls you miss. Hands you a summary, not a voicemail.",
    keywords: ["voice AI", "missed calls", "service business", "intake"],
    image: "/projects/orelis-latest.png",
    imageAlt: "Orelis website with Faith, the example call and the setup call button",
    liveUrl: "https://orelis.io/",
    skills: ["Voice AI", "Conversation design", "Product UX"],
    sections: [
      {
        h: "Missed Calls Are Missed Money",
        lines: [
          "High-ticket service businesses lose deals on the calls nobody answers.",
          "A voicemail doesn't qualify anyone.",
        ],
      },
      {
        h: "Meet Faith",
        lines: [
          "Answers the routed call.",
          "Gets the contact, the service and how urgent it is.",
          "Preps a booking request or hands off to a human.",
          "Your team gets one clean record every time.",
        ],
      },
      {
        h: "Hear It",
        lines: ["There's a real 1:44 example call on the site. Details redacted."],
      },
    ],
    limits: ["Public demo. Telephony, CRM hookups and uptime depend on the final setup."],
  },
  {
    slug: "team-take-down",
    name: "Team Take Down",
    category: "Creator protection",
    status: "Foundation",
    summary: "Protect the release before it leaks. Then find the copies, keep the receipts and file takedowns the creator signs off on.",
    metaDescription:
      "Team Take Down protects creator releases before they go public, watches accessible public sites for copies, organizes evidence and preps takedowns the creator approves.",
    shortOutcome: "Protect the release first. Find the copies, keep the receipts.",
    keywords: ["creator protection", "takedown", "fingerprinting", "evidence"],
    image: "/projects/team-take-down.png",
    imageAlt: "Team Take Down workspace with protected release status and recent activity",
    liveUrl: "https://teamtakedown.xyz/",
    skills: ["Creator protection", "Fingerprinting", "Privacy UX"],
    sections: [
      {
        h: "Cleanup Is Too Late",
        lines: [
          "Most leak tools show up after the damage.",
          "By then the proof is scattered everywhere.",
        ],
      },
      {
        h: "Release First",
        lines: [
          "Strip private file details from the MP4.",
          "Add private video and audio match signals.",
          "Watch accessible public sites after release.",
          "Keep links, screenshots and match reasons in one place.",
          "Creator approves. Request goes out. Outcome gets checked.",
        ],
      },
    ],
    limits: [
      "It doesn't search the whole internet.",
      "It can't promise every copy gets found or removed.",
    ],
  },
  {
    slug: "gridsynapse",
    name: "GridSynapse",
    category: "GPU buying",
    status: "Foundation",
    summary: "Compare GPU providers on public price and carbon data, run your constraints, get a ranked shortlist before you spend a dollar.",
    metaDescription:
      "GridSynapse compares public GPU pricing and carbon data against your workload constraints and gives you a ranked shortlist before you commit spend.",
    shortOutcome: "Ranked GPU shortlist before you spend a dollar.",
    keywords: ["GPU", "compute", "OR-Tools", "optimization"],
    image: "/projects/gridsynapse.png",
    imageAlt: "GridSynapse console comparing compute options",
    liveUrl: "https://www.gridsynapse.xyz",
    sourceUrl: "https://github.com/GhostOpsandCo/gridsynapse-mvp",
    skills: ["OR-Tools", "Next.js", "FastAPI", "Supabase"],
    sections: [
      {
        h: "Spreadsheet Hell",
        lines: [
          "Buying compute means tabs of provider pricing that never line up.",
          "Region, policy, carbon and cost all pull different ways.",
        ],
      },
      {
        h: "Math, Not Vibes",
        lines: [
          "Public catalog pricing and UK carbon data, normalized.",
          "A deterministic OR-Tools solver ranks the options. No model picking for you.",
          "You get a spend-capped review packet and a SkyPilot file.",
          "Every decision gets saved.",
        ],
      },
    ],
    limits: [
      "Capacity, latency and availability are modeled.",
      "It doesn't reserve GPUs or spend money.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
