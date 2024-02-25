import React from 'react';

import SelectChipGroup from '@/components/Chips/SelectChipGroup';
import Slider from '@/components/Sliders/Slider';

import { DEFAULT_LEGEND_PROPS } from '@/recharts/common/constants';
import { Value } from '@/recharts/common/types';
import { ElementControl } from '@/recharts/configurators/types';

import {
  LEGEND_ALIGN,
  LEGEND_LAYOUT,
  LEGEND_VERTICAL_ALIGN,
} from '../../constants';

const LegendControl = <T,>({
  itemKey,
  itemValue,
  setValue,
}: ElementControl<T>) => {
  const handleChange = (newValue: number | string) => {
    setValue(newValue as Value<T>);
  };

  switch (itemKey) {
    case 'layout': {
      return (
        <SelectChipGroup
          chips={LEGEND_LAYOUT?.map((value) => ({
            label: value,
          }))}
          defaultSelect={LEGEND_LAYOUT.findIndex(
            (value) => value === DEFAULT_LEGEND_PROPS.layout,
          )}
          onSelect={(index) => handleChange(LEGEND_LAYOUT[index ?? 0])}
        />
      );
    }
    case 'align': {
      return (
        <SelectChipGroup
          chips={LEGEND_ALIGN?.map((value) => ({
            label: value,
          }))}
          defaultSelect={LEGEND_ALIGN.findIndex(
            (value) => value === DEFAULT_LEGEND_PROPS.align,
          )}
          onSelect={(index) => handleChange(LEGEND_ALIGN[index ?? 0])}
        />
      );
    }
    case 'verticalAlign': {
      return (
        <SelectChipGroup
          chips={LEGEND_VERTICAL_ALIGN?.map((value) => ({
            label: value,
          }))}
          defaultSelect={LEGEND_VERTICAL_ALIGN.findIndex(
            (value) => value === DEFAULT_LEGEND_PROPS.verticalAlign,
          )}
          onSelect={(index) => handleChange(LEGEND_VERTICAL_ALIGN[index ?? 0])}
        />
      );
    }
    case 'iconSize': {
      return (
        <Slider
          label="Icon size"
          value={itemValue as number}
          onChange={handleChange}
          min={2}
          max={30}
          step={1}
        />
      );
    }
    default: {
      break;
    }
  }
  return null;
};

export default LegendControl;
