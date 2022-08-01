import React, { FC, useMemo } from 'react';

import { useGetExpenseStatisticQuery } from '../../../store/api/expenses';

import StatisticItem from '../../ui/statistic-item';

import {
  captions,
  icons,
  initialStatisticData,
  titles,
  colors
} from './statistics.constants';

const Statistics: FC = () => {
  const {
    data: statistics,
    isError: isStatisticsError,
    isFetching: isStatisticsFetching,
    error: statisticsFetchError
  } = useGetExpenseStatisticQuery('62e3b5aa2be430d42d6b23be', {
    refetchOnFocus: true,
    refetchOnReconnect: true
  });

  const statisticsData = useMemo(
    () => ({
      ...initialStatisticData,
      ...statistics
    }),
    [statistics]
  );

  if (isStatisticsFetching) return <section>Loading...</section>;

  if (isStatisticsError && statisticsFetchError) return null;

  return (
    <section className=" w-full mx-auto grid gap-xl grid-cols-statistic">
      {titles.map((title, index) => (
        <StatisticItem
          key={title}
          icon={icons[index]}
          title={title}
          color={colors[index]}
          values={Object.values(statisticsData)[index]}
          badgeTitle={captions[index]}
        />
      ))}
    </section>
  );
};

export default Statistics;
