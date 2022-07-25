import { PeriodValue } from './types/common';

export const getDecimalNumber = (number: number) => +number.toFixed(2);

export const showDeltaPercents = ({
  currentValue,
  previousValue
}: PeriodValue<number>): number | null => {
  if (!previousValue || !currentValue) return null;

  const delta = currentValue - previousValue;
  const percent = (delta / currentValue) * 100;
  return getDecimalNumber(percent);
};
