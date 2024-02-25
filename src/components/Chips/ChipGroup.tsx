import React from 'react';

import Chip, { ChipProps } from './Chip';

import styles from './ChipGroup.module.scss';

interface ChipGroupProps {
  chips: ChipProps[];
}

const ChipGroup: React.FC<ChipGroupProps> = ({ chips }) => {
  return (
    <div className={styles['chip-group']}>
      {chips.map((chip, index) => (
        <Chip {...chip} key={index} />
      ))}
    </div>
  );
};

export default ChipGroup;
