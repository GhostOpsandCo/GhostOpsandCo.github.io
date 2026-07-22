import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link className="project-media" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={800}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="status-label">{project.status}</span>
        </div>
        <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list" aria-label={`${project.name} skills`}>
          {project.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <Link className="text-link" href={`/work/${project.slug}`}>View case study</Link>
      </div>
    </article>
  );
}
