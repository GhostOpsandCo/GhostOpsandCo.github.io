import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Product Builder Portfolio",
  description:
    "Selected AI product work by Elijah Paul across financial workflows, compute procurement, voice agents, and x402 agent payments.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "AI Product Builder Portfolio | Elijah Paul",
    description: "Inspect the problem, workflow, build, evidence, and operating boundary behind each product.",
    url: "/work",
    images: ["/projects/gridsynapse.png"],
  },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1>AI products built around real customer and operating problems.</h1>
          </div>
          <p className="large-copy">
            These case studies show what I built, the decisions behind it, what works today, and what
            still requires production integration. The point is not a polished mockup. It is the ability
            to turn an ambiguous problem into a working, testable system.
          </p>
        </div>
      </section>
      <section className="section-band">
        <div className="site-shell project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </main>
  );
}
