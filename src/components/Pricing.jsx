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
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Paquetes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elige el paquete que mejor se adapte a tu negocio. Todos incluyen entrega rápida y soporte durante el proceso.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pkg.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">
                  {pkg.price}
                </span>
                <span className="text-xl text-gray-600 ml-2">{pkg.currency}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={pkg.message}
                className="w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                Solicitar este paquete
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
