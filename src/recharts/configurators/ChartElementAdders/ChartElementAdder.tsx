import React, { useState } from 'react';

import Typography from '@/components/ui/Typography/Typography';

import { ChartDataKey } from '../../common/types';
import { AddableRechartsKey, AddableRechartsSetters } from '../types';
import { createChartElementProps } from './helpers/defaultPropsHelpers';

import styles from './ChartElementAdder.module.scss';

interface ChartElementAdderProps {
  dataKeys: ChartDataKey[];
  addableSetters: Partial<AddableRechartsSetters>;
}
const ChartElementAdder = ({
  dataKeys,
  addableSetters,
}: ChartElementAdderProps) => {
  const [dataKey, setDataKey] = useState<ChartDataKey>(dataKeys[0]);

  return (
    <div className={styles['adder-container']}>
      <Typography size="body-medium">Add</Typography>
      <div className={styles['adder-control']}>
        <select
          value={dataKey as string}
          onChange={(event) => {
            setDataKey(event.target.value);
          }}>
          {dataKeys?.map((dataKey, index) => {
            const option = dataKey as string;
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <div className={styles['adder-buttons']}>
          {Object.entries(addableSetters).map(([setterKey, setter]) =>
            typeof setter === 'object' ? (
              <button
                onClick={() =>
                  setter.push(
                    createChartElementProps[setterKey as AddableRechartsKey](
                      dataKey,
                    ),
                  )
                }
                key={setterKey}>
                Add {setterKey}
              </button>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartElementAdder;
