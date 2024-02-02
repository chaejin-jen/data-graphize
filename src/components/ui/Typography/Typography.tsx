import React, { CSSProperties, ReactNode } from 'react';

import clsx from 'clsx';

import {
  classMapping,
  TypographySize,
  TypographyVariant,
  variantsMapping,
} from './type';

import styles from './Typography.module.scss';

interface TypographyProps {
  variant?: TypographyVariant;
  size?: TypographySize;
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'gray' | 'white';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  href?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  color,
  style,
  children,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : 'p';
  const variantClassName = variant ? classMapping[variant] : 'body3';
  return (
    <Component
      className={clsx(
        styles[variantClassName],
        size && styles[size],
        props.className,
      )}
      style={style}
      {...props}>
      {children}
    </Component>
  );
};

export default Typography;
