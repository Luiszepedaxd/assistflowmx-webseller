import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                AssistFlowMX
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Tu sitio web listo para 
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-2">
                anunciarse
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Páginas web estáticas, rápidas y enfocadas en conversión. Perfectas para negocios que quieren presencia digital inmediata.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <WhatsAppButton 
                message={MESSAGES.HERO}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform text-center"
              >
                Habla con nosotros en WhatsApp
              </WhatsAppButton>
            </div>

            {/* Aviso importante */}
            <div className="pt-6 max-w-xl mx-auto lg:mx-0">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Importante:</span> Nuestros paquetes no incluyen hosting ni dominio. Te entregamos tu página lista para que la subas donde prefieras.
                </p>
              </div>
            </div>
          </div>

          {/* Visual - Mockup placeholder para imagen */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg">
              {/* Placeholder para imagen - Este espacio se reemplazará con una imagen */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Espacio para imagen</p>
                  <p className="text-sm text-gray-400 mt-2">Mockup de página web</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-green-500 rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
