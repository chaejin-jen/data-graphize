import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import randomColor from 'randomcolor';
import { AreaProps, FunnelProps, LegendProps } from 'recharts';

import RechartsWrapper from '@/recharts/charts/RechartsWrapper';
import { DEFAULT_CHART_PROPS } from '@/recharts/common/constants';
import { ChartDataKey, RechartsData } from '@/recharts/common/types';

import data from './data/sample/simpleChartData';

const meta: Meta = {
  title: 'Recharts/RechartsWrapper/AreaChart',
  component: RechartsWrapper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RechartsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefualtChart = (args: { [x: string]: any }) => {
  const chart = DEFAULT_CHART_PROPS;
  const legend = {
    layout: 'horizontal',
    verticalAlign: 'top',
    align: 'center',
    iconSize: 10,
    wrapperStyle: { top: 0, left: 0 },
  } as LegendProps;

  const create_serie = (dataKey: ChartDataKey) =>
    ({
      dataKey: dataKey,
      legendType: 'circle',
      fill: randomColor({ seed: dataKey as string }),
    }) as AreaProps;
  const areas = [create_serie('uv'), create_serie('pv'), create_serie('amt')];

  const rechartsData: RechartsData = {
    common: { chart, legend },
    series: {
      areas,
      bars: [],
      lines: [],
      scatters: [],
      pies: [],
      radials: [],
      radars: [],
      funnel: {} as FunnelProps,
    },
    axes: {
      xAxes: [],
      yAxes: [],
      zAxes: [],
    },
    polarAxes: { angleAxes: [], radiusAxes: [] },
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <RechartsWrapper
        chartType={'area'}
        chartData={data}
        rechartsData={rechartsData}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefualtChart />,
};
