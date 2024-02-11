import React from 'react';

import { PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import { RechartsPolarAxesData } from '@/recharts/common/types';

export const getPolarAxis = (
  polarAxisKey: keyof RechartsPolarAxesData,
): React.ElementType => {
  switch (polarAxisKey) {
    case 'angleAxes':
      return PolarAngleAxis;
    case 'radiusAxes':
      return PolarRadiusAxis;
  }
};
