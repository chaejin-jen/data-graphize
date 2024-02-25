import {
  Key,
  RechartsAxesData,
  RechartsAxesDataSetters,
  RechartsCommonData,
  RechartsCommonDataSetters,
  RechartsPolarAxesData,
  RechartsPolarAxesDataSetters,
  RechartsSeriesData,
  RechartsSeriesDataSetters,
  Value,
  ValueSetter,
} from '../common/types';

type AddableRechartsKey =
  | Exclude<keyof RechartsSeriesDataSetters, 'funnel'>
  | keyof RechartsAxesDataSetters
  | keyof RechartsPolarAxesDataSetters;

type AddableRechartsSetters = Record<
  AddableRechartsKey,
  | RechartsSeriesDataSetters[Exclude<
      keyof RechartsSeriesDataSetters,
      'funnel'
    >]
  | RechartsAxesDataSetters[keyof RechartsAxesDataSetters]
  | RechartsPolarAxesDataSetters[keyof RechartsPolarAxesDataSetters]
>;

export type { AddableRechartsKey, AddableRechartsSetters };

type RechartsElementKey =
  | keyof RechartsCommonData
  | keyof RechartsSeriesData
  | keyof RechartsAxesData
  | keyof RechartsPolarAxesData;

type RechartsElementValue =
  | RechartsCommonData
  | RechartsSeriesData
  | RechartsAxesData
  | RechartsPolarAxesData;

type RechartsElementSetters =
  | RechartsCommonDataSetters
  | RechartsSeriesDataSetters
  | RechartsAxesDataSetters
  | RechartsPolarAxesDataSetters;

export type {
  RechartsElementKey,
  RechartsElementValue,
  RechartsElementSetters,
};

type ElementControl<T> = {
  itemKey: Key<T>;
  itemValue: Value<T>;
  setValue: ValueSetter<T>;
  onRemove?: () => void;
};

type ElementControlRenderer<T> = (
  elementControl: ElementControl<T>,
) => React.JSX.Element | null;

export type { ElementControlRenderer, ElementControl };
