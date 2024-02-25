import React from 'react';

import styles from './Divider.module.scss';

interface DividerProps {
  label?: string;
  children: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ label, children }) => {
  return (
    <div className={styles['divider']}>
      {label && <div className={styles['label']}>{label}</div>}
      {children}
      <hr />
    </div>
  );
};

export default Divider;
