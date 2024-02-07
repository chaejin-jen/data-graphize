import React from 'react';

import { RadioProps } from './Radio';

import styles from './Radio.module.scss';

interface RadioGroupProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  children: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  value,
  onChange,
  children,
}) => {
  const handleValue = () => {
    onChange?.(value);
  };
  return (
    <fieldset className={styles['radio-group']}>
      <legend className={styles['label']}>{label}</legend>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            name: label,
            checked: child.props.value === value,
            onChange: handleValue,
          });
        }
        return child;
      })}
    </fieldset>
  );
};

export default RadioGroup;
