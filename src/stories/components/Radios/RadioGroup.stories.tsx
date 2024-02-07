import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Radio from '@/components/Radios/Radio';
import RadioGroup from '@/components/Radios/RadioGroup';

const meta: Meta = {
  title: 'Components/Radios/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioGroupWithHooks = (args: { [x: string]: any }) => {
  const [contactMethod, setContactMethod] = useState<string>('EMAIL');

  const handleContactMethodChange = (value: string) => {
    setContactMethod(value);
  };
  return (
    <RadioGroup
      label="연락 방법"
      value={contactMethod}
      onChange={handleContactMethodChange}>
      <Radio value="EMAIL">이메일</Radio>
      <Radio value="PHONE">전화</Radio>
      <Radio value="FAX">팩스</Radio>
      <Radio value="MAIL" disabled>
        우편
      </Radio>
    </RadioGroup>
  );
};

export const Default: Story = {
  render: () => <RadioGroupWithHooks />,
};
