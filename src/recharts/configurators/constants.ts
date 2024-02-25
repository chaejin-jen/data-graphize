import { LegendType } from 'recharts';
import { VerticalAlignmentType } from 'recharts/types/component/DefaultLegendContent';
import { CurveType } from 'recharts/types/shape/Curve';
import { LayoutType } from 'recharts/types/util/types';

import { ChartType } from '../common/types';

// Chart
const CHART_OPTION: ChartType[] = [
  'area',
  'bar',
  'line',
  'composed',
  'pie',
  'radar',
  'radial',
  'scatter',
  'funnel',
  'treemap',
];

export { CHART_OPTION };

// Legend
const LEGEND_ICON: LegendType[] = [
  'line',
  'plainline',
  'square',
  'rect',
  'circle',
  'cross',
  'diamond',
  'square',
  'star',
  'triangle',
  'wye',
  'none',
];

const LEGEND_LAYOUT: LayoutType[] = ['horizontal', 'vertical'];
const LEGEND_ALIGN: AlignSetting[] = ['left', 'center', 'right'];
const LEGEND_VERTICAL_ALIGN: VerticalAlignmentType[] = [
  'top',
  'middle',
  'bottom',
];

export { LEGEND_ICON, LEGEND_LAYOUT, LEGEND_ALIGN, LEGEND_VERTICAL_ALIGN };

// Area Series
const CURVE_TYPE_OPTIONS: CurveType[] = [
  'basis',
  'basisClosed',
  'basisOpen',
  'bumpX',
  'bumpY',
  'bump',
  'linear',
  'linearClosed',
  'natural',
  'monotoneX',
  'monotoneY',
  'monotone',
  'step',
  'stepBefore',
  'stepAfter',
];

export { CURVE_TYPE_OPTIONS };
