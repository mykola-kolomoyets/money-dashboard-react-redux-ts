import { FC, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type PieChartProps = {
  series: { [key: string]: number };
};
const PieChart: FC<PieChartProps> = ({ series }) => {
  const total = Object.values(series).reduce((acc, curr) => acc + curr, 0);

  const options: ApexOptions = useMemo(
    () => ({
      labels: Object.entries(series).map(
        ([key, value]) => `${key}: ${((value / total) * 100).toFixed(2)}%`
      ),
      colors: [
        '#2be17f',
        '#00C5E0',
        '#56A3FF',
        '#e5aa63',
        '#FBB5D2',
        '#b27afb'
      ],
      dataLabels: {
        enabled: true,
        formatter: (_) => ''
      },

      legend: {
        position: 'bottom'
      },

      tooltip: {
        enabled: false,
        followCursor: false,
        custom: ({ ctx, seriesIndex, series }) => {
          const title: string = ctx?.w?.config.labels[seriesIndex]
            .split(': ')[0]
            .trim();

          const value = series[seriesIndex].toFixed(2);

          return `${title}: ${value}`;
        }
      },

      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 1,
          donut: {
            size: '80%',
            background: 'transparent',

            labels: {
              show: true,
              value: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
                formatter: (val) => `${Number(val).toFixed(2)}`
              },
              name: {
                show: true,
                fontFamily: 'Inter',
                fontWeight: 'light',
                fontSize: '20',
                formatter: (val) => val.split(': ')[0]
              }
            }
          }
        }
      },
      chart: {
        type: 'donut',
        background: 'transparent'
      },
      stroke: {
        show: false
      },
      responsive: [
        {
          breakpoint: 1360,
          options: {
            chart: {
              height: 600,
              width: 600
            },
            legend: {
              position: 'right'
            }
          }
        }
      ]
    }),
    [series]
  );

  return (
    <section>
      <ReactApexChart
        options={options}
        series={Object.values(series)}
        type="donut"
        height={450}
        width={400}
      />
    </section>
  );
};

export default PieChart;
