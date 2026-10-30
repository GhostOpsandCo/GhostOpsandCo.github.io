import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd } from "@/lib/person";
import { site } from "@/lib/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Elijah Paul | AI Solutions Architect & Product Builder",
    template: "%s | Elijah Paul",
  },
  description: site.description,
  applicationName: "Elijah Paul Portfolio",
  authors: [{ name: "Elijah Paul", url: site.url }],
  creator: "Elijah Paul",
  publisher: "Elijah Paul",
  alternates: { canonical: "/", types: { "application/rss+xml": [{ url: "/rss.xml", title: "Elijah Paul — Writing" }] } },
  openGraph: {
    title: "Elijah Paul | AI Solutions Architect & Product Builder",
    description: site.description,
    type: "website",
    url: site.url,
    siteName: "Elijah Paul",
    images: [
      {
        url: "/projects/venture-labs-control-room.png",
        width: 2400,
        height: 1500,
        alt: "Elijah Paul's Venture Labs product decision control room",
      },
    ],
  },
  twitter: {
    creator: "@elijahintek",
    card: "summary_large_image",
    title: "Elijah Paul | AI Solutions Architect & Product Builder",
    description: site.description,
    images: ["/projects/venture-labs-control-room.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={personJsonLd} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
