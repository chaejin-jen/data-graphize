import React from 'react';

import { XAxis, YAxis, ZAxis } from 'recharts';

import { RechartsAxesData } from '@/recharts/common/types';

export const getAxis = (axisKey: keyof RechartsAxesData): React.ElementType => {
  switch (axisKey) {
    case 'xAxes':
      return XAxis;
    case 'yAxes':
      return YAxis;
    case 'zAxes':
      return ZAxis;
  }
};
