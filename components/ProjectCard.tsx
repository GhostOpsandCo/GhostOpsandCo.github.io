import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="card" href={`/work/${project.slug}`}>
      <div className="media">
        <Image src={project.image} alt={project.imageAlt} width={1280} height={800} sizes="(max-width: 720px) 100vw, 50vw" />
      </div>
      <p className="eyebrow" style={{ marginBottom: 6 }}>{project.category}</p>
      <h3>{project.name}</h3>
      <p>{project.shortOutcome}</p>
    </Link>
  );
}
