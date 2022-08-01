import { ExpenseItemData, PeriodValue } from '../common';
import { Period } from '../../enums/common';

/**
 * EXPENSES
 */

export type Expense = {
  date: Date;
  category: string;
  name: string;
} & ExpenseItemData;

export type AddExpenseItemRequest = {
  description: string;
} & Expense;

export type AddExpenseCategoryRequest = {
  name: string;
};

export type AddIncomeRequest = {
  date: Date;
  amount: number;
};

export type GetAllExpensesRequest = {
  period: Period;
  category?: string;
};

export type GetAllExpensesResponse = {
  category: string;
  expenses: Expense[];
}[];

export type GetExpensesByCategoryRequest = {
  userId: string;
  category: string;
};

export type GetExpensesByCategoryResponse = Expense[];

export type GetExpensesNamesResponse = string[];

export type GetExpenseStatisticRequest = {
  userId: string;
  period: Period;
};

export type GetExpenseStatisticResponse = {
  weekExpenses: PeriodValue<number>;
  totalExpenses: PeriodValue<number>;
  totalIncome: PeriodValue<number>;
  totalSavings: PeriodValue<number>;
};

export type GetActivityResponse = { [key: string]: number };

export type GetTransactionsHistoryResponse = Expense[];

export type GetChartDataRequest = {
  userId: string;
  filter: 'six-months' | 'from-year';
};

export type GetChartDataResponse = {
  expenses: { [key: string]: number };
  incomes: { [key: string]: number };
};
