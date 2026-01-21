import React from 'react';

/**
 * Sección de beneficios
 */
const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      title: "Ahorra tiempo y dinero",
      description: "Sin contratos mensuales ni costos de mantenimiento. Pagas una vez y la página es tuya para siempre."
    },
    {
      number: "02",
      title: "Sin conocimientos técnicos",
      description: "Nosotros nos encargamos de todo el diseño y desarrollo. Tú solo nos dices qué necesitas."
    },
    {
      number: "03",
      title: "Perfecta para publicidad",
      description: "Diseñadas específicamente para funcionar con campañas de Facebook Ads, Google Ads e Instagram."
    },
    {
      number: "04",
      title: "Archivos 100% tuyos",
      description: "Te entregamos el código completo. Puedes modificarlo, moverlo o hacer lo que quieras con él."
    },
    {
      number: "05",
      title: "Soporte por WhatsApp",
      description: "¿Tienes dudas? Te orientamos sin costo sobre cómo subir tu página y ponerla en línea."
    },
    {
      number: "06",
      title: "Diseño que convierte",
      description: "Cada elemento está pensado para que tus visitantes se conviertan en clientes."
    }
  ];

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
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <span className="text-6xl font-bold text-slate-100 group-hover:text-emerald-100 transition-colors duration-300">
                {benefit.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">
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
