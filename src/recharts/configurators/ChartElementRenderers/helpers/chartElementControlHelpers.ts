import { Dispatch, SetStateAction } from 'react';

import { Key, Setter, Value, ValueSetter } from '../../../common/types';
import { ElementControlRenderer, RechartsElementKey } from '../../types';
import AxisControl from '../Control/AxisControl';
import ChartControl from '../Control/ChartControl';
import LegendControl from '../Control/LegendControl';
import PolarAxisControl from '../Control/PolarAxisControl';
import SeriesControl from '../Control/SeriesControl';

export const getElementControlRenderer = <T>(
  key: RechartsElementKey,
): ElementControlRenderer<T> => {
  switch (key) {
    // common
    case 'chart': {
      return ChartControl<T>;
    }
    case 'legend': {
      return LegendControl<T>;
    }
    // series
    case 'areas': {
      return SeriesControl<T>;
    }
    case 'bars': {
      return SeriesControl<T>;
    }
    case 'lines': {
      return SeriesControl<T>;
    }
    case 'pies': {
      return SeriesControl<T>;
    }
    case 'radars': {
      return SeriesControl<T>;
    }
    case 'radials': {
      return SeriesControl<T>;
    }
    case 'scatters': {
      return SeriesControl<T>;
    }
    case 'funnel': {
      return SeriesControl<T>;
    }
    // axes
    case 'xAxes': {
      return AxisControl<T>;
    }
    case 'yAxes': {
      return AxisControl<T>;
    }
    case 'zAxes': {
      return AxisControl<T>;
    }
    // polarAxes
    case 'angleAxes': {
      return PolarAxisControl<T>;
    }
    case 'radiusAxes': {
      return PolarAxisControl<T>;
    }
  }
};

export const setValueElementControl = <T>(
  itemKey: Key<T>,
  elementSetter: Setter<T>,
  elementIndex?: number,
): ValueSetter<T> => {
  if (elementIndex !== undefined && typeof elementSetter === 'object') {
    return (newValue: Value<T>) =>
      elementSetter.updateIndexKey(elementIndex, itemKey, newValue);
  } else {
    return (newValue: Value<T>) =>
      (elementSetter as Dispatch<SetStateAction<T>>)((prevItem: T) => ({
        ...prevItem,
        [itemKey]: newValue,
      }));
  }
};

export const removeElementControl = <T>(
  itemKey: Key<T>,
  elementSetter: Setter<T>,
  elementIndex?: number,
): (() => void) | undefined => {
  if (
    elementIndex !== undefined &&
    typeof elementSetter === 'object' &&
    itemKey === 'dataKey'
  ) {
    return () => elementSetter.removeIndex(elementIndex);
  }
};
