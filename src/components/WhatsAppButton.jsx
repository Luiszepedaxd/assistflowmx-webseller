import { generateWhatsAppUrl } from '../constants/contact.js';

// Componente reutilizable para botones de WhatsApp
const WhatsAppButton = ({ 
  message, 
  className = "px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300", 
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
