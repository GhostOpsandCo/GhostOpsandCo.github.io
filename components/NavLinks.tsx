"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ items }: { items: { href: string; label: string }[] }) {
  const path = usePathname() || "/";
  return (
    <>
      {items.map((n) => {
        const on = path === n.href || path.startsWith(n.href + "/");
        return (
          <Link key={n.href} href={n.href} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
            {n.label}
          </Link>
        );
      })}
    </>
  );
}
