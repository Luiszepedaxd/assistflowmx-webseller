import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          Listo para tener tu página web
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
          Escribe por WhatsApp y te explicamos todo el proceso. Sin compromisos, sin complicaciones.
        </p>
        <div className="mb-8">
          <WhatsAppButton 
            message={MESSAGES.FINAL_CTA}
            className="inline-block px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
          >
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-white/90">
          <div>
            <p className="font-semibold text-lg">Responde rápido</p>
            <p className="text-sm">En menos de 24 horas</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Precios claros</p>
            <p className="text-sm">Sin letras pequeñas</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Sin compromiso</p>
            <p className="text-sm">Consulta sin presión</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
