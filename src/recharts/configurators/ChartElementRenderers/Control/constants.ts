import { LegendProps } from 'recharts';

export const LEGEND_POSITION: { [key: string]: LegendProps } = {
  left: {
    layout: 'vertical',
    verticalAlign: 'middle',
    align: 'left',
  },
  right: {
    layout: 'vertical',
    verticalAlign: 'middle',
    align: 'right',
  },
  top: {
    layout: 'horizontal',
    verticalAlign: 'top',
    align: 'center',
  },
  bottom: {
    layout: 'horizontal',
    verticalAlign: 'bottom',
    align: 'center',
  },
};
