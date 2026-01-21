import React from 'react';

/**
 * Sección del proceso de trabajo
 */
const ProcessSection = () => {
  const steps = [
    {
      step: "1",
      title: "Platícanos tu idea",
      description: "Cuéntanos sobre tu negocio por WhatsApp. Qué vendes, a quién le vendes y qué quieres lograr.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      )
    },
    {
      step: "2",
      title: "Te enviamos propuesta",
      description: "En menos de 24 horas recibes una propuesta con el paquete ideal para ti y el precio final.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      )
    },
    {
      step: "3",
      title: "Diseñamos tu página",
      description: "Comenzamos a trabajar en tu diseño. Recibes avances y puedes pedir cambios hasta que quede perfecto.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
        </svg>
      )
    },
    {
      step: "4",
      title: "¡Recibe tu página!",
      description: "Te entregamos todos los archivos de tu página en 72 horas, listos para subir a tu hosting.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      )
    }
  ];

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
            {steps.map((item, index) => (
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
