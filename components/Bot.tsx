/* eslint-disable @next/next/no-img-element -- static character art */
import type { CSSProperties } from "react";
import eyes from "./bots.json";
import team from "./team.json";

export type BotName = keyof typeof eyes | keyof typeof team;

// Sprites are art cut from scripts/art with the eyes painted out, and the eyes
// are drawn on top so BotEyes can move them. Team bots are Hot Bot's own vectors.
export function Bot({ name, className = "", flip = false, style }: { name: BotName; className?: string; flip?: boolean; style?: CSSProperties }) {
  if (name in team) {
    return <span className={`bot bot-${name} ${className}`} style={style} aria-hidden="true" dangerouslySetInnerHTML={{ __html: team[name as keyof typeof team] }} />;
  }
  return (
    <span className={`bot bot-${name} ${flip ? "bot-flip " : ""}${className}`} style={style} aria-hidden="true">
      <img src={`/bots/${name}.webp`} alt="" width={480} height={480} loading="lazy" decoding="async" />
      <svg viewBox="0 0 480 480">
        <g className="pp" data-r={name === "shield" ? 0.6 : undefined}>
          {eyes[name as keyof typeof eyes].map((e) => (
            <g key={e.x} transform={`translate(${flip ? 480 - e.x : e.x} ${e.y}) rotate(${flip ? -e.r : e.r})`}>
              <rect className="e" x={-e.w / 2} y={-e.h / 2} width={e.w} height={e.h} rx={e.w / 2} />
            </g>
          ))}
        </g>
      </svg>
    </span>
  );
}
