import { useEffect, useContext } from 'react';
import { ActiveSectionContext } from '@/context/active-context-section';
import { TSectionName } from './types.lib';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '@/context/theme-context';

export function useSectionInView(sectionName: TSectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
