// components/layout/HomeRight.tsx
"use client";

import { ChevronRight } from "lucide-react";
import DonutChart from "@/components/home/DonutChart";
import CategoryList from "@/components/home/CategoryList";
import BudgetStatus from "@/components/home/BudgetStatus";
import MonthlyChart from "@/components/home/MonthlyChart";

type CategorySummary = {
  categoryName: string;
  categoryAmount: number;
  percent: number;
  dotClassName: string;
  chartColor: string;
};

type HomeRightProps = {
  totalExpense: number;
  monthlyBudget: number;
  budgetUsagePercent: number;
  categorySummaries: CategorySummary[];
  donutGradient: string;
};

// 임시 월별 데이터 - 나중에 API 연결하면 props로 받으면 됩니다
const MONTHLY_DATA = [
  { month: "1월", income: 2800000, expense: 2100000, balance: 700000 },
  { month: "2월", income: 3100000, expense: 2400000, balance: 700000 },
  { month: "3월", income: 2900000, expense: 1800000, balance: 1100000 },
  { month: "4월", income: 3200000, expense: 2600000, balance: 600000 },
  { month: "5월", income: 4250000, expense: 2487300, balance: 1762700 },
  { month: "6월", income: 2650000, expense: 194900, balance: 2455100 },
];

export default function HomeRight({
  totalExpense,
  monthlyBudget,
  budgetUsagePercent,
  categorySummaries,
  donutGradient,
}: HomeRightProps) {
  return (
<aside className="w-[320px] shrink-0 space-y-5 px-5 pt-[90px] pb-8">
         {/* 이번 달 요약 */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">이번 달 요약</h2>

     {/* 도넛 차트 */}
<div className="mb-4 flex justify-center">
  <DonutChart
    totalExpense={totalExpense}
    budgetUsagePercent={budgetUsagePercent}
    donutGradient={donutGradient}
  />
</div>

{/* 카테고리 목록 */}
<div className="mb-4">
  <CategoryList categorySummaries={categorySummaries} />
</div>

        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
          <span>예산 대비</span>
          <span className="font-bold text-blue-600">{budgetUsagePercent}%</span>
        </div>
        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${budgetUsagePercent}%` }}
          />
        </div>

        <button className="flex w-full items-center justify-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
          상세 보기
          <ChevronRight size={16} />
        </button>
      </section>

      {/* 월별 수입/지출 추이 */}
      <MonthlyChart data={MONTHLY_DATA} />

      {/* 이번 달 예산 현황 */}
      <BudgetStatus
        monthlyBudget={monthlyBudget}
        totalExpense={totalExpense}
        budgetUsagePercent={budgetUsagePercent}
      />
    </aside>
  );
}