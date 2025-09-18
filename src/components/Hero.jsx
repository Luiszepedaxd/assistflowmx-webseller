import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
            <span>AssistFlowMX</span>
          </div>
          <h1 className="hero-title">Automatizamos la atencion a tus clientes en minutos</h1>
          <p className="hero-subtitle">Desde cotizaciones instantaneas hasta seguimientos automaticos: mas velocidad, menos esfuerzo.</p>
          <WhatsAppButton 
            message={MESSAGES.HERO}
            children="Habla con nosotros en WhatsApp"
          />
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="whatsapp-chat">
                <div className="chat-header">
                  <span>Cliente</span>
                </div>
                <div className="chat-messages">
                  <div className="message received">
                    <p>Hola, necesito una cotizacion para pintura</p>
                  </div>
                  <div className="message sent">
                    <p>Perfecto! Te envio tu cotizacion personalizada</p>
                  </div>
                  <div className="message sent file">
                    <div className="file-preview">
                      <span>Cotizacion_Pintura.pdf</span>
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
