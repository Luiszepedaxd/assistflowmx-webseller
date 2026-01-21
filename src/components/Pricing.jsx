import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Pricing = () => {
  const packages = [
    {
      name: "Paquete Básico",
      price: "$1,200",
      currency: "MXN",
      featured: false,
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
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white" id="precios">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Paquetes y Precios
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elige el paquete que mejor se adapte a tu negocio. Todos incluyen entrega rápida y soporte durante el proceso.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 lg:p-10 ${
                pkg.featured 
                  ? 'border-4 border-blue-500 transform lg:scale-105 bg-gradient-to-br from-blue-50 to-white' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {pkg.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-xl text-gray-600 ml-2">{pkg.currency}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 text-lg ml-3 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={pkg.message}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 text-center transform hover:scale-105 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                }`}
              >
                Solicitar este paquete
              </WhatsAppButton>
            </div>
          ))}
        </div>

        {/* Aviso importante sobre hosting */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 lg:p-10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Qué NO está incluido</h3>
                <p className="text-blue-800 text-lg leading-relaxed mb-3">
                  Nuestros paquetes <strong>NO incluyen hosting ni dominio</strong>. Te entregamos tu página completa lista para que la subas donde prefieras.
                </p>
                <p className="text-blue-800 text-lg leading-relaxed">
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
