import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elijah Paul | AI Product Portfolio",
    short_name: "Elijah Paul",
    description: "AI solutions architecture and product-building portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fb",
    theme_color: "#0b0d12",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
