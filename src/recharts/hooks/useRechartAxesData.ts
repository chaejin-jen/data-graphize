import { XAxisProps, YAxisProps, ZAxisProps } from 'recharts';

import useArray from '@/recharts/common/useArray';

import { RechartsAxesData, RechartsAxesDataSetters } from '../common/types';

const useRechartsAxesData = (): [RechartsAxesData, RechartsAxesDataSetters] => {
  const [xAxes, setXAxes] = useArray<XAxisProps>([]);
  const [yAxes, setYAxes] = useArray<YAxisProps>([]);
  const [zAxes, setZAxes] = useArray<ZAxisProps>([]);

  return [
    { xAxes, yAxes, zAxes },
    {
      xAxes: setXAxes,
      yAxes: setYAxes,
      zAxes: setZAxes,
    },
  ];
};

export default useRechartsAxesData;
