import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import TestimonialsSection from './components/TestimonialsSection';
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
function App() {
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
