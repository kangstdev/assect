// app/calendar/page.tsx

import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CreditCard,
  Edit3,
  Plus,
  RefreshCw,
  Settings,
  Trash2,
  UserCircle,
  WalletCards,
} from "lucide-react";

const calendarDays = [
  { day: "27", muted: true },
  { day: "28", muted: true },
  { day: "29", muted: true },
  { day: "30", muted: true },
  {
    day: "1",
    events: [{ label: "근로자의날", type: "red" }],
  },
  {
    day: "2",
    events: [{ label: "카드값 납부일", type: "blue" }],
  },
  { day: "3" },

  { day: "4", sunday: true },
  {
    day: "5",
    sunday: true,
    events: [{ label: "어린이날", type: "red" }],
  },
  {
    day: "6",
    sunday: true,
    events: [{ label: "대체공휴일", type: "red" }],
  },
  {
    day: "7",
    events: [{ label: "정기구독 결제", type: "green" }],
  },
  { day: "8" },
  { day: "9" },
  {
    day: "10",
    events: [{ label: "통신비 결제", type: "orange" }],
  },

  { day: "11", sunday: true },
  {
    day: "12",
    events: [{ label: "월세 납부", type: "red" }],
  },
  { day: "13" },
  { day: "14" },
  {
    day: "15",
    events: [{ label: "보험료 결제", type: "orange" }],
  },
  {
    day: "16",
    selected: true,
    events: [
      { label: "급여일", type: "blue" },
      { label: "적금 입금", type: "blue" },
    ],
  },
  { day: "17" },

  { day: "18", sunday: true },
  { day: "19" },
  {
    day: "20",
    events: [{ label: "전기요금", type: "orange" }],
  },
  { day: "21" },
  {
    day: "22",
    events: [{ label: "카드값 납부일", type: "blue" }],
  },
  { day: "23" },
  {
    day: "24",
    events: [{ label: "문화의 날", type: "purple" }],
  },

  {
    day: "25",
    sunday: true,
    events: [{ label: "부부의 날", type: "purple" }],
  },
  { day: "26" },
  {
    day: "27",
    events: [{ label: "정기구독 결제", type: "green" }],
  },
  { day: "28" },
  { day: "29" },
  { day: "30" },
  {
    day: "31",
    events: [{ label: "보험료 결제", type: "orange" }],
  },

  { day: "1", muted: true },
  { day: "2", muted: true },
  { day: "3", muted: true },
  { day: "4", muted: true },
  { day: "5", muted: true },
  { day: "6", muted: true },
  { day: "7", muted: true },
];

const selectedDateHistory = [
  {
    date: "2025-05-16 (금)",
    time: "09:00",
    badge: "수입",
    badgeColor: "blue",
    icon: CalendarDays,
    title: "급여",
    category: "급여",
    amount: "+2,500,000원",
    amountColor: "text-blue-600",
    method: "계좌이체",
    memo: "5월 급여",
  },
  {
    date: "2025-05-16 (금)",
    time: "12:30",
    badge: "이체",
    badgeColor: "purple",
    icon: RefreshCw,
    title: "적금 입금",
    category: "저축",
    amount: "-300,000원",
    amountColor: "text-red-500",
    method: "계좌이체",
    memo: "목돈 마련 적금",
  },
];

const upcomingSchedules = [
  {
    date: "05.02 (금)",
    title: "카드값 납부일",
    amount: "-286,500원",
    sub: "국민카드",
    color: "blue",
  },
  {
    date: "05.07 (수)",
    title: "정기구독 결제",
    amount: "-18,900원",
    sub: "넷플릭스",
    color: "green",
  },
  {
    date: "05.12 (월)",
    title: "월세 납부",
    amount: "-500,000원",
    sub: "계좌이체",
    color: "red",
  },
  {
    date: "05.16 (금)",
    title: "급여일",
    amount: "+2,500,000원",
    sub: "계좌이체",
    color: "blue",
  },
  {
    date: "05.20 (화)",
    title: "전기요금",
    amount: "-42,300원",
    sub: "한전",
    color: "orange",
  },
];

const repeatSchedules = [
  {
    icon: CreditCard,
    title: "카드값 납부일",
    desc: "매월 2일",
    color: "blue",
  },
  {
    icon: WalletCards,
    title: "정기구독 결제",
    desc: "매월 7일, 27일",
    color: "green",
  },
  {
    icon: CalendarDays,
    title: "월세 납부",
    desc: "매월 12일",
    color: "red",
  },
  {
    icon: CalendarDays,
    title: "보험료 결제",
    desc: "매월 15일",
    color: "orange",
  },
];

