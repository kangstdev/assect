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

export default function HomePage() {
  /*
    현재 날짜 정보

    지금은 실제 월 필터 기능까지는 아니고,
    화면 상단에 현재 년도 / 현재 월을 보여주기 위해 사용합니다.
  */
  const today = new Date();
  const selectedYear = today.getFullYear();
  const selectedMonth = today.getMonth() + 1;

  /*
    월 예산

    지금은 임시로 3,000,000원 고정입니다.
    나중에 예산 페이지를 만들면 DB 또는 사용자가 설정한 예산으로 바꿀 수 있습니다.
  */
  const monthlyBudget = 3000000;

  /*
    거래 내역 상태

    현재는 백엔드나 DB 없이 프론트에서만 관리합니다.
    나중에 API 연결하면 초기 데이터는 서버에서 받아오고,
    추가/삭제도 API 요청으로 바꾸면 됩니다.
  */
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      type: "expense",
      title: "스타벅스",
      category: "식비",
      amount: 6500,
      date: "2026-06-12",
      payment: "토스카드",
      memo: "아이스 아메리카노",
    },
    {
      id: 2,
      type: "expense",
      title: "카카오T",
      category: "교통",
      amount: 12000,
      date: "2026-06-11",
      payment: "카카오페이",
      memo: "택시 이용",
    },
    {
      id: 3,
      type: "expense",
      title: "이마트24",
      category: "식비",
      amount: 8900,
      date: "2026-06-10",
      payment: "토스카드",
      memo: "간식 구매",
    },
    {
      id: 4,
      type: "income",
      title: "(주)좋은회사",
      category: "월급",
      amount: 2500000,
      date: "2026-06-10",
      payment: "계좌이체",
      memo: "급여",
    },
    {
      id: 5,
      type: "expense",
      title: "SK에너지",
      category: "주거비",
      amount: 120000,
      date: "2026-06-09",
      payment: "계좌이체",
      memo: "전기요금",
    },
    {
      id: 6,
      type: "expense",
      title: "쿠팡",
      category: "쇼핑",
      amount: 34500,
      date: "2026-06-08",
      payment: "국민카드",
      memo: "생활용품 구매",
    },
    {
      id: 7,
      type: "income",
      title: "블로그 원고료",
      category: "기타수입",
      amount: 150000,
      date: "2026-06-07",
      payment: "계좌이체",
      memo: "원고료 입금",
    },
    {
      id: 8,
      type: "expense",
      title: "CGV",
      category: "문화/여가",
      amount: 13000,
      date: "2026-06-06",
      payment: "토스카드",
      memo: "영화 관람",
    },
  ]);

  /*
    내역 추가 모달 입력값 상태

    사용자가 모달에서 입력한 값을 저장합니다.
    저장 버튼을 누르면 이 값들로 새 거래 내역을 만듭니다.
  */
  const [type, setType] = useState<TransactionType>("expense");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [memo, setMemo] = useState("");

  /*
    내역 추가 모달 열림 / 닫힘 상태

    false : 모달 닫힘
    true  : 모달 열림
  */
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  /*
    총 수입 계산

    1. 거래 내역 중 type이 income인 것만 골라냅니다.
    2. amount를 전부 더합니다.
    3. transactions가 변경될 때만 다시 계산됩니다.
  */
  const totalIncome = useMemo(() => {
    return transactions
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);
  }, [transactions]);

  /*
    총 지출 계산

    1. 거래 내역 중 type이 expense인 것만 골라냅니다.
    2. amount를 전부 더합니다.
    3. transactions가 변경될 때만 다시 계산됩니다.
  */
  const totalExpense = useMemo(() => {
    return transactions
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);
  }, [transactions]);

  /*
    잔액 계산

    잔액 = 총 수입 - 총 지출
  */
  const balance = totalIncome - totalExpense;

  /*
    예산 사용률 계산

    예산 사용률 = 총 지출 / 월 예산 * 100

    Math.min(100, 값)을 쓰는 이유:
    예산을 초과했을 때 progress bar가 100%를 넘어가 화면을 뚫고 나가지 않게 하기 위해서입니다.
  */
  const budgetUsagePercent = useMemo(() => {
    if (monthlyBudget === 0) {
      return 0;
    }

    return Math.min(100, Math.round((totalExpense / monthlyBudget) * 100));
  }, [totalExpense]);

  /*
    카테고리 색상 목록

    오른쪽 요약 패널에서 카테고리별 점 색상,
    도넛 차트 색상으로 사용합니다.
  */
  const categoryColorList = [
    {
      dotClassName: "bg-blue-500",
      chartColor: "#3b82f6",
    },
    {
      dotClassName: "bg-red-500",
      chartColor: "#ef4444",
    },
    {
      dotClassName: "bg-amber-500",
      chartColor: "#f59e0b",
    },
    {
      dotClassName: "bg-green-500",
      chartColor: "#22c55e",
    },
    {
      dotClassName: "bg-violet-500",
      chartColor: "#8b5cf6",
    },
    {
      dotClassName: "bg-pink-500",
      chartColor: "#ec4899",
    },
  ];

  /*
    카테고리별 지출 요약 계산

    기존 오른쪽 패널의 식비, 교통, 주거비 같은 값들은 하드코딩이었습니다.
    이제는 실제 transactions 배열을 기준으로 자동 계산합니다.

    계산 결과 예시:
    [
      {
        categoryName: "식비",
        categoryAmount: 15400,
        percent: 8,
        dotClassName: "bg-blue-500",
        chartColor: "#3b82f6"
      }
    ]
  */
  const categorySummaries = useMemo(() => {
    // 카테고리별 금액을 담을 객체입니다.
    const categoryMap: Record<string, number> = {};

    // 지출 데이터만 골라서 카테고리별로 금액을 더합니다.
    transactions
      .filter((item) => item.type === "expense")
      .forEach((item) => {
        categoryMap[item.category] =
          (categoryMap[item.category] || 0) + item.amount;
      });

    // 객체를 배열로 바꾸고, 금액 / 비율 / 색상 정보를 붙입니다.
    return Object.entries(categoryMap)
      .map(([categoryName, categoryAmount], index) => {
        const color = categoryColorList[index % categoryColorList.length];

        return {
          categoryName,
          categoryAmount,
          percent:
            totalExpense === 0
              ? 0
              : Math.round((categoryAmount / totalExpense) * 100),
          dotClassName: color.dotClassName,
          chartColor: color.chartColor,
        };
      })
      .sort((a, b) => b.categoryAmount - a.categoryAmount);
  }, [transactions, totalExpense]);

  /*
    도넛 차트 배경 계산

    categorySummaries를 기준으로 conic-gradient 문자열을 만듭니다.
    카테고리별 지출 비율에 따라 도넛 차트 색상 영역이 자동으로 나뉩니다.
  */
  const donutGradient = useMemo(() => {
    // 지출이 없으면 회색 원으로 보여줍니다.
    if (totalExpense === 0 || categorySummaries.length === 0) {
      return "conic-gradient(#e5e7eb 0deg 360deg)";
    }

    let startDeg = 0;

    // 카테고리별 금액 비율을 각도 값으로 바꿉니다.
    const gradientItems = categorySummaries.map((item) => {
      const degree = (item.categoryAmount / totalExpense) * 360;
      const endDeg = startDeg + degree;

      const gradientText = `${item.chartColor} ${startDeg}deg ${endDeg}deg`;

      startDeg = endDeg;

      return gradientText;
    });

    // 혹시 계산 오차로 360도가 덜 채워지면 남은 부분을 회색으로 채웁니다.
    if (startDeg < 360) {
      gradientItems.push(`#e5e7eb ${startDeg}deg 360deg`);
    }

    return `conic-gradient(${gradientItems.join(", ")})`;
  }, [categorySummaries, totalExpense]);

  /*
    금액 표시 함수

    4250000 → 4,250,000원

    금액 표시가 필요한 곳마다 이 함수를 재사용합니다.
  */
  const formatMoney = (value: number) => {
    return value.toLocaleString("ko-KR") + "원";
  };

  /*
    날짜 표시 함수

    지금은 YYYY-MM-DD 형태 그대로 보여줍니다.
    나중에 06.12 금요일 형태로 바꾸고 싶으면 이 함수만 수정하면 됩니다.
  */
  const formatDate = (value: string) => {
    return value;
  };

  /*
    카테고리별 아이콘 반환 함수

    거래 내역 테이블에서 카테고리 앞 아이콘을 보여주기 위해 사용합니다.
  */
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

  /*
    입력값 초기화 함수

    내역 저장 후 또는 모달을 닫을 때
    입력값을 전부 초기 상태로 되돌립니다.
  */
  const resetAddForm = () => {
    setType("expense");
    setTitle("");
    setCategory("");
    setAmount("");
    setPayment("");
    setMemo("");
  };

  /*
    내역 추가 모달 닫기 함수

    그냥 모달만 닫는 게 아니라
    입력하던 값도 같이 초기화합니다.
  */
  const handleCloseAddModal = () => {
    resetAddForm();
    setIsAddModalOpen(false);
  };

  /*
    내역 추가 함수

    저장 버튼을 눌렀을 때 실행됩니다.

    흐름:
    1. 필수 입력값 검사
    2. 새 거래 객체 생성
    3. transactions 배열 맨 앞에 추가
    4. 입력값 초기화
    5. 모달 닫기
  */
  const handleAddTransaction = () => {
    if (title.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (category.trim() === "") {
      alert("카테고리를 입력해주세요.");
      return;
    }

    if (amount.trim() === "" || Number(amount) <= 0) {
      alert("금액을 올바르게 입력해주세요.");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      title,
      category,
      amount: Number(amount),
      date: new Date().toISOString().slice(0, 10),
      payment: payment.trim() === "" ? "-" : payment,
      memo: memo.trim() === "" ? "-" : memo,
    };

    setTransactions((prev) => [newTransaction, ...prev]);

    resetAddForm();
    setIsAddModalOpen(false);
  };

  /*
    내역 삭제 함수

    삭제 버튼을 누른 거래의 id를 받아서
    해당 id가 아닌 거래만 남깁니다.
  */
  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

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

        {/* 필터 + 내역 추가 영역 */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* 년도 선택 버튼 - 아직 실제 필터 기능은 연결 전 */}
            <button className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
              <CalendarDays size={20} className="text-slate-500" />
              <span>{selectedYear}년</span>
              <ChevronDown size={18} className="text-slate-500" />
            </button>

            {/* 월 선택 버튼 - 아직 실제 필터 기능은 연결 전 */}
            <button className="flex h-12 items-center gap-8 rounded-xl border border-slate-200 bg-white px-5 text-base font-semibold text-slate-700 shadow-sm">
              <span>{selectedMonth}월</span>
              <ChevronDown size={18} className="text-slate-500" />
            </button>
          </div>

          {/* 내역 추가 버튼은 거래를 바로 추가하지 않고 모달만 엽니다. */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-7 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
          >
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

            <p className="text-3xl font-bold text-slate-900">
              {formatMoney(totalIncome)}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">현재 월 기준</span>
              <span className="text-blue-600">수입 합계</span>
            </div>

            {/* 카드 하단 장식용 라인 그래프 */}
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

            <p className="text-3xl font-bold text-slate-900">
              {formatMoney(totalExpense)}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">현재 월 기준</span>
              <span className="text-red-500">지출 합계</span>
            </div>

            {/* 카드 하단 장식용 라인 그래프 */}
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

            <p className="text-3xl font-bold text-slate-900">
              {formatMoney(balance)}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold">
              <span className="text-slate-700">수입 - 지출</span>
              <span className={balance >= 0 ? "text-green-600" : "text-red-500"}>
                {balance >= 0 ? "흑자" : "적자"}
              </span>
            </div>

            {/* 카드 하단 장식용 라인 그래프 */}
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
                  // 거래 내역이 없을 때 표시
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-slate-400"
                    >
                      아직 등록된 내역이 없습니다.
                    </td>
                  </tr>
                ) : (
                  // 거래 내역 배열을 반복해서 테이블 행으로 출력
                  transactions.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200">
                      <td className="px-5 py-4 font-medium text-slate-700">
                        {formatDate(item.date)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-bold ${
                            item.type === "income"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
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

                      <td
                        className={`px-5 py-4 text-right font-bold ${
                          item.type === "income"
                            ? "text-blue-600"
                            : "text-red-500"
                        }`}
                      >
                        {item.type === "income" ? "+" : "-"}
                        {formatMoney(item.amount)}
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {item.payment}
                      </td>

                      <td className="px-5 py-4 text-slate-700">{item.memo}</td>

                      <td className="px-5 py-4">
                        <div className="flex justify-center gap-3 text-slate-500">
                          {/* 수정 버튼 - 아직 수정 기능은 연결 전 */}
                          <button className="hover:text-blue-600">
                            <Pencil size={17} />
                          </button>

                          {/* 삭제 버튼 */}
                          <button
                            onClick={() => handleDeleteTransaction(item.id)}
                            className="hover:text-red-500"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 - 아직 실제 기능 연결 전 */}
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
      <aside className="w-[340px] shrink-0 px-6 py-8">
        <div className="space-y-5">
          {/* 이번 달 요약 카드 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">이번 달 요약</h2>

            <div className="mt-5 flex items-center gap-5">
              {/* 도넛 차트 */}
              <div
                className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: donutGradient,
                }}
              >
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white text-center">
                  <span className="text-xs font-bold text-slate-700">
                    지출
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {formatMoney(totalExpense)}
                  </span>
                </div>
              </div>

              {/* 총 지출 + 예산 대비 */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-500">총 지출</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {formatMoney(totalExpense)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  예산 대비 {budgetUsagePercent}%
                </p>

                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{
                      width: `${budgetUsagePercent}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 카테고리별 지출 목록 */}
            <div className="mt-6 space-y-3">
              {categorySummaries.length === 0 ? (
                <p className="py-4 text-center text-sm text-slate-400">
                  아직 지출 내역이 없습니다.
                </p>
              ) : (
                categorySummaries.map((item) => (
                  <div
                    key={item.categoryName}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${item.dotClassName}`}
                      ></span>
                      <span className="text-slate-600">
                        {item.categoryName}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-slate-700">
                        {formatMoney(item.categoryAmount)}
                      </span>
                      <span className="w-8 text-right text-slate-500">
                        {item.percent}%
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4 text-center">
              <button className="text-sm font-bold text-blue-600">
                상세 보기 〉
              </button>
            </div>
          </div>

          {/* 현재 상태 카드 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">현재 상태</h2>
              <button className="text-sm font-semibold text-slate-500">
                더보기 〉
              </button>
            </div>

            <p className="mb-5 text-sm text-slate-500">
              거래 내역 기준 자동 계산
            </p>

            <div className="space-y-5">
              {/* 수입 요약 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    💰
                  </div>
                  <span className="font-semibold text-slate-700">수입</span>
                </div>

                <div className="text-right">
                  <p className="font-bold text-slate-900">
                    {formatMoney(totalIncome)}
                  </p>
                  <p className="mt-1 text-sm font-bold text-blue-600">
                    총{" "}
                    {
                      transactions.filter((item) => item.type === "income")
                        .length
                    }
                    건
                  </p>
                </div>
              </div>

              {/* 지출 요약 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                    🛍️
                  </div>
                  <span className="font-semibold text-slate-700">지출</span>
                </div>

                <div className="text-right">
                  <p className="font-bold text-slate-900">
                    {formatMoney(totalExpense)}
                  </p>
                  <p className="mt-1 text-sm font-bold text-red-500">
                    총{" "}
                    {
                      transactions.filter((item) => item.type === "expense")
                        .length
                    }
                    건
                  </p>
                </div>
              </div>

              {/* 잔액 요약 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                    🐷
                  </div>
                  <span className="font-semibold text-slate-700">잔액</span>
                </div>

                <div className="text-right">
                  <p className="font-bold text-slate-900">
                    {formatMoney(balance)}
                  </p>
                  <p
                    className={`mt-1 text-sm font-bold ${
                      balance >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {balance >= 0 ? "흑자" : "적자"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 예산 카드 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">예산 사용률</h2>
              <button className="text-sm font-semibold text-slate-500">
                관리 〉
              </button>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-600">
                총 예산 {formatMoney(monthlyBudget)}
              </span>
              <span className="text-2xl font-bold text-blue-600">
                {budgetUsagePercent}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${budgetUsagePercent}%`,
                }}
              ></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">사용 금액</p>
                <p className="mt-1 font-bold text-slate-900">
                  {formatMoney(totalExpense)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">남은 금액</p>
                <p
                  className={`mt-1 font-bold ${
                    monthlyBudget - totalExpense >= 0
                      ? "text-slate-900"
                      : "text-red-500"
                  }`}
                >
                  {formatMoney(monthlyBudget - totalExpense)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 내역 추가 모달 */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[460px] rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">내역 추가</h2>

              <button
                onClick={handleCloseAddModal}
                className="text-sm font-semibold text-slate-400 hover:text-slate-600"
              >
                닫기
              </button>
            </div>

            <div className="space-y-4">
              {/* 수입 / 지출 선택 */}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">구분</p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setType("income")}
                    className={`rounded-xl border py-3 text-sm font-semibold ${
                      type === "income"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    수입
                  </button>

                  <button
                    type="button"
                    onClick={() => setType("expense")}
                    className={`rounded-xl border py-3 text-sm font-semibold ${
                      type === "expense"
                        ? "border-red-500 bg-red-50 text-red-500"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    지출
                  </button>
                </div>
              </div>

              {/* 내용 입력 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  내용
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 점심 식사"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* 카테고리 입력 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  카테고리
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="예: 식비"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* 금액 입력 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  금액
                </label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="예: 12000"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* 결제수단 입력 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  결제수단
                </label>
                <input
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  placeholder="예: 토스카드, 계좌이체"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* 메모 입력 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  메모
                </label>
                <input
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="예: 회사 근처 점심"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* 모달 하단 버튼 */}
              <div className="flex gap-3 pt-3">
                <button
                  onClick={handleCloseAddModal}
                  className="h-12 flex-1 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  취소
                </button>

                <button
                  onClick={handleAddTransaction}
                  className="h-12 flex-1 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}