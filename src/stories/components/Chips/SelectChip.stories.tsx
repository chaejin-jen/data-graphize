import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import SelectChip from '@/components/Chips/SelectChip';

import spinner from '../../assets/spinner.svg';

const meta: Meta = {
  title: 'Components/Chips/SelectChip',
  component: SelectChip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SelectChip label="Default" />,
};

export const Selected: Story = {
  render: () => <SelectChip label="Selected" selected={true} />,
};

export const SelectChipWithLeadingIcon: Story = {
  render: () => (
    <SelectChip label="SelectChipWithLeadingIcon" leadingIcon={spinner} />
  ),
};

export const StyleSelectChip: Story = {
  render: () => (
    <SelectChip
      label="SelectChipWithLeadingIcon"
      style={{ backgroundColor: 'red', color: 'white' }}
    />
  ),
};
