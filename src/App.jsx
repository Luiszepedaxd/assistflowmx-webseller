import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import PricingSection from './components/PricingSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

/**
 * Componente principal de la aplicación
 * Landing page para AssistFlowMX
 */
function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Estilos para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>

      {/* Header fijo */}
      <Header />
      
      {/* Secciones principales */}
      <main>
        <HeroSection />
        <WhatWeOfferSection />
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
