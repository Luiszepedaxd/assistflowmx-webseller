import React from 'react';

/**
 * Componente: Estilos globales y animaciones
 * Single Responsibility: Solo maneja los estilos globales
 */
const GlobalStyles = () => {
  return (
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
  );
};

export default GlobalStyles;
