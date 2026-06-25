const CATEGORY_COLORS = [
  { dot: "bg-rose-400", gradient: "#fb7185" },
  { dot: "bg-orange-400", gradient: "#fb923c" },
  { dot: "bg-amber-400", gradient: "#fbbf24" },
  { dot: "bg-yellow-400", gradient: "#facc15" },
  { dot: "bg-lime-400", gradient: "#a3e635" },
  { dot: "bg-green-400", gradient: "#4ade80" },
  { dot: "bg-teal-400", gradient: "#2dd4bf" },
  { dot: "bg-cyan-400", gradient: "#22d3ee" },
  { dot: "bg-blue-400", gradient: "#60a5fa" },
  { dot: "bg-violet-400", gradient: "#a78bfa" },
  { dot: "bg-purple-400", gradient: "#c084fc" },
  { dot: "bg-pink-400", gradient: "#f472b6" },
];

function hashCategory(category: string): number {
  return [...category].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export function getCategoryDotClassName(category: string): string {
  const index = hashCategory(category) % CATEGORY_COLORS.length;
  return CATEGORY_COLORS[index].dot;
}

export function makeDonutGradient(
  categorySummaries: { percent: number; dotClassName: string }[]
): string {
  if (categorySummaries.length === 0) return "#e2e8f0";

  let cumulative = 0;
  const segments = categorySummaries.map((item) => {
    const color = CATEGORY_COLORS.find((c) => c.dot === item.dotClassName)?.gradient ?? "#e2e8f0";
    const start = cumulative;
    cumulative += item.percent;
    return `${color} ${start}% ${cumulative}%`;
  });

  return `conic-gradient(${segments.join(", ")})`;
}