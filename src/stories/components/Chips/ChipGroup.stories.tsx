import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ChipGroup from '@/components/Chips/ChipGroup';

const meta: Meta = {
  title: 'Components/Chips/ChipGroup',
  component: ChipGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const chips = [
  {
    label: 'React',
    leadingIcon: 'https://www.svgrepo.com/show/372933/react.svg',
  },
  {
    label: 'Next.js',
    leadingIcon: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
  },
  {
    label: 'TypeScript',
    leadingIcon: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
  },
  // { label: 'Spinning', leadingIcon: { spinner } },
];
export const Default: Story = {
  render: () => <ChipGroup chips={chips} />,
};

const chipsOnClick = [
  {
    label: 'React',
    onClick: () => {
      alert('React');
    },
  },
  {
    label: 'Next.js',
    onClick: () => {
      alert('Next.js');
    },
  },
  {
    label: 'TypeScript',
    onClick: () => {
      alert('TypeScript');
    },
  },
];

export const ChipGroupOnClick: Story = {
  render: () => <ChipGroup chips={chipsOnClick} />,
};
