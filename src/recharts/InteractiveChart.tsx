import { useState } from 'react';

import RechartsWrapper from './charts/RechartsWrapper';
import { ChartData, ChartDataKey, ChartType } from './common/types';
import ChartConfigurator from './configurators/ChartConfigurator';
import useRechartsData from './hooks/useRechartsData';

import styles from './InteractiveChart.module.scss';

interface InteractiveChartProps {
  type: ChartType;
  data: ChartData;
  dataKeys: ChartDataKey[];
}

const InteractiveChart = ({ type, data, dataKeys }: InteractiveChartProps) => {
  const [chartType, setChartType] = useState<ChartType>(type);
  const [rechartsData, rechartsDataSetters] = useRechartsData();
  const chartData = data;

  return (
    <div className={styles['container']}>
      <div className={styles['configurator']}>
        <ChartConfigurator
          chartType={chartType}
          chartTypeSetter={setChartType}
          dataKeys={dataKeys}
          rechartsData={rechartsData}
          rechartsDataSetters={rechartsDataSetters}
        />
      </div>
      <div className={styles['configurator']}>
        <RechartsWrapper
          chartType={chartType}
          chartData={chartData}
          rechartsData={rechartsData}
        />
      </div>
    </div>
  );
};

export default InteractiveChart;
