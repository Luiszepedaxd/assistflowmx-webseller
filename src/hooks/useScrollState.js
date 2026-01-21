import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el estado de scroll
 * Single Responsibility: Solo maneja el estado de scroll
 * 
 * @param {number} threshold - Píxeles de scroll necesarios para cambiar el estado
 * @returns {boolean} - Estado de scroll
 */
export const useScrollState = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
