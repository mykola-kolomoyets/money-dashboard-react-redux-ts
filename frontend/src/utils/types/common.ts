import { ReactNode } from 'react';

export type ExpenseItemData = {
  amount: number;
  quantity: number;
};

export type PeriodValue<T = number> = {
  previousValue: T;
  currentValue: T;
};

export type WithChildren<T> = { children: ReactNode } & T;
