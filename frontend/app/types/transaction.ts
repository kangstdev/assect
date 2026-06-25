// 거래 구분 타입
// income  : 수입
// expense : 지출
export type TransactionType = "income" | "expense";

// 거래 내역 1개의 데이터 구조
export type Transaction = {
  // 거래 고유 번호
  id: number;

  // 수입 / 지출 구분
  type: TransactionType;

  // 거래 내용
  title: string;

  // 카테고리
  category: string;

  // 금액
  amount: number;

  // 거래 날짜
  date: string;

  // 결제수단
  payment: string;

  // 메모
  memo: string;
};

// 카테고리별 지출 요약 데이터 구조
export type CategorySummary = {
  // 카테고리 이름
  categoryName: string;

  // 해당 카테고리 총 지출 금액
  categoryAmount: number;

  // 전체 지출 대비 비율
  percent: number;

  // 화면에 표시할 점 색상 클래스
  dotClassName: string;
};

// 홈 오른쪽 패널 요약 데이터 구조
export type HomeSummary = {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  monthlyBudget: number;
  budgetUsagePercent: number;
  donutGradient: string;
  categorySummaries: CategorySummary[];
  transactions: Transaction[];
};