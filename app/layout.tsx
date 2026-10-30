import type { Metadata, Viewport } from "next";
import { BotEyes } from "@/components/BotEyes";
import { Footer, Header } from "@/components/Chrome";
import { JsonLd } from "@/components/JsonLd";
import { SiteBot } from "@/components/SiteBot";
import { siteJsonLd } from "@/lib/person";
import { ogImage, sameAs, site } from "@/lib/site";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: [
      { url: "/favicon.gif?v=4", type: "image/gif" },
      { url: "/icon-32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", sizes: "180x180" }],
  },
  title: {
    default: `${site.name} | ${site.title}`,
    template: "%s | Elijah Paul",
  },
  description: site.description,
  keywords: ["Elijah Paul", "elijahintek", "Hot Bot", "Hot Bot co-founder", "agentic trading", "AI trading bots", "Solana", "x402", "GhostOps", "AnsemHack"],
  applicationName: "Elijah Paul",
  authors: [{ name: "Elijah Paul", url: site.url }],
  creator: "Elijah Paul",
  publisher: "Elijah Paul",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/", types: { "application/rss+xml": [{ url: "/rss.xml", title: "Elijah Paul | Thinking" }] } },
  openGraph: {
    type: "profile",
    firstName: "Elijah",
    lastName: "Paul",
    username: "elijahintek",
    title: `${site.name} | ${site.title}`,
    description: site.description,
    url: site.url,
    siteName: "Elijah Paul",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: site.xHandle,
    creator: site.xHandle,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: "083wpnOw3EJWGhBgnRRayCz0rxQqxk5UgsyPiY-jh8I" },
  other: { "geo.region": "US-AZ", "geo.placename": "Phoenix" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {sameAs.map((href) => <link key={href} rel="me" href={href} />)}
      </head>
      <body>
        <JsonLd data={siteJsonLd} />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <SiteBot />
        <BotEyes />
      </body>
    </html>
  );
}
