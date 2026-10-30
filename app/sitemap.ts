import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-29T00:00:00.000Z");
  const pages = ["/", "/writing/", "/work/", "/services/", "/about/", "/resume/", "/contact/"];

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
    ...getAllPosts().map((post) => ({
      url: `${site.url}/writing/${post.slug}/`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
