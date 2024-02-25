import React from 'react';

import Typography from '@/components/ui/Typography/Typography';

import { Key, Setter, Value } from '@/recharts/common/types';

import { RechartsElementKey } from '../types';
import {
  getElementControlRenderer,
  removeElementControl,
  setValueElementControl,
} from './helpers/chartElementControlHelpers';

import styles from './ChartElementControlRenderer.module.scss';

export interface ChartElementControlRendererProps<T> {
  rechartsDataKey: RechartsElementKey;
  element: T | T[];
  chartElementSetter: Setter<T>;
  elementIndex?: number;
}

const ChartElementControlRenderer = <T,>({
  rechartsDataKey,
  element,
  chartElementSetter,
  elementIndex,
}: ChartElementControlRendererProps<T>): JSX.Element => {
  const renderElementControl = (itemKey: Key<T>, itemValue: Value<T>) => {
    const ElementControl = getElementControlRenderer<T>(rechartsDataKey);

    return (
      <ElementControl
        itemKey={itemKey}
        itemValue={itemValue}
        setValue={setValueElementControl<T>(
          itemKey,
          chartElementSetter,
          elementIndex,
        )}
        onRemove={removeElementControl<T>(
          itemKey,
          chartElementSetter,
          elementIndex,
        )}
      />
    );
  };

  return (
    <div className={styles['element']}>
      {element &&
        Object.entries(element).map(([itemKey, itemValue], index) => (
          <div
            className={styles['item']}
            key={`${rechartsDataKey}-${itemKey}-${index}`}>
            {renderElementControl(itemKey as Key<T>, itemValue as Value<T>)}
          </div>
        ))}
    </div>
  );
};

export default ChartElementControlRenderer;
