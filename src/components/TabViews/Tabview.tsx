import React, { useState } from 'react';

import clsx from 'clsx';

import styles from './Tabview.module.scss';

interface TabProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Tab: React.FC<TabProps> = ({ children, style }) => {
  return (
    <div className={clsx(styles['tab-content'])} style={style}>
      {children}
    </div>
  );
};

interface TabViewProps {
  initialTabIndex?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  hide?: boolean;
}

export const TabView: React.FC<TabViewProps> = ({
  initialTabIndex = 0,
  children,
  style,
  hide,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles['tab-view-container']} style={style}>
      <div className={styles['tab-buttons']}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                className={clsx(
                  styles['tab-button'],
                  index === activeTabIndex && styles['active'],
                )}
                key={index}
                onClick={() => handleTabClick(index)}>
                {child.props.title}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (index === activeTabIndex) {
            return <div key={index}>{child}</div>;
          }
          return hide ? (
            <div className={clsx(styles['tab-hide'])} key={index}>
              {child}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
