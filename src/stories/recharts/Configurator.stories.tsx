import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ChartType } from '@/recharts/common/types';
import ChartConfigurator from '@/recharts/configurators/ChartConfigurator';
import useRechartsData from '@/recharts/hooks/useRechartsData';

const meta: Meta = {
  title: 'Recharts/Configurators/ChartConfigurator',
  component: ChartConfigurator,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChartConfigurator>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefualtChartConfigurator = (args: { [x: string]: any }) => {
  const dataKeys = ['uv', 'pv', 'amt', 'name'];
  const [chartType, setChartType] = useState<ChartType>('composed');
  const [rechartsData, rechartsDataSetters] = useRechartsData();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <ChartConfigurator
        chartType={chartType}
        chartTypeSetter={setChartType}
        dataKeys={dataKeys}
        rechartsData={rechartsData}
        rechartsDataSetters={rechartsDataSetters}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefualtChartConfigurator />,
};
