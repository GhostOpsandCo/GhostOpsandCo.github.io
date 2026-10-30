import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-29T00:00:00.000Z");
  const built = new Date();
  const pages = ["/", "/writing/", "/work/"];

  return [
    ...pages.map((path, index) => ({
      url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
      lastModified: path === "/work/" ? lastModified : built,
      changeFrequency: path === "/work/" ? ("monthly" as const) : ("daily" as const),
      priority: index === 0 ? 1 : path === "/work/" ? 0.7 : 0.9,
      ...(index === 0 ? { images: [`${site.url}/og.png`, `${site.url}/headshot.jpg`] } : {}),
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
