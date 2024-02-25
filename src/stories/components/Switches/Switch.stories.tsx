import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Switch from '@/components/Switches/Switch';
import Typography from '@/components/ui/Typography/Typography';

const meta: Meta = {
  title: 'Components/Switches/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonWithHooks = (args: { [x: string]: any }) => {
  const [toggled, setToggled] = useState(args?.toggled! || false);

  const handleToggle = () => {
    setToggled(!toggled);
  };
  return <Switch {...args} onChange={handleToggle} toggled={toggled} />;
};

export const Default: Story = {
  render: () => (
    <>
      <ButtonWithHooks size="xs" />
      <br />
      <ButtonWithHooks size="sm" />
      <br />
      <ButtonWithHooks size="md" />
      <br />
      <ButtonWithHooks size="lg" />
      <br />
    </>
  ),
};

export const Label: Story = {
  args: {
    label: <Typography size="label-prominent-large">Label</Typography>,
    labelStyle: { color: 'pink' },
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
