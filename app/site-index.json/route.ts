import { getAllPosts } from "@/lib/posts";
import { experience } from "@/lib/resume";
import { projects, site } from "@/lib/site";

export const dynamic = "force-static";

type Doc = { t: string; u: string; a: string; x: string };

const strip = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

export function GET() {
  const docs: Doc[] = [];
  for (const p of getAllPosts()) {
    docs.push({ t: p.title, u: `/writing/${p.slug}/`, a: p.tldr, x: `${p.title} ${p.tags.join(" ")} ${p.tldr} ${strip(p.html)}` });
  }
  for (const p of projects) {
    const body = p.sections.map((s) => `${s.h} ${s.lines.join(" ")}`).join(" ");
    docs.push({ t: p.name, u: `/work/${p.slug}/`, a: `${p.name}: ${p.summary}`, x: `${p.name} ${p.category} ${p.keywords.join(" ")} ${p.summary} ${body} ${p.limits.join(" ")}` });
  }
  for (const r of experience) {
    docs.push({ t: `${r.company}, ${r.role}`, u: "/resume/", a: `${r.company} (${r.dates}): ${r.summary}`, x: `${r.company} ${r.role} ${r.dates} ${r.summary} ${r.bullets.join(" ")}` });
  }
  docs.push(
    { t: "Hot Bot", u: site.hotbot, a: "Hot Bot is my company. Agentic trading on Solana, co-founded with @0xWhoismax. SniperBot gets in, ShieldBot filters the junk, TraderBot runs the position. Co-won AnsemHack, live 24 days later.", x: "hot bot hotbot company startup solana trading agentic sniperbot shieldbot traderbot portfolios ansemhack 0xwhoismax wrapper building shipping now" },
    { t: "GhostOps", u: "https://github.com/GhostOpsandCo/agent-orchestration", a: "GhostOps is my own OS of agents. Started April 2025, three versions in under 3 weeks, on a VPS by June. Everything I build runs on it.", x: "ghostops agents orchestration os harness evolution memory gates venture studio fullybuilt" },
    { t: "Contact", u: site.x, a: `Fastest way is DMs on X ${site.xHandle}. Email works too: ${site.email}.`, x: "contact email dm reach talk hire invest investor meet call x twitter" },
    { t: "Shipping", u: "/", a: "Right now: shipping Hot Bot every day. Before that, AI at Gate, Monarch Shield for x402, and a year of GhostOps.", x: "what shipping now currently working building today latest" },
  );
  return new Response(JSON.stringify(docs), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
