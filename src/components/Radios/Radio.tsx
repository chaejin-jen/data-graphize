import React from 'react';

import clsx from 'clsx';

import styles from './Radio.module.scss';

export interface RadioProps {
  value: string;
  name?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

const Radio: React.FC<RadioProps> = ({
  value,
  name,
  defaultChecked = false,
  checked,
  disabled = false,
  onChange,
  children,
}) => {
  return (
    <label className={clsx(styles['radio'], disabled && styles['disable'])}>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked || checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {children}
    </label>
  );
};

export default Radio;
