// Constantes compartidas para evitar duplicidad
export const WHATSAPP_NUMBER = "5213322705363";

export const MESSAGES = {
  HERO: "Hola%20AssistFlowMX,%20me%20interesa%20automatizar%20la%20atenci%C3%B3n%20a%20mis%20clientes.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n?",
  PILOT_PLAN: "Hola%20AssistFlowMX,%20me%20interesa%20el%20Plan%20Piloto%20de%20$500%20MXN.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles?",
  MONTHLY_PLAN: "Hola%20AssistFlowMX,%20me%20interesa%20el%20Plan%20Mensual%20desde%20$1,000%20MXN.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n?",
  FINAL_CTA: "Hola%20AssistFlowMX,%20quiero%20empezar%20a%20automatizar%20mi%20negocio.%20%C2%BFCu%C3%A1ndo%20podemos%20hablar?"
};

export const generateWhatsAppUrl = (message) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
