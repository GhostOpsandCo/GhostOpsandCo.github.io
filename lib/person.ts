import { sameAs, site } from "@/lib/site";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}/headshot.jpg`,
  jobTitle: site.title,
  description: site.description,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Phoenix", addressRegion: "AZ", addressCountry: "US" },
  worksFor: { "@type": "Organization", name: "Hot Bot", url: site.hotbot, sameAs: [site.hotbotX] },
  award: "Co-winner, ClawPump × Ansem AnsemHack (2026)",
  knowsAbout: ["Agentic trading", "AI agents", "x402", "Agent payments", "Solana", "Product strategy"],
  sameAs,
};
