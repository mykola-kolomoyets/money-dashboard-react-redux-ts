import { FC } from 'react';

import { PeriodValue } from '../../../utils/types/common';
import { Icons } from '../../../utils/enums/icons';

import Icon from '../../icons';
import { StatisticItemColors } from '../../../utils/enums/statistic';
import Badge from '../badge';
import { showDeltaPercents } from '../../../utils/functions';

const gradientColors = {
  [StatisticItemColors.purple]: {
    from: 'from-myPurple-300',
    to: 'to-myPurple-100'
  },
  [StatisticItemColors.blue]: {
    from: 'from-myBlue-300',
    to: 'to-myBlue-100'
  },
  [StatisticItemColors.pink]: {
    from: 'from-myPink-300',
    to: 'to-myPink-100'
  },
  [StatisticItemColors.lightBlue]: {
    from: 'from-myCyan-300',
    to: 'to-myCyan-100'
  }
};

type StatisticItemProps = {
  icon: Icons;
  title: string;
  values: PeriodValue<number>;
  badgeTitle: string;
  color: StatisticItemColors;
};
const StatisticItem: FC<StatisticItemProps> = ({
  icon,
  title,
  values,
  badgeTitle,
  color
}) => {
  const gradientParams = `bg-gradient-to-br ${gradientColors[color].from} ${gradientColors[color].to}`;

  const delta = showDeltaPercents(values);

  const [integer, decimal] = values.currentValue.toString().split('.');

  const IconComponent = Icon[icon];

  return (
    <section
      className={`lg:max-w-sm max-w-full min-h-200 h-200 px-l py-m ${gradientParams} rounded-xl`}
    >
      <div className="mb-xs">
        <IconComponent size={40} />
      </div>

      <h3 className="text-p1 text-white">{title}</h3>

      <p className="flex flex-row items-baseline mb-xs text-h1 text-white font-bold">
        <span className="flex flex-nowrap ">${integer}</span>
        <span className="text-p1">.{decimal}</span>
      </p>

      <div className="flex">
        <Badge number={delta || 0} />

        <p className="ml-s text-p2 text-white">{badgeTitle}</p>
      </div>
    </section>
  );
};

export default StatisticItem;
