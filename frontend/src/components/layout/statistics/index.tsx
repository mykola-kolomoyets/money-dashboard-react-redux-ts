import React, { FC } from 'react';
import { Icons } from '../../../utils/enums/icons';
import StatisticItem from '../../ui/statistic-item';
import { StatisticItemColors } from '../../../utils/enums/statistic';

const titles = [
  'This week expenses',
  'Total expenses',
  'Total income',
  'Total savings'
];

const captions = [
  'than last week',
  'than last month',
  'than last month',
  'than last month'
];

const icons: Icons[] = [
  Icons.week_expenses,
  Icons.week_expenses,
  Icons.week_expenses,
  Icons.week_expenses
];

const colors: StatisticItemColors[] = [
  StatisticItemColors.lightBlue,
  StatisticItemColors.blue,
  StatisticItemColors.pink,
  StatisticItemColors.purple
];

const Statistics: FC = () => {
  return (
    <section className="mx-auto p-3 grid grid-cols-1 xl:grid-cols-4 gap-xl lg:grid-cols-2">
      {titles.map((title, index) => (
        <StatisticItem
          key={title}
          icon={icons[index]}
          title={title}
          color={colors[index]}
          values={{
            currentValue: 2001.54,
            previousValue: 1800
          }}
          badgeTitle={captions[index]}
        />
      ))}
    </section>
  );
};

export default Statistics;
