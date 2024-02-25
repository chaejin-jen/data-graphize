import React from 'react';

import Typography from '@/components/ui/Typography/Typography';

import { Value } from '@/recharts/common/types';
import { ElementControl } from '@/recharts/configurators/types';

const FunnelControl = <T,>({
  itemKey,
  itemValue,
  setValue,
  onRemove,
}: ElementControl<T>) => {
  switch (itemKey) {
    case 'dataKey': {
      return (
        <>
          <Typography>Data Key</Typography>
          <input
            value={itemValue as string}
            type="string"
            onChange={(event) => {
              setValue(event.target.value as Value<T>);
            }}
          />
        </>
      );
    }
    default: {
      break;
    }
  }
  return null;
};

export default FunnelControl;
