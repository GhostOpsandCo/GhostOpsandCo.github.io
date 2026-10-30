/* eslint-disable @next/next/no-img-element -- static character art */
import eyes from "./bots.json";

export type BotName = keyof typeof eyes;

// Art cut from scripts/art/cast-banner.png with the eyes painted out. The eyes
// are drawn on top so BotEyes can move them.
export function Bot({ name, className = "", flip = false }: { name: BotName; className?: string; flip?: boolean }) {
  return (
    <span className={`bot bot-${name} ${flip ? "bot-flip " : ""}${className}`} aria-hidden="true">
      <img src={`/bots/${name}.webp`} alt="" width={480} height={480} loading="lazy" decoding="async" />
      <svg viewBox="0 0 480 480">
        <g className="pp">
          {eyes[name].map((e) => (
            <g key={e.x} transform={`translate(${flip ? 480 - e.x : e.x} ${e.y}) rotate(${flip ? -e.r : e.r})`}>
              <rect className="e" x={-e.w / 2} y={-e.h / 2} width={e.w} height={e.h} rx={e.w / 2} />
            </g>
          ))}
        </g>
      </svg>
    </span>
  );
}
