const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Nos cuentas qué necesitas",
      description: "Escribe por WhatsApp qué tipo de página necesitas, tu negocio y qué quieres destacar. Te haremos algunas preguntas simples para entender mejor."
    },
    {
      number: 2,
      title: "Te diseñamos tu página web",
      description: "Creamos tu página en 72 horas"
    },
    {
      number: 3,
      title: "Recibes tus archivos listos",
      description: "Te enviamos todos los archivos de tu página. Solo súbelos a tu hosting preferido y estará funcionando en minutos."
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50" id="proceso">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proceso simple y directo. En 3 pasos tendrás tu página web lista para anunciarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto relative">
          {/* Línea conectora para desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border-2 border-gray-100">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
              <strong className="text-gray-900">Nota importante:</strong> Recuerda que necesitarás un hosting y dominio por tu cuenta. 
              Te podemos recomendar opciones económicas si lo necesitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
