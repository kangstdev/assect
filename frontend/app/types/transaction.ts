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