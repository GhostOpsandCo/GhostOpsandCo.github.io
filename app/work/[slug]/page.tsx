import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getProject, projects, site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.metaDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Elijah Paul`,
      description: project.metaDescription,
      url: `/work/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: project.name, description: project.metaDescription, images: [project.image] },
  };
}

export const dynamicParams = false;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectUrl = `${site.url}/work/${project.slug}`;
  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          url: projectUrl,
          image: `${site.url}${project.image}`,
          creator: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url },
          keywords: project.skills.join(", "),
        }}
      />
      <header className="page-head frame">
        <p className="mono dim rise"><Link href="/work">← Work</Link> · {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
        <h1 className="page-title rise">{project.name}</h1>
        <p className="page-sub rise">{project.summary}</p>
        <dl className="spec spec-row mono rise">
          <div><dt>Type</dt><dd>{project.category}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          {project.liveUrl && <div><dt>Live</dt><dd><a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗</a></dd></div>}
          {project.sourceUrl && <div><dt>Source</dt><dd><a href={project.sourceUrl} target="_blank" rel="noreferrer">GitHub ↗</a></dd></div>}
        </dl>
      </header>

      <div className="frame">
        <figure className="plate reveal">
          <Image src={project.image} alt={project.imageAlt} width={2400} height={1500} sizes="(max-width: 1200px) 100vw, 1200px" priority />
        </figure>
      </div>

      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">A</span><span>Problem</span></div>
          <p className="body-lg reveal">{project.challenge}</p>
        </div>
      </section>
      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">B</span><span>Role</span></div>
          <p className="body-lg reveal">{project.role}</p>
        </div>
      </section>
      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">C</span><span>Approach</span></div>
          <ol className="steps reveal">{project.approach.map((a, n) => <li key={a}><span className="mono dim">{String(n + 1).padStart(2, "0")}</span><span>{a}</span></li>)}</ol>
        </div>
      </section>
      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">D</span><span>Flow</span></div>
          <ol className="flow mono reveal">{project.workflow.map((w) => <li key={w}>{w}</li>)}</ol>
        </div>
      </section>
      <section className="block">
        <div className="frame grid12">
          <div className="label mono"><span className="dim">E</span><span>Evidence</span></div>
          <div className="reveal">
            <ul className="steps">{project.proof.map((p) => <li key={p}><span className="mono dim">+</span><span>{p}</span></li>)}</ul>
            <p className="note mono dim">{project.boundary}</p>
          </div>
        </div>
      </section>

      <div className="frame">
        <Link href={`/work/${next.slug}`} className="nextlink reveal">
          <span className="mono dim">Next</span>
          <span className="nextlink-t">{next.name} →</span>
        </Link>
      </div>
    </main>
  );
}
