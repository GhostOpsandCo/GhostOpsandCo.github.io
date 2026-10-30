import { sameAs, site } from "@/lib/site";

const personId = `${site.url}/#person`;
const hotBotId = `${site.hotbot}/#organization`;

export const personRef = { "@id": personId };

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      givenName: "Elijah",
      familyName: "Paul",
      alternateName: site.xHandle.slice(1),
      url: site.url,
      image: { "@type": "ImageObject", url: `${site.url}/headshot.jpg`, width: 1024, height: 1024 },
      jobTitle: site.title,
      description: site.description,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Phoenix", addressRegion: "AZ", addressCountry: "US" },
      worksFor: { "@id": hotBotId },
      award: "Co-winner, ClawPump × Ansem AnsemHack (2026)",
      knowsAbout: ["Agentic trading", "AI agents", "x402", "Agent payments", "Solana", "Product strategy"],
      sameAs,
    },
    {
      "@type": "Organization",
      "@id": hotBotId,
      name: "Hot Bot",
      url: site.hotbot,
      description: "Agentic Trading as a Service. A private team of specialist trading bots on Solana.",
      founder: { "@id": personId },
      sameAs: [site.hotbotX],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": personId },
    },
  ],
};
