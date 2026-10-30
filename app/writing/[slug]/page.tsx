import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main id="main-content">
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
      <article className="narrow">
        <header className="post-head">
          <p className="post-meta">
            <Link className="link" href="/writing">Writing</Link>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h1>{post.title}</h1>
          {post.tags.length > 0 && <ul className="tags">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
        </header>
        {post.tldr && <p className="tldr"><b>TLDR</b>{post.tldr}</p>}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer className="post-foot">
          <span className="muted">— Elijah Paul</span>
          <span><a className="link" href={site.x} target="_blank" rel="noreferrer">Follow {site.xHandle}</a> · <a className="link" href="/rss.xml">RSS</a></span>
        </footer>
      </article>
    </main>
  );
}
