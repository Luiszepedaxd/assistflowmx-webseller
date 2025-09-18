import WhatsAppButton from './WhatsAppButton';
import { MESSAGES } from '../constants/contact';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Empieza hoy a automatizar tu negocio y gana mas tiempo para lo que importa</h2>
        <WhatsAppButton 
          message={MESSAGES.FINAL_CTA}
          className="cta-button primary large"
          children="Hablar por WhatsApp"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
