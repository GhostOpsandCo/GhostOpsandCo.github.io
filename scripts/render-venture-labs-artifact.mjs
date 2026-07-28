import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const width = 1440;
const height = 1100;
const output = path.resolve("public/projects/venture-labs-control-room.png");

function escape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function textLines(value, max = 44) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function textBlock({ x, y, text, size = 18, weight = 500, fill = "#313846", lineHeight = 1.45, max = 44 }) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}">
    ${textLines(text, max)
      .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${escape(line)}</tspan>`)
      .join("")}
  </text>`;
}

function panel(x, y, w, h, fill = "#ffffff", stroke = "#dce2eb") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${stroke}" />`;
}

function pill(x, y, text, fill = "#eef4ff", ink = "#0b55c9") {
  return `<rect x="${x}" y="${y}" width="${text.length * 8 + 28}" height="30" rx="15" fill="${fill}" />
  <text x="${x + 14}" y="${y + 20}" fill="${ink}" font-size="13" font-weight="700">${escape(text)}</text>`;
}

const stages = [
  "Intake",
  "Research",
  "Red report",
  "Decision gate",
  "PRD",
  "Architecture",
  "Build package",
  "QA",
  "Launch memo",
];

const artifacts = [
  ["Research pack", "Required"],
  ["Red report", "Required"],
  ["Decision record", "Gate"],
  ["PRD", "Locked until approved"],
  ["Architecture brief", "Locked until approved"],
  ["Build package", "QA reviewed"],
  ["Launch memo", "QA approval only"],
];

const controls = [
  ["Router Core", "Owns progression", "Blocks skipped stages"],
  ["Watchguard", "Validates outputs", "Blocks drift and unsupported claims"],
  ["State Layer", "Tracks venture progress", "Shows stage, risks, and next action"],
  ["Artifact Contracts", "Defines required records", "Blocks freeform thinking-only work"],
];

const stageSvg = stages
  .map((stage, index) => {
    const x = 318 + index * 113;
    const isGate = stage === "Decision gate";
    return `<g>
      <rect x="${x}" y="300" width="96" height="74" rx="8" fill="${isGate ? "#090b10" : "#ffffff"}" stroke="${isGate ? "#090b10" : "#dce2eb"}" />
      <text x="${x + 48}" y="329" text-anchor="middle" fill="${isGate ? "#ffffff" : "#0b0d12"}" font-size="13" font-weight="750">${escape(stage)}</text>
      <text x="${x + 48}" y="354" text-anchor="middle" fill="${isGate ? "#dce2eb" : "#657083"}" font-size="11" font-weight="650">${index + 1 < 10 ? `0${index + 1}` : index + 1}</text>
      ${index < stages.length - 1 ? `<path d="M ${x + 98} 337 H ${x + 111}" stroke="#aeb8c8" stroke-width="2" />` : ""}
    </g>`;
  })
  .join("");

const artifactSvg = artifacts
  .map(
    ([name, status], index) => `<g>
      <rect x="1000" y="${470 + index * 35}" width="300" height="28" rx="6" fill="${index < 3 ? "#f8f9fb" : "#ffffff"}" stroke="#dce2eb" />
      <text x="1014" y="${489 + index * 35}" fill="#0b0d12" font-size="12" font-weight="700">${escape(name)}</text>
      <text x="1284" y="${489 + index * 35}" text-anchor="end" fill="#657083" font-size="10" font-weight="650">${escape(status)}</text>
    </g>`,
  )
  .join("");

