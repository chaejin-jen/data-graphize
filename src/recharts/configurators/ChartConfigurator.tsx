import { Dispatch, SetStateAction, useMemo } from 'react';

import { capitalizeFirstLetter } from '@/utils/stringUtils';

import Paper from '@/components/Papers/Paper';
import { Tab, TabView } from '@/components/TabViews/Tabview';

import { CHART_CONFIG } from '../common/constants';
import {
  ChartDataKey,
  ChartType,
  RechartsData,
  RechartsDataSetters,
} from '../common/types';
import ChartElementAdder from './ChartElementAdders/ChartElementAdder';
import ChartElementRenderer from './ChartElementRenderers/ChartElementRenderer';
import ChartTypeSelector from './ChartTypeSelectors/ChartTypeSelector';
import { filterObjectByFlags } from './utils/configUtils';

import styles from './ChartConfigurator.module.scss';

interface ChartConfiguratorProps {
  chartType: ChartType;
  chartTypeSetter: Dispatch<SetStateAction<ChartType>>;
  dataKeys: ChartDataKey[];
  rechartsData: RechartsData;
  rechartsDataSetters: RechartsDataSetters;
}

const ChartConfigurator: React.FC<ChartConfiguratorProps> = ({
  chartType,
  chartTypeSetter,
  dataKeys,
  rechartsData,
  rechartsDataSetters,
}) => {
  const config = useMemo(() => CHART_CONFIG[chartType], [chartType]);

  const setters: Partial<RechartsDataSetters> = Object.keys(
    rechartsDataSetters,
  ).reduce((acc, settersKey) => {
    const flags = config[settersKey as keyof RechartsDataSetters];
    const target = rechartsDataSetters[settersKey as keyof RechartsDataSetters];
    return {
      ...acc,
      [settersKey]: flags && filterObjectByFlags<typeof target>(flags, target),
    };
  }, {});

  const addableSetters = useMemo(() => {
    const addableSetters = {};
    if (setters.series) Object.assign(addableSetters, setters.series);
    if (setters.axes) Object.assign(addableSetters, setters.axes);
    if (setters.polarAxes) Object.assign(addableSetters, setters.polarAxes);
    return addableSetters;
  }, [setters]);

  return (
    <Paper className={styles['container']}>
      <ChartTypeSelector
        chartType={chartType}
        chartTypeSetter={chartTypeSetter}
      />
      <ChartElementAdder dataKeys={dataKeys} addableSetters={addableSetters} />
      <TabView>
        {Object.entries({
          common: setters.common,
          ...(config.series ? { series: setters.series } : {}),
          ...(config.axes ? { axes: setters.axes } : {}),
          ...(config.polarAxes ? { polarAxes: setters.polarAxes } : {}),
        }).map(([setterKey, setters], index) => (
          <Tab key={index} title={capitalizeFirstLetter(setterKey)}>
            {setters && (
              <ChartElementRenderer
                chartElements={rechartsData[setterKey as keyof RechartsData]}
                chartElementSetters={setters}
              />
            )}
          </Tab>
        ))}
      </TabView>
    </Paper>
  );
};

export default ChartConfigurator;
