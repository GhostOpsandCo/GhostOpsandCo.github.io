"use client";
import { useEffect, useRef } from "react";
import cast from "./cast.json";

const ORDER = ["red", "green", "flame", "purple", "cloud", "blue"] as const;

export default function Cast() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const eyes = Array.from(root.querySelectorAll<SVGGElement>(".pp"));
    let px = -1, py = -1, raf = 0, last = 0;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => { px = e.clientX; py = e.clientY; last = performance.now(); };
    window.addEventListener("pointermove", onMove, { passive: true });
    const tick = (t: number) => {
      const idle = !fine || px < 0 || t - last > 4000;
      eyes.forEach((g, i) => {
        let dx: number, dy: number;
        if (idle) { dx = Math.sin(t / 1400 + i) * 2.2; dy = Math.cos(t / 1900 + i * 1.7) * 1.4; }
        else {
          const r = (g.ownerSVGElement as SVGSVGElement).getBoundingClientRect();
          const vx = px - (r.left + r.width / 2), vy = py - (r.top + r.height / 2);
          const d = Math.hypot(vx, vy) || 1, k = Math.min(1, d / 300);
          dx = (vx / d) * 3.5 * k; dy = (vy / d) * 3 * k;
        }
        g.setAttribute("transform", `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
  }, []);
  return (
    <div className="cast" ref={ref} aria-hidden="true">
      {ORDER.map((n, i) => (
        <span key={n} className={`cast-c cast-${n}`} style={{ animationDelay: `${i * -0.7}s` }}
          dangerouslySetInnerHTML={{ __html: (cast as Record<string, string>)[n] }} />
      ))}
    </div>
  );
}
