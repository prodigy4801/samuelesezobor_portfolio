'use client';
import React, { useEffect, useState, createContext } from 'react';
import { TTheme } from '@/models/lib.model';

type ThemeContextTypeProps = {
  children: React.ReactNode;
};

type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextTypeProps) {
  const [theme, setTheme] = useState<TTheme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('portfolioTheme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('portfolioTheme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('portfolioTheme') as TTheme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
