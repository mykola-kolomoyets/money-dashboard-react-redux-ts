import { FC } from 'react';

import {
  useGetActivityDataQuery,
  useGetChartDataQuery,
  useGetTransactionsQuery
} from '../../../store/api/expenses';

import Statistics from '../../../components/layout/statistics';
import PieChart from '../../../components/ui/pie-chart';

import styles from './main.module.scss';
import Section from '../../../components/ui/section';
import LineChart from '../../../components/ui/line-chart';
import TransactionsTable from '../../../components/layout/tables/transactions';

const Main: FC = () => {
  const {
    data: activities,
    isSuccess: isActivitiesSuccess,
    isError: isActivityError,
    isFetching: isActivityFetching,
    error: activityFetchError
  } = useGetActivityDataQuery('62e3b5aa2be430d42d6b23be', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true
  });

  const {
    data: chartData,
    isSuccess: isChartDataSuccess,
    isError: isChartDataError,
    isFetching: isChartDataFetching,
    error: chartDataError
  } = useGetChartDataQuery(
    {
      userId: '62e3b5aa2be430d42d6b23be',
      filter: 'six-months'
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true
    }
  );

  return (
    <section>
      <section className={styles.container}>
        <Statistics />

        <section className={styles.row}>
          <Section title="Total expenses">
            {isChartDataSuccess && !isChartDataFetching && (
              <LineChart series={chartData} />
            )}
          </Section>

          <Section title="Activity">
            {isActivitiesSuccess && !isActivityFetching && (
              <PieChart series={activities} />
            )}
          </Section>

          <Section title="Transactions">
            <TransactionsTable />
          </Section>
        </section>
      </section>
    </section>
  );
};

export default Main;
