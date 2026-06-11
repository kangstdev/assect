"use client";

import {
  Bell,
  CircleHelp,
  UserCircle,
  Plus,
  ArrowDown,
  ArrowUp,
  CreditCard,
  Utensils,
  Bus,
  House,
  ShoppingBag,
  Film,
  Briefcase,
  Gift,
  Pencil,
  Trash2,
  ChevronDown,
  CalendarDays
} from "lucide-react";
import { useState } from "react";
import { useMemo } from "react";
export default function HomePage() {

type TransactionType = "income" | "expense";

type Transaction = {
  id: number;
  type: TransactionType;
  title: string;
  category:string;
  amount: number;
  date:string;
};

const [transactions , setTransactions] = useState<Transaction[]>([])
const [type, setType] = useState<TransactionType>("expense");
const [title, setTitle] = useState("");
const [category, setCateogry] = useState("");
const [amount, setAmount] = useState("");


// 수입 합계 계산 
const totalIncome = useMemo(() => {
  return transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
},[transactions]);

// 지출 합계 게산 
const totalExpense = useMemo(() =>{
   return transactions 
   .filter((item) => item.type === "expense")
   .reduce((sum, item) => sum + item.amount, 0);
},[transactions]);

// 잔액 계산 
const balance =  totalIncome- totalExpense;

const formatmoney = (value: number) => {
  return value.toLocaleString("ko-KR") + "원"
}

// 거래 추가 
const handleAddTransaction = () => {
  const newTransaction: Transaction = {
    id: Date.now(),
    type,
    title,
    category,
    amount: Number(amount),
    date: new Date().toISOString().slice(0,10),
  };

  setTransactions((prev) => [newTransaction,...prev])
}

//삭제
const handleDeleteTransaction = (id:number) => {
  setTransactions((prev)=> prev.filter((item) => item.id !== id));
}

  return (
      <div className="flex min-h-screen">
       

       {/* 가운데 메인 영역 */}
<section className="flex-1 px-8 py-8">
  {/* 상단 헤더 */}
  <div className="mb-8 flex items-center justify-between">
    <h1 className="text-4xl font-bold text-slate-900">가계부</h1>

    <div className="flex items-center gap-6 text-slate-600">
      <Bell size={24} strokeWidth={2} />
      <CircleHelp size={24} strokeWidth={2} />
      <UserCircle size={26} strokeWidth={2} />
    </div>
  </div>

  {/* 필터 + 내역 추가 */}
  <div className="mb-6 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
        <CalendarDays size={20} className="text-slate-500" />
        <span>2025년</span>
        <ChevronDown size={18} className="text-slate-500" />
      </button>

      <button className="flex h-12 items-center gap-8 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
        <span>5월</span>
        <ChevronDown size={18} className="text-slate-500" />
      </button>
    </div>

    <button className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 text-base font-semibold text-white shadow-sm">
      <Plus size={20} />
      <span>내역 추가</span>
    </button>
  </div>

  {/* 수입 / 지출 / 잔액 카드 */}
  <div className="mb-6 grid grid-cols-3 gap-5">
    {/* 총 수입 카드 */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">총 수입</span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ArrowDown size={26} />
        </div>
      </div>

      <p className="text-3xl font-bold text-slate-900">{formatmoney(totalIncome)}</p>

      <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
        <span className="text-slate-700">전월 대비</span>
        <span className="text-blue-600">▲ 8.7%</span>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
        <svg viewBox="0 0 300 70" className="h-full w-full">
          <path
            d="M0 35 C40 20, 70 55, 115 45 C155 35, 180 45, 215 30 C250 15, 275 25, 300 10"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="3"
          />
          <path
            d="M0 35 C40 20, 70 55, 115 45 C155 35, 180 45, 215 30 C250 15, 275 25, 300 10 L300 70 L0 70 Z"
            fill="#dbeafe"
          />
        </svg>
      </div>
    </div>

    {/* 총 지출 카드 */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <span className="text-lg font-bold text-red-500">총 지출</span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
          <ArrowUp size={26} />
        </div>
      </div>

      <p className="text-3xl font-bold text-slate-900">{formatmoney(totalExpense)}</p>

      <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
        <span className="text-slate-700">전월 대비</span>
        <span className="text-red-500">▼ 5.3%</span>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
        <svg viewBox="0 0 300 70" className="h-full w-full">
          <path
            d="M0 25 C40 20, 65 50, 110 45 C150 40, 175 50, 215 40 C250 28, 275 20, 300 18"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="3"
          />
          <path
            d="M0 25 C40 20, 65 50, 110 45 C150 40, 175 50, 215 40 C250 28, 275 20, 300 18 L300 70 L0 70 Z"
            fill="#fee2e2"
          />
        </svg>
      </div>
    </div>

    {/* 잔액 카드 */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">잔액</span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CreditCard size={26} />
        </div>
      </div>

      <p className="text-3xl font-bold text-slate-900">{formatmoney(balance)}</p>

      <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
        <span className="text-slate-700">전월 대비</span>
        <span className="text-blue-600">▲ 23.1%</span>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
        <svg viewBox="0 0 300 70" className="h-full w-full">
          <path
            d="M0 38 C35 25, 65 35, 100 45 C140 55, 170 35, 210 40 C250 45, 280 30, 300 12"
            fill="none"
            stroke="#86efac"
            strokeWidth="3"
          />
          <path
            d="M0 38 C35 25, 65 35, 100 45 C140 55, 170 35, 210 40 C250 45, 280 30, 300 12 L300 70 L0 70 Z"
            fill="#dcfce7"
          />
        </svg>
      </div>
    </div>
  </div>

  {/* 거래 내역 */}
  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="border-b border-slate-200 px-6 py-5">
      <h2 className="text-xl font-bold text-slate-900">거래 내역</h2>
    </div>

    <div className="overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-slate-50">
          <tr className="text-left text-sm font-bold text-slate-600">
            <th className="px-5 py-4">날짜</th>
            <th className="px-5 py-4">구분</th>
            <th className="px-5 py-4">카테고리</th>
            <th className="px-5 py-4">거래처</th>
            <th className="px-5 py-4 text-right">금액</th>
            <th className="px-5 py-4">결제수단</th>
            <th className="px-5 py-4">메모</th>
            <th className="px-5 py-4 text-center">관리</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {transactions.map((item) =>(
            <tr key={item.id} className="border-t border-slate-200">
              <td className="px-5 py-4 font-medium text-slate-700"></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

    {/* 페이지네이션 */}
    <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
      <div></div>

      <div className="flex items-center gap-4">
        <button className="text-slate-500">‹</button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
          1
        </button>
        <button className="font-semibold text-slate-700">2</button>
        <button className="font-semibold text-slate-700">3</button>
        <button className="font-semibold text-slate-700">4</button>
        <button className="font-semibold text-slate-700">5</button>
        <button className="text-slate-500">›</button>
      </div>

      <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
        10개씩 보기
        <ChevronDown size={16} />
      </button>
    </div>
  </div>
</section>

        {/* 오른쪽 요약 패널 */}
      {/* 오른쪽 요약 패널 */}
<aside className="w-[340px] shrink-0 px-6 py-8">
  <div className="space-y-5">
    {/* 6월 요약 카드 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">6월 요약</h2>

      <div className="mt-5 flex items-center gap-5">
        {/* 도넛 차트 */}
        <div
          className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "conic-gradient(#3b82f6 0deg 95deg, #ef4444 95deg 140deg, #f59e0b 140deg 178deg, #22c55e 178deg 212deg, #8b5cf6 212deg 242deg, #d1d5db 242deg 360deg)",
          }}
        >
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white text-center">
            <span className="text-xs font-bold text-slate-700">지출</span>
            <span className="text-xs font-bold text-slate-900">2,487,300원</span>
          </div>
        </div>

        {/* 총 지출 */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-500">총 지출</p>
          <p className="mt-1 text-xl font-bold text-slate-900">2,487,300원</p>
          <p className="mt-1 text-sm text-slate-500">예산 대비 83%</p>

          <div className="mt-3 h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[83%] rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>

      {/* 카테고리 목록 */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
            <span className="text-slate-600">식비</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-700">646,800원</span>
            <span className="w-8 text-right text-slate-500">26%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
            <span className="text-slate-600">교통</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-700">288,500원</span>
            <span className="w-8 text-right text-slate-500">12%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-600">주거비</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-700">260,000원</span>
            <span className="w-8 text-right text-slate-500">10%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <span className="text-slate-600">쇼핑</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-700">235,900원</span>
            <span className="w-8 text-right text-slate-500">9%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500"></span>
            <span className="text-slate-600">문화/여가</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-700">198,600원</span>
            <span className="w-8 text-right text-slate-500">8%</span>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-4 text-center">
        <button className="text-sm font-bold text-blue-600">상세 보기 〉</button>
      </div>
    </div>

    {/* 이번 달 비교 카드 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">이번 달 비교</h2>
        <button className="text-sm font-semibold text-slate-500">더보기 〉</button>
      </div>

      <p className="mb-5 text-sm text-slate-500">전월 대비</p>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              💰
            </div>
            <span className="font-semibold text-slate-700">수입</span>
          </div>

          <div className="text-right">
            <p className="font-bold text-slate-900">+370,000원</p>
            <p className="mt-1 text-sm font-bold text-green-500">▲ 8.3%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
              🛍️
            </div>
            <span className="font-semibold text-slate-700">지출</span>
          </div>

          <div className="text-right">
            <p className="font-bold text-slate-900">+168,000원</p>
            <p className="mt-1 text-sm font-bold text-red-500">▲ 5.7%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
              🐷
            </div>
            <span className="font-semibold text-slate-700">잔액</span>
          </div>

          <div className="text-right">
            <p className="font-bold text-slate-900">+202,000원</p>
            <p className="mt-1 text-sm font-bold text-green-500">▲ 12.6%</p>
          </div>
        </div>
      </div>
    </div>

    {/* 예산 현황 카드 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">이번 달 예산 현황</h2>
        <button className="text-sm font-bold text-blue-600">관리</button>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-slate-600">총 예산 3,000,000원</span>
        <span className="text-2xl font-bold text-blue-600">82%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-100">
        <div className="h-3 w-[82%] rounded-full bg-blue-600"></div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">사용 금액</p>
          <p className="mt-1 font-bold text-slate-900">2,487,300원</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">남은 금액</p>
          <p className="mt-1 font-bold text-slate-900">512,700원</p>
        </div>
      </div>
    </div>
  </div>
</aside>
      </div>
  );
}