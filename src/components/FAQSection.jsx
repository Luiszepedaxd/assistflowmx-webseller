import React, { useState } from 'react';
import { FAQS } from '../constants/content';

/**
 * Componente: Sección FAQ - Preguntas Frecuentes
 * Single Responsibility: Solo maneja el acordeón de FAQs
 */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dudas comunes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-400">
            Si no encuentras tu respuesta, escríbenos por WhatsApp
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/80 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
