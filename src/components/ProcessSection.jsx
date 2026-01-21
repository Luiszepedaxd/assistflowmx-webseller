import React from 'react';
import { PROCESS_STEPS } from '../constants/content';

/**
 * Componente: Sección de Proceso de trabajo
 * Single Responsibility: Solo renderiza la sección del proceso
 */
const ProcessSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Así de fácil{' '}
            <span className="text-emerald-600">funciona</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sin reuniones eternas ni procesos complicados. 
            De la idea a tu página lista en solo 4 pasos.
          </p>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea conectora (solo en desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-400" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Número de paso */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white border-2 border-emerald-500 rounded-full mb-6 shadow-lg shadow-emerald-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
