import React from 'react';

import clsx from 'clsx';

import Spinner from '@/components/ActivityIndicator/Spinner';

import styles from './Button.module.scss';

export interface ButtonProps {
  /** Button contents */
  children: React.ReactNode;
  onClick?: () => void;
  /** Props button style */
  style?: React.CSSProperties;
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Optional ActivityIndicator (Spinner) */
  working?: boolean;
  workingLabel?: string;
  hideWorkingLabel?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style,
  primary = true,
  working = false,
  workingLabel = '',
  hideWorkingLabel = false,
  disabled = false,
}) => {
  const getButtonClasses = () =>
    clsx(
      styles['button'],
      (disabled || working) && styles['button-disabled'],
      primary ? styles['button-primary'] : styles['button-secondary'],
    );
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={getButtonClasses()}
      style={style}
      disabled={disabled}>
      {working && <Spinner className={styles.spinner} />}
      {!hideWorkingLabel && working ? workingLabel : children}
    </button>
  );
};
