import React from 'react';

import { capitalizeFirstLetter } from '@/utils/stringUtils';

import Accordion from '@/components/Accordions/Accordion';
import Typography from '@/components/ui/Typography/Typography';

import { Setter } from '@/recharts/common/types';

import {
  RechartsElementKey,
  RechartsElementSetters,
  RechartsElementValue,
} from '../types';
import ChartElementControl from './ChartElementControlRenderer';

import styles from './ChartElementRenderer.module.scss';

interface ChartElementRendererProps {
  chartElements: RechartsElementValue;
  chartElementSetters: Partial<RechartsElementSetters>;
}

interface ChartElement<T> {
  rechartsDataKey: RechartsElementKey;
  chartElement: T | T[];
  chartElementSetter: Setter<T>;
}

const ChartElementRenderer: React.FC<ChartElementRendererProps> = ({
  chartElements,
  chartElementSetters,
}) => {
  const renderElementControl = <T,>({
    rechartsDataKey,
    chartElement,
    chartElementSetter,
  }: ChartElement<T>): React.ReactNode => {
    const typedChartElement = Array.isArray(chartElement)
      ? chartElement
      : [chartElement];
    return typedChartElement.map((element, index) => (
      <React.Fragment key={`${rechartsDataKey}-${index}`}>
        <ChartElementControl<T>
          rechartsDataKey={rechartsDataKey}
          element={element as T}
          chartElementSetter={chartElementSetter}
          elementIndex={index}
        />
      </React.Fragment>
    ));
  };

  if (!chartElements || !chartElementSetters) return null;
  return Object.keys(chartElementSetters).map((elementKey, index) => {
    const typedKey = elementKey as keyof RechartsElementValue;
    return (
      <div className={styles['chart-element']} key={index}>
        <Typography size="body-medium">
          {capitalizeFirstLetter(elementKey)}
        </Typography>
        <div className={styles['element']}>
          {chartElements[typedKey] &&
            chartElementSetters[typedKey] &&
            renderElementControl({
              rechartsDataKey: typedKey,
              chartElement: chartElements[typedKey],
              chartElementSetter: chartElementSetters[typedKey],
            })}
        </div>
      </div>
    );
  });
};
export default ChartElementRenderer;
