import {
  Bell,
  HelpCircle,
  UserCircle,
  CalendarDays,
  ChevronDown,
  Plus,
  ArrowDown,
  ArrowUp,
  WalletCards,
  Utensils,
  Bus,
  Home,
  ShoppingBag,
  Gift,
  Heart,
  GraduationCap,
  CreditCard,
  Phone,
  PlaySquare,
  Settings,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-8 py-6 text-slate-900">
      {/* 상단 영역 */}
      <header className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">예산</h1>
        </div>

        <div className="flex items-center gap-5">
          {/* 상단 아이콘 */}
          <div className="flex items-center gap-4 text-slate-500">
            <Bell size={20} />
            <HelpCircle size={20} />
            <UserCircle size={22} />
          </div>

          {/* 예산 설정 버튼 */}
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            <Plus size={18} />
            예산 설정
          </button>
        </div>
      </header>

      {/* 년 / 월 선택 */}
      <section className="mb-5 flex items-center gap-3">
        <button className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
          <CalendarDays size={17} className="text-slate-500" />
          2025년
          <ChevronDown size={16} className="text-slate-500" />
        </button>

        <button className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
          5월
          <ChevronDown size={16} className="text-slate-500" />
        </button>
      </section>

      {/* 본문 전체 그리드 */}
      <main className="grid grid-cols-[1fr_300px] gap-5">
        {/* 왼쪽 메인 영역 */}
        <section className="space-y-5">
          {/* 상단 통계 카드 3개 */}
          <div className="grid grid-cols-3 gap-4">
            {/* 총 예산 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <p className="text-base font-bold text-blue-600">총 예산</p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ArrowDown size={22} />
                </div>
              </div>

              <p className="mb-4 text-3xl font-bold tracking-tight">
                3,000,000원
              </p>

              <p className="text-sm font-semibold text-slate-600">
                전월 대비{" "}
                <span className="ml-1 text-blue-600">▲ 5.6%</span>
              </p>

              {/* 미니 차트 느낌 */}
              <div className="absolute bottom-0 right-0 h-20 w-56 opacity-70">
                <div className="absolute bottom-0 h-8 w-full rounded-t-full bg-blue-100" />
                <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-blue-200/80 to-transparent" />
                <div className="absolute bottom-6 left-0 h-[2px] w-full rotate-[-2deg] rounded-full bg-blue-300" />
              </div>
            </div>

            {/* 사용 금액 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <p className="text-base font-bold text-red-500">사용 금액</p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <ArrowUp size={22} />
                </div>
              </div>

              <p className="mb-4 text-3xl font-bold tracking-tight">
                2,487,300원
              </p>

              <p className="text-sm font-semibold text-slate-600">
                전월 대비{" "}
                <span className="ml-1 text-red-500">▲ 8.3%</span>
              </p>

              <div className="absolute bottom-0 right-0 h-20 w-56 opacity-70">
                <div className="absolute bottom-0 h-8 w-full rounded-t-full bg-red-100" />
                <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-red-200/80 to-transparent" />
                <div className="absolute bottom-6 left-0 h-[2px] w-full rotate-[3deg] rounded-full bg-red-300" />
              </div>
            </div>

            {/* 남은 예산 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <p className="text-base font-bold text-green-600">남은 예산</p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <WalletCards size={22} />
                </div>
              </div>

              <p className="mb-4 text-3xl font-bold tracking-tight">
                512,700원
              </p>

              <p className="text-sm font-semibold text-slate-600">
                전월 대비{" "}
                <span className="ml-1 text-blue-600">▼ 18.7%</span>
              </p>

              <div className="absolute bottom-0 right-0 h-20 w-56 opacity-70">
                <div className="absolute bottom-0 h-8 w-full rounded-t-full bg-green-100" />
                <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-green-200/80 to-transparent" />
                <div className="absolute bottom-6 left-0 h-[2px] w-full rotate-[1deg] rounded-full bg-green-300" />
              </div>
            </div>
          </div>

          {/* 카테고리별 예산 현황 */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-bold">카테고리별 예산 현황</h2>
            </div>

            <div className="overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-3 font-bold">카테고리</th>
                    <th className="px-6 py-3 font-bold">예산 금액</th>
                    <th className="px-6 py-3 font-bold">사용 금액</th>
                    <th className="px-6 py-3 font-bold">남은 금액</th>
                    <th className="px-6 py-3 font-bold">진행률</th>
                    <th className="px-6 py-3 font-bold">상태</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <BudgetRow
                    icon={<Utensils size={18} />}
                    category="식비"
                    budget="600,000원"
                    used="519,600원"
                    remain="80,400원"
                    percent={86.6}
                    status="주의"
                    statusColor="orange"
                  />

                  <BudgetRow
                    icon={<Bus size={18} />}
                    category="교통"
                    budget="300,000원"
                    used="288,500원"
                    remain="11,500원"
                    percent={96.2}
                    status="주의"
                    statusColor="orange"
                  />

                  <BudgetRow
                    icon={<Home size={18} />}
                    category="주거비"
                    budget="850,000원"
                    used="650,000원"
                    remain="200,000원"
                    percent={76.5}
                    status="정상"
                    statusColor="green"
                  />

                  <BudgetRow
                    icon={<ShoppingBag size={18} />}
                    category="쇼핑"
                    budget="250,000원"
                    used="235,900원"
                    remain="14,100원"
                    percent={94.4}
                    status="주의"
                    statusColor="orange"
                  />

                  <BudgetRow
                    icon={<Gift size={18} />}
                    category="문화/여가"
                    budget="200,000원"
                    used="198,600원"
                    remain="1,400원"
                    percent={99.3}
                    status="초과"
                    statusColor="red"
                  />

                  <BudgetRow
                    icon={<Heart size={18} />}
                    category="건강"
                    budget="100,000원"
                    used="78,800원"
                    remain="21,200원"
                    percent={78.8}
                    status="정상"
                    statusColor="green"
                  />

                  <BudgetRow
                    icon={<GraduationCap size={18} />}
                    category="교육"
                    budget="150,000원"
                    used="65,000원"
                    remain="85,000원"
                    percent={43.3}
                    status="정상"
                    statusColor="green"
                  />
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-3">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                <Settings size={16} />
                카테고리 관리
              </button>

              <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                전체 카테고리 보기
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* 고정지출 관리 */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-bold">고정지출 관리</h2>
            </div>

            <div className="overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-3 font-bold">항목</th>
                    <th className="px-6 py-3 font-bold">주기</th>
                    <th className="px-6 py-3 font-bold">예산 금액</th>
                    <th className="px-6 py-3 font-bold">다음 결제일</th>
                    <th className="px-6 py-3 font-bold">결제 수단</th>
                    <th className="px-6 py-3 font-bold">상태</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <FixedExpenseRow
                    icon={<Home size={17} />}
                    title="월세"
                    cycle="매월"
                    amount="500,000원"
                    date="2025-06-01 (일)"
                    method="계좌이체"
                  />

                  <FixedExpenseRow
                    icon={<Phone size={17} />}
                    title="통신비"
                    cycle="매월"
                    amount="60,000원"
                    date="2025-06-05 (목)"
                    method="자동이체"
                  />

                  <FixedExpenseRow
                    icon={<PlaySquare size={17} />}
                    title="구독료 (넷플릭스)"
                    cycle="매월"
                    amount="17,000원"
                    date="2025-06-10 (화)"
                    method="카드"
                  />
                </tbody>
              </table>
            </div>

            <div className="flex justify-end border-t border-slate-200 px-6 py-3">
              <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                고정지출 관리
                <ChevronRight size={16} />
              </button>
            </div>
          </section>
        </section>

        {/* 오른쪽 사이드 정보 영역 */}
        <aside className="space-y-5">
          {/* 이번 달 예산 현황 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-6 text-lg font-bold">이번 달 예산 현황</h2>

            <div className="mb-5 flex items-center gap-5">
              {/* 도넛 차트 느낌 */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0deg_298deg,#e5e7eb_298deg_360deg)]">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-xs font-semibold text-slate-500">
                    사용률
                  </span>
                  <span className="text-xl font-bold">82.9%</span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-slate-500">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    사용 금액
                  </div>
                  <p className="font-bold">2,487,300원</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2 text-slate-500">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    남은 예산
                  </div>
                  <p className="font-bold">512,700원</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <p className="mb-4 text-center text-sm font-semibold text-slate-600">
                총 예산&nbsp;&nbsp; 3,000,000원
              </p>

              <button className="mx-auto flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                상세 보기
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* 초과 위험 카테고리 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-bold">초과 위험 카테고리</h2>

            <div className="space-y-3">
              <RiskCategoryCard
                icon={<Gift size={19} />}
                title="문화/여가"
                amount="198,600원"
                desc="예산 대비 99.3%"
                color="purple"
              />

              <RiskCategoryCard
                icon={<Bus size={19} />}
                title="교통"
                amount="288,500원"
                desc="예산 대비 96.2%"
                color="blue"
              />

              <RiskCategoryCard
                icon={<Utensils size={19} />}
                title="식비"
                amount="519,600원"
                desc="예산 대비 86.6%"
                color="sky"
              />
            </div>

            <button className="mx-auto mt-5 flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
              모든 카테고리 보기
              <ChevronRight size={16} />
            </button>
          </section>

          {/* 절약 팁 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <Lightbulb size={20} className="text-yellow-500" />
                절약 팁
              </h2>

              <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                더보기
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Utensils size={24} />
              </div>

              <p className="mb-2 text-sm font-bold">식비 절약 팁</p>

              <p className="text-xs leading-5 text-slate-500">
                외식 횟수를 줄이고 집밥을 늘리면 월 10~15만원을 절약할 수
                있어요!
              </p>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

/* 카테고리별 예산 행 */
function BudgetRow({
  icon,
  category,
  budget,
  used,
  remain,
  percent,
  status,
  statusColor,
}: {
  icon: React.ReactNode;
  category: string;
  budget: string;
  used: string;
  remain: string;
  percent: number;
  status: string;
  statusColor: "green" | "orange" | "red";
}) {
  const progressColor =
    statusColor === "red"
      ? "bg-red-500"
      : statusColor === "orange"
        ? "bg-orange-500"
        : "bg-blue-600";

  const badgeColor =
    statusColor === "red"
      ? "bg-red-100 text-red-500"
      : statusColor === "orange"
        ? "bg-orange-100 text-orange-500"
        : "bg-green-100 text-green-600";

  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            {icon}
          </div>
          <span className="font-semibold">{category}</span>
        </div>
      </td>

      <td className="px-6 py-3 font-medium">{budget}</td>
      <td className="px-6 py-3 font-medium">{used}</td>
      <td className="px-6 py-3 font-medium">{remain}</td>

      <td className="px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full ${progressColor}`}
              style={{ width: `${percent}%` }}
            />
          </div>

          <span className="w-12 text-xs font-semibold text-slate-500">
            {percent}%
          </span>
        </div>
      </td>

      <td className="px-6 py-3">
        <span className={`rounded-md px-2 py-1 text-xs font-bold ${badgeColor}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

/* 고정지출 행 */
function FixedExpenseRow({
  icon,
  title,
  cycle,
  amount,
  date,
  method,
}: {
  icon: React.ReactNode;
  title: string;
  cycle: string;
  amount: string;
  date: string;
  method: string;
}) {
  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="text-slate-500">{icon}</span>
          <span className="font-semibold">{title}</span>
        </div>
      </td>

      <td className="px-6 py-3 font-medium">{cycle}</td>
      <td className="px-6 py-3 font-medium">{amount}</td>
      <td className="px-6 py-3 font-medium">{date}</td>
      <td className="px-6 py-3 font-medium">{method}</td>

      <td className="px-6 py-3">
        <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-bold text-green-600">
          정상
        </span>
      </td>
    </tr>
  );
}

/* 오른쪽 위험 카테고리 카드 */
function RiskCategoryCard({
  icon,
  title,
  amount,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  amount: string;
  desc: string;
  color: "purple" | "blue" | "sky";
}) {
  const colorClass =
    color === "purple"
      ? "bg-purple-100 text-purple-600"
      : color === "blue"
        ? "bg-blue-100 text-blue-600"
        : "bg-sky-100 text-sky-600";

  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="mt-1 text-xs font-bold text-red-500">{desc}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-sm font-bold">{amount}</p>
        <ChevronRight size={17} className="text-slate-400" />
      </div>
    </div>
  );
}