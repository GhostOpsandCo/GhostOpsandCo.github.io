import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bot } from "@/components/Bot";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.tldr,
    keywords: post.tags,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.tldr,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: { card: "summary", title: post.title, description: post.tldr, creator: site.xHandle },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${site.url}/writing/${post.slug}/`;
  const words = post.html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === post.slug);
  const next = all[i - 1];
  const prev = all[i + 1];

  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.tldr,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.tags.join(", "),
          url,
          mainEntityOfPage: url,
          author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url },
          publisher: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name },
        }}
      />
      <article className="article">
        <header className="art-head">
          <p className="mono dim art-crumb rise"><Link href="/writing">← Thinking</Link></p>
          <h1 className="art-title rise">{post.title}</h1>
          <dl className="art-meta mono rise">
            <div><dt>Published</dt><dd><time dateTime={post.date}>{formatDate(post.date)}</time></dd></div>
            <div><dt>Read</dt><dd>{Math.max(1, Math.round(words / 230))} min</dd></div>
            <div><dt>Filed</dt><dd>{post.tags.join(", ")}</dd></div>
          </dl>
        </header>
        <div className="measure">
          {post.tldr && <div className="art-tldr"><span className="tldr-k mono">TLDR</span><p>{post.tldr}</p></div>}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className="art-foot mono">
            <span className="dim art-sign"><Bot name="purple" className="float" />Elijah Paul, <a href={site.x} target="_blank" rel="noreferrer">{site.xHandle}</a></span>
            <span className="art-nav">
              {prev && <Link href={`/writing/${prev.slug}`}>← {prev.title}</Link>}
              {next && <Link href={`/writing/${next.slug}`}>{next.title} →</Link>}
            </span>
          </footer>
        </div>
      </article>
    </main>
  );
}
