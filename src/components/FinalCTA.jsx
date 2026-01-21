import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para tener tu página web?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Escribe por WhatsApp y te explicamos todo el proceso. Sin compromisos, sin complicaciones.
        </p>
        <WhatsAppButton 
          message={MESSAGES.FINAL_CTA}
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Hablar por WhatsApp
        </WhatsAppButton>
        <p className="mt-6 text-white/80 text-sm">
          Responde en menos de 24 horas • Precios transparentes • Sin letras pequeñas
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
