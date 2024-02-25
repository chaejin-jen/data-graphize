import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Chart from '@/app/chart/page';

import { Tab, TabView } from '@/components/TabViews/Tabview';

import InteractiveChart from '@/recharts/InteractiveChart';

import data from './data/sample/simpleChartData';

const meta: Meta = {
  title: 'Recharts/InteractiveCharts/InteractiveChart',
  component: InteractiveChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '100%', height: '100%' }}>
      <InteractiveChart
        type="bar"
        data={data}
        dataKeys={['uv', 'pv', 'amt', 'name']}
      />
    </div>
  ),
};

const TabViewChartWithHooks = (args: { [x: string]: any }) => {
  const [interactiveCharts, setInteractiveCharts] = useState<string[]>([
    'Chart 1',
  ]);
  const handleAddChart = () => {
    setInteractiveCharts((prev) => {
      const newArray = [...prev, `Chart ${prev.length + 1}`];
      return newArray;
    });
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <button onClick={handleAddChart}>Add new chart</button>
      <TabView hide>
        {interactiveCharts.map((title, index) => (
          <Tab key={index} title={title}>
            {React.createElement(InteractiveChart, {
              key: index,
              type: 'area',
              data: data,
              dataKeys: ['uv', 'pv', 'amt', 'name'],
            })}
          </Tab>
        ))}
      </TabView>
    </div>
  );
};

export const TabViewChart: Story = {
  render: () => <TabViewChartWithHooks />,
};
