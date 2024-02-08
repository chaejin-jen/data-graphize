import React, { ChangeEvent, FocusEvent } from 'react';

import styles from './Field.module.scss';

type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
  id: string;
  label?: string;
  editor?: Editor;
  options?: string[];
  value?: any;
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void;
  error?: string;
}

const Field: React.FC<IFieldProps> = ({
  id,
  label,
  editor = 'textbox',
  options,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    if (onBlur) {
      onBlur(e.target.value);
    }
  };

  const renderInput = () => {
    switch (editor) {
      case 'textbox':
        return (
          <input
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.input}
          />
        );
      case 'multilinetextbox':
        return (
          <textarea
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.input}
          />
        );
      case 'dropdown':
        return (
          <select
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.input}>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles['field']}>
      {label && <label htmlFor={id}>{label}</label>}
      {renderInput()}
      {error && <span className={styles['error-message']}>{error}</span>}
    </div>
  );
};

export default Field;
