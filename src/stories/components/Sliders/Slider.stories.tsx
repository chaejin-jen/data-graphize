import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { SelectChipProps } from '@/components/Chips/SelectChip';
import SelectChipGroup from '@/components/Chips/SelectChipGroup';
import Slider from '@/components/Sliders/Slider';

const meta: Meta = {
  title: 'Components/Sliders/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const SliderWithHook = (args: { [x: string]: any }) => {
  const [value, setValue] = useState<number>(10);

  const updateValue = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Slider
      {...args}
      value={value}
      min={0}
      max={50}
      onChange={updateValue}></Slider>
  );
};

export const Default: Story = {
  render: () => <SliderWithHook />,
};

export const DefaultWithLabel: Story = {
  render: () => <SliderWithHook label={'Label'} />,
};

const ChipSliderWithHook = () => {
  const [value, setValue] = useState<number>(7);

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };
  const chips: SelectChipProps[] = [
    { label: 'Low', onClick: () => handleSliderChange(5) },
    { label: 'Middle', onClick: () => handleSliderChange(15) },
    { label: 'Hight', onClick: () => handleSliderChange(25) },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SelectChipGroup chips={chips} />
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={1}
        max={30}
        step={0.5}
      />
    </div>
  );
};

export const ChipSlider: Story = {
  render: () => (
    <>
      <div></div>
      <ChipSliderWithHook />
    </>
  ),
};

const InputSliderWithHook = () => {
  const [value, setValue] = useState<number>(7);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event.currentTarget.value.trim() === ''
        ? 0
        : parseFloat(event.currentTarget.value);

    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={1}
        max={30}
        step={0.5}
      />
      <input
        type="number"
        min={1}
        max={30}
        step={0.5}
        value={isNaN(value) ? '' : value.toString()}
        onChange={handleInputChange}
      />
    </div>
  );
};

export const InputSlider: Story = {
  render: () => (
    <>
      <div></div>
      <InputSliderWithHook />
    </>
  ),
};
