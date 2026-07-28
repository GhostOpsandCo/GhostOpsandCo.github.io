import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-21T00:00:00.000Z");
  const pages = ["/", "/work/", "/services/", "/about/", "/resume/", "/contact/"];

  return [
    ...pages.map((path, index) => ({
      url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
      lastModified,
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : path === "/work/" || path === "/services/" ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${site.url}${project.image}`],
    })),
  ];
}
