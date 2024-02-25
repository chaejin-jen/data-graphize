import { Dispatch, SetStateAction } from 'react';

import { ChartType } from '@/recharts/common/types';

import { CHART_OPTION } from '../constants';

import styles from './ChartTypeSelector.module.scss';

interface ChartTypeSelectorProps {
  chartType: ChartType;
  chartTypeSetter: Dispatch<SetStateAction<ChartType>>;
}

const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({
  chartType,
  chartTypeSetter,
}) => {
  return (
    <div className={styles['selector-control']}>
      Select Chart Type
      <select
        value={chartType}
        onChange={(event) => {
          chartTypeSetter(event.target.value as ChartType);
        }}>
        {CHART_OPTION?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ChartTypeSelector;
