import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Product Builder Portfolio",
  description:
    "Selected AI product work by Elijah Paul across voice agents, creator protection, financial workflows, compute procurement, venture systems, and x402 agent payments.",
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
      <section className="page-hero page-hero-work">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1>AI products built around real customer and operating problems.</h1>
          </div>
          <p className="large-copy">
            Each case study shows the customer problem, product decisions, working surface, and
            operating boundaries, so you can evaluate how I turn ambiguity into something a team can
            test and improve.
          </p>
        </div>
        <div className="work-preview-strip" aria-hidden="true">
          {projects.map((project) => (
            <div key={project.slug}><Image src={project.image} alt="" fill loading="eager" sizes="25vw" /></div>
          ))}
        </div>
      </section>
      <section className="section-band">
        <div className="site-shell project-grid project-grid-editorial">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index < 2} reverse={index === 1} />
          ))}
        </div>
      </section>
    </main>
  );
}
