import type { Metadata } from "next";
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
    images: ["/projects/venture-labs-control-room.png"],
  },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">Selected work</p>
          <h1>AI products built around real problems.</h1>
          <p className="lede">
            Each case study shows the customer problem, product decisions, working surface, and operating boundaries.
          </p>
        </div>
      </section>
      <section style={{ paddingBottom: 96 }}>
        <div className="shell grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </main>
  );
}
