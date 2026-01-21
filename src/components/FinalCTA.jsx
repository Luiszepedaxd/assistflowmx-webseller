import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          ¿Listo para revolucionar tu presencia digital?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Únete a cientos de empresas que ya confían en AssistFlowMX para tener su página web lista para anunciarse.
        </p>
        <WhatsAppButton 
          message={MESSAGES.FINAL_CTA}
          className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          Solicitar Demo
        </WhatsAppButton>
      </div>
    </section>
  );
};

export default FinalCTA;
