import { Icons } from '../../../utils/enums/icons';
import { StatisticItemColors } from '../../../utils/enums/statistic';

export const titles = [
  'This week expenses',
  'Total expenses',
  'Total income',
  'Total savings'
];

export const captions = [
  'than last week',
  'than last month',
  'than last month',
  'than last month'
];

export const icons: Icons[] = [
  Icons.week_expenses,
  Icons.total_expenses,
  Icons.expenses,
  Icons.savings
];

export const colors: StatisticItemColors[] = [
  StatisticItemColors.lightBlue,
  StatisticItemColors.blue,
  StatisticItemColors.pink,
  StatisticItemColors.purple
];

export const initialStatisticData = {
  weekExpenses: {
    currentValue: 0,
    previousValue: 0
  },
  monthExpenses: {
    currentValue: 0,
    previousValue: 0
  },
  totalIncome: {
    currentValue: 0,
    previousValue: 0
  },
  totalSavings: {
    currentValue: 0,
    previousValue: 0
  }
};
