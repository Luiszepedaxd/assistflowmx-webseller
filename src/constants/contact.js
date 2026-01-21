// Constantes compartidas para evitar duplicidad
export const WHATSAPP_NUMBER = "5213322705363";

export const MESSAGES = {
  HERO: "Hola%20AssistFlowMX,%20me%20interesa%20obtener%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n?",
  BASIC_PACKAGE: "Hola%20AssistFlowMX,%20me%20interesa%20el%20Paquete%20B%C3%A1sico%20de%20$1,200%20MXN.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles?",
  INTERACTIVE_PACKAGE: "Hola%20AssistFlowMX,%20me%20interesa%20el%20Paquete%20Interactivo%20de%20$2,200%20MXN.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n?",
  LANDING_PACKAGE: "Hola%20AssistFlowMX,%20me%20interesa%20el%20Paquete%20Landing%20Publicitaria%20de%20$3,200%20MXN.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles?",
  FINAL_CTA: "Hola%20AssistFlowMX,%20quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%20%C2%BFCu%C3%A1ndo%20podemos%20hablar?"
};

export const generateWhatsAppUrl = (message) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
