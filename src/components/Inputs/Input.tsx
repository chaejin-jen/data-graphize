import React, { ChangeEvent, useRef } from 'react';

import styles from './Input.module.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  isValidated?: boolean;
  /** Callback function to handle value changes */
  onValueChange?: (v: string) => void;
  /** Callback function to handle generic input changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Additional styles for the container */
  containerStyle?: React.CSSProperties;
  /** Additional styles for the input element */
  style?: React.CSSProperties;
};

export const Input: React.FC<InputProps> = ({
  value,
  isValidated,
  onValueChange,
  onChange,
  containerStyle,
  style,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={styles['container']}
      style={containerStyle}
      onClick={() =>
        onChange
          ? onChange({} as ChangeEvent<HTMLInputElement>)
          : inputRef?.current?.focus()
      }>
      <input
        value={value}
        className={styles['input']}
        style={style}
        ref={inputRef}
        autoCorrect="false"
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
        onBlur={(event) => {
          inputProps.onBlur?.(event);
        }}
        onFocus={(event) => {
          inputProps.onFocus?.(event);
        }}
        onChange={(event) => {
          inputProps.onInput?.(event);
          onChange?.(event);
          onValueChange?.(event.target.value);
        }}
        {...inputProps}
      />
      {isValidated && <div className={styles['validation']}>✔️</div>}
    </div>
  );
};
