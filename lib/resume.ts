export type Role = { company: string; role: string; dates: string; summary: string; bullets: string[] };

export const experience: Role[] = [
  {
    company: "Hot Bot",
    role: "Co-founder",
    dates: "October 2026 – Present",
    summary: "Agentic trading on Solana with @0xWhoismax. SniperBot gets in, ShieldBot filters the junk, TraderBot runs the position.",
    bullets: [
      "Joined the ClawPump × Ansem AnsemHack on its final day. Co-won.",
      "Live 24 days after we started building.",
      "Own indexer, own swap, own database, bare metal. We aren't a wrapper.",
    ],
  },
  {
    company: "Gate",
    role: "Leading AI",
    dates: "June 2026",
    summary: "AI and Web3 in the same room. Talked to customers, shaped the product, then built it.",
    bullets: [
      "Designed and built Treasury Router: finds idle capital across a VIP book and preps the client case. Humans approve every move.",
      "Built an x402 testnet flow that sells a recommendation as a work order without giving up policy or execution control.",
      "Audited Gate Router's docs, positioning and US market fit off enterprise prospect feedback.",
      "Turned pricing, migration and reliability objections into product requirements.",
    ],
  },
  {
    company: "Independent",
    role: "AI Product, Growth & Revenue",
    dates: "April 2024 – Present",
    summary: "Founders bring the problem. I ship the product, the partners and the path to revenue.",
    bullets: [
      "Built AI, agent and infra products: compute buying, voice agents, agent payments.",
      "Ran partnerships and revenue across AI and crypto infra projects, part of eight-figure ecosystem growth.",
    ],
  },
  {
    company: "Independent",
    role: "Partnerships & Growth",
    dates: "February 2020 – April 2024",
    summary: "Four years in the trenches with digital-asset teams. Launches, exchanges, liquidity, go-to-market.",
    bullets: [
      "$20M+ in primary launch revenue across client projects.",
      "$100M+ in trading and ecosystem volume on projects I supported.",
      "Worked with exchanges, investors, market makers and founders.",
    ],
  },
  {
    company: "Non Fungible Arcade",
    role: "Founder",
    dates: "May 2021 – August 2023",
    summary: "Web3 gaming platform for indie devs to launch and make money from their games.",
    bullets: [
      "Grew it to a $50M venture-backed valuation.",
      "Partnered with studios, infra providers, exchanges and NFT marketplaces.",
      "On stage and on the floor at GDC, SXSW, Token2049 and Miami NFT Week.",
    ],
  },
  {
    company: "Fit Start Training",
    role: "Revenue Performance Lead",
    dates: "January 2018 – February 2020",
    summary: "High-ticket sales. Owned the number.",
    bullets: [
      "$8M+ annual revenue target. Beat quota by 25%+.",
      "Close rate from 38% to 62%.",
      "Turned around a four-person team. Three straight growth quarters.",
    ],
  },
];

export const capabilities = [
  "Agentic trading",
  "Agent orchestration",
  "x402 and agent payments",
  "Solana",
  "Product strategy",
  "Prototyping",
  "Human approval gates",
  "Partnerships and GTM",
];
