import { Dispatch, SetStateAction } from 'react';

import {
  AreaProps,
  BarProps,
  FunnelProps,
  LegendProps,
  LineProps,
  PieProps,
  PolarAngleAxisProps,
  PolarRadiusAxisProps,
  RadarProps,
  RadialBarProps,
  ScatterProps,
  TreemapProps,
  XAxisProps,
  YAxisProps,
  ZAxisProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import { DataKey } from 'recharts/types/util/types';

type ChartDataKey = DataKey<any>;

type ChartData = { [key: string]: any }[];

export type { ChartDataKey, ChartData };

type ChartType =
  | 'area'
  | 'bar'
  | 'line'
  | 'composed'
  | 'pie'
  | 'radar'
  | 'radial'
  | 'scatter'
  | 'funnel'
  | 'treemap';

export type { ChartType };

interface ChartConfig {
  common: Partial<Record<keyof RechartsCommonData, boolean>>;
  series?: Partial<Record<keyof RechartsSeriesData, boolean>>;
  axes?: Partial<Record<keyof RechartsAxesData, boolean>>;
  polarAxes?: Partial<Record<keyof RechartsPolarAxesData, boolean>>;
  additionalFeatures?: Partial<Record<'brush' | 'tooltip', boolean>>;
}
export type { ChartConfig };

type Key<T> = keyof T;
type Value<T> = T[keyof T];
type ValueSetter<T> = (value: Value<T>) => void;

interface ArraySetter<T> {
  getArray: () => T[];
  push: (element: T) => void;
  pop: () => T | undefined;
  shift: () => T | undefined;
  unshift: (element: T) => void;
  clear: () => void;
  getIndex: (index: number) => T | undefined;
  updateIndex: (index: number, element: T) => void;
  updateIndexKey: (index: number, key: keyof T, newValue: T[keyof T]) => void;
  removeIndex: (index: number) => void;
  insert: (index: number, element: T) => void;
}

type Setter<T> = Dispatch<SetStateAction<T>> | ArraySetter<T>;

export type { Key, Value, ValueSetter, ArraySetter, Setter };

interface RechartsData {
  common: { chart: CategoricalChartProps | TreemapProps; legend: LegendProps };
  series: {
    areas: AreaProps[];
    bars: BarProps[];
    lines: LineProps[];
    scatters: ScatterProps[];
    pies: PieProps[];
    radars: RadarProps[];
    radials: RadialBarProps[];
    funnel: FunnelProps;
  };
  axes: {
    xAxes: XAxisProps[];
    yAxes: YAxisProps[];
    zAxes: ZAxisProps[];
  };
  polarAxes: {
    angleAxes: PolarAngleAxisProps[];
    radiusAxes: PolarRadiusAxisProps[];
  };
}

interface RechartsDataSetters {
  common: {
    chart: Dispatch<SetStateAction<CategoricalChartProps | TreemapProps>>;
    legend: Dispatch<SetStateAction<LegendProps>>;
  };

  series: {
    areas: ArraySetter<AreaProps>;
    bars: ArraySetter<BarProps>;
    lines: ArraySetter<LineProps>;
    scatters: ArraySetter<ScatterProps>;
    pies: ArraySetter<PieProps>;
    radars: ArraySetter<RadarProps>;
    radials: ArraySetter<RadialBarProps>;
    funnel: Dispatch<SetStateAction<FunnelProps>>;
  };

  axes: {
    xAxes: ArraySetter<XAxisProps>;
    yAxes: ArraySetter<YAxisProps>;
    zAxes: ArraySetter<ZAxisProps>;
  };

  polarAxes: {
    angleAxes: ArraySetter<PolarAngleAxisProps>;
    radiusAxes: ArraySetter<PolarRadiusAxisProps>;
  };
}

export type { RechartsData, RechartsDataSetters };

type RechartsCommonData = RechartsData['common'];
type RechartsSeriesData = RechartsData['series'];
type RechartsAxesData = RechartsData['axes'];
type RechartsPolarAxesData = RechartsData['polarAxes'];

type RechartsCommonDataSetters = RechartsDataSetters['common'];
type RechartsSeriesDataSetters = RechartsDataSetters['series'];
type RechartsAxesDataSetters = RechartsDataSetters['axes'];
type RechartsPolarAxesDataSetters = RechartsDataSetters['polarAxes'];

export type {
  RechartsCommonData,
  RechartsCommonDataSetters,
  RechartsSeriesData,
  RechartsSeriesDataSetters,
  RechartsAxesData,
  RechartsAxesDataSetters,
  RechartsPolarAxesData,
  RechartsPolarAxesDataSetters,
};
