import React, { useState } from 'react';

import clsx from 'clsx';

import styles from './Tabview.module.scss';

interface TabProps {
  title: string;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className={styles['tab-content']}>{children}</div>;
};

interface TabViewProps {
  initialTabIndex?: number;
  children: React.ReactNode;
}

export const TabView: React.FC<TabViewProps> = ({
  initialTabIndex = 0,
  children,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles['tab-view-container']}>
      <div className={styles['tab-buttons']}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                className={clsx(
                  styles['tab-button'],
                  index === activeTabIndex && styles['active'],
                  // : styles['inactive'],
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
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};
