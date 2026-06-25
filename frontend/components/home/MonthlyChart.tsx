// components/home/MonthlyChart.tsx
type MonthlyData = {
  month: string;
  income: number;
  expense: number;
  balance: number;
};

type MonthlyChartProps = {
  data: MonthlyData[];
};

export default function MonthlyChart({ data }: MonthlyChartProps) {
  const maxValue = Math.max(...data.flatMap((d) => [d.income, d.expense, d.balance]));

  const toHeight = (value: number) => {
    if (maxValue === 0) return 0;
    return Math.round((value / maxValue) * 100);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">월별 수입/지출 추이</h2>
        <span className="text-xs text-slate-400">(단위: 원)</span>
      </div>

      {/* 범례 */}
      <div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
          수입
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-red-400" />
          지출
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-4 rounded-full border-t-2 border-dashed border-green-500" />
          잔액
        </div>
      </div>

      {/* 차트 영역 */}
      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((item) => (
          <div key={item.month} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end justify-center gap-0.5 h-28">
              {/* 수입 바 */}
              <div
                className="w-3 rounded-t-sm bg-blue-500 transition-all"
                style={{ height: `${toHeight(item.income)}%` }}
              />
              {/* 지출 바 */}
              <div
                className="w-3 rounded-t-sm bg-red-400 transition-all"
                style={{ height: `${toHeight(item.expense)}%` }}
              />
            </div>
            <span className="text-xs text-slate-400">{item.month}</span>
          </div>
        ))}
      </div>
    </section>
  );
}