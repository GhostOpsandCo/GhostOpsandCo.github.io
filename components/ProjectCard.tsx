import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

const availabilityLabels: Record<string, string> = {
  "treasury-router": "Employer case study",
  gridsynapse: "Custom build / acquisition",
  orelis: "Custom builds available",
  "x402-agent-payments": "Open source",
};

export function ProjectCard({ project, featured = false, reverse = false }: { project: Project; featured?: boolean; reverse?: boolean }) {
  const availabilityLabel = availabilityLabels[project.slug];

  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}${reverse ? " project-card-reverse" : ""}`}>
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
          <span className="project-labels">
            <span className="status-label">{project.status}</span>
            {availabilityLabel && <span className="availability-label">{availabilityLabel}</span>}
          </span>
        </div>
        <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="tag-list" aria-label={`${project.name} skills`}>
          {project.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <div className="project-links">
          <Link className="text-link" href={`/work/${project.slug}`}>View case study</Link>
          {project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open product</a>}
        </div>
      </div>
    </article>
  );
}
