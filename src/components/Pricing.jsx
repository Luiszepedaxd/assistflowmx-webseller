import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Pricing = () => {
  const packages = [
    {
      name: "Paquete Básico",
      price: "$1,200 MXN",
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
      price: "$2,200 MXN",
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
      price: "$3,200 MXN",
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
    <section className="py-20 px-4 bg-gray-50" id="precios">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paquetes y Precios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el paquete que mejor se adapte a tu negocio. Todos incluyen entrega rápida y soporte durante el proceso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.featured 
                  ? 'border-4 border-blue-500 transform lg:scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pkg.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-500">
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={pkg.message}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 text-center ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:shadow-xl hover:-translate-y-1'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                }`}
              >
                Solicitar este paquete
              </WhatsAppButton>
            </div>
          ))}
        </div>

        {/* Aviso importante sobre hosting */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold text-blue-900 mb-2">¿Qué NO está incluido?</p>
              <p className="text-blue-800 text-sm mb-2">
                Nuestros paquetes <strong>NO incluyen hosting ni dominio</strong>. Te entregamos tu página completa lista para que la subas donde prefieras.
              </p>
              <p className="text-blue-800 text-sm">
                Esto te da total libertad para elegir el hosting más económico o el que prefieras, sin depender de nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
