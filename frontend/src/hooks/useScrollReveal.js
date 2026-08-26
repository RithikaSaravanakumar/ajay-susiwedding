import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const selector = '.reveal-on-scroll, .reveal-scale';

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '100px 0px 50px 0px',
      threshold: 0.01,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        // Immediate check if element is inside or near viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run observation after DOM paint
    const timer = setTimeout(observeElements, 100);
    window.addEventListener('scroll', observeElements, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', observeElements);
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
