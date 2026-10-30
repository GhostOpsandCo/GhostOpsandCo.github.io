"use client";
import { useEffect } from "react";

// One loop for every bot on the page: eyes follow the pointer, wander when it rests.
export function BotEyes() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const eyes = document.getElementsByClassName("pp") as HTMLCollectionOf<SVGGElement>;
    let px = -1, py = -1, raf = 0, last = 0, drawn = 0;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => { px = e.clientX; py = e.clientY; last = performance.now(); };
    window.addEventListener("pointermove", onMove, { passive: true });
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const idle = !fine || px < 0 || t - last > 4000;
      if (idle && t - drawn < 66) return;
      drawn = t;
      const list = Array.from(eyes);
      const boxes = idle ? [] : list.map((g) => (g.ownerSVGElement as SVGSVGElement).getBoundingClientRect());
      list.forEach((g, i) => {
        const reach = Number(g.dataset.r ?? 1); // small eyes, or eyes behind glasses, travel less
        let dx: number, dy: number;
        if (idle) { dx = Math.sin(t / 1400 + i) * 11; dy = Math.cos(t / 1900 + i * 1.7) * 7; }
        else {
          const r = boxes[i];
          const vx = px - (r.left + r.width / 2), vy = py - (r.top + r.height / 2);
          const d = Math.hypot(vx, vy) || 1, k = Math.min(1, d / 180);
          dx = (vx / d) * 20 * k; dy = (vy / d) * 16 * k;
        }
        g.setAttribute("transform", `translate(${(dx * reach).toFixed(2)} ${(dy * reach).toFixed(2)})`);
      });
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
  }, []);
  return null;
}
