import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative container mx-auto max-w-5xl text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
          ¿Listo para tener tu página web?
        </h2>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
          Escribe por WhatsApp y te explicamos todo el proceso. Sin compromisos, sin complicaciones.
        </p>
        <div className="mb-12">
          <WhatsAppButton 
            message={MESSAGES.FINAL_CTA}
            className="inline-block px-16 py-8 bg-white text-purple-600 font-black text-2xl rounded-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:bg-yellow-300 shadow-2xl"
          >
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-white/90">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <p className="font-black text-2xl mb-2">24h</p>
            <p className="text-base font-semibold">Responde rápido</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <p className="font-black text-2xl mb-2">100%</p>
            <p className="text-base font-semibold">Precios claros</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <p className="font-black text-2xl mb-2">0%</p>
            <p className="text-base font-semibold">Sin compromiso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
