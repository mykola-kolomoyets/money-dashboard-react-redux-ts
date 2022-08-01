import { FC } from 'react';

import { PeriodValue } from '../../../utils/types/common';
import { Icons } from '../../../utils/enums/icons';
import { StatisticItemColors } from '../../../utils/enums/statistic';
import { showDeltaPercents } from '../../../utils/functions';

import Icon from '../../icons';
import Badge from '../badge';

import { gradientColors } from './statistic-item.constants';

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

  const [integer, decimal] = values.currentValue.toFixed(2).split('.');

  const IconComponent = Icon[icon];

  return (
    <section
      className={`max-w-full min-h-200 h-200 px-l py-m ${gradientParams} rounded-xl font-inter`}
    >
      <div className="mb-xs">
        <IconComponent size={40} color="rgba(72, 73, 100, 0.49)" />
      </div>

      <h3 className="text-p1 text-white font-medium">{title}</h3>

      <p className="flex flex-row items-baseline mb-xs text-h1 text-white font-inter font-bold">
        <span className="text-p1 mr-2">UAH</span>
        <span className="flex flex-nowrap ">
          {new Intl.NumberFormat('de-DE').format(+integer)}
        </span>
        <span className="text-p1">,{decimal}</span>
      </p>

      <div className="flex">
        <Badge
          number={
            values.currentValue > 0 && values.previousValue === 0
              ? 100
              : delta || 0
          }
        />

        <p className="ml-s text-p2 text-white">{badgeTitle}</p>
      </div>
    </section>
  );
};

export default StatisticItem;