const controlSvg = controls
  .map(
    ([layer, job, block], index) => `<g>
      <line x1="318" x2="1300" y1="${782 + index * 61}" y2="${782 + index * 61}" stroke="#dce2eb" />
      <text x="318" y="${820 + index * 61}" fill="#0b0d12" font-size="16" font-weight="750">${escape(layer)}</text>
      <text x="610" y="${820 + index * 61}" fill="#313846" font-size="15" font-weight="550">${escape(job)}</text>
      <text x="930" y="${820 + index * 61}" fill="#313846" font-size="15" font-weight="550">${escape(block)}</text>
    </g>`,
  )
  .join("");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">
  <rect width="${width}" height="${height}" fill="#f5f7fa" />
  <rect x="40" y="36" width="1360" height="1028" rx="14" fill="#ffffff" stroke="#c8d1df" />
  <rect x="40" y="36" width="240" height="1028" rx="14" fill="#090b10" />
  <rect x="260" y="36" width="20" height="1028" fill="#090b10" />

  <text x="78" y="95" fill="#ffffff" font-size="24" font-weight="800">GhostOps</text>
  <text x="78" y="124" fill="#aeb8c8" font-size="14" font-weight="650">Venture Labs</text>
  ${pill(78, 156, "Spec-backed", "rgba(255,255,255,0.1)", "#ffffff")}
  <g fill="#aeb8c8" font-size="14" font-weight="650">
    <text x="78" y="245">Control room</text>
    <text x="78" y="301">Research queue</text>
    <text x="78" y="357">Red reports</text>
    <text x="78" y="413">Build packages</text>
    <text x="78" y="469">QA readiness</text>
  </g>
  <rect x="62" y="218" width="178" height="50" rx="8" fill="#ffffff" opacity="0.1" />
  <text x="78" y="989" fill="#ffffff" font-size="13" font-weight="750">Portfolio artifact</text>
  <text x="78" y="1015" fill="#aeb8c8" font-size="12" font-weight="550">Not a live production dashboard</text>

  <text x="318" y="96" fill="#0b0d12" font-size="42" font-weight="820">Venture Labs control room</text>
  ${textBlock({
    x: 318,
    y: 134,
    text: "A venture operating-system artifact for turning raw ideas into a kill memo or execution-ready build package.",
    size: 18,
    weight: 500,
    fill: "#313846",
    max: 82,
  })}
  ${pill(1068, 76, "Illustrative artifact", "#f5f7fa", "#313846")}
  ${pill(1222, 76, "Doc-based", "#eef4ff", "#0b55c9")}

  ${panel(318, 184, 230, 76)}
  <text x="340" y="218" fill="#657083" font-size="12" font-weight="800">PIPELINE RULE</text>
  <text x="340" y="251" fill="#0b0d12" font-size="23" font-weight="800">No skipped gates</text>

  ${panel(568, 184, 230, 76)}
  <text x="590" y="218" fill="#657083" font-size="12" font-weight="800">DECISION</text>
  <text x="590" y="251" fill="#0b0d12" font-size="23" font-weight="800">Kill / hold / build</text>

  ${panel(818, 184, 230, 76)}
  <text x="840" y="218" fill="#657083" font-size="12" font-weight="800">QA RULE</text>
  <text x="840" y="251" fill="#0b0d12" font-size="23" font-weight="800">Launch is blocked</text>

  ${panel(1068, 184, 232, 76)}
  <text x="1090" y="218" fill="#657083" font-size="12" font-weight="800">TRACEABILITY</text>
  <text x="1090" y="251" fill="#0b0d12" font-size="23" font-weight="800">Artifact registry</text>

  ${panel(300, 282, 1022, 118, "#f8f9fb")}
  <text x="318" y="272" fill="#0b0d12" font-size="18" font-weight="780">Required venture path</text>
  ${stageSvg}

  ${panel(318, 442, 636, 278)}
  <text x="348" y="486" fill="#0b0d12" font-size="25" font-weight="820">Current venture review</text>
  ${textBlock({
    x: 348,
    y: 524,
    text: "The system does not start from code. It starts from the idea, the market research, the red report, and the explicit decision gate.",
    size: 16,
    fill: "#313846",
    max: 65,
  })}
  <line x1="348" x2="914" y1="590" y2="590" stroke="#dce2eb" />
  <text x="348" y="628" fill="#657083" font-size="12" font-weight="800">NEXT REQUIRED DECISION</text>
  <text x="348" y="664" fill="#0b0d12" font-size="28" font-weight="840">Build only after research and red-team review.</text>
  <text x="348" y="696" fill="#313846" font-size="15" font-weight="550">Output must be a kill memo, hold decision, or execution-ready package.</text>

  ${panel(982, 442, 340, 278)}
  <text x="1000" y="428" fill="#0b0d12" font-size="18" font-weight="780">Artifact stack</text>
  ${artifactSvg}

  ${panel(300, 750, 1022, 276, "#ffffff")}
  <text x="318" y="738" fill="#0b0d12" font-size="18" font-weight="780">System controls</text>
  <text x="318" y="774" fill="#657083" font-size="12" font-weight="800">LAYER</text>
  <text x="610" y="774" fill="#657083" font-size="12" font-weight="800">JOB</text>
  <text x="930" y="774" fill="#657083" font-size="12" font-weight="800">WHAT IT BLOCKS</text>
  ${controlSvg}

  <text x="318" y="1040" fill="#657083" font-size="12" font-weight="600">Based on the GhostOps Venture Studio OS and Technical Architecture Spec v1. Created for portfolio explanation; not a live customer, revenue, or production operations claim.</text>
</svg>`;

await fs.mkdir(path.dirname(output), { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
const { size } = await fs.stat(output);
console.log(`${output} ${Math.round(size / 1024)}KB`);
