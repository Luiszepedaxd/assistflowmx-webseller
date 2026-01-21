import React from 'react';
import { PACKAGES } from '../constants/content';
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '../constants/whatsapp';

/**
 * Componente: Sección de Paquetes y Precios
 * Single Responsibility: Solo renderiza la sección de precios
 */
const PricingSection = () => {
  return (
    <section id="paquetes" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Precios transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Elige el paquete ideal{' '}
            <span className="text-emerald-400">para tu negocio</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sin costos ocultos ni sorpresas. Pago único, sin mensualidades.
            Tú decides dónde alojar tu página.
          </p>
        </div>

        {/* Grid de paquetes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PACKAGES.map((pkg, index) => {
            const whatsappMessage = WHATSAPP_MESSAGES[pkg.whatsappMessageKey];
            const whatsappLink = generateWhatsAppLink(whatsappMessage);

            return (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.recommended 
                    ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Badge recomendado */}
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Más popular
                    </span>
                  </div>
                )}

                {/* Nombre y descripción */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm">{pkg.description}</p>
                </div>

                {/* Precio */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-slate-400 text-lg">$</span>
                    <span className="text-5xl font-bold text-white">{pkg.price}</span>
                    <span className="text-slate-400 text-lg">MXN</span>
                  </div>
                  <span className="text-slate-500 text-sm">Pago único</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.recommended ? 'text-emerald-400' : 'text-slate-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-200 ${
                    pkg.recommended
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Lo quiero →
                </a>
              </div>
            );
          })}
        </div>

        {/* Nota sobre hosting */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            Todos los paquetes <strong className="text-slate-400">no incluyen hosting ni dominio</strong>. 
            Te entregamos los archivos listos para subir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
