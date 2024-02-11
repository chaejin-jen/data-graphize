import React from 'react';

import { CartesianGrid } from 'recharts';

import { RechartsAxesData } from '@/recharts/common/types';

import { omitUndefinedProps } from '../utils/propsUtils';
import { getAxis } from './helpers/axisHelpers';

interface AxesRendererProps {
  axesConfig?: Partial<Record<keyof RechartsAxesData, boolean>>;
  axesData: RechartsAxesData;
  cartesianGrid: boolean;
}

const AxesRenderer = ({
  axesConfig,
  axesData,
  cartesianGrid,
}: AxesRendererProps) => {
  const renderAxes = (
    axesKey: keyof RechartsAxesData,
    axesData: RechartsAxesData[keyof RechartsAxesData],
  ) => {
    const elementType = getAxis(axesKey) as React.ElementType;

    return axesData.map((item, index) => {
      return (
        item &&
        React.createElement(elementType, {
          key: index,
          ...omitUndefinedProps(item),
        })
      );
    });
  };

  if (axesConfig === undefined) return;
  return (
    <>
      {cartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
      {Object.entries(axesData).map(([k, axesData]) => {
        const axesKey = k as keyof RechartsAxesData;
        return (
          <React.Fragment key={axesKey}>
            {axesConfig[axesKey] && axesData && renderAxes(axesKey, axesData)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AxesRenderer;
