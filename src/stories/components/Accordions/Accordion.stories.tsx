import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Accordion from '@/components/Accordions/Accordion';

const meta: Meta = {
  title: 'Components/Accordions/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Accordion title="This is Accordion">Contents</Accordion>,
};
