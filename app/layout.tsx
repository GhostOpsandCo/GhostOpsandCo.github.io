import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elijah Paul | AI Solutions Architect & Product Builder",
    description: site.description,
    type: "website",
    url: site.url,
    siteName: "Elijah Paul",
    images: [
      {
        url: "/projects/treasury-router.png",
        width: 1280,
        height: 720,
        alt: "Elijah Paul's AI product portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Paul | AI Solutions Architect & Product Builder",
    description: site.description,
    images: ["/projects/treasury-router.png"],
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
  colorScheme: "light",
  themeColor: "#f7f8fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
