import React, { useState } from 'react';

import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  contentStyle,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['accordion']}>
      <div className={styles['accordion-label']} onClick={toggleAccordion}>
        <span className={styles['accordion-toggle']}>
          {isOpen ? '🔺' : '🔻'}
        </span>
        {title}
      </div>
      {isOpen && (
        <div className={styles['accordion-content']} style={contentStyle}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
