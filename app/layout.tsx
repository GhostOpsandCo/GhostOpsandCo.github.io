import type { Metadata, Viewport } from "next";
import { Footer, Header } from "@/components/Chrome";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd } from "@/lib/person";
import { site } from "@/lib/site";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Elijah Paul",
    template: "%s | Elijah Paul",
  },
  description: site.description,
  applicationName: "Elijah Paul",
  authors: [{ name: "Elijah Paul", url: site.url }],
  creator: "Elijah Paul",
  publisher: "Elijah Paul",
  alternates: { canonical: "/", types: { "application/rss+xml": [{ url: "/rss.xml", title: "Elijah Paul | Writing" }] } },
  openGraph: {
    title: "Elijah Paul",
    description: site.description,
    type: "website",
    url: site.url,
    siteName: "Elijah Paul",
    images: [
      {
        url: "/projects/venture-labs-control-room.png",
        width: 2400,
        height: 1500,
        alt: "Elijah Paul",
      },
    ],
  },
  twitter: {
    creator: "@elijahintek",
    card: "summary_large_image",
    title: "Elijah Paul",
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
    <html lang="en">
      <body>
        <JsonLd data={personJsonLd} />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
