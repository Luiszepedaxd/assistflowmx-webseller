import WhatsAppButton from './WhatsAppButton';
import Card from './Card';
import { MESSAGES } from '../constants/contact';

const Pricing = () => {
  return (
    <section className="pricing" id="planes">
      <div className="container">
        <h2>Planes simples y claros</h2>
        <div className="pricing-grid">
          <Card className="pricing-card">
            <h3>Plan Piloto</h3>
            <div className="price">$500 MXN</div>
            <p>Una automatizacion basica</p>
            <WhatsAppButton 
              message={MESSAGES.PILOT_PLAN}
              className="cta-button secondary"
              children="Quiero empezar"
            />
          </Card>
          <Card className="pricing-card" featured={true}>
            <h3>Plan Mensual</h3>
            <div className="price">Desde $1,000 MXN</div>
            <p>Automatizacion + soporte continuo</p>
            <WhatsAppButton 
              message={MESSAGES.MONTHLY_PLAN}
              children="Quiero empezar"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
