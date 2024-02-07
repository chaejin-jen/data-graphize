import React from 'react';

import clsx from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  title?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  header,
  children,
  footer,
  shadow = false,
}) => {
  return (
    <div className={clsx(styles['card'], shadow && styles['shadow'])}>
      <div className={styles['header']}>
        {title && <h2 className={styles['title']}>{title}</h2>}
        {header}
      </div>
      <div className={styles['content']}>{children}</div>
      <div className={styles['footer']}>{footer}</div>
    </div>
  );
};

export default Card;
