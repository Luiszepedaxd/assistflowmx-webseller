import { useEffect } from 'react';

// Hook personalizado para manejar el botón de scroll to top (SRP)
export const useScrollToTop = () => {
  useEffect(() => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #2D9CDB, #27AE60);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(45, 156, 219, 0.3);
    `;

    document.body.appendChild(scrollToTopBtn);

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'translateY(10px)';
      }
    };

    scrollToTopBtn.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollToTopBtn.parentNode) {
        scrollToTopBtn.parentNode.removeChild(scrollToTopBtn);
      }
    };
  }, []);
};
