import React, { useMemo } from 'react';

import dynamic from 'next/dynamic';

import { Brush, Legend, Tooltip } from 'recharts';

import { CHART_CONFIG } from '../common/constants';
import { ChartData, ChartType, RechartsData } from '../common/types';
import AxesRenderer from './Renderes/AxesRenderer';
import { getChart } from './Renderes/helpers/chartHelpers';
import PolarAxesRenderer from './Renderes/PolarAxesRenderer';
import SeriesRenderer from './Renderes/SeriesRenderer';
import { omitUndefinedProps } from './utils/propsUtils';

interface RechartsWrapperProps {
  chartType: ChartType;
  chartData: ChartData;
  rechartsData: RechartsData;
  tooltip?: boolean;
  legend?: boolean;
  brush?: boolean;
  cartesianGrid?: boolean;
  polarGrid?: boolean;
  labelList?: boolean;
}

const RechartsWrapper = ({
  chartType,
  chartData,
  rechartsData,
  tooltip = true,
  legend = true,
  cartesianGrid = true,
  polarGrid = true,
  labelList = false,
  brush = false,
}: RechartsWrapperProps) => {
  const Rechart = useMemo(() => getChart(chartType), [chartType]);
  const config = useMemo(() => CHART_CONFIG[chartType], [chartType]);
  const { common } = rechartsData;

  return (
    <Rechart data={chartData} {...omitUndefinedProps(common.chart)}>
      {legend && <Legend {...omitUndefinedProps(common.legend)} />}
      {AxesRenderer({
        axesConfig: config.axes,
        axesData: rechartsData.axes,
        cartesianGrid,
      })}
      {PolarAxesRenderer({
        polarAxesConfig: config.polarAxes,
        polarAxesData: rechartsData.polarAxes,
        polarGrid,
      })}
      {brush && config.additionalFeatures?.brush && <Brush />}
      {tooltip && config.additionalFeatures?.tooltip && <Tooltip />}
      {SeriesRenderer({
        seriesConfig: config.series,
        rechartsSeriesData: rechartsData.series,
        chartData,
        labelList,
      })}
    </Rechart>
  );
};

export default dynamic(() => Promise.resolve(RechartsWrapper), {
  ssr: false,
});
