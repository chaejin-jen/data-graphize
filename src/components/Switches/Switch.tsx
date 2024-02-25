import React from 'react';

import clsx from 'clsx';

import styles from './Switch.module.scss';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

interface SwitchProps {
  label?: string;
  toggled?: boolean;
  onChange?: () => void;
  size?: Size;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  circleStyle?: React.CSSProperties;
  activeContent?: React.ReactNode;
  inActiveContent?: React.ReactNode;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  toggled = false,
  onChange,
  size = 'sm',
  style,
  labelStyle,
  circleStyle,
  activeContent,
  inActiveContent,
}) => {
  const getButtonClasses = () =>
    clsx(styles['button'], styles[`button-${size}`]);
  const getCircleClasses = () =>
    clsx(
      styles['circle'],
      styles[`circle-${size}`],
      toggled && styles['circle-toggled'],
      toggled && styles[`circle-toggled-${size}`],
    );
  return (
    <div className={styles['container']}>
      {label && <span style={labelStyle}>{label}</span>}
      <button
        type="button"
        onClick={onChange}
        className={getButtonClasses()}
        style={style}>
        {activeContent && toggled && activeContent}
        <span className={getCircleClasses()} style={circleStyle}></span>
        {inActiveContent && !toggled && (
          <span className={styles['right']}>{inActiveContent}</span>
        )}
      </button>
    </div>
  );
};

export default Switch;
