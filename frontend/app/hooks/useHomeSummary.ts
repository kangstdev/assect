// hooks/useHomeSummary.ts
import { useMemo } from "react";
import type { Transaction } from "@/app/types/transaction";
import { getCategoryDotClassName, makeDonutGradient } from "@/app/utils/Category";

const MONTHLY_BUDGET = 2000000;

export function useHomeSummary(transactions: Transaction[]) {
  return useMemo(() => {
    const totalIncome = transactions
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transactions
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);

    const balance = totalIncome - totalExpense;

    const budgetUsagePercent =
      MONTHLY_BUDGET === 0
        ? 0
        : Math.min(Math.round((totalExpense / MONTHLY_BUDGET) * 100), 100);

    const categorySummaries = Object.values(
      transactions
        .filter((item) => item.type === "expense")
        .reduce(
          (acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = {
                categoryName: item.category,
                categoryAmount: 0,
                percent: 0,
                dotClassName: getCategoryDotClassName(item.category),
              };
            }
            acc[item.category].categoryAmount += item.amount;
            return acc;
          },
          {} as Record <
            string,
            {
              categoryName: string;
              categoryAmount: number;
              percent: number;
              dotClassName: string;
            }
          >
        )
    ).map((item) => ({
      ...item,
      percent:
        totalExpense === 0
          ? 0
          : Math.round((item.categoryAmount / totalExpense) * 100),
    }));

    const donutGradient = makeDonutGradient(categorySummaries);

    return {
      totalIncome,
      totalExpense,
      balance,
      monthlyBudget: MONTHLY_BUDGET,
      budgetUsagePercent,
      categorySummaries,
      donutGradient,
    };
  }, [transactions]);
}