import { useEffect } from 'react';

// Hook personalizado para manejar analytics/tracking (SRP)
export const useAnalytics = () => {
  useEffect(() => {
    const trackEvent = (eventName, properties) => {
      console.log('Event tracked:', eventName, properties);
    };

    const ctaButtons = document.querySelectorAll('.cta-button');
    const handleCTAClick = function() {
      trackEvent('CTA Click', {
        button_text: this.textContent.trim(),
        section: this.closest('section')?.className || 'unknown'
      });
    };

    ctaButtons.forEach(button => {
      button.addEventListener('click', handleCTAClick);
    });

    return () => {
      ctaButtons.forEach(button => {
        button.removeEventListener('click', handleCTAClick);
      });
    };
  }, []);
};
