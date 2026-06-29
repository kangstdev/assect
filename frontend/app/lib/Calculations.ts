import type { Transaction } from "@/app/types/transaction";

// ─────────────────────────────────────────
// 타입
// ─────────────────────────────────────────

export type CategoryColor = {
  dotClassName: string;
  chartColor: string;
};

export type CategorySummary = {
  categoryName: string;
  categoryAmount: number;
  percent: number;
  dotClassName: string;
  chartColor: string;
};

// ─────────────────────────────────────────
// 상수
// ─────────────────────────────────────────

const CATEGORY_COLOR_LIST: CategoryColor[] = [
  { dotClassName: "bg-blue-500",   chartColor: "#3b82f6" },
  { dotClassName: "bg-red-500",    chartColor: "#ef4444" },
  { dotClassName: "bg-amber-500",  chartColor: "#f59e0b" },
  { dotClassName: "bg-green-500",  chartColor: "#22c55e" },
  { dotClassName: "bg-violet-500", chartColor: "#8b5cf6" },
  { dotClassName: "bg-pink-500",   chartColor: "#ec4899" },
];

// ─────────────────────────────────────────
// 기본 집계
// ─────────────────────────────────────────

/** 총 수입 */
export function calcTotalIncome(transactions: Transaction[]): number {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

/** 총 지출 */
export function calcTotalExpense(transactions: Transaction[]): number {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}

/** 잔액 (수입 - 지출) */
export function calcBalance(totalIncome: number, totalExpense: number): number {
  return totalIncome - totalExpense;
}

// ─────────────────────────────────────────
// 예산
// ─────────────────────────────────────────

/** 예산 사용률 (0~100%) */
export function calcBudgetUsagePercent(
  totalExpense: number,
  monthlyBudget: number
): number {
  if (monthlyBudget === 0) return 0;
  return Math.min(100, Math.round((totalExpense / monthlyBudget) * 100));
}

/** 남은 예산 */
export function calcRemainingBudget(
  totalExpense: number,
  monthlyBudget: number
): number {
  return monthlyBudget - totalExpense;
}

// ─────────────────────────────────────────
// 카테고리 요약
// ─────────────────────────────────────────

/** 카테고리별 지출 요약 (도넛 차트, 목록용) */
export function calcCategorySummaries(
  transactions: Transaction[],
  totalExpense: number
): CategorySummary[] {
  const categoryMap: Record<string, number> = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryMap[t.category] = (categoryMap[t.category] ?? 0) + t.amount;
    });

  return Object.entries(categoryMap)
    .map(([categoryName, categoryAmount], index) => {
      const color = CATEGORY_COLOR_LIST[index % CATEGORY_COLOR_LIST.length];
      return {
        categoryName,
        categoryAmount,
        percent:
          totalExpense === 0
            ? 0
            : Math.round((categoryAmount / totalExpense) * 100),
        dotClassName: color.dotClassName,
        chartColor: color.chartColor,
      };
    })
    .sort((a, b) => b.categoryAmount - a.categoryAmount);
}

// ─────────────────────────────────────────
// 도넛 차트
// ─────────────────────────────────────────

/** conic-gradient 문자열 생성 */
export function calcDonutGradient(
  categorySummaries: CategorySummary[],
  totalExpense: number
): string {
  if (totalExpense === 0 || categorySummaries.length === 0) {
    return "conic-gradient(#e5e7eb 0deg 360deg)";
  }

  let startDeg = 0;
  const segments = categorySummaries.map((item) => {
    const endDeg = startDeg + (item.categoryAmount / totalExpense) * 360;
    const segment = `${item.chartColor} ${startDeg}deg ${endDeg}deg`;
    startDeg = endDeg;
    return segment;
  });

  if (startDeg < 360) {
    segments.push(`#e5e7eb ${startDeg}deg 360deg`);
  }

  return `conic-gradient(${segments.join(", ")})`;
}