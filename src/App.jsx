import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhatIncludedSection from './components/WhatIncludedSection';
import PricingSection from './components/PricingSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import GlobalStyles from './styles/GlobalStyles';

/**
 * Componente principal de la aplicación
 * Single Responsibility: Solo orquesta la composición de componentes
 * Open/Closed: Abierto para extensión (nuevos componentes), cerrado para modificación
 */
const SECTION_TITLES = { '#paquetes': 'Paquetes', '#faq': 'FAQ', '#que-ofrecemos': 'Qué ofrecemos' };

function App() {
  // Enviar page_view a GA4 cuando cambia el hash (clics a #paquetes, #faq, #que-ofrecemos)
  useEffect(() => {
    const sendPageViewForHash = () => {
      const hash = window.location.hash || '';
      if (!hash || !SECTION_TITLES[hash]) return;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + hash,
          page_title: SECTION_TITLES[hash],
        });
      }
    };
    window.addEventListener('hashchange', sendPageViewForHash);
    return () => window.removeEventListener('hashchange', sendPageViewForHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <GlobalStyles />
      
      {/* Header fijo */}
      <Header />
      
      {/* Secciones principales */}
      <main>
        <HeroSection />
        <WhatWeOfferSection />
        <TestimonialsSection />
        <WhatIncludedSection />
        <PricingSection />
        <BenefitsSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
