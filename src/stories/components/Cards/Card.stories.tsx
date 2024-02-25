import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Cards/Card';
import Typography from '@/components/ui/Typography/Typography';

const meta: Meta = {
  title: 'Components/Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const Fotter = () => {
  return (
    <div>
      <Typography size="label-small">Fotter1</Typography>
      <Typography size="label-small">Fotter2</Typography>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <Card title="Title" footer={<Fotter />}>
      <Typography size="body-large">This is Contnets</Typography>
    </Card>
  ),
};
