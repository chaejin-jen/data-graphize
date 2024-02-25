import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/Inputs/Input';

/**
 * These stories showcase the input
 */
const meta: Meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic usages.
 */
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

/**
 * Input with custom styling.
 */
export const CustomStyle: Story = {
  args: {
    label: 'Custom Styled Input',
    containerStyle: {
      backgroundColor: '#f0f0f0',
      border: '2px dashed #333',
      borderRadius: '8px',
    },
    style: {
      color: '#333',
      fontWeight: 'bold',
    },
    placeholder: 'Enter value',
  },
};

/**
 * Input with validation icon.
 */
export const WithValidation: Story = {
  args: {
    label: 'Validated Input',
    isValidated: true,
    placeholder: 'Enter value',
  },
};
