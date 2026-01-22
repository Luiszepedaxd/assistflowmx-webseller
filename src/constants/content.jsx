import React from 'react';

/**
 * Contenido estático de la aplicación
 * Single Responsibility: Solo contiene datos de contenido
 */

export const FEATURES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Página web profesional",
    description: "Diseño moderno y atractivo que representa tu negocio. Se ve perfecto en celular, tablet y computadora."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Lista para anunciarse",
    description: "Tu página viene optimizada para que funcione con Facebook Ads, Google Ads y cualquier plataforma de publicidad."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Entrega rápida",
    description: "Recibe tu página lista en solo 72 horas. Sin esperas largas ni procesos complicados."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    title: "Contacto directo",
    description: "Botones de WhatsApp y llamada integrados para que tus clientes te contacten al instante."
  }
];

export const PACKAGES = [
  {
    name: "Básico",
    price: "1,200",
    description: "Perfecto para comenzar con presencia digital básica",
    features: [
      "1 página estática",
      "Diseño 100% responsive",
      "Botón de WhatsApp o llamada",
      "Entrega en 72 horas",
      "Archivos editables incluidos"
    ],
    recommended: false,
    whatsappMessageKey: "basico",
    color: "slate"
  },
  {
    name: "Interactivo",
    price: "2,200",
    description: "Más funciones para destacar tu negocio",
    features: [
      "Todo del paquete Básico",
      "Formulario funcional (sin backend)",
      "Animaciones ligeras",
      "Enfoque publicitario",
      "Diseño personalizado",
      "2 revisiones incluidas"
    ],
    recommended: true,
    whatsappMessageKey: "interactivo",
    color: "emerald"
  },
  {
    name: "Landing Publicitaria",
    price: "3,200",
    description: "Diseñada para maximizar tus conversiones",
    features: [
      "Diseño enfocado a conversión",
      "Copy comercial profesional",
      "CTAs estratégicos y claros",
      "Ideal para campañas de anuncios",
      "Optimizada para Facebook/Google Ads",
      "3 revisiones incluidas"
    ],
    recommended: false,
    whatsappMessageKey: "publicitaria",
    color: "cyan"
  }
];

export const BENEFITS = [
  {
    number: "01",
    title: "Ahorra tiempo y dinero",
    description: "Pago único. Sin mensualidades."
  },
  {
    number: "02",
    title: "Sin conocimientos técnicos",
    description: "Nosotros diseñamos, tú solo apruebas."
  },
  {
    number: "03",
    title: "Perfecta para publicidad",
    description: "Optimizada para Facebook Ads y Google Ads."
  },
  {
    number: "04",
    title: "Archivos 100% tuyos",
    description: "Código completo. Edítalo cuando quieras."
  },
  {
    number: "05",
    title: "Soporte por WhatsApp",
    description: "Te orientamos gratis sobre cómo publicarla."
  },
  {
    number: "06",
    title: "Diseño que convierte",
    description: "Cada botón pensado para vender más."
  }
];

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Platícanos tu idea",
    description: "Cuéntanos sobre tu negocio por WhatsApp. Qué vendes, a quién le vendes y qué quieres lograr.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    )
  },
  {
    step: "2",
    title: "Te enviamos propuesta",
    description: "En menos de 24 horas recibes una propuesta con el paquete ideal para ti y el precio final.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    )
  },
  {
    step: "3",
    title: "Diseñamos tu página",
    description: "Comenzamos a trabajar en tu diseño. Recibes avances y puedes pedir cambios hasta que quede perfecto.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
      </svg>
    )
  },
  {
    step: "4",
    title: "¡Recibe tu página!",
    description: "Te entregamos todos los archivos de tu página en 72 horas, listos para subir a tu hosting.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    )
  }
];

export const FAQS = [
  {
    question: "¿Qué recibo exactamente?",
    answer: "Recibes los archivos de tu página web (HTML, CSS y JavaScript) listos para usar. Son archivos que puedes abrir en cualquier navegador y subir a cualquier servicio de hosting."
  },
  {
    question: "¿Por qué no incluyen hosting ni dominio?",
    answer: "Porque queremos ofrecerte el precio más accesible posible. El hosting y dominio tienen costos recurrentes (mensuales o anuales) que varían según el proveedor. Así tú eliges dónde alojar tu página y controlas esos gastos."
  },
  {
    question: "¿Dónde puedo subir mi página?",
    answer: "Hay muchas opciones gratuitas y de pago: Netlify, Vercel, GitHub Pages (gratuitos), o servicios como GoDaddy, Hostinger, Namecheap (de pago). Te orientamos sin costo sobre cuál te conviene más."
  },
  {
    question: "¿Puedo hacer cambios después de recibir mi página?",
    answer: "¡Sí! Te entregamos los archivos completos y editables. Si sabes algo de código puedes modificarlos, o puedes contratarnos para hacer cambios adicionales."
  },
  {
    question: "¿Las páginas funcionan para anuncios de Facebook/Google?",
    answer: "¡Absolutamente! Nuestras páginas están diseñadas específicamente para funcionar como landing pages en campañas publicitarias. Son rápidas, responsivas y con CTAs claros."
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer: "50% al iniciar el proyecto y 50% al entregar. Aceptamos transferencia bancaria, depósito en OXXO y pagos por Mercado Pago."
  }
];
