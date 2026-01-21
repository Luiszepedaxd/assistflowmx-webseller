const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Nos cuentas qué necesitas",
      description: "Escribe por WhatsApp qué tipo de página necesitas, tu negocio y qué quieres destacar. Te haremos algunas preguntas simples para entender mejor.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Te diseñamos tu página web",
      description: "Creamos tu página en 72 horas",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Recibes tus archivos listos",
      description: "Te enviamos todos los archivos de tu página. Solo súbelos a tu hosting preferido y estará funcionando en minutos.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden" id="proceso">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cómo funciona
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proceso simple y directo. En 3 pasos tendrás tu página web lista para anunciarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto relative">
          {/* Línea conectora animada para desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 rounded-full z-0">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center group">
              <div className="relative mb-8">
                <div className={`w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg">{step.number}</span>
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl shadow-2xl p-8 lg:p-10 border-4 border-white transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg sm:text-xl text-gray-900 leading-relaxed text-center font-bold">
              <span className="text-2xl">Nota importante:</span> Recuerda que necesitarás un hosting y dominio por tu cuenta. 
              Te podemos recomendar opciones económicas si lo necesitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
