import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getProject, mailto, projects, site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: project.metaDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} Case Study | Elijah Paul`,
      description: project.metaDescription,
      url: `/work/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: project.name, description: project.metaDescription, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectUrl = `${site.url}/work/${project.slug}`;

  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            description: project.summary,
            url: projectUrl,
            image: `${site.url}${project.image}`,
            creator: { "@type": "Person", name: site.name, url: site.url },
            keywords: project.skills.join(", "),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
              { "@type": "ListItem", position: 3, name: project.name, item: projectUrl },
            ],
          },
        ]}
      />

      <article>
        <section className="hero" style={{ paddingBottom: 32 }}>
          <div className="shell">
            <p className="eyebrow"><Link className="link" href="/work">Work</Link> · {project.category}</p>
            <h1>{project.name}</h1>
            <p className="lede">{project.summary}</p>
            <div className="actions">
              {project.liveUrl && <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">{project.primaryAction}</a>}
              {project.sourceUrl && <a className="btn" href={project.sourceUrl} target="_blank" rel="noreferrer">Inspect source</a>}
            </div>
            <div className="shot">
              <Image src={project.image} alt={project.imageAlt} width={1440} height={900} loading="eager" sizes="(max-width: 1080px) 100vw, 1080px" />
            </div>
            <dl className="dl">
              <div><dt>Status</dt><dd>{project.status}</dd></div>
              <div><dt>Use case</dt><dd>{project.primaryIntent}</dd></div>
              <div><dt>My role</dt><dd>{project.role}</dd></div>
            </dl>
          </div>
        </section>
        <section className="section">
          <div className="narrow prose">
            <h2>The problem</h2>
            <p>{project.challenge}</p>
            <p><strong>{project.shortOutcome}</strong></p>
            <h2>What I built</h2>
            <ul>{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Working flow</h2>
            <ol>{project.workflow.map((item) => <li key={item}>{item}</li>)}</ol>
            <h2>What works today</h2>
            <ul>{project.proof.map((item) => <li key={item}>{item}</li>)}</ul>
            <ul className="tags" style={{ padding: 0 }}>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            <h2>Boundary</h2>
            <p>{project.boundary}</p>
            <p>{project.availability}</p>
            <p><a href={mailto(`${project.name} or related product discussion`)}>Discuss a related build →</a></p>
          </div>
        </section>
      </article>
    </main>
  );
}
