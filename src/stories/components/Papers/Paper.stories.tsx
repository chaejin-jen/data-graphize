import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Cards/Card';
import Paper from '@/components/Papers/Paper';

const meta: Meta = {
  title: 'Components/Papers/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Paper>This is Paper</Paper>,
};

export const PaperWithStyle: Story = {
  render: () => <Paper style={{ backgroundColor: 'red' }}>This is Paper</Paper>,
};

export const PaperLayoutInCard: Story = {
  render: () => (
    <Card>
      <div>
        <label>label1</label>
        <Paper>Paper 1</Paper>
      </div>
      <div>
        <label>label 2</label>
        <Paper>Parper2</Paper>
      </div>
    </Card>
  ),
};
