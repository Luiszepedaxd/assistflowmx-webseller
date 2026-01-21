import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para revolucionar tu presencia digital?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en AssistFlowMX para tener su página web lista para anunciarse.
            </p>
            <WhatsAppButton 
              message={MESSAGES.FINAL_CTA}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Solicitar Demo
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
