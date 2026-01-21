import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Pricing = () => {
  const packages = [
    {
      name: "Paquete Básico",
      price: "$1,200",
      currency: "MXN",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "1 página estática",
        "Diseño responsive",
        "Botón de WhatsApp o llamada",
        "Entrega en 72 horas",
        "Archivos listos para subir"
      ],
      message: MESSAGES.BASIC_PACKAGE
    },
    {
      name: "Paquete Interactivo",
      price: "$2,200",
      currency: "MXN",
      featured: true,
      gradient: "from-purple-600 via-pink-600 to-red-500",
      features: [
        "Todo el paquete básico",
        "Formulario funcional (sin backend)",
        "Animaciones ligeras",
        "Enfoque publicitario",
        "Entrega en 72 horas"
      ],
      message: MESSAGES.INTERACTIVE_PACKAGE
    },
    {
      name: "Paquete Landing Publicitaria",
      price: "$3,200",
      currency: "MXN",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Diseño enfocado a conversión",
        "Copy comercial optimizado",
        "CTAs estratégicamente ubicados",
        "Ideal para campañas de anuncios",
        "Entrega en 72 horas"
      ],
      message: MESSAGES.LANDING_PACKAGE
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden" id="precios">
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Paquetes y Precios
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elige el paquete que mejor se adapte a tu negocio. Todos incluyen entrega rápida y soporte durante el proceso.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden ${
                pkg.featured 
                  ? 'lg:scale-110 z-10 border-4 border-white' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-white p-8 lg:p-10 ${pkg.featured ? 'bg-gradient-to-br from-purple-50 to-pink-50' : ''}`}>
                {pkg.featured && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-base font-black shadow-2xl animate-pulse">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className={`text-6xl lg:text-7xl font-black bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors duration-500`}>
                      {pkg.price}
                    </span>
                    <span className="text-2xl text-gray-600 ml-2 group-hover:text-white/80 transition-colors duration-500">{pkg.currency}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-7 h-7 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-lg ml-3 leading-relaxed group-hover:text-white transition-colors duration-500 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  message={pkg.message}
                  className={`w-full py-5 px-6 rounded-2xl font-black text-lg transition-all duration-500 text-center transform hover:scale-105 shadow-xl ${
                    pkg.featured
                      ? `bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-2xl`
                      : `bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-2xl`
                  }`}
                >
                  Solicitar este paquete
                </WhatsAppButton>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Aviso importante sobre hosting */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 lg:p-10 shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3">Qué NO está incluido</h3>
                <p className="text-white text-lg leading-relaxed mb-3 font-semibold">
                  Nuestros paquetes <strong>NO incluyen hosting ni dominio</strong>. Te entregamos tu página completa lista para que la subas donde prefieras.
                </p>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  Esto te da total libertad para elegir el hosting más económico o el que prefieras, sin depender de nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
