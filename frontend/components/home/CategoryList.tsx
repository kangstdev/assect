// components/home/CategoryList.tsx
type CategoryItem = {
  categoryName: string;
  categoryAmount: number;
  percent: number;
  dotClassName: string;
};

type CategoryListProps = {
  categorySummaries: CategoryItem[];
};

export default function CategoryList({ categorySummaries }: CategoryListProps) {
  return (
    <div className="flex-1 space-y-2">
      {categorySummaries.slice(0, 5).map((item) => (
        <div key={item.categoryName} className="flex items-center justify-between gap-1 text-xs">
          <div className="flex items-center gap-1.5 w-14 shrink-0">
            <span className={`h-2 w-2 shrink-0 rounded-full ${item.dotClassName}`} />
            <span className="text-slate-600 truncate">{item.categoryName}</span>
          </div>
          <span className="text-slate-500 shrink-0">{item.categoryAmount.toLocaleString("ko-KR")}원</span>
          <span className="text-slate-400 shrink-0 w-6 text-right">{item.percent}%</span>
        </div>
      ))}

      {categorySummaries.length > 5 && (
        <p className="pt-1 text-center text-xs text-slate-400">
          외 {categorySummaries.length - 5}개
        </p>
      )}
    </div>
  );
}