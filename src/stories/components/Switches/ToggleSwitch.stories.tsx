import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from '@/components/Switches/ToggleSwitch';

const meta: Meta = {
  title: 'Components/Switches/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonWithHooks = (args: { [x: string]: any }) => {
  const [toggled, setToggled] = useState(args?.toggled! || false);

  const handleToggle = () => {
    setToggled(!toggled);
  };
  return <ToggleSwitch {...args} onClick={handleToggle} toggled={toggled} />;
};

export const Default: Story = {
  render: () => (
    <>
      <ButtonWithHooks size="small" />
      <br />
      <ButtonWithHooks size="medium" />
      <br />
      <ButtonWithHooks size="large" />
      <br />
    </>
  ),
};

export const Label: Story = {
  args: {
    label: 'HOHOH',
  },
  render: (args) => <ButtonWithHooks {...args} toggled={true} />,
};

export const Toggled: Story = {
  args: {
    toggled: true,
  },
  render: (args) => <ButtonWithHooks {...args} toggled={true} />,
};

export const Contents: Story = {
  args: {
    toggled: true,
    activeContent: <span>ON</span>,
    inActiveContent: <span>OFF</span>,
  },
  render: (args) => <ButtonWithHooks {...args} toggled={true} />,
};
