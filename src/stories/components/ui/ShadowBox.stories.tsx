import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ShadowBox from '@/components/ui/ShadowBox/ShadowBox';

const meta: Meta = {
  title: 'Components/UI/ShadowBox',
  component: ShadowBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const pstyle = {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  color: 'black',
  padding: '1rem',
};

export const Default: Story = {
  render: () => (
    <main style={{ display: 'flex' }}>
      <div
        style={{
          margin: '2rem',
        }}>
        <div style={pstyle}>
          <ShadowBox className="xxs">xxs</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="xs">xs</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="sm">sm</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="md">md</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="lg">lg</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="xl">xl</ShadowBox>
        </div>
      </div>
      <div
        style={{
          margin: '2rem',
        }}>
        <div style={pstyle}>
          <ShadowBox className="embed">embed</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="embed-hover">
            embed
            <br />
            hover
          </ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="dropdown">
            drop
            <br />
            down
          </ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="modal">modal</ShadowBox>
        </div>
        <div style={pstyle}>
          <ShadowBox className="contrast">contrast</ShadowBox>
        </div>
      </div>
    </main>
  ),
};
