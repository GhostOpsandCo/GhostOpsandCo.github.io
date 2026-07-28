import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const width = 2400;
const height = 1500;
const output = path.resolve("public/projects/venture-labs-control-room.png");

const ink = "#101521";
const softInk = "#536176";
const mutedInk = "#778398";
const line = "#d8e0ea";
const panelFill = "#ffffff";
const appBg = "#edf2f8";
const active = "#1f6fff";
const ready = "#0c9b55";
const pending = "#c87900";

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function panel(x, y, w, h, options = {}) {
  const fill = options.fill ?? panelFill;
  const stroke = options.stroke ?? line;
  const radius = options.radius ?? 8;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}" />`;
}

function text(x, y, value, options = {}) {
  const size = options.size ?? 22;
  const weight = options.weight ?? 600;
  const fill = options.fill ?? ink;
  const anchor = options.anchor ? ` text-anchor="${options.anchor}"` : "";
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}"${anchor}>${esc(value)}</text>`;
}

function label(x, y, value, options = {}) {
  return text(x, y, value, {
    size: options.size ?? 14,
    weight: options.weight ?? 800,
    fill: options.fill ?? mutedInk,
    anchor: options.anchor,
  });
}

function navItem(y, value, activeItem = false) {
  return `<g>
    ${activeItem ? `<rect x="24" y="${y - 26}" width="210" height="62" rx="8" fill="#e8f0ff" /><rect x="24" y="${y - 26}" width="5" height="62" rx="2.5" fill="${active}" />` : ""}
    <circle cx="62" cy="${y}" r="10" fill="none" stroke="${activeItem ? active : "#66758b"}" stroke-width="2" />
    ${text(94, y + 7, value, { size: 17, weight: 750, fill: activeItem ? ink : "#4f5d72" })}
  </g>`;
}

function statusDot(x, y, color) {
  return `<circle cx="${x}" cy="${y}" r="5" fill="${color}" />`;
}

function statCard(x, y, w, eyebrow, headline, detail, color = active) {
  return `<g>
    ${panel(x, y, w, 106)}
    ${statusDot(x + 24, y + 32, color)}
    ${label(x + 42, y + 36, eyebrow)}
    ${text(x + 24, y + 70, headline, { size: 27, weight: 850 })}
    ${text(x + 24, y + 94, detail, { size: 14, weight: 650, fill: softInk })}
  </g>`;
}

const queueRows = [
  ["Voice-agent setup", "Research ready", "Decision gate", "Review"],
  ["Creator protection", "Red report ready", "Hold option", "Review"],
  ["Treasury workflow", "PRD locked", "Build package", "Blocked"],
  ["Compute sourcing", "Research pack", "Architecture", "Draft"],
];

function queueRow(y, name, evidence, stage, status, index) {
  const fill = index === 0 ? "#f3f7ff" : "#ffffff";
  const statusFill = status === "Blocked" ? "#fff4de" : status === "Review" ? "#e9f8f0" : "#f3f6fb";
  const statusInk = status === "Blocked" ? "#936000" : status === "Review" ? "#087846" : softInk;
  return `<g>
    <rect x="310" y="${y}" width="520" height="74" fill="${fill}" />
    <line x1="310" x2="830" y1="${y + 74}" y2="${y + 74}" stroke="${line}" />
    ${text(332, y + 31, name, { size: 18, weight: 800 })}
    ${text(332, y + 56, evidence, { size: 13, weight: 650, fill: softInk })}
    ${text(548, y + 44, stage, { size: 15, weight: 700, fill: softInk })}
    <rect x="720" y="${y + 23}" width="84" height="28" rx="14" fill="${statusFill}" />
    ${text(762, y + 43, status, { size: 13, weight: 800, fill: statusInk, anchor: "middle" })}
  </g>`;
}

const stages = [
  ["01", "Intake", ready],
  ["02", "Research", ready],
  ["03", "Red report", ready],
  ["04", "Decision", pending],
  ["05", "PRD", "#a7b1c1"],
  ["06", "Architecture", "#a7b1c1"],
  ["07", "Build package", "#a7b1c1"],
  ["08", "QA review", "#a7b1c1"],
  ["09", "Launch memo", "#a7b1c1"],
];

