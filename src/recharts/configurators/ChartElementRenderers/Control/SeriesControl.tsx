import React from 'react';

import randomColor from 'randomcolor';

import Chip from '@/components/Chips/Chip';
import Slider from '@/components/Sliders/Slider';
import Typography from '@/components/ui/Typography/Typography';

import { Value } from '@/recharts/common/types';

import { CURVE_TYPE_OPTIONS, LEGEND_ICON } from '../../constants';
import { ElementControl } from '../../types';
import SelectControlItem from './ControlItem/SelectControlItem';

const SeriesControl = <T,>({
  itemKey,
  itemValue,
  setValue,
  onRemove,
}: ElementControl<T>) => {
  const handleChange = (newValue?: string | number | Value<T>) => {
    setValue(newValue as Value<T>);
  };
  switch (itemKey) {
    case 'dataKey': {
      return <Chip label={itemValue as string} onRemove={onRemove} />;
    }
    case 'legendType': {
      return (
        <SelectControlItem
          label="Legend Icon"
          itemValue={itemValue}
          option={LEGEND_ICON}
          handleChange={handleChange}
        />
      );
    }
    case 'stackId': {
      return (
        <div style={{ display: 'flex' }}>
          <>
            <Typography>Stack ID</Typography>
            <div
              style={{
                color: 'transparent',
                textShadow: `0 0 0 ${itemValue ? randomColor({ seed: itemValue as string }) : 'gray'}`,
              }}>
              ⚪
            </div>
          </>
          <input
            value={itemValue as string}
            type="string"
            onChange={(event) => {
              handleChange(event.target.value || undefined);
            }}
            style={{ width: '10em' }}
          />
        </div>
      );
    }
    case 'fillOpacity': {
      return (
        <Slider
          label="Fill Opacity"
          value={(itemValue as number) * 100}
          onChange={(newValue) => handleChange(newValue / 100)}
          min={0}
          max={100}
          step={1}
        />
      );
    }

    // Area Series
    case 'connectNulls': {
      return (
        <div style={{ display: 'flex' }}>
          <Typography>Connect Nulls</Typography>
          <input
            type="checkbox"
            id="areaConnectNulls"
            name="connectNulls"
            value={itemValue as string}
          />
        </div>
      );
    }
    case 'type': {
      return (
        <SelectControlItem
          label="Curve Type"
          itemValue={itemValue}
          option={CURVE_TYPE_OPTIONS as string[]}
          handleChange={handleChange}
        />
      );
    }

    // Bar Series
    case 'barSize': {
      return (
        <Slider
          label="Bar Size (max for Auto)"
          value={itemValue as number}
          onChange={(newValue) => {
            handleChange(newValue === 300 ? undefined : newValue);
          }}
          min={1}
          max={300}
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

export default SeriesControl;
