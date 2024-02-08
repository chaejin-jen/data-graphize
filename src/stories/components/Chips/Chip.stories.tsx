import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Chip from '@/components/Chips/Chip';

import spinner from '../../assets/spinner.svg';

const meta: Meta = {
  title: 'Components/Chips/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Chip label="Default" />,
};

export const ChipWithLeadingIcon: Story = {
  render: () => <Chip label="ChipWithLeadingIcon" leadingIcon={spinner} />,
};

export const ChipWithRemoveIcon: Story = {
  render: () => (
    <Chip
      label="ChipWithRemoveIcon"
      onRemove={() => {
        alert('Chip Remove Clicked!');
      }}
    />
  ),
};

export const ChipOnClick: Story = {
  render: () => (
    <Chip
      label="ChipWithRemoveIcon"
      onClick={() => {
        alert('Chip Clicked!');
      }}
    />
  ),
};

export const StyleChip: Story = {
  render: () => (
    <Chip
      label="ChipWithLeadingIcon"
      style={{ backgroundColor: 'red', color: 'white' }}
    />
  ),
};