function stageStepper() {
  return stages
    .map(([num, name, color], index) => {
      const x = 922 + index * 142;
      const isCurrent = num === "04";
      const dot = isCurrent
        ? `<rect x="${x - 31}" y="982" width="62" height="62" rx="13" fill="${ink}" />${text(x, 1007, num, { size: 15, weight: 850, fill: "#ffffff", anchor: "middle" })}${text(x, 1028, "Gate", { size: 12, weight: 800, fill: "#ffffff", anchor: "middle" })}`
        : `<circle cx="${x}" cy="1013" r="19" fill="#ffffff" stroke="${color}" stroke-width="2" />${text(x, 1018, num, { size: 13, weight: 800, fill: softInk, anchor: "middle" })}`;
      return `<g>
        ${index > 0 ? `<line x1="${x - 122}" x2="${x - 24}" y1="1013" y2="1013" stroke="${index < 4 ? active : "#b8c3d2"}" stroke-width="2" />` : ""}
        ${dot}
        ${text(x, 1063, name, { size: 14, weight: 750, fill: index < 4 ? ink : softInk, anchor: "middle" })}
      </g>`;
    })
    .join("");
}

const artifacts = [
  ["Research pack", "Ready", ready],
  ["Red report", "Ready", ready],
  ["Decision record", "Pending", pending],
  ["PRD", "Locked", "#9aa6b8"],
  ["Architecture brief", "Locked", "#9aa6b8"],
  ["Build package", "Locked", "#9aa6b8"],
  ["QA review", "Locked", "#9aa6b8"],
];

function artifactRows() {
  return artifacts
    .map(([name, state, color], index) => {
      const col = index < 4 ? 0 : 1;
      const x = 890 + col * 690;
      const y = 1200 + (index % 4) * 38;
      return `<g>
        <line x1="${x}" x2="${x + 602}" y1="${y + 32}" y2="${y + 32}" stroke="${line}" />
        <rect x="${x}" y="${y}" width="28" height="28" rx="6" fill="#f8fafc" stroke="${line}" />
        ${text(x + 44, y + 21, name, { size: 16, weight: 750 })}
        ${statusDot(x + 505, y + 15, color)}
        ${text(x + 528, y + 21, state, { size: 14, weight: 750, fill: color === pending ? "#8a5a00" : color === ready ? "#087846" : softInk })}
      </g>`;
    })
    .join("");
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif">
  <rect width="${width}" height="${height}" fill="${appBg}" />
  <rect x="0" y="0" width="${width}" height="${height}" rx="0" fill="#f8fafc" />

  <rect x="0" y="0" width="254" height="${height}" fill="#fbfcfe" />
  <line x1="254" x2="254" y1="0" y2="${height}" stroke="${line}" />
  <g>
    <rect x="38" y="39" width="52" height="52" rx="12" fill="#0d8b5f" />
    <path d="M51 53 H77 M51 65 H77 M64 53 V79" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
    ${text(102, 61, "Venture Labs", { size: 24, weight: 850 })}
    ${text(102, 88, "Venture OS", { size: 13, weight: 700, fill: softInk })}
  </g>
  ${navItem(190, "Control Room", true)}
  ${navItem(280, "Research Queue")}
  ${navItem(370, "Red Reports")}
  ${navItem(460, "Decision Gate")}
  ${navItem(550, "Build Package")}
  ${navItem(640, "QA Review")}
  <line x1="28" x2="226" y1="1326" y2="1326" stroke="${line}" />
  <circle cx="62" cy="1392" r="26" fill="#101521" />
  ${text(104, 1385, "Portfolio artifact", { size: 16, weight: 800 })}
  ${text(104, 1412, "No live data", { size: 13, weight: 700, fill: softInk })}

  <rect x="254" y="0" width="2146" height="118" fill="#ffffff" />
  <line x1="254" x2="2400" y1="118" y2="118" stroke="${line}" />
  ${text(310, 59, "Sample venture workspace", { size: 21, weight: 700, fill: softInk })}
  ${text(1200, 61, "Venture Control Room", { size: 20, weight: 850, anchor: "middle" })}
  <rect x="1980" y="30" width="150" height="52" rx="8" fill="#ffffff" stroke="${line}" />
  ${statusDot(2012, 56, active)}
  ${text(2032, 62, "Not live ops", { size: 16, weight: 800 })}
  <rect x="2160" y="30" width="180" height="52" rx="8" fill="#ffffff" stroke="${line}" />
  ${text(2250, 62, "System view", { size: 16, weight: 800, anchor: "middle" })}

  ${panel(310, 150, 2030, 282)}
  ${label(334, 188, "VENTURE OS DAILY BRIEF")}
  ${text(334, 230, "Decision gate is waiting on a build / hold / kill call.", { size: 34, weight: 900 })}
  ${text(334, 268, "Research and red-team review are staged. PRD, architecture, build package, QA, and launch memo stay locked until the decision is recorded.", { size: 18, weight: 650, fill: softInk })}
  ${panel(334, 310, 632, 86, { fill: "#f8fafc" })}
  ${label(358, 341, "RECOMMENDED START")}
  ${text(358, 372, "Review the decision record", { size: 22, weight: 850 })}
  ${text(358, 390, "Choose kill, hold, or build before engineering starts.", { size: 14, weight: 650, fill: softInk })}
  ${panel(990, 310, 604, 86, { fill: "#f8fafc" })}
  ${label(1014, 341, "PREPARED WORKFLOW")}
  ${text(1014, 372, "Build package locked", { size: 22, weight: 850 })}
  ${text(1014, 390, "Next stages open only after decision approval.", { size: 14, weight: 650, fill: softInk })}
  ${panel(1618, 310, 698, 86, { fill: "#f6fbf8", stroke: "#bfe6cf" })}
  <rect x="1640" y="332" width="48" height="48" rx="10" fill="#101521" />
  ${text(1664, 363, "OS", { size: 17, weight: 900, fill: "#ffffff", anchor: "middle" })}
  ${text(1710, 344, "Venture OS scan", { size: 18, weight: 850 })}
  ${text(1710, 371, "Decision route is clear. Launch remains blocked.", { size: 14, weight: 700, fill: softInk })}
  <rect x="2058" y="331" width="230" height="50" rx="6" fill="#101521" />
  ${text(2173, 362, "Review decision record", { size: 15, weight: 850, fill: "#ffffff", anchor: "middle" })}

  ${statCard(310, 462, 470, "Current stage", "Decision gate", "One approval point", pending)}
  ${statCard(806, 462, 470, "Artifacts ready", "Research + red report", "Evidence is staged", ready)}
  ${statCard(1302, 462, 470, "Build state", "Locked", "Opens after decision", "#98a4b6")}
  ${statCard(1798, 462, 542, "Claim boundary", "No production claim", "Portfolio-safe artifact", active)}

  ${panel(310, 604, 520, 488)}
  ${text(334, 646, "Sample venture queue", { size: 23, weight: 900 })}
  ${label(334, 708, "VENTURE")}
  ${label(548, 708, "STAGE")}
  ${label(722, 708, "STATUS")}
  ${queueRows.map((row, index) => queueRow(724 + index * 74, ...row, index)).join("")}
  ${text(334, 1062, "Use this queue to decide what deserves build time.", { size: 15, weight: 700, fill: active })}

  ${panel(860, 604, 1480, 488)}
  ${text(890, 646, "Decision gate preview", { size: 23, weight: 900 })}
  ${label(2192, 646, "STAGE 04")}
  ${stageStepper()}
  ${panel(890, 692, 420, 140, { fill: "#fff9ee", stroke: "#efd39f" })}
  ${text(918, 733, "Hold", { size: 27, weight: 900, fill: "#8a5a00" })}
  ${text(918, 766, "Pause and rework unresolved risk.", { size: 15, weight: 700, fill: "#71541b" })}
  ${panel(1338, 692, 420, 140, { fill: "#f7fbff", stroke: "#bcd5ff" })}
  ${text(1366, 733, "Build", { size: 27, weight: 900, fill: active })}
  ${text(1366, 766, "Open PRD, architecture, and QA.", { size: 15, weight: 700, fill: softInk })}
  ${panel(1786, 692, 420, 140, { fill: "#fff6f6", stroke: "#efc6c6" })}
  ${text(1814, 733, "Kill", { size: 27, weight: 900, fill: "#c91f1f" })}
  ${text(1814, 766, "Stop when evidence says no.", { size: 15, weight: 700, fill: "#823131" })}
  <line x1="890" x2="2314" y1="876" y2="876" stroke="${line}" />
  ${text(890, 918, "Why it surfaced", { size: 19, weight: 850 })}
  ${text(890, 951, "Research and red-team review are ready. Build stages stay locked until the decision is explicit.", { size: 16, weight: 650, fill: softInk })}

  ${panel(310, 1128, 520, 242)}
  ${text(334, 1170, "Stage controls", { size: 23, weight: 900 })}
  ${text(334, 1214, "Router Core", { size: 18, weight: 850 })}
  ${text(500, 1214, "Owns progression", { size: 16, weight: 700, fill: softInk })}
  <line x1="334" x2="806" y1="1238" y2="1238" stroke="${line}" />
  ${text(334, 1276, "Watchguard", { size: 18, weight: 850 })}
  ${text(500, 1276, "Blocks unsupported claims", { size: 16, weight: 700, fill: softInk })}
  <line x1="334" x2="806" y1="1300" y2="1300" stroke="${line}" />
  ${text(334, 1338, "State Layer", { size: 18, weight: 850 })}
  ${text(500, 1338, "Tracks next action", { size: 16, weight: 700, fill: softInk })}

  ${panel(860, 1128, 1480, 242)}
  ${text(890, 1170, "Artifact readiness", { size: 23, weight: 900 })}
  ${label(2192, 1170, "SAMPLE STATE")}
  ${artifactRows()}

  ${text(310, 1452, "Portfolio-safe Venture Labs dashboard artifact. Based on GhostOps venture-system docs; not a live customer, revenue, autonomous-launch, or production-operations claim.", { size: 14, weight: 700, fill: softInk })}
</svg>`;

await fs.mkdir(path.dirname(output), { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
const { size } = await fs.stat(output);
console.log(`${output} ${Math.round(size / 1024)}KB`);
