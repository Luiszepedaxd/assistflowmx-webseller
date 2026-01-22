import React from 'react';
import { BENEFITS } from '../constants/content';

/**
 * Componente: Sección de Beneficios
 * Single Responsibility: Solo renderiza la sección de beneficios
 */
const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Beneficios que{' '}
            <span className="text-cyan-600">marcan la diferencia</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entendemos las necesidades de los pequeños negocios en México. 
            Por eso creamos una solución simple, rápida y accesible.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="group">
              <span className="text-6xl font-bold text-emerald-500 block mb-2">
                {benefit.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
