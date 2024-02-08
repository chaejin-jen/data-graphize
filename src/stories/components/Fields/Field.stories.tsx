import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Field from '@/components/Fields/Field';

const meta: Meta = {
  title: 'Components/Fields/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Field id="field-tb1" label="Textbox (input) [Defualt]" />,
};
export const MultilineTextbox: Story = {
  render: () => (
    <Field
      id="field-mutit-1"
      label="Multiline Textbox (textarea)"
      editor="multilinetextbox"
    />
  ),
};
export const Dropdown: Story = {
  render: () => (
    <Field
      id="haha"
      label="DropDown (select)"
      editor="dropdown"
      options={['ha', 'na', 'dul']}
    />
  ),
};
