import React from 'react';

import clsx from 'clsx';

import styles from './Paper.module.scss';

interface PaperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Paper: React.FC<PaperProps> = ({ children, className, style }) => {
  return (
    <div className={clsx(styles['paper'], className)} style={style}>
      {children}
    </div>
  );
};

export default Paper;
