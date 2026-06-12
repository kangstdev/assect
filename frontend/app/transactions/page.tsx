import {
  Bell,
  HelpCircle,
  UserCircle,
  CalendarDays,
  ChevronDown,
  Search,
  Plus,
  ArrowDown,
  ArrowUp,
  CreditCard,
  Utensils,
  Bus,
  Gift,
  Home,
  ShoppingBag,
  BookOpen,
  Heart,
  Building2,
  Pencil,
  Trash2,
  ChevronRight,
  Camera,
  Mic,
  RefreshCw,
  WalletCards,
} from "lucide-react";

export default function TransactionsPage() {
  // 거래 내역 임시 데이터
  const transactions = [
    {
      date: "2025-05-23 (금)",
      type: "지출",
      category: "식비",
      icon: Utensils,
      merchant: "스타벅스 강남점",
      amount: "-5,800원",
      payment: "국민카드",
      memo: "아이스 아메리카노",
    },
    {
      date: "2025-05-23 (금)",
      type: "지출",
      category: "교통",
      icon: Bus,
      merchant: "카카오T",
      amount: "-12,000원",
      payment: "카카오페이",
      memo: "택시 이용",
    },
    {
      date: "2025-05-22 (목)",
      type: "지출",
      category: "식비",
      icon: Utensils,
      merchant: "이마트24",
      amount: "-8,900원",
      payment: "토스카드",
      memo: "간식 구매",
    },
    {
      date: "2025-05-21 (수)",
      type: "수입",
      category: "월급",
      icon: Building2,
      merchant: "(주)좋은회사",
      amount: "2,500,000원",
      payment: "계좌이체",
      memo: "급여",
    },
    {
      date: "2025-05-20 (화)",
      type: "지출",
      category: "주거비",
      icon: Home,
      merchant: "SK에너지",
      amount: "-120,000원",
      payment: "계좌이체",
      memo: "전기요금",
    },
    {
      date: "2025-05-18 (일)",
      type: "지출",
      category: "쇼핑",
      icon: ShoppingBag,
      merchant: "쿠팡",
      amount: "-34,500원",
      payment: "국민카드",
      memo: "생활용품 구매",
    },
    {
      date: "2025-05-17 (토)",
      type: "수입",
      category: "기타수입",
      icon: Gift,
      merchant: "블로그 원고료",
      amount: "150,000원",
      payment: "계좌이체",
      memo: "원고료 입금",
    },
    {
      date: "2025-05-15 (목)",
      type: "지출",
      category: "문화/여가",
      icon: Building2,
      merchant: "CGV",
      amount: "-13,000원",
      payment: "토스카드",
      memo: "영화 관람",
    },
    {
      date: "2025-05-14 (수)",
      type: "지출",
      category: "교육",
      icon: BookOpen,
      merchant: "클래스101",
      amount: "-29,000원",
      payment: "카카오페이",
      memo: "온라인 강의",
    },
    {
      date: "2025-05-12 (월)",
      type: "지출",
      category: "건강",
      icon: Heart,
      merchant: "올리브영",
      amount: "-46,000원",
      payment: "현금",
      memo: "스킨케어 제품",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-7">
      {/* 상단 영역 */}
      <header className="mb-7 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">내역</h1>

        <div className="flex items-center gap-5 text-slate-500">
          <Bell size={21} />
          <HelpCircle size={21} />
          <UserCircle size={24} />
        </div>
      </header>

      {/* 전체 레이아웃 */}
      <div className="grid grid-cols-[1fr_300px] gap-5">
        {/* 왼쪽 메인 콘텐츠 */}
        <main>
          {/* 필터 영역 */}
          <section className="mb-5 flex flex-wrap items-center gap-3">
            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
              <CalendarDays size={18} className="text-slate-500" />
              2025년
              <ChevronDown size={16} className="text-slate-400" />
            </button>

            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
              5월
              <ChevronDown size={16} className="text-slate-400" />
            </button>

            <div className="flex h-12 items-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <button className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                전체
              </button>
              <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600">
                수입
              </button>
              <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600">
                지출
              </button>
            </div>

            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
              전체 카테고리
              <ChevronDown size={16} className="text-slate-400" />
            </button>

            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm">
              전체 결제수단
              <ChevronDown size={16} className="text-slate-400" />
            </button>

            <div className="ml-auto flex h-12 w-[280px] items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm">
              <input
                type="text"
                placeholder="거래처, 메모 검색"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <Search size={20} className="text-slate-500" />
            </div>

            <button className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">
              <Plus size={19} />
              내역 추가
            </button>
          </section>

          {/* 요약 카드 영역 */}
          <section className="mb-5 grid grid-cols-3 gap-4">
            {/* 총 수입 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="mb-5 text-lg font-bold text-blue-600">
                    총 수입
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                    4,250,000원
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    전월 대비{" "}
                    <span className="text-blue-600">▲ 8.7%</span>
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ArrowDown size={24} />
                </div>
              </div>

              {/* 장식용 그래프 느낌 */}
              <div className="absolute bottom-0 right-8 h-16 w-56 rounded-t-[50%] bg-gradient-to-t from-blue-100 to-blue-50 opacity-80" />
            </div>

            {/* 총 지출 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="mb-5 text-lg font-bold text-red-500">
                    총 지출
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                    2,487,300원
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    전월 대비{" "}
                    <span className="text-red-500">▼ 5.3%</span>
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <ArrowUp size={24} />
                </div>
              </div>

              <div className="absolute bottom-0 right-8 h-16 w-56 rounded-t-[50%] bg-gradient-to-t from-red-100 to-red-50 opacity-80" />
            </div>

            {/* 순지출 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="mb-5 text-lg font-bold text-violet-600">
                    순지출
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                    2,487,300원
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    전월 대비{" "}
                    <span className="text-blue-600">▼ 12.1%</span>
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <CreditCard size={24} />
                </div>
              </div>

              <div className="absolute bottom-0 right-8 h-16 w-56 rounded-t-[50%] bg-gradient-to-t from-violet-100 to-violet-50 opacity-80" />
            </div>
          </section>

          {/* 거래 내역 테이블 */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="text-xl font-bold text-slate-900">거래 내역</h2>
            </div>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
                  <th className="px-6 py-4 font-bold">날짜</th>
                  <th className="px-4 py-4 font-bold">구분</th>
                  <th className="px-4 py-4 font-bold">카테고리</th>
                  <th className="px-4 py-4 font-bold">거래처</th>
                  <th className="px-4 py-4 text-right font-bold">금액</th>
                  <th className="px-4 py-4 font-bold">결제수단</th>
                  <th className="px-4 py-4 font-bold">메모</th>
                  <th className="px-6 py-4 text-center font-bold">관리</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item, index) => {
                  const Icon = item.icon;
                  const isIncome = item.type === "수입";

                  return (
                    <tr
                      key={index}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-700">
                        {item.date}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-bold ${
                            isIncome
                              ? "bg-blue-50 text-blue-600"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2 font-semibold text-slate-700">
                          <Icon size={17} className="text-slate-500" />
                          {item.category}
                        </div>
                      </td>

                      <td className="px-4 py-4 font-medium text-slate-700">
                        {item.merchant}
                      </td>

                      <td
                        className={`px-4 py-4 text-right font-extrabold ${
                          isIncome ? "text-blue-600" : "text-red-500"
                        }`}
                      >
                        {item.amount}
                      </td>

                      <td className="px-4 py-4 text-slate-700">
                        {item.payment}
                      </td>

                      <td className="px-4 py-4 text-slate-600">
                        {item.memo}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-4 text-slate-500">
                          <button className="transition hover:text-blue-600">
                            <Pencil size={17} />
                          </button>
                          <button className="transition hover:text-red-500">
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-between px-6 py-4">
              <div />

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <button className="px-2 text-slate-500">‹</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
                  3
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
                  4
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
                  5
                </button>
                <span className="px-2">...</span>
                <button className="px-2 text-slate-500">›</button>
              </div>

              <button className="flex h-10 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm">
                10개씩 보기
                <ChevronDown size={16} className="text-slate-400" />
              </button>
            </div>
          </section>
        </main>

        {/* 오른쪽 패널 */}
        <aside className="space-y-5">
          {/* 이번 달 요약 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">이번 달 요약</h2>
              <p className="text-xs font-bold text-slate-500">총 42건</p>
            </div>

            <div className="flex items-center gap-4">
              {/* 도넛 차트 느낌 */}
              <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0_26%,#ef4444_26%_38%,#f97316_38%_48%,#22c55e_48%_57%,#8b5cf6_57%_65%,#cbd5e1_65%_100%)]">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white text-center shadow-sm">
                  <span className="text-[10px] font-bold text-slate-500">
                    지출
                  </span>
                  <span className="text-[11px] font-extrabold text-slate-800">
                    2,487,300원
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2 text-xs">
                <SummaryItem color="bg-blue-600" label="식비" amount="646,800원" percent="26%" />
                <SummaryItem color="bg-red-500" label="교통" amount="288,500원" percent="12%" />
                <SummaryItem color="bg-orange-500" label="주거비" amount="260,000원" percent="10%" />
                <SummaryItem color="bg-green-500" label="쇼핑" amount="235,900원" percent="9%" />
                <SummaryItem color="bg-violet-500" label="문화/여가" amount="198,600원" percent="8%" />
                <SummaryItem color="bg-slate-300" label="기타" amount="857,500원" percent="35%" />
              </div>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4 text-center">
              <button className="inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                상세 보기
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* 자주 쓰는 필터 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
              자주 쓰는 필터
            </h2>

            <div className="space-y-3">
              <FilterButton icon="🔥" text="이번 달 지출만 보기" />
              <FilterButton icon="🍽️" text="식비 내역 보기" />
              <FilterButton icon="💳" text="카드 결제 내역" />
              <FilterButton icon="💵" text="현금 사용 내역" />
              <FilterButton icon="📈" text="전월 대비 큰 지출" />
            </div>
          </section>

          {/* 빠른 입력 팁 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
              빠른 입력 팁
            </h2>

            <div className="space-y-3">
              <TipItem
                icon={<Camera size={23} />}
                title="영수증 사진 등록"
                desc="영수증을 찍으면 자동으로 분류!"
                iconBox="bg-blue-50 text-blue-600"
              />

              <TipItem
                icon={<Mic size={23} />}
                title="음성으로 입력"
                desc="마이크 버튼으로 간편 입력!"
                iconBox="bg-violet-50 text-violet-600"
              />

              <TipItem
                icon={<RefreshCw size={23} />}
                title="반복 거래 등록"
                desc="정기 지출을 쉽게 관리하세요."
                iconBox="bg-green-50 text-green-600"
              />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

/* 이번 달 요약 아이템 */
function SummaryItem({
  color,
  label,
  amount,
  percent,
}: {
  color: string;
  label: string;
  amount: string;
  percent: string;
}) {
  return (
    <div className="grid grid-cols-[10px_1fr_auto_auto] items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="font-bold text-slate-700">{label}</span>
      <span className="text-slate-600">{amount}</span>
      <span className="font-bold text-slate-500">{percent}</span>
    </div>
  );
}

/* 자주 쓰는 필터 버튼 */
function FilterButton({ icon, text }: { icon: string; text: string }) {
  return (
    <button className="flex h-12 w-full items-center justify-between rounded-xl bg-slate-50 px-4 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
      <span className="flex items-center gap-3">
        <span>{icon}</span>
        {text}
      </span>
      <ChevronRight size={18} className="text-slate-400" />
    </button>
  );
}

/* 빠른 입력 팁 */
function TipItem({
  icon,
  title,
  desc,
  iconBox,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconBox: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBox}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-extrabold text-slate-800">{title}</p>
        <p className="mt-0.5 text-xs font-medium text-slate-500">{desc}</p>
      </div>
    </div>
  );
}