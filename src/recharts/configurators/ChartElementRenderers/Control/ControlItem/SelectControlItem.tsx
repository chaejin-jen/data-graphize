import React from 'react';

import Typography from '@/components/ui/Typography/Typography';

import { Value } from '@/recharts/common/types';
import { ElementControl } from '@/recharts/configurators/types';

import styles from './ControlItem.module.scss';

interface SelectControlItem<T>
  extends Omit<ElementControl<T>, 'itemKey' | 'setValue'> {
  label: string;
  option: string[];
  handleChange: (newValue: string | number | Value<T>) => void;
}

const SelectControlItem = <T,>({
  label,
  itemValue,
  option,
  handleChange,
}: SelectControlItem<T>) => {
  return (
    <div className={styles['control']}>
      <Typography>{label}</Typography>
      <select
        value={itemValue as string}
        onChange={(e) => handleChange(e.target.value)}>
        {option?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectControlItem;
