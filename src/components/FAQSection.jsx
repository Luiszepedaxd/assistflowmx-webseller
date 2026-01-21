import React, { useState } from 'react';

/**
 * Sección de preguntas frecuentes (FAQ)
 */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué recibo exactamente?",
      answer: "Recibes los archivos de tu página web (HTML, CSS y JavaScript) listos para usar. Son archivos que puedes abrir en cualquier navegador y subir a cualquier servicio de hosting."
    },
    {
      question: "¿Por qué no incluyen hosting ni dominio?",
      answer: "Porque queremos ofrecerte el precio más accesible posible. El hosting y dominio tienen costos recurrentes (mensuales o anuales) que varían según el proveedor. Así tú eliges dónde alojar tu página y controlas esos gastos."
    },
    {
      question: "¿Dónde puedo subir mi página?",
      answer: "Hay muchas opciones gratuitas y de pago: Netlify, Vercel, GitHub Pages (gratuitos), o servicios como GoDaddy, Hostinger, Namecheap (de pago). Te orientamos sin costo sobre cuál te conviene más."
    },
    {
      question: "¿Puedo hacer cambios después de recibir mi página?",
      answer: "¡Sí! Te entregamos los archivos completos y editables. Si sabes algo de código puedes modificarlos, o puedes contratarnos para hacer cambios adicionales."
    },
    {
      question: "¿Las páginas funcionan para anuncios de Facebook/Google?",
      answer: "¡Absolutamente! Nuestras páginas están diseñadas específicamente para funcionar como landing pages en campañas publicitarias. Son rápidas, responsivas y con CTAs claros."
    },
    {
      question: "¿Cómo es el proceso de pago?",
      answer: "50% al iniciar el proyecto y 50% al entregar. Aceptamos transferencia bancaria, depósito en OXXO y pagos por Mercado Pago."
    }
  ];

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
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
