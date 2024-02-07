import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ThemeSwitch from '@/components/Switches/ThemeSwitch';

const meta: Meta = {
  title: 'Components/Switches/ThemeSwitch',
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ThemeSwitch />,
};
