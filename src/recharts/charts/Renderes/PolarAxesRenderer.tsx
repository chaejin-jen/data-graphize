import React from 'react';

import { PolarGrid } from 'recharts';

import { RechartsPolarAxesData } from '@/recharts/common/types';

import { omitUndefinedProps } from '../utils/propsUtils';
import { getPolarAxis } from './helpers/polarAxisHelpers';

interface PolarAxesRendererProps {
  polarAxesConfig?: Partial<Record<keyof RechartsPolarAxesData, boolean>>;
  polarAxesData: RechartsPolarAxesData;
  polarGrid: boolean;
}

const PolarAxesRenderer = ({
  polarAxesConfig,
  polarAxesData,
  polarGrid,
}: PolarAxesRendererProps) => {
  const renderAxes = (
    polarAxesKey: keyof RechartsPolarAxesData,
    polarAxesData: RechartsPolarAxesData[keyof RechartsPolarAxesData],
  ) => {
    const elementType = getPolarAxis(polarAxesKey) as React.ElementType;

    return polarAxesData.map((item, index) => {
      return (
        item &&
        React.createElement(elementType, {
          key: index,
          ...omitUndefinedProps(item),
        })
      );
    });
  };
  if (polarAxesConfig === undefined) return;
  return (
    <>
      {polarGrid && polarAxesData.angleAxes?.[0]?.cx && <PolarGrid />}
      {Object.entries(polarAxesData).map(([k, polarAxesData]) => {
        const polarAxesKey = k as keyof RechartsPolarAxesData;
        return (
          <React.Fragment key={polarAxesKey}>
            {polarAxesConfig[polarAxesKey] &&
              polarAxesData &&
              renderAxes(polarAxesKey, polarAxesData)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default PolarAxesRenderer;
