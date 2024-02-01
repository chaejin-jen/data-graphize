import React from 'react';

import clsx from 'clsx';

import styles from './ToggleSwitch.module.scss';

export type Size = 'small' | 'medium' | 'large';

interface ToggleSwitchProps {
  label?: string;
  toggled?: boolean;
  onClick?: () => void;
  size?: Size;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  circleStyle?: React.CSSProperties;
  activeContent?: React.ReactNode;
  inActiveContent?: React.ReactNode;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  toggled = false,
  onClick,
  size = 'small',
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
    <div className={styles.container}>
      {label && <span style={labelStyle}>{label}</span>}
      <button
        type="button"
        onClick={onClick}
        className={getButtonClasses()}
        style={style}>
        {activeContent && toggled && activeContent}
        <div className={getCircleClasses()} style={circleStyle}></div>
        {inActiveContent && !toggled && (
          <div className={styles.right}>{inActiveContent}</div>
        )}
      </button>
    </div>
  );
};

export default ToggleSwitch;
