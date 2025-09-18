import { useEffect } from 'react';

// Hook personalizado para manejar smooth scrolling (SRP)
export const useSmoothScrolling = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
};
