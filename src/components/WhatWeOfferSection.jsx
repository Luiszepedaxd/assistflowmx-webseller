import React from 'react';
import { FEATURES } from '../constants/content';

/**
 * Componente: Sección Qué Ofrecemos
 * Single Responsibility: Solo renderiza la sección de características
 */
const WhatWeOfferSection = () => {
  return (
    <section id="que-ofrecemos" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué ofrecemos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Todo lo que necesitas para{' '}
            <span className="text-emerald-600">empezar a vender</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Páginas web simples pero efectivas, diseñadas específicamente para negocios que quieren 
            presencia digital rápida y sin complicaciones técnicas.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota importante - Sin hosting */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">Importante: ¿Qué NO incluye?</h4>
            <p className="text-amber-700 text-sm">
              Nuestro servicio <strong>no incluye hosting ni dominio</strong>. Te entregamos los archivos 
              de tu página (HTML, CSS, JS) listos para que los subas donde prefieras. Si necesitas ayuda 
              con esto, podemos orientarte sin costo adicional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
