import {
  Bell,
  HelpCircle,
  UserCircle,
  CalendarDays,
  ChevronDown,
  Download,
  CreditCard,
  TrendingUp,
  PiggyBank,
  Utensils,
  Bus,
  Home,
  ShoppingBag,
  Film,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  WalletCards,
  ReceiptText,
  Landmark,
  Pencil,
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 페이지 전체 본문 */}
      <div className="space-y-6">
        {/* 상단 헤더 */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">보고서</h1>

            {/* 필터 영역 */}
            <div className="mt-8 flex items-center gap-3">
              <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
                <CalendarDays size={18} className="text-slate-500" />
                2025년
                <ChevronDown size={16} className="text-slate-400" />
              </button>

              <button className="flex h-12 items-center gap-10 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
                5월
                <ChevronDown size={16} className="text-slate-400" />
              </button>

              <div className="ml-4 flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
                <span className="px-3 text-sm font-semibold text-slate-700">
                  기간
                </span>
                <button className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                  월간
                </button>
                <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600">
                  분기
                </button>
                <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600">
                  연간
                </button>
              </div>
            </div>
          </div>

          {/* 오른쪽 상단 아이콘 */}
          <div className="flex flex-col items-end gap-8">
            <div className="flex items-center gap-5 text-slate-500">
              <Bell size={21} />
              <HelpCircle size={21} />
              <UserCircle size={22} />
            </div>

            <button className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-sm hover:bg-blue-700">
              <Download size={17} />
              리포트 다운로드
            </button>
          </div>
        </div>

        {/* 본문 전체 그리드 */}
        <div className="grid grid-cols-[1fr_360px] gap-6">
          {/* 왼쪽 메인 영역 */}
          <div className="space-y-6">
            {/* 상단 요약 카드 3개 */}
            <div className="grid grid-cols-3 gap-6">
              <SummaryCard
                icon={<CreditCard size={20} />}
                iconBg="bg-red-100"
                iconColor="text-red-500"
                title="이번 달 소비"
                value="2,487,300원"
                desc="전월 대비"
                change="▲ 5.3%"
                changeColor="text-red-500"
                chartColor="red"
              />

              <SummaryCard
                icon={<TrendingUp size={20} />}
                iconBg="bg-emerald-100"
                iconColor="text-emerald-500"
                title="전월 대비"
                value="+125,300원"
                desc="전월 대비 증가"
                change="▲ 5.3%"
                changeColor="text-red-500"
                chartColor="green"
              />

              <SummaryCard
                icon={<PiggyBank size={20} />}
                iconBg="bg-violet-100"
                iconColor="text-violet-500"
                title="저축률"
                value="32.8%"
                desc="전월 대비"
                change="▼ 2.1%p"
                changeColor="text-red-500"
                chartColor="purple"
              />
            </div>

            {/* 차트 영역 */}
            <div className="grid grid-cols-2 gap-6">
              {/* 월별 지출 추이 */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">
                  월별 지출 추이
                </h2>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="h-1.5 w-4 rounded-full bg-blue-600" />
                  지출 금액 (원)
                </div>

                <div className="relative mt-5 h-[230px]">
                  {/* 배경 가로선 */}
                  <div className="absolute inset-0 flex flex-col justify-between py-4">
                    {[400, 300, 200, 0].map((item) => (
                      <div key={item} className="flex items-center gap-4">
                        <span className="w-10 text-xs font-semibold text-slate-400">
                          {item}만
                        </span>
                        <div className="h-px flex-1 border-t border-dashed border-slate-200" />
                      </div>
                    ))}
                  </div>

                  {/* SVG 라인 차트 */}
                  <svg
                    viewBox="0 0 500 210"
                    className="absolute left-12 top-2 h-[210px] w-[calc(100%-48px)]"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="expenseGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 80 L75 55 L150 78 L230 92 L310 70 L390 88 L480 55 L500 50 L500 200 L0 200 Z"
                      fill="url(#expenseGradient)"
                    />

                    <path
                      d="M0 80 L75 55 L150 78 L230 92 L310 70 L390 88 L480 55"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {[0, 75, 150, 230, 310, 390, 480].map((x, index) => {
                      const yList = [80, 55, 78, 92, 70, 88, 55];

                      return (
                        <circle
                          key={x}
                          cx={x}
                          cy={yList[index]}
                          r="6"
                          fill="#2563eb"
                          stroke="white"
                          strokeWidth="4"
                        />
                      );
                    })}
                  </svg>

                  {/* 말풍선 */}
                  <div className="absolute right-0 top-8 rounded-xl border border-slate-200 bg-white px-4 py-3 text-right text-xs font-bold text-slate-700 shadow-md">
                    <p className="text-slate-500">2025년 5월</p>
                    <p className="mt-1 text-slate-900">2,487,300원</p>
                  </div>

                  {/* 하단 월 */}
                  <div className="absolute bottom-0 left-12 right-0 grid grid-cols-6 text-center text-xs font-bold text-slate-500">
                    <span>12월</span>
                    <span>1월</span>
                    <span>2월</span>
                    <span>3월</span>
                    <span>4월</span>
                    <span>5월</span>
                  </div>
                </div>
              </section>

              {/* 카테고리별 지출 금액 + 도넛 */}
              <section className="grid grid-cols-[1.1fr_0.9fr] rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-bold text-slate-900">
                    카테고리별 지출 금액
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="h-1.5 w-4 rounded-full bg-blue-600" />
                    지출 금액 (원)
                  </div>

                  <div className="mt-6 space-y-4">
                    <BarItem label="식비" value="646,800원" width="95%" color="bg-blue-600" />
                    <BarItem label="교통" value="288,500원" width="50%" color="bg-blue-500" />
                    <BarItem label="주거비" value="260,000원" width="44%" color="bg-blue-400" />
                    <BarItem label="쇼핑" value="235,900원" width="38%" color="bg-blue-300" />
                    <BarItem label="문화/여가" value="198,600원" width="32%" color="bg-blue-300" />
                    <BarItem label="기타" value="657,500원" width="96%" color="bg-blue-400" />
                  </div>

                  <div className="mt-5 ml-14 flex justify-between text-xs font-semibold text-slate-400">
                    <span>0</span>
                    <span>20만</span>
                    <span>40만</span>
                    <span>60만</span>
                    <span>80만</span>
                    <span>100만</span>
                  </div>
                </div>

                <div className="border-l border-slate-200 p-6">
                  <h2 className="text-lg font-bold text-slate-900">
                    지출 비중
                  </h2>

                  <div className="mt-8 flex items-center gap-8">
                    <div className="relative h-44 w-44 rounded-full bg-[conic-gradient(#2563eb_0_26%,#ef4444_26%_38%,#f59e0b_38%_48%,#22c55e_48%_57%,#8b5cf6_57%_65%,#d1d5db_65%_100%)]">
                      <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full bg-white text-center">
                        <span className="text-xs font-bold text-slate-500">
                          총 지출
                        </span>
                        <span className="mt-1 text-sm font-black text-slate-900">
                          2,487,300원
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <Legend color="bg-blue-600" label="식비" value="26%" />
                      <Legend color="bg-red-500" label="교통" value="12%" />
                      <Legend color="bg-amber-500" label="주거비" value="10%" />
                      <Legend color="bg-emerald-500" label="쇼핑" value="9%" />
                      <Legend color="bg-violet-500" label="문화/여가" value="8%" />
                      <Legend color="bg-slate-300" label="기타" value="26%" />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* 하단 인사이트 + 분석 테이블 */}
            <div className="grid grid-cols-[0.85fr_1.6fr] gap-6">
              {/* 소비 인사이트 */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">
                  소비 인사이트
                </h2>

                <div className="mt-6 space-y-4">
                  <InsightCard
                    icon={<ArrowUp size={22} />}
                    iconBg="bg-red-100"
                    iconColor="text-red-500"
                    title={
                      <>
                        식비가 지난달 대비{" "}
                        <span className="text-blue-600">12%</span> 증가했어요
                      </>
                    }
                    desc="외식 및 배달비 지출이 증가했어요."
                  />

                  <InsightCard
                    icon={<CreditCard size={22} />}
                    iconBg="bg-emerald-100"
                    iconColor="text-emerald-500"
                    title="교통비는 안정적으로 유지되고 있어요"
                    desc="전월 대비 큰 변동이 없어요."
                  />

                  <InsightCard
                    icon={<ReceiptText size={22} />}
                    iconBg="bg-orange-100"
                    iconColor="text-orange-500"
                    title="주말 소비 비중이 높아요"
                    desc="전체 지출의 58%가 주말에 발생했어요."
                  />
                </div>
              </section>

              {/* 카테고리별 분석 테이블 */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-6 py-5">
                  <h2 className="text-lg font-bold text-slate-900">
                    카테고리별 분석
                  </h2>
                </div>

                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-xs font-bold text-slate-500">
                    <tr>
                      <th className="px-6 py-4 text-left">카테고리</th>
                      <th className="px-6 py-4 text-right">총액</th>
                      <th className="px-6 py-4 text-right">비중</th>
                      <th className="px-6 py-4 text-right">증감률</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    <TableRow icon={<Utensils size={17} />} category="식비" amount="646,800원" ratio="26%" rate="▲ 12.3%" rateColor="text-red-500" />
                    <TableRow icon={<Bus size={17} />} category="교통" amount="288,500원" ratio="12%" rate="▼ 1.4%" rateColor="text-blue-500" />
                    <TableRow icon={<Home size={17} />} category="주거비" amount="260,000원" ratio="10%" rate="▲ 3.1%" rateColor="text-red-500" />
                    <TableRow icon={<ShoppingBag size={17} />} category="쇼핑" amount="235,900원" ratio="9%" rate="▼ 6.8%" rateColor="text-blue-500" />
                    <TableRow icon={<Film size={17} />} category="문화/여가" amount="198,600원" ratio="8%" rate="▲ 8.7%" rateColor="text-red-500" />
                    <TableRow icon={<MoreHorizontal size={17} />} category="기타" amount="657,500원" ratio="26%" rate="▲ 2.0%" rateColor="text-red-500" />
                  </tbody>

                  <tfoot className="bg-slate-50 font-black text-slate-900">
                    <tr>
                      <td className="px-6 py-4">합계</td>
                      <td className="px-6 py-4 text-right">2,487,300원</td>
                      <td className="px-6 py-4 text-right">100%</td>
                      <td className="px-6 py-4 text-right text-red-500">▲ 5.3%</td>
                    </tr>
                  </tfoot>
                </table>
              </section>
            </div>
          </div>

          {/* 오른쪽 사이드 카드 영역 */}
          <aside className="space-y-6">
            {/* TOP 카테고리 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                이번 달 TOP 카테고리
              </h2>

              <div className="mt-6 space-y-4">
                <RankingItem rank={1} color="bg-blue-600" icon={<Utensils size={15} />} label="식비" amount="646,800원" />
                <RankingItem rank={2} color="bg-red-500" icon={<Bus size={15} />} label="교통" amount="288,500원" />
                <RankingItem rank={3} color="bg-orange-500" icon={<Home size={15} />} label="주거비" amount="260,000원" />
                <RankingItem rank={4} color="bg-slate-100 text-slate-500" icon={<ShoppingBag size={15} />} label="쇼핑" amount="235,900원" />
                <RankingItem rank={5} color="bg-slate-100 text-slate-500" icon={<Film size={15} />} label="문화/여가" amount="198,600원" />
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 text-center">
                <button className="inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  전체 보기
                  <ChevronRight size={16} />
                </button>
              </div>
            </section>

            {/* 고정지출 vs 변동지출 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                고정지출 vs 변동지출
              </h2>

              <div className="mt-8 flex items-center gap-8">
                <div className="relative h-44 w-44 rounded-full bg-[conic-gradient(#2563eb_0_46%,#ef4444_46%_100%)]">
                  <div className="absolute inset-8 rounded-full bg-white" />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-3xl font-black text-blue-600">46%</p>
                    <p className="mt-1 text-sm font-bold text-slate-700">
                      고정지출
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      1,155,700원
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-black text-red-500">54%</p>
                    <p className="mt-1 text-sm font-bold text-slate-700">
                      변동지출
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      1,331,600원
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5 text-center">
                <button className="inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  상세 보기
                  <ChevronRight size={16} />
                </button>
              </div>
            </section>

            {/* 추천 액션 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">추천 액션</h2>

              <div className="mt-5 space-y-3">
                <ActionCard
                  icon={<PiggyBank size={22} />}
                  iconBg="bg-blue-100"
                  iconColor="text-blue-600"
                  title="식비 예산을 점검해보세요"
                  desc="예산 대비 23% 초과 사용했어요"
                />

                <ActionCard
                  icon={<Landmark size={22} />}
                  iconBg="bg-emerald-100"
                  iconColor="text-emerald-600"
                  title="구독 서비스 비용을 확인해보세요"
                  desc="월 18,900원을 절약할 수 있어요"
                />

                <ActionCard
                  icon={<Pencil size={22} />}
                  iconBg="bg-orange-100"
                  iconColor="text-orange-500"
                  title="주말 소비를 조절해보세요"
                  desc="주말 지출 비중이 58%예요"
                />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* =========================
   아래부터는 작은 컴포넌트들
   ========================= */

type SummaryCardProps = {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  value: string;
  desc: string;
  change: string;
  changeColor: string;
  chartColor: "red" | "green" | "purple";
};

function SummaryCard({
  icon,
  iconBg,
  iconColor,
  title,
  value,
  desc,
  change,
  changeColor,
  chartColor,
}: SummaryCardProps) {
  const chartClass =
    chartColor === "red"
      ? "from-red-100 text-red-500"
      : chartColor === "green"
        ? "from-emerald-100 text-emerald-500"
        : "from-violet-100 text-violet-500";

  const strokeColor =
    chartColor === "red"
      ? "#fb7185"
      : chartColor === "green"
        ? "#34d399"
        : "#8b5cf6";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
            >
              {icon}
            </div>
            <p className="font-bold text-slate-800">{title}</p>
          </div>

          <p className="mt-8 text-3xl font-black text-slate-900">{value}</p>

          <div className="mt-5 flex items-center gap-3 text-sm font-bold">
            <span className="text-slate-700">{desc}</span>
            <span className={changeColor}>{change}</span>
          </div>
        </div>

        <div className="mt-24 h-16 w-36">
          <div className={`h-full bg-gradient-to-t ${chartClass} to-transparent`}>
            <svg viewBox="0 0 160 70" className="h-full w-full">
              <path
                d="M0 55 L20 40 L38 43 L56 30 L76 33 L96 22 L118 27 L138 15 L160 5"
                fill="none"
                stroke={strokeColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

type BarItemProps = {
  label: string;
  value: string;
  width: string;
  color: string;
};

function BarItem({ label, value, width, color }: BarItemProps) {
  return (
    <div className="grid grid-cols-[55px_1fr] items-center gap-3">
      <span className="text-sm font-bold text-slate-600">{label}</span>

      <div className="flex items-center gap-3">
        <div className="h-3 flex-1 rounded-full bg-slate-100">
          <div className={`h-3 rounded-full ${color}`} style={{ width }} />
        </div>
        <span className="w-20 text-right text-xs font-bold text-slate-700">
          {value}
        </span>
      </div>
    </div>
  );
}

type LegendProps = {
  color: string;
  label: string;
  value: string;
};

function Legend({ color, label, value }: LegendProps) {
  return (
    <div className="grid grid-cols-[14px_70px_40px] items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span className="font-semibold text-slate-600">{label}</span>
      <span className="text-right font-bold text-slate-700">{value}</span>
    </div>
  );
}

type InsightCardProps = {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: React.ReactNode;
  desc: string;
};

function InsightCard({
  icon,
  iconBg,
  iconColor,
  title,
  desc,
}: InsightCardProps) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:bg-slate-50">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

        <div>
          <p className="font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">{desc}</p>
        </div>
      </div>

      <ChevronRight size={20} className="text-slate-400" />
    </button>
  );
}

type TableRowProps = {
  icon: React.ReactNode;
  category: string;
  amount: string;
  ratio: string;
  rate: string;
  rateColor: string;
};

function TableRow({
  icon,
  category,
  amount,
  ratio,
  rate,
  rateColor,
}: TableRowProps) {
  return (
    <tr className="text-slate-700">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3 font-bold">
          <span className="text-slate-500">{icon}</span>
          {category}
        </div>
      </td>
      <td className="px-6 py-4 text-right font-semibold">{amount}</td>
      <td className="px-6 py-4 text-right font-semibold">{ratio}</td>
      <td className={`px-6 py-4 text-right font-bold ${rateColor}`}>{rate}</td>
    </tr>
  );
}

type RankingItemProps = {
  rank: number;
  color: string;
  icon: React.ReactNode;
  label: string;
  amount: string;
};

function RankingItem({ rank, color, icon, label, amount }: RankingItemProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-black text-white ${color}`}
      >
        {rank}
      </span>

      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon}
      </span>

      <span className="flex-1 text-sm font-bold text-slate-600">{label}</span>

      <span className="text-sm font-black text-slate-900">{amount}</span>
    </div>
  );
}

type ActionCardProps = {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
};

function ActionCard({
  icon,
  iconBg,
  iconColor,
  title,
  desc,
}: ActionCardProps) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:bg-slate-50">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-bold text-slate-800">{title}</p>
        <p className="mt-1 text-xs font-semibold text-slate-500">{desc}</p>
      </div>

      <ChevronRight size={18} className="text-slate-400" />
    </button>
  );
}