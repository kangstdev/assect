// components/home/BudgetStatus.tsx
type BudgetStatusProps = {
  monthlyBudget: number;
  totalExpense: number;
  budgetUsagePercent: number;
};

export default function BudgetStatus({
  monthlyBudget,
  totalExpense,
  budgetUsagePercent,
}: BudgetStatusProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">이번 달 예산 현황</h2>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-700">
          관리
        </button>
      </div>

      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          총 예산 {monthlyBudget.toLocaleString("ko-KR")}원
        </span>
        <span className="font-bold text-blue-600">{budgetUsagePercent}%</span>
      </div>

      <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${budgetUsagePercent}%` }}
        />
      </div>

      <div className="flex justify-between text-sm">
        <div>
          <p className="text-slate-500">사용 금액</p>
          <p className="font-bold">{totalExpense.toLocaleString("ko-KR")}원</p>
        </div>
        <div className="text-right">
          <p className="text-slate-500">남은 금액</p>
          <p className="font-bold">
            {(monthlyBudget - totalExpense).toLocaleString("ko-KR")}원
          </p>
        </div>
      </div>
    </section>
  );
}