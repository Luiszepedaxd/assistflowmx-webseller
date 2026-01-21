import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-8 text-white">
            {/* Logo con animación */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-in">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-4xl font-black text-white drop-shadow-lg">
                AssistFlowMX
              </span>
            </div>
            
            {/* Headline con efecto */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight animate-slide-up">
              <span className="block">Tu sitio web</span>
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
                listo para anunciarse
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-lg">
              Páginas web estáticas, rápidas y enfocadas en conversión. Perfectas para negocios que quieren presencia digital inmediata.
            </p>
            
            {/* Estadísticas destacadas */}
            <div className="grid grid-cols-3 gap-4 pt-6 animate-fade-in-delay">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-black text-white">72h</div>
                <div className="text-sm text-white/80">Entrega</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-black text-white">$1.2k</div>
                <div className="text-sm text-white/80">Desde</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-sm text-white/80">Responsive</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <WhatsAppButton 
                message={MESSAGES.HERO}
                className="px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:bg-yellow-300 text-center"
              >
                Habla con nosotros en WhatsApp
              </WhatsAppButton>
            </div>

            {/* Aviso importante */}
            <div className="pt-6 max-w-xl mx-auto lg:mx-0">
              <div className="bg-amber-400/90 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-5 shadow-2xl">
                <p className="text-sm text-gray-900 font-semibold">
                  <span className="font-black">Importante:</span> Nuestros paquetes no incluyen hosting ni dominio. Te entregamos tu página lista para que la subas donde prefieras.
                </p>
              </div>
            </div>
          </div>

          {/* Visual - Mockup con animación */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg animate-float">
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 p-8">
                {/* Mockup browser bar */}
                <div className="bg-white/20 rounded-t-xl mb-4 p-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                {/* Mockup content */}
                <div className="space-y-4">
                  <div className="h-6 bg-white/30 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/20 rounded-lg w-full"></div>
                  <div className="h-4 bg-white/20 rounded-lg w-5/6"></div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl"></div>
                    <div className="h-24 bg-gradient-to-br from-green-400/30 to-yellow-400/30 rounded-xl"></div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mt-4">
                    <span className="text-white font-bold">Botón WhatsApp</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
