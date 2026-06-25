// components/home/DonutChart.tsx
type DonutChartProps = {
  totalExpense: number;
  budgetUsagePercent: number;
  donutGradient: string;
};

export default function DonutChart({
  totalExpense,
  budgetUsagePercent,
  donutGradient,
}: DonutChartProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
        style={{ background: donutGradient || "#e2e8f0" }}
      >
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
          <span className="text-xs font-semibold text-slate-500">총 지출</span>
          <span className="text-sm font-bold">
            {totalExpense.toLocaleString("ko-KR")}원
          </span>
          <span className="text-xs text-slate-400">예산 대비 {budgetUsagePercent}%</span>
        </div>
      </div>
    </div>
  );
}