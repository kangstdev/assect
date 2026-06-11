"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  WalletCards,
  Home,
  List,
  PieChart,
  Database,
  BarChart3,
  CalendarDays,
  Settings,
  Sprout,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    name: "홈",
    href: "/",
    icon: Home,
  },
  {
    name: "내역",
    href: "/transactions",
    icon: List,
  },
  {
    name: "예산",
    href: "/budget",
    icon: PieChart,
  },
  {
    name: "자산",
    href: "/assets",
    icon: Database,
  },
  {
    name: "보고서",
    href: "/reports",
    icon: BarChart3,
  },
  {
    name: "캘린더",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    name: "설정",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[220px] shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6">
      {/* 로고 */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
          <WalletCards size={22} strokeWidth={2.4} />
        </div>

        <span className="text-2xl font-bold text-blue-600">가계부</span>
      </div>

      {/* 메뉴 */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-4 rounded-xl px-4 py-3 transition",
                isActive
                  ? "bg-blue-50 font-bold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600",
              ].join(" ")}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.4 : 2.1}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* 아래 영역 */}
      <div className="mt-auto">
        {/* 안내 카드 */}
        <div className="mb-6 rounded-2xl bg-blue-50 px-5 py-6 text-sm font-bold leading-6 text-blue-700">
          <p>
            오늘도
            <br />
            현명한 소비 습관을
            <br />
            기록해보세요!
          </p>

          <div className="mt-6 flex items-end justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-500 shadow-sm">
              <Sprout size={24} />
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-3xl text-white shadow-sm">
              💳
            </div>
          </div>
        </div>

        {/* 사용자 정보 */}
        <div className="border-t border-slate-200 pt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl">
                👩🏻
              </div>

              <span className="font-bold text-slate-800">김가현 님</span>
            </div>

            <ChevronDown size={18} className="text-slate-500" />
          </div>
        </div>
      </div>
    </aside>
  );
}