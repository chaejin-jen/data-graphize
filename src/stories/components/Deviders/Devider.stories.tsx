import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Cards/Card';
import Divider from '@/components/Dividers/Divider';

const meta: Meta = {
  title: 'Components/Dividers/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Divider>
      {' '}
      <div>
        <li>content1</li>
        <li>content2</li>
        <li>content3</li>
      </div>
    </Divider>
  ),
};

export const DeviderWithLabel: Story = {
  render: () => (
    <Divider label="label">
      {' '}
      <div>
        <li>content1</li>
        <li>content2</li>
        <li>content3</li>
      </div>
    </Divider>
  ),
};
