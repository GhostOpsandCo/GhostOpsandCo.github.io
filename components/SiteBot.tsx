"use client";
/* eslint-disable @next/next/no-img-element -- static SVG mascots */
import { useEffect, useRef, useState } from "react";

type Doc = { t: string; u: string; a: string; x: string };
type Msg = { from: "bot" | "me"; text: string; link?: { t: string; u: string } };

const STOP = new Set("a an the is are was were be to of in on for and or what whats what's who how why when where do does did you your me my i it its about tell with this that can at by from any".split(" "));
const tok = (s: string) => s.toLowerCase().replace(/[^a-z0-9$]+/g, " ").split(" ").filter((w) => w.length > 1 && !STOP.has(w));

function rank(docs: Doc[], q: string) {
  const qs = tok(q);
  if (!qs.length) return null;
  const toks = docs.map((d) => tok(`${d.t} ${d.t} ${d.x}`));
  const avg = toks.reduce((n, t) => n + t.length, 0) / toks.length;
  const N = docs.length;
  let best = -1, bestScore = 0;
  toks.forEach((t, i) => {
    let s = 0;
    for (const w of qs) {
      const tf = t.filter((x) => x === w || (w.length > 3 && x.startsWith(w))).length;
      if (!tf) continue;
      const df = toks.filter((tt) => tt.some((x) => x === w || (w.length > 3 && x.startsWith(w)))).length;
      const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
      s += idf * ((tf * 2.2) / (tf + 1.2 * (0.25 + 0.75 * (t.length / avg))));
    }
    if (s > bestScore) { bestScore = s; best = i; }
  });
  return bestScore > 0.6 ? docs[best] : null;
}

const CHIPS = ["What is Hot Bot?", "What's x402?", "What's GhostOps?", "What are you shipping?"];
const HELLO: Msg = { from: "bot", text: "Yo 👋 I'm Elijah's site bot. Ask me about Hot Bot, x402, GhostOps, or what I'm shipping." };

export function SiteBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([HELLO]);
  const [q, setQ] = useState("");
  const docs = useRef<Doc[] | null>(null);
  const log = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    if (!docs.current) fetch("/site-index.json").then((r) => r.json()).then((d) => (docs.current = d)).catch(() => (docs.current = []));
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => { log.current?.scrollTo({ top: log.current.scrollHeight }); }, [msgs]);

  async function ask(text: string) {
    const t = text.trim();
    if (!t) return;
    setQ("");
    if (!docs.current) docs.current = await fetch("/site-index.json").then((r) => r.json()).catch(() => []);
    const hit = rank(docs.current ?? [], t);
    const reply: Msg = hit
      ? { from: "bot", text: hit.a.length > 260 ? hit.a.slice(0, 257).replace(/\s+\S*$/, "") + "…" : hit.a, link: { t: hit.t, u: hit.u } }
      : { from: "bot", text: "Not sure, hit me up on X @elijahintek.", link: { t: "@elijahintek", u: "https://x.com/elijahintek" } };
    setMsgs((m) => [...m, { from: "me", text: t }, reply]);
  }

  return (
    <div className="sb">
      {open && (
        <div className="sb-panel" role="dialog" aria-label="Site bot" id="sb-panel">
          <div className="sb-head">
            <span><img src="/bots/flame.svg" alt="" width={18} height={18} className="sb-av" />Site bot</span>
            <button type="button" className="sb-x" aria-label="Close" onClick={() => { setOpen(false); btn.current?.focus(); }}>×</button>
          </div>
          <div className="sb-log" ref={log} aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`sb-msg sb-${m.from}`}>
                {m.from === "bot" && <img src="/bots/flame.svg" alt="" width={16} height={16} className="sb-av sb-av-msg" />}
                <p>{m.text}</p>
                {m.link && (
                  <a href={m.link.u} {...(m.link.u.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{m.link.t} →</a>
                )}
              </div>
            ))}
            {msgs.length === 1 && (
              <div className="sb-chips">
                {CHIPS.map((c) => <button type="button" key={c} onClick={() => ask(c)}>{c}</button>)}
              </div>
            )}
          </div>
          <form className="sb-form" onSubmit={(e) => { e.preventDefault(); ask(q); }}>
            <label htmlFor="sb-q" className="sr-only">Ask the site bot</label>
            <input id="sb-q" ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask something…" autoComplete="off" maxLength={200} />
            <button type="submit" aria-label="Send">↑</button>
          </form>
        </div>
      )}
      <button ref={btn} type="button" className="sb-btn" aria-expanded={open} aria-controls="sb-panel" aria-label={open ? "Close site bot" : "Open site bot"} onClick={() => setOpen((o) => !o)}>
        {open ? "×" : <img src="/bots/flame.svg" alt="" width={30} height={30} className="bob" />}
      </button>
    </div>
  );
}
