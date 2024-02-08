import React from 'react';

import Image from 'next/image';

import { clsx } from 'clsx';

import RemoveCircleOutline from '@/components/ui/Icons/RemoveCircleOutline';

import styles from './Chip.module.scss';

export interface ChipProps {
  label: string;
  leadingIcon?: string;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Chip: React.FC<ChipProps> = ({
  label,
  leadingIcon,
  onRemove,
  onClick,
  style,
}) => {
  return (
    <div
      className={clsx(styles['chip'], onClick && styles['chip-click'])}
      onClick={onClick}
      style={style}>
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
      {onRemove && (
        <RemoveCircleOutline
          className={styles['remove-icon']}
          onClick={onRemove}
        />
      )}
    </div>
  );
};

export default Chip;
