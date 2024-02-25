import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Buttons/Button';

/**
 * These stories showcase the button
 */
const meta: Meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Button with a primary background color.
 */
export const Primary: Story = {
  args: {
    children: 'Button',
    primary: true,
    working: false,
    onClick: action('Primary Button Clicked'),
  },
};

/**
 * Button with a secondary background color.
 */
export const Secondary: Story = {
  args: {
    children: 'Button',
    primary: false,
    working: false,
    onClick: action('Secondary Button Clicked'),
  },
};

/**
 * If props.disabled is true, the button will appear grayed out, indicating a disabled state and being unresponsive to user interactions.
 */
export const Disabled: Story = {
  args: {
    children: 'Button',
    primary: true,
    working: false,
    disabled: true,
    onClick: action('Disabled Button Clicked'),
  },
};

/**
 * If props.working is true, the button will display a activity indicator, indicating an ongoing process and temporarily disabling user interactions.
 */
export const Working: Story = {
  args: {
    children: 'Button',
    primary: false,
    working: true,
    onClick: action('working Button Clicked'),
  },
};

/**
 * If props.working is true, the button will display a working indicator, indicating an ongoing process and temporarily disabling user interactions.
 */
export const Style: Story = {
  args: {
    children: 'Button',
    onClick: action('Style Button Clicked'),
    style: {
      width: '100px',
      height: '40px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 700,
      backgroundColor: '#F4DDDA',
    },
  },
};
