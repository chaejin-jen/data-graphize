import React from 'react';

import Chip from '@/components/Chips/Chip';

import { ElementControl } from '@/recharts/configurators/types';

const PolarAxisControl = <T,>({
  itemKey,
  itemValue,
  setValue,
  onRemove,
}: ElementControl<T>) => {
  switch (itemKey) {
    case 'dataKey': {
      return <Chip label={itemValue as string} onRemove={onRemove} />;
    }
    default: {
      break;
    }
  }
  return null;
};

export default PolarAxisControl;
