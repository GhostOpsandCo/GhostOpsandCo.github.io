import Link from "next/link";
import { PostList } from "@/components/PostList";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllPosts } from "@/lib/posts";
import { projects, site } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">Elijah Paul · Phoenix, Arizona</p>
          <h1>AI solutions architect &amp; product builder.</h1>
          <p className="lede">
            Building <a className="link" href={site.hotbot} target="_blank" rel="noreferrer">Hot Bot</a>, a
            team of specialist trading agents on Solana. I turn hard, high-stakes workflows into products people can use.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/writing">Read the writing</Link>
            <Link className="btn" href="/work">See the work</Link>
            <a className="btn" href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="now-title">
        <div className="shell">
          <h2 id="now-title" className="eyebrow">Now</h2>
          <div className="highlights">
            <a href={site.hotbot} target="_blank" rel="noreferrer">
              <strong>Building Hot Bot</strong>
              <p>Agentic swarm trading on Solana. Co-founded with @0xWhoismax. Research, snipe, trade, launch.</p>
            </a>
            <Link href="/writing/ansemhack-co-win-and-the-hot-bot-journey">
              <strong>AnsemHack co-winner</strong>
              <p>Joined the ClawPump × Ansem hackathon on the final day. Took the W.</p>
            </Link>
            <Link href="/resume">
              <strong>Previously at Gate</strong>
              <p>Led AI product work: Treasury Router, an x402 merchant workflow, and Gate Router audits.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="writing-title">
        <div className="shell">
          <div className="section-head">
            <h2 id="writing-title">Writing</h2>
            <Link className="link arrow" href="/writing">All posts</Link>
          </div>
          <PostList posts={posts} />
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="shell">
          <div className="section-head">
            <h2 id="work-title">Selected work</h2>
            <Link className="link arrow" href="/work">All case studies</Link>
          </div>
          <div className="grid">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="shell split">
          <h2 id="contact-title">Let&apos;s build something.</h2>
          <div>
            <p className="lede">Roles, product builds, or partnerships across AI, crypto, and fintech.</p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>{site.email}</a>
              <a className="btn" href="/downloads/elijah-paul-resume.pdf" download>Download résumé</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
