import { PolarAngleAxisProps, PolarRadiusAxisProps } from 'recharts';

import useArray from '@/recharts/common/useArray';

import {
  RechartsPolarAxesData,
  RechartsPolarAxesDataSetters,
} from '../common/types';

const useRechartsPolarAxesData = (): [
  RechartsPolarAxesData,
  RechartsPolarAxesDataSetters,
] => {
  const [angleAxes, setAngleAxes] = useArray<PolarAngleAxisProps>([]);
  const [radiusAxes, setRadiusAxes] = useArray<PolarRadiusAxisProps>([]);

  return [
    { angleAxes, radiusAxes },
    {
      angleAxes: setAngleAxes,
      radiusAxes: setRadiusAxes,
    },
  ];
};

export default useRechartsPolarAxesData;
