import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl font-bold text-blue-500">AssistFlowMX</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tu sitio web listo para anunciarse, sin complicaciones
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Páginas web estáticas, rápidas y enfocadas en conversión. Perfectas para negocios pequeños que quieren presencia digital inmediata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton 
                message={MESSAGES.HERO}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Habla con nosotros en WhatsApp
              </WhatsAppButton>
            </div>

            {/* Aviso importante */}
            <p className="mt-6 text-sm text-gray-500 max-w-xl mx-auto lg:mx-0">
              ⚠️ <strong>Importante:</strong> Nuestros paquetes no incluyen hosting ni dominio. 
              Te entregamos tu página lista para que la subas donde prefieras.
            </p>
          </div>

          {/* Visual - Mockup de página web */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Barra del navegador del mockup */}
                <div className="bg-gray-800 px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Contenido del mockup */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="h-20 bg-white rounded-lg shadow p-4">
                        <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      <div className="h-20 bg-white rounded-lg shadow p-4">
                        <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Botón de WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
