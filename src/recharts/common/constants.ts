import { LegendProps, TreemapProps } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import { ChartConfig } from './types';

// Chart config
const areaChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    areas: true,
  },
  axes: {
    xAxes: true,
    yAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const barChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    bars: true,
  },
  axes: {
    xAxes: true,
    yAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const lineChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    lines: true,
  },
  axes: {
    xAxes: true,
    yAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const composedChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    areas: true,
    bars: true,
    lines: true,
    scatters: true,
  },
  axes: {
    xAxes: true,
    yAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const scatterChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    scatters: true,
  },
  axes: {
    xAxes: true,
    yAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const pieChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    pies: true,
  },
  axes: {
    zAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const radarChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    radars: true,
  },
  polarAxes: {
    angleAxes: true,
    radiusAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const radialChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    radials: true,
  },
  polarAxes: {
    angleAxes: true,
    radiusAxes: true,
  },
  additionalFeatures: {
    brush: true,
    tooltip: true,
  },
};

const funnelChartConfig: ChartConfig = {
  common: {
    chart: true,
    legend: true,
  },
  series: {
    funnel: true,
  },
  additionalFeatures: {
    tooltip: true,
  },
};
const treemapChartConfig: ChartConfig = {
  common: {
    chart: true,
  },
  additionalFeatures: {
    tooltip: true,
  },
};

export const CHART_CONFIG = {
  area: areaChartConfig,
  bar: barChartConfig,
  line: lineChartConfig,
  composed: composedChartConfig,
  pie: pieChartConfig,
  radar: radarChartConfig,
  radial: radialChartConfig,
  scatter: scatterChartConfig,
  funnel: funnelChartConfig,
  treemap: treemapChartConfig,
};

// Default props
const DEFAULT_CHART_PROPS: CategoricalChartProps | TreemapProps = {
  width: 1000,
  height: 800,
  margin: { top: 50, right: 30, left: 20, bottom: 5 },
};

const DEFAULT_LEGEND_PROPS: LegendProps = {
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'top',
  iconSize: 10,
  wrapperStyle: { top: 0, left: 0 },
};

export { DEFAULT_CHART_PROPS, DEFAULT_LEGEND_PROPS };
