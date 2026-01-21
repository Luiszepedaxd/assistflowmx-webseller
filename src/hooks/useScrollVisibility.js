import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar la visibilidad basada en scroll
 * Single Responsibility: Solo maneja la lógica de visibilidad en scroll
 * 
 * @param {number} threshold - Píxeles de scroll necesarios para mostrar el elemento
 * @returns {boolean} - Estado de visibilidad
 */
export const useScrollVisibility = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  return isVisible;
};
