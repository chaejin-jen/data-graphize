import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ThemeToggleSwitch from '@/components/Switches/ThemeToggleSwitch';

import '@/styles/tokens/_colors.css';

const meta: Meta = {
  title: 'Components/Switches/ThemeToggleSwitch',
  component: ThemeToggleSwitch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ThemeToggleSwitch />,
};
