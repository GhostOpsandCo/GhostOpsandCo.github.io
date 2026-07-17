import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elijah Paul | AI Solutions Architect & Product Builder",
  description:
    "AI solutions architect and product builder creating customer-led products across crypto, fintech, and agentic AI.",
  openGraph: {
    title: "Elijah Paul | AI Solutions Architect & Product Builder",
    description:
      "AI solutions architect and product builder creating customer-led products across crypto, fintech, and agentic AI.",
    type: "website",
    url: "https://elijahpaul.io",
  },
  metadataBase: new URL("https://elijahpaul.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
