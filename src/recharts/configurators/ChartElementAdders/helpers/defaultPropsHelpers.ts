import randomColor from 'randomcolor';
import {
  AreaProps,
  BarProps,
  LineProps,
  ScatterProps,
  TreemapProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import { DEFAULT_CHART_PROPS } from '@/recharts/common/constants';
import { ChartDataKey, ChartType } from '@/recharts/common/types';

import { AddableRechartsKey } from '../../types';

export const DefaultChart: Record<
  ChartType,
  CategoricalChartProps | TreemapProps
> = {
  area: { ...DEFAULT_CHART_PROPS },
  bar: { ...DEFAULT_CHART_PROPS },
  composed: { ...DEFAULT_CHART_PROPS },
  line: { ...DEFAULT_CHART_PROPS },
  scatter: { ...DEFAULT_CHART_PROPS },
  funnel: { ...DEFAULT_CHART_PROPS },
  pie: { ...DEFAULT_CHART_PROPS },
  radar: { ...DEFAULT_CHART_PROPS, cx: '50%', cy: '50%', outerRadius: '80%' },
  radial: { ...DEFAULT_CHART_PROPS },
  treemap: {
    dataKey: undefined,
    width: 400,
    height: 200,
    aspectRatio: 4 / 3,
    stroke: '#fff',
    fill: '#8884d8',
  },
};

export const createChartElementProps: Record<
  AddableRechartsKey,
  (dataKey: ChartDataKey) => any
> = {
  areas: (dataKey: ChartDataKey): AreaProps => ({
    dataKey: dataKey,
    legendType: 'circle',
    connectNulls: false,
    stackId: undefined,
    type: 'monotone',
    stroke: randomColor({ seed: dataKey as string }),
    fill: randomColor({ seed: dataKey as string }),
    fillOpacity: 0.3,
  }),
  bars: (dataKey: ChartDataKey): BarProps => ({
    dataKey: dataKey,
    legendType: 'circle',
    stackId: undefined,
    fill: randomColor({ seed: dataKey as string }),
    barSize: 100,
  }),
  lines: (dataKey: ChartDataKey): LineProps => ({
    dataKey: dataKey,
    legendType: 'circle',
    fill: randomColor({ seed: dataKey as string }),
  }),
  scatters: (dataKey: ChartDataKey): ScatterProps => ({
    dataKey: dataKey,
    legendType: 'circle',
    fill: randomColor({ seed: dataKey as string }),
  }),
  xAxes: (dataKey: ChartDataKey) => ({ dataKey: dataKey }),
  yAxes: (dataKey: ChartDataKey) => ({ dataKey: dataKey }),
  zAxes: (dataKey: ChartDataKey) => ({ dataKey: dataKey }),
  pies: (dataKey: ChartDataKey) => ({
    dataKey: dataKey,
    legendType: 'circle',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: 80,
    label: undefined,
    fill: randomColor({ seed: dataKey as string }),
  }),
  radars: (dataKey: ChartDataKey) => ({
    dataKey: dataKey,
    legendType: 'circle',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: 80,
    label: undefined,
    fill: randomColor({ seed: dataKey as string }),
  }),
  radials: (dataKey: ChartDataKey) => ({
    dataKey: dataKey,
    legendType: 'circle',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: 80,
    label: undefined,
    fill: randomColor({ seed: dataKey as string }),
  }),
  angleAxes: (dataKey: ChartDataKey) => ({ dataKey: dataKey }),
  radiusAxes: (dataKey: ChartDataKey) => ({ dataKey: dataKey }),
};
