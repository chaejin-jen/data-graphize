'use client';

import React from 'react';

import { useTheme } from '@/hooks/useTheme';

import ToggleSwitch from './ToggleSwitch';

const ThemeToggleSwitch: React.FC<{}> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ToggleSwitch
      toggled={theme === 'light'}
      onClick={toggleTheme}
      activeContent={<p>☀️</p>}
      inActiveContent={<p>🌙</p>}
    />
  );
};

export default ThemeToggleSwitch;
