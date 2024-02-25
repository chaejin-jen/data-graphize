import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import SelectChipGroup from '@/components/Chips/SelectChipGroup';

const meta: Meta = {
  title: 'Components/Chips/SelectChipGroup',
  component: SelectChipGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const chips = [
  {
    label: 'Chip 1',
  },
  {
    label: 'Chip 2',
  },
  {
    label: 'Chip 3',
  },
];

export const Default: Story = {
  render: () => <SelectChipGroup chips={chips} />,
};

export const DefaultSelect: Story = {
  render: () => <SelectChipGroup chips={chips} defaultSelect={0} />,
};

export const MultiSelect: Story = {
  render: () => <SelectChipGroup chips={chips} multiSelect={true} />,
};

const onSelect = (index?: number) => {
  alert(`${index}: ${index !== undefined ? chips[index].label : undefined}`);
};

export const SelectChipGroupOnSelect: Story = {
  render: () => <SelectChipGroup chips={chips} onSelect={onSelect} />,
};

const chipsOnClick = [
  {
    label: 'Chip 1',
    onClick: () => {
      alert('Chip 1');
    },
  },
  {
    label: 'Chip 2',
    onClick: () => {
      alert('Chip 2');
    },
  },
  {
    label: 'Chip 3',
    onClick: () => {
      alert('Chip 3');
    },
  },
];

export const SelectChipGroupOnClick: Story = {
  render: () => <SelectChipGroup chips={chipsOnClick} />,
};
