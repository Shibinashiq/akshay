import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Observes all elements with .reveal, .reveal-left, .reveal-right, .reveal-scale
 * and adds .visible when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const elements = ref.current?.querySelectorAll(selectors);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
