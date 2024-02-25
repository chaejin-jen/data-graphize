import React from 'react';

import Image from 'next/image';

import { clsx } from 'clsx';

import styles from './SelectChip.module.scss';

export interface SelectChipProps {
  label: string;
  leadingIcon?: string;
  onClick?: () => void;
  selected?: boolean;
  disable?: boolean;
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}

const SelectChip: React.FC<SelectChipProps> = ({
  label,
  leadingIcon,
  onClick,
  selected = false,
  disable = false,
  style,
  selectStyle,
}) => {
  const handleChipClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    onClick?.();
  };
  return (
    <div
      className={clsx(
        styles['chip'],
        disable ? styles['chip-disable'] : styles['chip-click'],
        selected && styles['chip-selected'],
      )}
      onClick={handleChipClick}
      style={selected ? { ...style, ...selectStyle } : style}>
      {leadingIcon && (
        <Image
          className={styles['leading-icon']}
          src={leadingIcon}
          alt="Leading Icon"
          width={40}
          height={40}
          priority
        />
      )}
      <span className={styles['label']}>{label}</span>
    </div>
  );
};

export default SelectChip;
