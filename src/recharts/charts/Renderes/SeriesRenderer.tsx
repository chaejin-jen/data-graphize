import React from 'react';

import { LabelList } from 'recharts';

import { ChartData, RechartsSeriesData } from '@/recharts/common/types';

import { omitUndefinedProps } from '../utils/propsUtils';
import { getSeries } from './helpers/seriesHelpers';

interface SeriesRendererProps {
  seriesConfig?: Partial<Record<keyof RechartsSeriesData, boolean>>;
  rechartsSeriesData: RechartsSeriesData;
  chartData: ChartData;
  labelList: boolean;
}

const SeriesRenderer = ({
  seriesConfig,
  rechartsSeriesData,
  chartData,
  labelList,
}: SeriesRendererProps) => {
  const renderSeries = <T,>(
    seriesKey: keyof RechartsSeriesData,
    seriesData: T | T[],
  ) => {
    const elementType = getSeries(seriesKey) as React.ElementType;
    const needChartData = seriesKey === 'pies' || seriesKey === 'funnel';
    const series = Array.isArray(seriesData) ? seriesData : [seriesData];

    return series.map((item, index) => {
      return (
        item &&
        React.createElement(
          elementType,
          {
            key: index,
            ...(needChartData ? { data: chartData } : {}),
            ...omitUndefinedProps(item),
          },
          labelList ? <LabelList dataKey="name" /> : null, // TODO
        )
      );
    });
  };
  return Object.entries(rechartsSeriesData).map(([k, v]) => {
    const seriesKey = k as keyof RechartsSeriesData;
    const seriesData = v as Partial<RechartsSeriesData>;
    return (
      <React.Fragment key={seriesKey}>
        {seriesConfig?.[seriesKey] &&
          seriesData &&
          renderSeries(seriesKey, seriesData)}
      </React.Fragment>
    );
  });
};

export default SeriesRenderer;
