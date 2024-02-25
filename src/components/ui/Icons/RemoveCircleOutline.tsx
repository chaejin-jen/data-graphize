import React from 'react';

const RemoveCircleOutline: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    display="flex"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

export default RemoveCircleOutline;
