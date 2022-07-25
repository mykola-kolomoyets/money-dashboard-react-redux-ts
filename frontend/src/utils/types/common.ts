export type ExpenseItemData = {
  amount: number;
  quantity: number;
};

export type PeriodValue<T = number> = {
  previousValue: T;
  currentValue: T;
};
