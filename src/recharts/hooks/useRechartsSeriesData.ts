import { useState } from 'react';

import {
  AreaProps,
  BarProps,
  FunnelProps,
  LineProps,
  PieProps,
  RadarProps,
  RadialBarProps,
  ScatterProps,
} from 'recharts';

import useArray from '@/recharts/common/useArray';

import { RechartsSeriesData, RechartsSeriesDataSetters } from '../common/types';

const useRechartsSeriesData = (): [
  RechartsSeriesData,
  RechartsSeriesDataSetters,
] => {
  const [areas, setAreas] = useArray<AreaProps>([]);
  const [bars, setBars] = useArray<BarProps>([]);
  const [lines, setLines] = useArray<LineProps>([]);
  const [scatters, setScatters] = useArray<ScatterProps>([]);
  const [pies, setPies] = useArray<PieProps>([]);
  const [radars, setRadars] = useArray<RadarProps>([]);
  const [radials, setRadials] = useArray<RadialBarProps>([]);
  const [funnel, setFunnel] = useState<FunnelProps>({ dataKey: '' });

  return [
    { areas, bars, lines, scatters, pies, radars, radials, funnel },
    {
      areas: setAreas,
      bars: setBars,
      lines: setLines,
      scatters: setScatters,
      pies: setPies,
      radars: setRadars,
      radials: setRadials,
      funnel: setFunnel,
    },
  ];
};

export default useRechartsSeriesData;
