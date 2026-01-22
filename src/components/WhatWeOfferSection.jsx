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
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
