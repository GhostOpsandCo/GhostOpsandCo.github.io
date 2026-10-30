import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elijah Paul | AI Product Portfolio",
    short_name: "Elijah Paul",
    description: "AI solutions architecture and product-building portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0b0d12",
    icons: [{ src: "/icon-512.png", sizes: "512x512", type: "image/png" }, { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  };
}
