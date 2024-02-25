import React from 'react';

import Slider from '@/components/Sliders/Slider';

import { Value } from '@/recharts/common/types';

import { ElementControl } from '../../types';
import MarginControlItem from './ControlItem/MarginControlItem';

const ChartControl = <T,>({
  itemKey,
  itemValue,
  setValue,
}: ElementControl<T>) => {
  const handleChange = (newValue: number | string) => {
    setValue(newValue as Value<T>);
  };
  switch (itemKey) {
    case 'width': {
      return (
        <Slider
          label="Width"
          value={itemValue as number}
          onChange={handleChange}
          min={400}
          max={1500}
          step={1}
        />
      );
    }
    case 'height': {
      return (
        <Slider
          label="Height"
          value={itemValue as number}
          onChange={handleChange}
          min={200}
          max={800}
          step={1}
        />
      );
    }
    case 'margin': {
      return (
        <MarginControlItem
          itemKey={itemKey}
          itemValue={itemValue}
          setValue={setValue}
        />
      );
    }
    default: {
      break;
    }
  }
  return null;
};

export default ChartControl;
