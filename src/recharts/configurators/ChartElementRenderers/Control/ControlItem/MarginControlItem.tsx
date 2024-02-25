import React from 'react';

import { Margin } from 'recharts/types/util/types';

import Slider from '@/components/Sliders/Slider';
import Typography from '@/components/ui/Typography/Typography';

import { ElementControl } from '../../../types';

import styles from './ControlItem.module.scss';

const MarginControlItem = <T,>({ itemValue, setValue }: ElementControl<T>) => {
  return (
    <div className={styles['margin']}>
      {Object.entries(itemValue as Margin).map(([key, value], index) => {
        return (
          <div className={styles[`margin-${key}`]} key={index}>
            <Typography size="label-small">{key}</Typography>
            <Slider
              value={value}
              onChange={(newValue) => {
                setValue({ ...itemValue, [key]: newValue });
              }}
              min={0}
              max={100}
              step={1}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MarginControlItem;
