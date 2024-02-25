import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Spinner from '@/components/ActivityIndicator/Spinner';

const meta: Meta = {
  title: 'Components/AcitivitiIndicator/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};
