import React from 'react';

/**
 * Sección de características/lo que ofrecemos
 */
const WhatWeOfferSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Página web profesional",
      description: "Diseño moderno y atractivo que representa tu negocio. Se ve perfecto en celular, tablet y computadora."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Lista para anunciarse",
      description: "Tu página viene optimizada para que funcione con Facebook Ads, Google Ads y cualquier plataforma de publicidad."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Entrega rápida",
      description: "Recibe tu página lista en solo 72 horas. Sin esperas largas ni procesos complicados."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: "Contacto directo",
      description: "Botones de WhatsApp y llamada integrados para que tus clientes te contacten al instante."
    }
  ];

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
          {features.map((feature, index) => (
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
