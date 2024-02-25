'use client';

import React from 'react';

import { useTheme } from '@/hooks/useTheme';

import Switch from './Switch';

const ThemeSwitch: React.FC<{}> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch
      toggled={theme === 'light'}
      onChange={toggleTheme}
      activeContent={<p>☀️</p>}
      inActiveContent={<p>🌙</p>}
    />
  );
};

export default ThemeSwitch;
