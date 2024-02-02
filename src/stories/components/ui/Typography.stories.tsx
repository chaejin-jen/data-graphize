import { Meta, StoryObj } from '@storybook/react';

import Typography from '@/components/ui/Typography/Typography';

/**
 * These stories showcase the Typography
 */
const meta: Meta = {
  title: 'Components/UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
        alignContent: 'stretch',
      }}>
      <div style={{ minWidth: '20rem' }}>
        #arg: size
        <Typography size="display-large">Display 1</Typography>
        <Typography size="display-medium">Display 2</Typography>
        <Typography size="display-small">Display 3</Typography>
        <Typography size="header-large">Heading 1</Typography>
        <Typography size="header-medium">Heading 2</Typography>
        <Typography size="header-small">Heading 3</Typography>
        <Typography size="title-large">Title 1</Typography>
        <Typography size="title-medium">Title 2</Typography>
        <Typography size="title-small">Title 3</Typography>
        <Typography size="label-prominent-large">
          Label 1 - prominent
        </Typography>
        <Typography size="label-large">Label 1</Typography>
        <Typography size="label-prominent-medium">
          Label 2 - prominent
        </Typography>
        <Typography size="label-medium">Label 2</Typography>
        <Typography size="label-small">Label 3</Typography>
        <Typography size="body-large">Body 1</Typography>
        <Typography size="body-medium">Body 2</Typography>
        <Typography size="body-small">Body 3</Typography>
      </div>
      <div>
        #arg: variant
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="subheading1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subheading2">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="item">item. apple</Typography>
        <Typography variant="list">list. List</Typography>
        <Typography variant="orderedList">orderedList. Ordered List</Typography>
        <Typography variant="blockquote">
          blockquote. Quos blanditiis tenetur
        </Typography>
      </div>
    </div>
  ),
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Title1: Story = {
  args: {
    variant: 'h4',
    children: 'Title 1',
  },
};

export const Title2: Story = {
  args: {
    variant: 'h5',
    children: 'Title 2',
  },
};

export const Title3: Story = {
  args: {
    variant: 'h6',
    children: 'Title 3',
  },
};

export const Subheading1: Story = {
  args: {
    variant: 'subheading1',
    children: 'Subheading 1',
  },
};

export const Subheading2: Story = {
  args: {
    variant: 'subheading2',
    children: 'Subheading 2',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2',
  },
};

export const Item: Story = {
  args: {
    variant: 'item',
    children: 'Item',
  },
};

export const List: Story = {
  args: {
    variant: 'list',
    children: 'List',
  },
};

export const OrderedList: Story = {
  args: {
    variant: 'orderedList',
    children: 'Ordered List',
  },
};

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children: 'Blockquote',
  },
};
