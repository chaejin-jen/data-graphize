import { useState } from 'react';

import { LegendProps, TreemapProps } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import { DEFAULT_CHART_PROPS, DEFAULT_LEGEND_PROPS } from '../common/constants';
import { RechartsCommonData, RechartsCommonDataSetters } from '../common/types';

const useRechartsCommonData = (): [
  RechartsCommonData,
  RechartsCommonDataSetters,
] => {
  const [chart, setChart] = useState<CategoricalChartProps | TreemapProps>(
    DEFAULT_CHART_PROPS,
  );
  const [legend, setLegend] = useState<LegendProps>(DEFAULT_LEGEND_PROPS);

  return [
    { chart, legend },
    { chart: setChart, legend: setLegend },
  ];
};

export default useRechartsCommonData;
