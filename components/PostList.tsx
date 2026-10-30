import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="rows">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link className="row" href={`/writing/${post.slug}`}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <div>
              <h3>{post.title}</h3>
              <p>{post.tldr}</p>
            </div>
            <span className="meta">{post.tags[0] ?? ""}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
