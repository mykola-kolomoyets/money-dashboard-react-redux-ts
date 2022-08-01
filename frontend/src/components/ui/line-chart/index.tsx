import { FC, useMemo } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

import { months } from '../../../utils/constants';

import './line-chart.scss';
import { GetChartDataResponse } from '../../../utils/types/services/expenses';

type LineChartProps = {
  series: GetChartDataResponse;
};
const LineChart: FC<LineChartProps> = ({ series }) => {
  const chartSeries: ApexAxisChartSeries = useMemo(
    () => [
      {
        name: 'Expenses',
        data: Object.values(series.expenses)
      },
      {
        name: 'Incomes',
        data: Object.values(series.incomes)
      }
    ],
    [series]
  );

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      sparkline: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },

    colors: ['#69ADFF', '#49E17B'],

    dataLabels: {
      enabled: false
    },

    legend: {
      position: 'top'
    },

    stroke: {
      curve: 'smooth'
    },

    xaxis: {
      type: 'category',
      categories: Object.keys(series.incomes).map((index) => months[+index - 1])
    },

    yaxis: {
      tickAmount: 5,
      decimalsInFloat: 2
    },

    tooltip: {
      custom: ({ series, dataPointIndex, w }) => {
        return (
          '<div class="tooltip">' +
          '<span class="tooltip__content">' +
          'Expenses: UAH ' +
          series[0][dataPointIndex].toFixed(2) +
          '<br>' +
          'Incomes: UAH ' +
          series[1][dataPointIndex].toFixed(2) +
          '\n' +
          '</span>' +
          '</div>'
        );
      }
    }
  };

  return (
    <section className="mt-s">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={400}
      />
    </section>
  );
};

export default LineChart;
