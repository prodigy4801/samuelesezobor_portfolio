import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-context-section';
import { useInView } from 'react-intersection-observer';
import { TSectionName } from './types.lib';

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
