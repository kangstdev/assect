import {
  Bell,
  HelpCircle,
  UserCircle,
  CalendarDays,
  ChevronDown,
  Plus,
  ArrowDown,
  ArrowUp,
  Wallet,
  CreditCard,
  TrendingUp,
  Package,
  Landmark,
  BarChart3,
  Pencil,
  Trash2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* 상단 제목 영역 */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">자산</h1>

        <div className="flex items-center gap-5 text-slate-500">
          <Bell size={20} />
          <HelpCircle size={20} />
          <UserCircle size={22} />
        </div>
      </header>

      {/* 날짜 필터 + 자산 추가 버튼 */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm">
            <CalendarDays size={17} />
            2025년
            <ChevronDown size={16} className="text-slate-400" />
          </button>

          <button className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm">
            5월
            <ChevronDown size={16} className="text-slate-400" />
          </button>
        </div>

        <button className="flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          <Plus size={18} />
          자산 추가
        </button>
      </section>

      {/* 전체 레이아웃 */}
      <div className="grid grid-cols-[1fr_320px] gap-6">
        {/* 왼쪽 메인 영역 */}
        <main className="space-y-6">
          {/* 상단 요약 카드 */}
          <section className="grid grid-cols-3 gap-5">
            <SummaryCard
              title="총 자산"
              amount="38,250,000원"
              change="3.2%"
              type="up"
              color="blue"
              iconType="down"
            />

            <SummaryCard
              title="총 부채"
              amount="8,450,000원"
              change="1.5%"
              type="down"
              color="red"
              iconType="up"
            />

            <SummaryCard
              title="순자산"
              amount="29,800,000원"
              change="4.6%"
              type="up"
              color="green"
              iconType="wallet"
            />
          </section>

          {/* 자산 구성 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">
              자산 구성
            </h2>

            <div className="grid grid-cols-[430px_1fr] gap-8">
              {/* 도넛 차트 영역 */}
              <div className="flex items-center justify-center gap-8">
                <div className="relative flex h-[230px] w-[230px] items-center justify-center rounded-full bg-[conic-gradient(#3b82f6_0deg_140deg,#4ade80_140deg_270deg,#8b5cf6_270deg_324deg,#f87171_324deg_360deg)]">
                  <div className="flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-sm font-semibold text-slate-500">
                      총 자산
                    </span>
                    <strong className="text-lg font-bold text-slate-900">
                      38,250,000원
                    </strong>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <Legend color="bg-blue-500" name="현금/예금" value="39%" />
                  <Legend color="bg-green-400" name="투자" value="36%" />
                  <Legend color="bg-violet-500" name="기타 자산" value="15%" />
                  <Legend color="bg-red-400" name="카드/대출" value="10%" />
                </div>
              </div>

              {/* 자산 카테고리 카드 */}
              <div className="grid grid-cols-2 gap-4">
                <AssetCategoryCard
                  icon={<Landmark size={18} />}
                  title="현금/예금"
                  amount="14,950,000원"
                  change="2.8%"
                  color="blue"
                  items={[
                    ["토스뱅크 통장", "5,200,000원"],
                    ["국민은행 입출금", "4,300,000원"],
                    ["청년적금", "5,450,000원"],
                  ]}
                />

                <AssetCategoryCard
                  icon={<TrendingUp size={18} />}
                  title="투자"
                  amount="13,780,000원"
                  change="4.6%"
                  color="green"
                  items={[
                    ["삼성증권 종합계좌", "8,900,000원"],
                    ["ETF (TIGER 200)", "3,150,000원"],
                    ["미국주식 (애플)", "1,730,000원"],
                  ]}
                />

                <AssetCategoryCard
                  icon={<CreditCard size={18} />}
                  title="카드/대출"
                  amount="-3,950,000원"
                  change="1.9%"
                  color="red"
                  items={[
                    ["신용카드", "-1,250,000원"],
                    ["학자금대출", "-2,700,000원"],
                  ]}
                />

                <AssetCategoryCard
                  icon={<Package size={18} />}
                  title="기타 자산"
                  amount="5,720,000원"
                  change="1.2%"
                  color="violet"
                  items={[
                    ["자동차", "4,500,000원"],
                    ["귀금속", "1,220,000원"],
                  ]}
                />
              </div>
            </div>
          </section>

          {/* 계좌 및 자산 목록 */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="text-xl font-bold text-slate-900">
                계좌 및 자산 목록
              </h2>
            </div>

            <div className="overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-5 py-4 font-semibold">구분</th>
                    <th className="px-5 py-4 font-semibold">기관</th>
                    <th className="px-5 py-4 font-semibold">종류</th>
                    <th className="px-5 py-4 font-semibold">계좌/상품명</th>
                    <th className="px-5 py-4 text-right font-semibold">잔액</th>
                    <th className="px-5 py-4 text-right font-semibold">
                      변동 (전월 대비)
                    </th>
                    <th className="px-5 py-4 text-center font-semibold">
                      관리
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <AssetRow
                    category="현금/예금"
                    categoryColor="blue"
                    company="토스뱅크"
                    type="입출금"
                    name="토스뱅크 통장"
                    amount="5,200,000원"
                    change="120,000원 (2.4%)"
                    positive
                  />

                  <AssetRow
                    category="현금/예금"
                    categoryColor="blue"
                    company="국민은행"
                    type="입출금"
                    name="KB 직장인우대통장"
                    amount="4,300,000원"
                    change="80,000원 (1.8%)"
                    positive={false}
                  />

                  <AssetRow
                    category="현금/예금"
                    categoryColor="blue"
                    company="토스뱅크"
                    type="적금"
                    name="청년적금"
                    amount="5,450,000원"
                    change="150,000원 (2.8%)"
                    positive
                  />

                  <AssetRow
                    category="투자"
                    categoryColor="green"
                    company="삼성증권"
                    type="종합계좌"
                    name="종합투자계좌"
                    amount="8,900,000원"
                    change="390,000원 (4.6%)"
                    positive
                  />

                  <AssetRow
                    category="투자"
                    categoryColor="green"
                    company="삼성증권"
                    type="ETF"
                    name="TIGER 200"
                    amount="3,150,000원"
                    change="120,000원 (4.0%)"
                    positive
                  />
                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
              <div />

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <ChevronLeft size={17} />

                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-semibold text-white">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100">
                  2
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100">
                  3
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100">
                  4
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100">
                  5
                </button>

                <span>...</span>

                <ChevronRight size={17} />
              </div>

              <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600">
                10개씩 보기
                <ChevronDown size={16} />
              </button>
            </div>
          </section>
        </main>

        {/* 오른쪽 사이드 영역 */}
        <aside className="space-y-5">
          {/* 자산 비중 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold text-slate-900">
              자산 비중
            </h2>

            <div className="mb-5 flex items-center justify-center gap-5">
              <div className="relative flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#3b82f6_0deg_140deg,#4ade80_140deg_270deg,#8b5cf6_270deg_324deg,#f87171_324deg_360deg)]">
                <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-xs font-semibold text-slate-500">
                    총 자산
                  </span>
                  <strong className="text-xs font-bold text-slate-900">
                    38,250,000원
                  </strong>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <Legend color="bg-blue-500" name="현금/예금" value="39%" />
                <Legend color="bg-green-400" name="투자" value="36%" />
                <Legend color="bg-violet-500" name="기타 자산" value="15%" />
                <Legend color="bg-red-400" name="카드/대출" value="10%" />
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600">
              상세 보기
              <ChevronRight size={16} />
            </button>
          </section>

          {/* 이번 달 변동 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                이번 달 변동
              </h2>

              <button className="flex items-center gap-1 text-sm font-semibold text-slate-500">
                더보기
                <ChevronRight size={15} />
              </button>
            </div>

            <p className="mb-5 text-sm font-semibold text-slate-500">
              전월 대비
            </p>

            <div className="space-y-5">
              <MonthlyChangeRow
                icon={<Landmark size={16} />}
                iconColor="blue"
                title="총 자산"
                amount="+1,190,000원"
                change="3.2%"
                positive
              />

              <MonthlyChangeRow
                icon={<CreditCard size={16} />}
                iconColor="red"
                title="총 부채"
                amount="-130,000원"
                change="1.5%"
                positive={false}
              />

              <MonthlyChangeRow
                icon={<Wallet size={16} />}
                iconColor="green"
                title="순자산"
                amount="+1,320,000원"
                change="4.6%"
                positive
              />
            </div>
          </section>

          {/* 목표 자산 달성률 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                목표 자산 달성률
              </h2>

              <button className="text-sm font-semibold text-blue-600">
                관리
              </button>
            </div>

            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-500">
                  내 집 마련 목표
                </p>
              </div>

              <strong className="text-3xl font-bold text-blue-600">67%</strong>
            </div>

            <div className="mb-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[67%] rounded-full bg-blue-600" />
            </div>

            <div className="mb-6 flex items-center justify-between text-sm">
              <div>
                <p className="mb-1 text-slate-500">현재</p>
                <strong className="font-bold text-slate-900">
                  29,800,000원
                </strong>
              </div>

              <div className="text-right">
                <p className="mb-1 text-slate-500">목표</p>
                <strong className="font-bold text-slate-900">
                  45,000,000원
                </strong>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600">
              목표 설정/변경
              <ChevronRight size={16} />
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}

/* =========================
   상단 요약 카드 컴포넌트
========================= */

function SummaryCard({
  title,
  amount,
  change,
  type,
  color,
  iconType,
}: {
  title: string;
  amount: string;
  change: string;
  type: "up" | "down";
  color: "blue" | "red" | "green";
  iconType: "up" | "down" | "wallet";
}) {
  const colorMap = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-50",
      chart: "from-blue-100 to-blue-50",
      border: "stroke-blue-300",
    },
    red: {
      text: "text-red-500",
      bg: "bg-red-50",
      chart: "from-red-100 to-red-50",
      border: "stroke-red-300",
    },
    green: {
      text: "text-green-600",
      bg: "bg-green-50",
      chart: "from-green-100 to-green-50",
      border: "stroke-green-300",
    },
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className={`text-lg font-bold ${colorMap[color].text}`}>
            {title}
          </h3>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${colorMap[color].bg} ${colorMap[color].text}`}
          >
            {iconType === "up" && <ArrowUp size={22} />}
            {iconType === "down" && <ArrowDown size={22} />}
            {iconType === "wallet" && <Wallet size={22} />}
          </div>
        </div>

        <strong className="mb-4 block text-3xl font-bold text-slate-900">
          {amount}
        </strong>

        <p className="text-sm font-bold text-slate-700">
          전월 대비{" "}
          <span
            className={type === "up" ? "text-blue-600" : "text-red-500"}
          >
            {type === "up" ? "▲" : "▼"} {change}
          </span>
        </p>
      </div>

      {/* 미니 차트 */}
      <div className="absolute bottom-0 right-0 h-24 w-[75%] opacity-80">
        <svg viewBox="0 0 300 100" className="h-full w-full">
          <path
            d="M0 80 C45 40, 80 70, 120 55 C160 38, 190 75, 230 45 C260 25, 285 35, 300 20 L300 100 L0 100 Z"
            className={`fill-current ${
              color === "blue"
                ? "text-blue-100"
                : color === "red"
                ? "text-red-100"
                : "text-green-100"
            }`}
          />
          <path
            d="M0 80 C45 40, 80 70, 120 55 C160 38, 190 75, 230 45 C260 25, 285 35, 300 20"
            fill="none"
            strokeWidth="3"
            className={
              color === "blue"
                ? "stroke-blue-300"
                : color === "red"
                ? "stroke-red-300"
                : "stroke-green-300"
            }
          />
        </svg>
      </div>
    </div>
  );
}

/* =========================
   범례 컴포넌트
========================= */

function Legend({
  color,
  name,
  value,
}: {
  color: string;
  name: string;
  value: string;
}) {
  return (
    <div className="flex min-w-[150px] items-center justify-between gap-5">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <span className="font-semibold text-slate-600">{name}</span>
      </div>

      <strong className="font-bold text-slate-700">{value}</strong>
    </div>
  );
}

/* =========================
   자산 카테고리 카드
========================= */

function AssetCategoryCard({
  icon,
  title,
  amount,
  change,
  color,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  amount: string;
  change: string;
  color: "blue" | "green" | "red" | "violet";
  items: [string, string][];
}) {
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    violet: {
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${colorMap[color].bg} ${colorMap[color].text}`}
          >
            {icon}
          </div>

          <h3 className={`font-bold ${colorMap[color].text}`}>{title}</h3>
        </div>

        <div className="text-right">
          <strong className="block font-bold text-slate-900">{amount}</strong>
          <span
            className={`text-xs font-bold ${
              color === "red" ? "text-red-500" : "text-green-600"
            }`}
          >
            {color === "red" ? "▼" : "▲"} {change}
          </span>
        </div>
      </div>

      <div className="mb-4 space-y-2 text-sm">
        {items.map(([name, price]) => (
          <div key={name} className="flex items-center justify-between">
            <span className="text-slate-600">{name}</span>
            <strong className="font-semibold text-slate-700">{price}</strong>
          </div>
        ))}
      </div>

      <button className="mx-auto flex items-center gap-1 text-sm font-semibold text-blue-600">
        자세히 보기
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

/* =========================
   자산 목록 테이블 행
========================= */

function AssetRow({
  category,
  categoryColor,
  company,
  type,
  name,
  amount,
  change,
  positive,
}: {
  category: string;
  categoryColor: "blue" | "green";
  company: string;
  type: string;
  name: string;
  amount: string;
  change: string;
  positive: boolean;
}) {
  return (
    <tr className="text-slate-700 hover:bg-slate-50">
      <td className="px-5 py-3">
        <span
          className={`rounded-md px-2 py-1 text-xs font-bold ${
            categoryColor === "blue"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {category}
        </span>
      </td>

      <td className="px-5 py-3 font-medium">{company}</td>
      <td className="px-5 py-3">{type}</td>
      <td className="px-5 py-3 font-medium">{name}</td>

      <td className="px-5 py-3 text-right font-bold text-slate-900">
        {amount}
      </td>

      <td
        className={`px-5 py-3 text-right font-bold ${
          positive ? "text-green-600" : "text-red-500"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </td>

      <td className="px-5 py-3">
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <button className="hover:text-blue-600">
            <Pencil size={17} />
          </button>

          <button className="hover:text-red-500">
            <Trash2 size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
}

/* =========================
   오른쪽 이번 달 변동 행
========================= */

function MonthlyChangeRow({
  icon,
  iconColor,
  title,
  amount,
  change,
  positive,
}: {
  icon: React.ReactNode;
  iconColor: "blue" | "red" | "green";
  title: string;
  amount: string;
  change: string;
  positive: boolean;
}) {
  const iconColorMap = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-500",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${iconColorMap[iconColor]}`}
        >
          {icon}
        </div>

        <span className="font-bold text-slate-700">{title}</span>
      </div>

      <div className="text-right">
        <strong className="block font-bold text-slate-900">{amount}</strong>
        <span
          className={`text-xs font-bold ${
            positive ? "text-green-600" : "text-red-500"
          }`}
        >
          {positive ? "▲" : "▼"} {change}
        </span>
      </div>
    </div>
  );
}