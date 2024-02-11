import { LegendProps, TreemapProps } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import { ChartConfig } from './types';

// Chart config
const areaChartConfig: ChartConfig = {
  type: 'area',
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
  brush: true,
  tooltip: true,
};

const barChartConfig: ChartConfig = {
  type: 'bar',
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
  brush: true,
  tooltip: true,
};

const lineChartConfig: ChartConfig = {
  type: 'line',
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
  brush: true,
  tooltip: true,
};

const composedChartConfig: ChartConfig = {
  type: 'composed',
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
  brush: true,
  tooltip: true,
};

const scatterChartConfig: ChartConfig = {
  type: 'scatter',
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
  brush: true,
  tooltip: true,
};

const pieChartConfig: ChartConfig = {
  type: 'pie',
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
  brush: true,
  tooltip: true,
};

const radarChartConfig: ChartConfig = {
  type: 'radar',
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
  brush: true,
  tooltip: true,
};

const radialChartConfig: ChartConfig = {
  type: 'radial',
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
  brush: true,
  tooltip: true,
};

const funnelChartConfig: ChartConfig = {
  type: 'funnel',
  common: {
    chart: true,
    legend: true,
  },
  series: {
    funnel: true,
  },
  tooltip: true,
};

const treemapChartConfig: ChartConfig = {
  type: 'treemap',
  common: {
    chart: true,
  },
  tooltip: true,
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
