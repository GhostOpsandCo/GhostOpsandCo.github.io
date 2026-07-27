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

      <section className="case-hero">
        <div className="case-hero-image">
          <Image src={project.image} alt={project.imageAlt} fill loading="eager" sizes="100vw" />
          <div className="case-hero-shade" />
        </div>
        <div className="site-shell case-hero-content">
          <Link className="back-link" href="/work">All work</Link>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <p className="eyebrow eyebrow-light">{project.category}</p>
              <h1>{project.name}</h1>
              <p>{project.summary}</p>
              <div className="case-actions">
                {project.liveUrl && <a className="button button-inverse" href={project.liveUrl} target="_blank" rel="noreferrer">{project.primaryAction}</a>}
                {project.sourceUrl && <a className="button button-dark-outline" href={project.sourceUrl} target="_blank" rel="noreferrer">Inspect source</a>}
              </div>
            </div>
            <div className="case-hero-window" aria-hidden="true">
              <Image src={project.image} alt="" fill loading="eager" sizes="(max-width: 760px) 90vw, 42vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="case-facts">
        <div className="site-shell facts-grid">
          <div><span>Status</span><strong>{project.status}</strong></div>
          <div><span>Primary use case</span><strong>{project.primaryIntent}</strong></div>
          <div><span>My role</span><strong>{project.role}</strong></div>
        </div>
      </section>

      <section className="case-product-proof" aria-label={`${project.name} product preview`}>
        <div className="site-shell">
          <div className="case-product-frame">
            <Image src={project.image} alt={project.imageAlt} width={1440} height={900} sizes="(max-width: 760px) 100vw, 1120px" />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-shell case-reading-grid">
          <aside className="case-index" aria-label="Case study sections">
            <span>Problem</span>
            <span>Build</span>
            <span>Workflow</span>
            <span>Evidence</span>
            <span>Boundary</span>
          </aside>
          <div className="case-content">
            <section>
              <p className="eyebrow">The customer problem</p>
              <h2>{project.challenge}</h2>
              <p className="case-outcome">{project.shortOutcome}</p>
            </section>

            <section>
              <p className="eyebrow">What I built</p>
              <h2>A product workflow that makes the next decision clearer.</h2>
              <ul className="evidence-list">
                {project.approach.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section>
              <p className="eyebrow">Working flow</p>
              <h2>From input to controlled action</h2>
              <ol className="workflow-list">
                {project.workflow.map((item) => (
                  <li key={item}><strong>{item}</strong></li>
                ))}
              </ol>
            </section>

            <section>
              <p className="eyebrow">Inspectable evidence</p>
              <h2>What works in the current build</h2>
              <ul className="evidence-list">
                {project.proof.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="tag-list roomy-tags">
                {project.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </section>

            <section className="boundary-panel">
              <p className="eyebrow">Operating boundary</p>
              <h2>What this case study does and does not claim</h2>
              <p>{project.boundary}</p>
              <p>{project.availability}</p>
            </section>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="site-shell contact-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">Relevant problem?</p>
            <h2>Build the version your customers can actually test.</h2>
          </div>
          <div>
            <p>Share the current workflow, user, and business constraint. I will tell you where I would start.</p>
            <a className="button button-inverse" href={mailto(`${project.name} or related product discussion`)}>Discuss a related build</a>
          </div>
        </div>
      </section>
    </main>
  );
}
