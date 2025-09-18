import { generateWhatsAppUrl } from '../constants/contact.js';

// Componente reutilizable para botones de WhatsApp (SRP, OCP)
const WhatsAppButton = ({ 
  message, 
  className = "cta-button primary", 
  children = "Hablar por WhatsApp",
  ...props 
}) => {
  return (
    <a 
      href={generateWhatsAppUrl(message)} 
      className={className} 
      target="_blank" 
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
