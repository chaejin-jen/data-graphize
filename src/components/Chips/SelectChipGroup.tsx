import React, { useState } from 'react';

import SelectChip, { SelectChipProps } from './SelectChip';

import styles from './ChipGroup.module.scss';

interface SelectChipGroupProps {
  chips: SelectChipProps[];
  multiSelect?: boolean;
  onSelect?: (index?: number) => void;
  defaultSelect?: number;
}

const SelectChipGroup: React.FC<SelectChipGroupProps> = ({
  multiSelect = false,
  chips,
  onSelect,
  defaultSelect,
}) => {
  const [selectedChips, setSelectedChips] = useState<Set<number>>(
    defaultSelect !== undefined ? new Set([defaultSelect]) : new Set<number>(),
  );

  const handleOnSelect = (index: number) => {
    setSelectedChips((prevSelectedChips) => {
      const updatedChips = new Set<number>(prevSelectedChips);

      if (updatedChips.has(index)) {
        updatedChips.delete(index);
      } else {
        if (multiSelect) {
          updatedChips.add(index);
        } else {
          return new Set([index]);
        }
      }

      return updatedChips;
    });
    chips[index].onClick?.();
    onSelect?.(index);
  };

  return (
    <div className={styles['chip-group']}>
      {chips.map((chip, index) => (
        <SelectChip
          {...chip}
          onClick={() => {
            handleOnSelect(index);
          }}
          selected={selectedChips.has(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default SelectChipGroup;
