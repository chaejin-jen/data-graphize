import React from 'react';

import Typography from '../ui/Typography/Typography';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  label?: string;
  step?: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  label,
  step = 1,
  onChange,
}) => {
  return (
    <>
      {label && <Typography>{label}</Typography>}
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </>
  );
};

export default Slider;
