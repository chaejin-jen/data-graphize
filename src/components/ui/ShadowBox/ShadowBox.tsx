import React from 'react';

import styles from './ShadowBox.module.scss';

interface ShadowBoxProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({
  children,
  className,
  style,
}) => {
  const cls = `shadow-box-${className}`;
  return (
    <div className={styles[cls]} style={style}>
      {children}
    </div>
  );
};

export default ShadowBox;
