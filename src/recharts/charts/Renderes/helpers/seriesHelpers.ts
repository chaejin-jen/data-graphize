import {
  Area,
  Bar,
  Funnel,
  Line,
  Pie,
  Radar,
  RadialBar,
  Scatter,
} from 'recharts';

import { RechartsSeriesData } from '@/recharts/common/types';

export const getSeries = (seriesKey: keyof RechartsSeriesData) => {
  switch (seriesKey) {
    case 'areas':
      return Area;
    case 'bars':
      return Bar;
    case 'lines':
      return Line;
    case 'pies':
      return Pie;
    case 'radars':
      return Radar;
    case 'radials':
      return RadialBar;
    case 'scatters':
      return Scatter;
    case 'funnel':
      return Funnel;
  }
};
