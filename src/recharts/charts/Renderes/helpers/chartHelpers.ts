import React from 'react';

import {
  AreaChart,
  BarChart,
  ComposedChart,
  FunnelChart,
  LineChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,
  Treemap,
} from 'recharts';

import { ChartType } from '@/recharts/common/types';

export const getChart = (chartType: ChartType): React.ElementType => {
  switch (chartType) {
    case 'area':
      return AreaChart;
    case 'bar':
      return BarChart;
    case 'line':
      return LineChart;
    case 'composed':
      return ComposedChart;
    case 'pie':
      return PieChart;
    case 'radar':
      return RadarChart;
    case 'radial':
      return RadialBarChart;
    case 'scatter':
      return ScatterChart;
    case 'funnel':
      return FunnelChart;
    case 'treemap':
      return Treemap;
  }
};