const summaryItems = [
  { label: "수입", count: "2건", percent: "11%", color: "blue" },
  { label: "지출", count: "9건", percent: "50%", color: "red" },
  { label: "결제/청구", count: "5건", percent: "28%", color: "orange" },
  { label: "구독", count: "2건", percent: "11%", color: "green" },
  { label: "기념일", count: "0건", percent: "0%", color: "purple" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500 text-blue-600",
  red: "bg-red-500 text-red-500",
  orange: "bg-orange-500 text-orange-500",
  green: "bg-emerald-500 text-emerald-600",
  purple: "bg-violet-500 text-violet-600",
  slate: "bg-slate-500 text-slate-500",
};

const eventStyle: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  red: "bg-red-50 text-red-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-violet-50 text-violet-600",
};

const badgeStyle: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-violet-50 text-violet-600",
};

const iconBoxStyle: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  red: "bg-red-50 text-red-500",
  orange: "bg-orange-50 text-orange-500",
  purple: "bg-violet-50 text-violet-600",
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-900">
      {/* 상단 제목 / 아이콘 영역 */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            캘린더
          </h1>
        </div>

        <div className="flex items-center gap-5 text-slate-500">
          <Bell size={21} />
          <CircleHelp size={21} />
          <UserCircle size={23} />
        </div>
      </div>

      {/* 상단 월 선택 / 일정 추가 버튼 */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50">
            <ChevronLeft size={20} />
          </button>

          <button className="flex h-10 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
            <CalendarDays size={17} className="text-slate-500" />
            2025년 5월
            <ChevronDown size={16} className="text-slate-400" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50">
            <ChevronRight size={20} />
          </button>

          <button className="ml-3 h-10 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
            오늘
          </button>
        </div>

        <button className="flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          <Plus size={18} />
          일정/내역 추가
        </button>
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-5">
        {/* 왼쪽 메인 영역 */}
        <div className="space-y-5">
          {/* 요약 카드 */}
          <div className="grid grid-cols-3 gap-5">
            <SummaryCard
              icon={<CalendarDays size={20} />}
              iconColor="bg-blue-50 text-blue-600"
              title="이번 달 일정"
              value="18건"
              desc="완료 6건 · 진행 12건"
              visual={
                <div className="relative h-20 w-20">
                  <div className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
                    <CalendarDays size={42} className="text-blue-300" />
                  </div>
                  <div className="absolute right-3 top-2 h-7 w-1.5 rounded-full bg-blue-500" />
                  <div className="absolute right-9 top-2 h-7 w-1.5 rounded-full bg-blue-500" />
                </div>
              }
            />

            <SummaryCard
              icon={<CreditCard size={20} />}
              iconColor="bg-red-50 text-red-500"
              title="예정 결제"
              value="647,300원"
              desc="7건 · 카드결제 4건"
              visual={
                <div className="flex h-20 w-20 items-center justify-center">
                  <div className="h-14 w-16 rounded-lg bg-red-100 p-3">
                    <div className="mb-3 h-2 w-full rounded-full bg-red-400" />
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-sm bg-red-400" />
                      <div className="h-2 w-2 rounded-sm bg-red-400" />
                      <div className="h-2 w-2 rounded-sm bg-red-400" />
                    </div>
                  </div>
                </div>
              }
            />

            <SummaryCard
              icon={<WalletCards size={20} />}
              iconColor="bg-emerald-50 text-emerald-600"
              title="월말 잔액 예상"
              value="512,700원"
              desc="수입 - 지출 + 잔액"
              visual={
                <div className="flex h-20 w-28 items-end">
                  <div className="h-12 w-full rounded-t-2xl bg-gradient-to-t from-emerald-100 to-emerald-50">
                    <svg
                      viewBox="0 0 120 50"
                      className="h-full w-full overflow-visible"
                    >
                      <path
                        d="M0 36 C18 28, 24 26, 38 23 C54 20, 54 12, 70 14 C88 16, 86 4, 104 6 C112 7, 115 8, 120 3"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              }
            />
          </div>

          {/* 캘린더 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid grid-cols-7 border-b border-slate-200 text-center text-sm font-bold">
              {["일", "월", "화", "수", "목", "금", "토"].map((week, index) => (
                <div
                  key={week}
                  className={`pb-3 ${
                    index === 0
                      ? "text-red-500"
                      : index === 6
                        ? "text-blue-600"
                        : "text-slate-700"
                  }`}
                >
                  {week}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 border-l border-slate-200">
              {calendarDays.map((item, index) => (
                <div
                  key={`${item.day}-${index}`}
                  className={`min-h-[88px] border-b border-r border-slate-200 p-3 ${
                    item.selected
                      ? "rounded-lg border-2 border-blue-500 bg-blue-50/30"
                      : ""
                  }`}
                >
                  <div
                    className={`mb-2 flex h-6 w-6 items-center justify-center text-sm font-bold ${
                      item.selected
                        ? "rounded-full bg-blue-600 text-white"
                        : item.muted
                          ? "text-slate-400"
                          : item.sunday
                            ? "text-red-500"
                            : "text-slate-900"
                    }`}
                  >
                    {item.day}
                  </div>

                  <div className="space-y-1">
                    {item.events?.map((event, eventIndex) => (
                      <div
                        key={`${event.label}-${eventIndex}`}
                        className={`inline-flex max-w-full items-center gap-1 rounded px-1.5 py-0.5 text-xs font-semibold ${
                          eventStyle[event.type]
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            colorMap[event.type].split(" ")[0]
                          }`}
                        />
                        <span className="truncate">{event.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 범례 */}
            <div className="mt-4 flex items-center gap-8 px-2 text-sm font-medium text-slate-600">
              <Legend color="blue" label="수입" />
              <Legend color="red" label="지출" />
              <Legend color="orange" label="결제/청구" />
              <Legend color="green" label="구독" />
              <Legend color="purple" label="기념일" />
              <Legend color="slate" label="기타" />
            </div>
          </section>

          {/* 선택한 날짜 내역 */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-bold text-slate-900">
                선택한 날짜 내역
              </h2>
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-600">
                2건
              </span>
            </div>

            <div>
              {selectedDateHistory.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="grid grid-cols-[150px_70px_70px_120px_1fr_150px_120px_150px_80px] items-center border-b border-slate-100 px-6 py-4 text-sm last:border-b-0"
                  >
                    <div className="font-semibold text-slate-700">
                      {item.date}
                    </div>
                    <div className="text-slate-600">{item.time}</div>
                    <div>
                      <span
                        className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                          badgeStyle[item.badgeColor]
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-slate-700">
                      <Icon size={17} className="text-slate-500" />
                      {item.title}
                    </div>
                    <div className="text-slate-600">{item.category}</div>
                    <div className={`font-bold ${item.amountColor}`}>
                      {item.amount}
                    </div>
                    <div className="text-slate-600">{item.method}</div>
                    <div className="text-slate-600">{item.memo}</div>
                    <div className="flex justify-end gap-4 text-slate-500">
                      <button className="hover:text-blue-600">
                        <Edit3 size={17} />
                      </button>
                      <button className="hover:text-red-500">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end px-6 py-4">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                선택한 날짜 더보기
                <ChevronRight size={16} />
              </button>
            </div>
          </section>
        </div>

        {/* 오른쪽 사이드 영역 */}
        <aside className="space-y-5">
          {/* 다가오는 일정 */}
          <RightCard>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                다가오는 일정
              </h2>
              <button className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                더보기
              </button>
            </div>

            <div className="space-y-4">
              {upcomingSchedules.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[82px_1fr_auto] items-start border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="text-sm font-bold text-slate-700">
                    {item.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        colorMap[item.color].split(" ")[0]
                      }`}
                    />
                    <span className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">
                      {item.amount}
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-4 text-sm font-bold text-blue-600">
              전체 일정 보기
              <ChevronRight size={16} />
            </button>
          </RightCard>

          {/* 반복 일정 */}
          <RightCard>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">반복 일정</h2>
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-blue-600">
                관리
                <ChevronRight size={15} />
              </button>
            </div>

            <div className="space-y-3">
              {repeatSchedules.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          iconBoxStyle[item.color]
                        }`}
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <div className="text-sm font-bold text-slate-700">
                          {item.title}
                        </div>
                        <div className="text-xs font-medium text-slate-500">
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`rounded-md px-2 py-1 text-xs font-bold ${
                        eventStyle[item.color]
                      }`}
                    >
                      매월
                    </span>
                  </div>
                );
              })}
            </div>
          </RightCard>

          {/* 이번 달 캘린더 요약 */}
          <RightCard>
            <h2 className="mb-5 text-lg font-bold text-slate-900">
              이번 달 캘린더 요약
            </h2>

            <div className="flex items-center gap-6">
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0_11%,#ef4444_11%_61%,#f97316_61%_89%,#10b981_89%_100%)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-500">총</div>
                    <div className="text-lg font-extrabold text-slate-900">
                      18건
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {summaryItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_auto] items-center gap-2 text-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold text-slate-700">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          colorMap[item.color].split(" ")[0]
                        }`}
                      />
                      {item.label}
                    </div>
                    <div className="font-semibold text-slate-600">
                      {item.count}{" "}
                      <span className="text-slate-400">({item.percent})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RightCard>
        </aside>
      </div>
    </div>
  );
}

function SummaryCard({
  icon,
  iconColor,
  title,
  value,
  desc,
  visual,
}: {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  value: string;
  desc: string;
  visual: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[145px] items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconColor}`}
          >
            {icon}
          </div>
          <span className="text-sm font-bold text-slate-700">{title}</span>
        </div>

        <div className="mb-2 text-3xl font-extrabold tracking-tight text-slate-950">
          {value}
        </div>
        <div className="text-sm font-medium text-slate-500">{desc}</div>
      </div>

      {visual}
    </section>
  );
}

function RightCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {children}
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${colorMap[color].split(" ")[0]}`} />
      <span>{label}</span>
    </div>
  );
}