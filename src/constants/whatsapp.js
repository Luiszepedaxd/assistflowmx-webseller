/**
 * Configuración de WhatsApp
 * Single Responsibility: Solo maneja la configuración de WhatsApp
 */
export const WHATSAPP_NUMBER = "521234567890"; // Cambiar por número real
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_MESSAGES = {
  general: "Hola, me interesa conocer más sobre los servicios de AssistFlowMX",
  basico: "Hola, me interesa el Paquete Básico de $1,200 MXN",
  interactivo: "Hola, me interesa el Paquete Interactivo de $2,200 MXN",
  publicitaria: "Hola, me interesa el Paquete Landing Publicitaria de $3,200 MXN",
};

/**
 * Genera un enlace de WhatsApp con mensaje predefinido
 * @param {string} message - Mensaje a enviar
 * @returns {string} URL completa de WhatsApp
 */
export const generateWhatsAppLink = (message) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
