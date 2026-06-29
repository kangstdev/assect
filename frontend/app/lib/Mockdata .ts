import type { Transaction } from "@/app/types/transaction";

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 1, type: "expense", title: "스타벅스",    category: "식비",    amount: 6500,    date: "2026-06-12", payment: "토스카드",  memo: "아이스 아메리카노" },
  { id: 2, type: "expense", title: "카카오T",     category: "교통",    amount: 12000,   date: "2026-06-11", payment: "카카오페이", memo: "택시 이용" },
  { id: 3, type: "expense", title: "이마트24",    category: "식비",    amount: 8900,    date: "2026-06-10", payment: "토스카드",  memo: "간식 구매" },
  { id: 4, type: "income",  title: "(주)좋은회사", category: "월급",   amount: 2500000, date: "2026-06-10", payment: "계좌이체",  memo: "급여" },
  { id: 5, type: "expense", title: "SK에너지",    category: "주거비",  amount: 120000,  date: "2026-06-09", payment: "계좌이체",  memo: "전기요금" },
  { id: 6, type: "expense", title: "쿠팡",        category: "쇼핑",    amount: 34500,   date: "2026-06-08", payment: "국민카드",  memo: "생활용품 구매" },
  { id: 7, type: "income",  title: "블로그 원고료", category: "기타수입", amount: 150000, date: "2026-06-07", payment: "계좌이체", memo: "원고료 입금" },
  { id: 8, type: "expense", title: "CGV",         category: "문화/여가", amount: 13000,  date: "2026-06-06", payment: "토스카드", memo: "영화 관람" },
];

export const MONTHLY_BUDGET = 3000000;