import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white pt-16 lg:pt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo pequeño */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-3xl font-bold text-gray-900">AssistFlowMX</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Tu sitio web listo para anunciarse
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Páginas web estáticas, rápidas y enfocadas en conversión. Perfectas para negocios que quieren presencia digital inmediata.
          </p>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">72h</div>
              <div className="text-sm text-gray-600 font-medium">Entrega</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">$1.2k</div>
              <div className="text-sm text-gray-600 font-medium">Desde</div>
              <div className="mt-3">
                <WhatsAppButton 
                  message={MESSAGES.HERO}
                  className="text-blue-600 hover:text-blue-700 underline font-semibold text-sm"
                >
                  Habla con nosotros en WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Responsive</div>
            </div>
          </div>

          {/* Aviso importante */}
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6 max-w-3xl mx-auto text-left">
            <p className="text-gray-800">
              <span className="font-bold">Importante:</span> Nuestros paquetes no incluyen hosting ni dominio. Te entregamos tu página lista para que la subas donde prefieras.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <WhatsAppButton 
              message={MESSAGES.HERO}
              className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Botón WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
