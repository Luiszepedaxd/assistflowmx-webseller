const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Nos cuentas qué necesitas",
      description: "Escribe por WhatsApp qué tipo de página necesitas, tu negocio y qué quieres destacar. Te haremos algunas preguntas simples para entender mejor."
    },
    {
      number: 2,
      description: "Creamos tu página en 72 horas",
      title: "Te diseñamos tu página web"
    },
    {
      number: 3,
      title: "Recibes tus archivos listos",
      description: "Te enviamos todos los archivos de tu página. Solo súbelos a tu hosting preferido y estará funcionando en minutos."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="proceso">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso simple y directo. En 3 pasos tendrás tu página web lista para anunciarte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Línea conectora (excepto el último) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            <strong>Nota importante:</strong> Recuerda que necesitarás un hosting y dominio por tu cuenta. 
            Te podemos recomendar opciones económicas si lo necesitas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
