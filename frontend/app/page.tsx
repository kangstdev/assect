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
  CalendarDays,
} from "lucide-react";

import { useMemo, useState } from "react";
import type { Transaction, TransactionType } from "./types/transaction";
import HomeRight from "@/components/layout/HomeRight";

export default function HomePage() {
  const today = new Date();
  const selectedYear = today.getFullYear();
  const selectedMonth = today.getMonth() + 1;

  const monthlyBudget = 3000000;

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: "expense", title: "스타벅스", category: "식비", amount: 6500, date: "2026-06-12", payment: "토스카드", memo: "아이스 아메리카노" },
    { id: 2, type: "expense", title: "카카오T", category: "교통", amount: 12000, date: "2026-06-11", payment: "카카오페이", memo: "택시 이용" },
    { id: 3, type: "expense", title: "이마트24", category: "식비", amount: 8900, date: "2026-06-10", payment: "토스카드", memo: "간식 구매" },
    { id: 4, type: "income", title: "(주)좋은회사", category: "월급", amount: 2500000, date: "2026-06-10", payment: "계좌이체", memo: "급여" },
    { id: 5, type: "expense", title: "SK에너지", category: "주거비", amount: 120000, date: "2026-06-09", payment: "계좌이체", memo: "전기요금" },
    { id: 6, type: "expense", title: "쿠팡", category: "쇼핑", amount: 34500, date: "2026-06-08", payment: "국민카드", memo: "생활용품 구매" },
    { id: 7, type: "income", title: "블로그 원고료", category: "기타수입", amount: 150000, date: "2026-06-07", payment: "계좌이체", memo: "원고료 입금" },
    { id: 8, type: "expense", title: "CGV", category: "문화/여가", amount: 13000, date: "2026-06-06", payment: "토스카드", memo: "영화 관람" },
  ]);

  const [type, setType] = useState<TransactionType>("expense");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [memo, setMemo] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const totalIncome = useMemo(() =>
    transactions.filter((i) => i.type === "income").reduce((s, i) => s + i.amount, 0),
    [transactions]
  );

  const totalExpense = useMemo(() =>
    transactions.filter((i) => i.type === "expense").reduce((s, i) => s + i.amount, 0),
    [transactions]
  );

  const balance = totalIncome - totalExpense;

  const budgetUsagePercent = useMemo(() =>
    monthlyBudget === 0 ? 0 : Math.min(100, Math.round((totalExpense / monthlyBudget) * 100)),
    [totalExpense]
  );

  const categoryColorList = [
    { dotClassName: "bg-blue-500", chartColor: "#3b82f6" },
    { dotClassName: "bg-red-500", chartColor: "#ef4444" },
    { dotClassName: "bg-amber-500", chartColor: "#f59e0b" },
    { dotClassName: "bg-green-500", chartColor: "#22c55e" },
    { dotClassName: "bg-violet-500", chartColor: "#8b5cf6" },
    { dotClassName: "bg-pink-500", chartColor: "#ec4899" },
  ];

  const categorySummaries = useMemo(() => {
    const categoryMap: Record<string, number> = {};
    transactions
      .filter((i) => i.type === "expense")
      .forEach((i) => { categoryMap[i.category] = (categoryMap[i.category] || 0) + i.amount; });
    return Object.entries(categoryMap)
      .map(([categoryName, categoryAmount], index) => {
        const color = categoryColorList[index % categoryColorList.length];
        return {
          categoryName,
          categoryAmount,
          percent: totalExpense === 0 ? 0 : Math.round((categoryAmount / totalExpense) * 100),
          dotClassName: color.dotClassName,
          chartColor: color.chartColor,
        };
      })
      .sort((a, b) => b.categoryAmount - a.categoryAmount);
  }, [transactions, totalExpense]);

  const donutGradient = useMemo(() => {
    if (totalExpense === 0 || categorySummaries.length === 0) return "conic-gradient(#e5e7eb 0deg 360deg)";
    let startDeg = 0;
    const gradientItems = categorySummaries.map((item) => {
      const endDeg = startDeg + (item.categoryAmount / totalExpense) * 360;
      const text = `${item.chartColor} ${startDeg}deg ${endDeg}deg`;
      startDeg = endDeg;
      return text;
    });
    if (startDeg < 360) gradientItems.push(`#e5e7eb ${startDeg}deg 360deg`);
    return `conic-gradient(${gradientItems.join(", ")})`;
  }, [categorySummaries, totalExpense]);

  const formatMoney = (value: number) => value.toLocaleString("ko-KR") + "원";
  const formatDate = (value: string) => value;

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName === "식비") return <Utensils size={18} />;
    if (categoryName === "교통") return <Bus size={18} />;
    if (categoryName === "주거비") return <House size={18} />;
    if (categoryName === "쇼핑") return <ShoppingBag size={18} />;
    if (categoryName === "문화/여가") return <Film size={18} />;
    if (categoryName === "월급") return <Briefcase size={18} />;
    if (categoryName === "기타수입") return <Gift size={18} />;
    return <CreditCard size={18} />;
  };

  const resetAddForm = () => {
    setType("expense"); setTitle(""); setCategory(""); setAmount(""); setPayment(""); setMemo("");
  };

  const handleCloseAddModal = () => { resetAddForm(); setIsAddModalOpen(false); };

  const handleAddTransaction = () => {
    if (title.trim() === "") return alert("내용을 입력해주세요.");
    if (category.trim() === "") return alert("카테고리를 입력해주세요.");
    if (amount.trim() === "" || Number(amount) <= 0) return alert("금액을 올바르게 입력해주세요.");
    const newTransaction: Transaction = {
      id: Date.now(), type, title, category,
      amount: Number(amount),
      date: new Date().toISOString().slice(0, 10),
      payment: payment.trim() === "" ? "-" : payment,
      memo: memo.trim() === "" ? "-" : memo,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
    resetAddForm();
    setIsAddModalOpen(false);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 메인 영역 */}
      <section className="flex-1 min-w-0 px-8 py-8 space-y-6">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-900">가계부</h1>
          <div className="flex items-center gap-6 text-slate-600">
            <Bell size={24} strokeWidth={2} />
            <CircleHelp size={24} strokeWidth={2} />
            <UserCircle size={26} strokeWidth={2} />
          </div>
        </div>

        {/* 필터 + 내역 추가 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
              <CalendarDays size={20} className="text-slate-500" />
              <span>{selectedYear}년</span>
              <ChevronDown size={18} className="text-slate-500" />
            </button>
            <button className="flex h-12 items-center gap-8 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
              <span>{selectedMonth}월</span>
              <ChevronDown size={18} className="text-slate-500" />
            </button>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>내역 추가</span>
          </button>
        </div>

        {/* 수입 / 지출 / 잔액 카드 */}
        <div className="grid grid-cols-3 gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">총 수입</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600"><ArrowDown size={26} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatMoney(totalIncome)}</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">현재 월 기준</span>
              <span className="text-blue-600">수입 합계</span>
            </div>
            <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
              <svg viewBox="0 0 300 70" className="h-full w-full">
                <path d="M0 35 C40 20, 70 55, 115 45 C155 35, 180 45, 215 30 C250 15, 275 25, 300 10" fill="none" stroke="#93c5fd" strokeWidth="3" />
                <path d="M0 35 C40 20, 70 55, 115 45 C155 35, 180 45, 215 30 C250 15, 275 25, 300 10 L300 70 L0 70 Z" fill="#dbeafe" />
              </svg>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-lg font-bold text-red-500">총 지출</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500"><ArrowUp size={26} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatMoney(totalExpense)}</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">현재 월 기준</span>
              <span className="text-red-500">지출 합계</span>
            </div>
            <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
              <svg viewBox="0 0 300 70" className="h-full w-full">
                <path d="M0 25 C40 20, 65 50, 110 45 C150 40, 175 50, 215 40 C250 28, 275 20, 300 18" fill="none" stroke="#fca5a5" strokeWidth="3" />
                <path d="M0 25 C40 20, 65 50, 110 45 C150 40, 175 50, 215 40 C250 28, 275 20, 300 18 L300 70 L0 70 Z" fill="#fee2e2" />
              </svg>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">잔액</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600"><CreditCard size={26} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{formatMoney(balance)}</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">수입 - 지출</span>
              <span className={balance >= 0 ? "text-green-600" : "text-red-500"}>{balance >= 0 ? "흑자" : "적자"}</span>
            </div>
            <div className="absolute bottom-0 left-0 h-16 w-full opacity-70">
              <svg viewBox="0 0 300 70" className="h-full w-full">
                <path d="M0 38 C35 25, 65 35, 100 45 C140 55, 170 35, 210 40 C250 45, 280 30, 300 12" fill="none" stroke="#86efac" strokeWidth="3" />
                <path d="M0 38 C35 25, 65 35, 100 45 C140 55, 170 35, 210 40 C250 45, 280 30, 300 12 L300 70 L0 70 Z" fill="#dcfce7" />
              </svg>
            </div>
          </div>
        </div>

        {/* 거래 내역 테이블 */}
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
                  <th className="px-5 py-4">내용</th>
                  <th className="px-5 py-4 text-right">금액</th>
                  <th className="px-5 py-4">결제수단</th>
                  <th className="px-5 py-4">메모</th>
                  <th className="px-5 py-4 text-center">관리</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactions.length === 0 ? (
                  <tr><td colSpan={8} className="px-5 py-12 text-center text-slate-400">아직 등록된 내역이 없습니다.</td></tr>
                ) : (
                  transactions.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200">
                      <td className="px-5 py-4 font-medium text-slate-700">{formatDate(item.date)}</td>
                      <td className="px-5 py-4">
                        <span className={`rounded-md px-2 py-1 text-xs font-bold ${item.type === "income" ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-500"}`}>
                          {item.type === "income" ? "수입" : "지출"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          {getCategoryIcon(item.category)}
                          <span>{item.category}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-700">{item.title}</td>
                      <td className={`px-5 py-4 text-right font-bold ${item.type === "income" ? "text-blue-600" : "text-red-500"}`}>
                        {item.type === "income" ? "+" : "-"}{formatMoney(item.amount)}
                      </td>
                      <td className="px-5 py-4 text-slate-700">{item.payment}</td>
                      <td className="px-5 py-4 text-slate-700">{item.memo}</td>
                      <td className="px-5 py-4">
                        <div className="flex justify-center gap-3 text-slate-500">
                          <button className="hover:text-blue-600"><Pencil size={17} /></button>
                          <button onClick={() => handleDeleteTransaction(item.id)} className="hover:text-red-500"><Trash2 size={17} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
            <div></div>
            <div className="flex items-center gap-4">
              <button className="text-slate-500">‹</button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">1</button>
              <button className="font-semibold text-slate-700">2</button>
              <button className="font-semibold text-slate-700">3</button>
              <button className="font-semibold text-slate-700">4</button>
              <button className="font-semibold text-slate-700">5</button>
              <button className="text-slate-500">›</button>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
              10개씩 보기 <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 오른쪽 패널 */}
      <HomeRight
        totalExpense={totalExpense}
        monthlyBudget={monthlyBudget}
        budgetUsagePercent={budgetUsagePercent}
        categorySummaries={categorySummaries}
        donutGradient={donutGradient}
      />

      {/* 내역 추가 모달 */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[460px] rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">내역 추가</h2>
              <button onClick={handleCloseAddModal} className="text-sm font-semibold text-slate-400 hover:text-slate-600">닫기</button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">구분</p>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setType("income")} className={`rounded-xl border py-3 text-sm font-semibold ${type === "income" ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-200 text-slate-500"}`}>수입</button>
                  <button type="button" onClick={() => setType("expense")} className={`rounded-xl border py-3 text-sm font-semibold ${type === "expense" ? "border-red-500 bg-red-50 text-red-500" : "border-slate-200 text-slate-500"}`}>지출</button>
                </div>
              </div>
              {[
                { label: "내용", value: title, setter: setTitle, placeholder: "예: 점심 식사" },
                { label: "카테고리", value: category, setter: setCategory, placeholder: "예: 식비" },
                { label: "결제수단", value: payment, setter: setPayment, placeholder: "예: 토스카드, 계좌이체" },
                { label: "메모", value: memo, setter: setMemo, placeholder: "예: 회사 근처 점심" },
              ].map(({ label, value, setter, placeholder }) => (
                <div key={label}>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
                  <input value={value} onChange={(e) => setter(e.target.value)} placeholder={placeholder} className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500" />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">금액</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="예: 12000" className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500" />
              </div>
              <div className="flex gap-3 pt-3">
                <button onClick={handleCloseAddModal} className="h-12 flex-1 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50">취소</button>
                <button onClick={handleAddTransaction} className="h-12 flex-1 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700">저장</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}