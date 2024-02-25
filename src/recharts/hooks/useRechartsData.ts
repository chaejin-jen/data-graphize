import { RechartsData, RechartsDataSetters } from '../common/types';
import useRechartsAxesData from './useRechartAxesData';
import useRechartsPolarAxesData from './useRechartPolarAxesData';
import useRechartsCommonData from './useRechartsCommonData';
import useRechartsSeriesData from './useRechartsSeriesData';

const useRechartsData = (): [RechartsData, RechartsDataSetters] => {
  const [common, commonSetters] = useRechartsCommonData();
  const [series, seriesSetters] = useRechartsSeriesData();
  const [axes, axesSetters] = useRechartsAxesData();
  const [polarAxes, polarAxesSetters] = useRechartsPolarAxesData();

  const rechartsData: RechartsData = {
    common,
    series,
    axes,
    polarAxes,
  };
  const rechartsDataSetters: RechartsDataSetters = {
    common: commonSetters,
    series: seriesSetters,
    axes: axesSetters,
    polarAxes: polarAxesSetters,
  };
  return [rechartsData, rechartsDataSetters];
};

export default useRechartsData;
