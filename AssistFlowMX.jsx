/**
 * =====================================================
 * ASSISTFLOWMX - Landing Page Comercial
 * =====================================================
 * 
 * Landing page one-page para generación de leads vía WhatsApp.
 * Diseñada para PYMEs, emprendedores y comercios locales en México.
 * 
 * Mensaje principal: "Tu sitio web listo para anunciarse, sin complicaciones."
 * 
 * Tecnologías: React + Tailwind CSS
 * Autor: AssistFlowMX
 * 
 * NOTAS IMPORTANTES:
 * - No incluye hosting ni dominio (se deja claro en múltiples secciones)
 * - Todos los CTAs dirigen a WhatsApp
 * - Diseño responsive y optimizado para conversión
 * =====================================================
 */

import React, { useState, useEffect } from 'react';

// =====================================================
// CONFIGURACIÓN - Número de WhatsApp y mensajes
// =====================================================
const WHATSAPP_NUMBER = "521234567890"; // Cambiar por número real
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Mensajes predefinidos para cada paquete
const WHATSAPP_MESSAGES = {
  general: "Hola, me interesa conocer más sobre los servicios de AssistFlowMX",
  basico: "Hola, me interesa el Paquete Básico de $1,200 MXN",
  interactivo: "Hola, me interesa el Paquete Interactivo de $2,200 MXN",
  publicitaria: "Hola, me interesa el Paquete Landing Publicitaria de $3,200 MXN",
};

// =====================================================
// COMPONENTE: Botón de WhatsApp flotante
// =====================================================
const WhatsAppFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

// =====================================================
// COMPONENTE: Header / Navegación
// =====================================================
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            Assist<span className="text-emerald-400">Flow</span>MX
          </span>
        </div>

        {/* CTA Header */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Cotiza gratis
        </a>
      </div>
    </header>
  );
};

// =====================================================
// SECCIÓN: Hero Principal
// =====================================================
const HeroSection = () => {
  const whatsappLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">Para negocios que quieren crecer</span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
          Tu sitio web{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              listo para anunciarse
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 4 100 4 150 6C200 8 250 4 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#34d399"/>
                  <stop offset="1" stopColor="#22d3ee"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          <span className="text-slate-300">sin complicaciones</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Páginas web profesionales para emprendedores y negocios locales. 
          <span className="text-white font-medium"> Entrega en 72 horas</span>, 
          diseño atractivo y listo para tus campañas de publicidad.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotiza por WhatsApp
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="#paquetes"
            className="flex items-center gap-2 text-slate-300 hover:text-white px-6 py-4 rounded-2xl font-medium transition-all duration-200 hover:bg-white/5"
          >
            Ver paquetes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Indicadores de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 text-sm animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Entrega en 72 hrs</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>100% responsive</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Desde $1,200 MXN</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: Qué Ofrecemos
// =====================================================
const WhatWeOfferSection = () => {
  const features = [
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

  return (
    <section id="que-ofrecemos" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué ofrecemos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Todo lo que necesitas para{' '}
            <span className="text-emerald-600">empezar a vender</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Páginas web simples pero efectivas, diseñadas específicamente para negocios que quieren 
            presencia digital rápida y sin complicaciones técnicas.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota importante - Sin hosting */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">Importante: ¿Qué NO incluye?</h4>
            <p className="text-amber-700 text-sm">
              Nuestro servicio <strong>no incluye hosting ni dominio</strong>. Te entregamos los archivos 
              de tu página (HTML, CSS, JS) listos para que los subas donde prefieras. Si necesitas ayuda 
              con esto, podemos orientarte sin costo adicional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: Paquetes y Precios
// =====================================================
const PricingSection = () => {
  const packages = [
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
      whatsappMessage: WHATSAPP_MESSAGES.basico,
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
      whatsappMessage: WHATSAPP_MESSAGES.interactivo,
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
      whatsappMessage: WHATSAPP_MESSAGES.publicitaria,
      color: "cyan"
    }
  ];

  return (
    <section id="paquetes" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Precios transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Elige el paquete ideal{' '}
            <span className="text-emerald-400">para tu negocio</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sin costos ocultos ni sorpresas. Pago único, sin mensualidades.
            Tú decides dónde alojar tu página.
          </p>
        </div>

        {/* Grid de paquetes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.recommended 
                  ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Badge recomendado */}
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    Más popular
                  </span>
                </div>
              )}

              {/* Nombre y descripción */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-sm">{pkg.description}</p>
              </div>

              {/* Precio */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-lg">$</span>
                  <span className="text-5xl font-bold text-white">{pkg.price}</span>
                  <span className="text-slate-400 text-lg">MXN</span>
                </div>
                <span className="text-slate-500 text-sm">Pago único</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.recommended ? 'text-emerald-400' : 'text-slate-500'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-200 ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Lo quiero →
              </a>
            </div>
          ))}
        </div>

        {/* Nota sobre hosting */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            Todos los paquetes <strong className="text-slate-400">no incluyen hosting ni dominio</strong>. 
            Te entregamos los archivos listos para subir.
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: Beneficios
// =====================================================
const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      title: "Ahorra tiempo y dinero",
      description: "Sin contratos mensuales ni costos de mantenimiento. Pagas una vez y la página es tuya para siempre."
    },
    {
      number: "02",
      title: "Sin conocimientos técnicos",
      description: "Nosotros nos encargamos de todo el diseño y desarrollo. Tú solo nos dices qué necesitas."
    },
    {
      number: "03",
      title: "Perfecta para publicidad",
      description: "Diseñadas específicamente para funcionar con campañas de Facebook Ads, Google Ads e Instagram."
    },
    {
      number: "04",
      title: "Archivos 100% tuyos",
      description: "Te entregamos el código completo. Puedes modificarlo, moverlo o hacer lo que quieras con él."
    },
    {
      number: "05",
      title: "Soporte por WhatsApp",
      description: "¿Tienes dudas? Te orientamos sin costo sobre cómo subir tu página y ponerla en línea."
    },
    {
      number: "06",
      title: "Diseño que convierte",
      description: "Cada elemento está pensado para que tus visitantes se conviertan en clientes."
    }
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Beneficios que{' '}
            <span className="text-cyan-600">marcan la diferencia</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entendemos las necesidades de los pequeños negocios en México. 
            Por eso creamos una solución simple, rápida y accesible.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <span className="text-6xl font-bold text-slate-100 group-hover:text-emerald-100 transition-colors duration-300">
                {benefit.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: Proceso de trabajo
// =====================================================
const ProcessSection = () => {
  const steps = [
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

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Así de fácil{' '}
            <span className="text-emerald-600">funciona</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sin reuniones eternas ni procesos complicados. 
            De la idea a tu página lista en solo 4 pasos.
          </p>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Línea conectora (solo en desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-400" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Número de paso */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white border-2 border-emerald-500 rounded-full mb-6 shadow-lg shadow-emerald-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: FAQ - Preguntas Frecuentes
// =====================================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
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

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dudas comunes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-400">
            Si no encuentras tu respuesta, escríbenos por WhatsApp
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/80 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SECCIÓN: CTA Final
// =====================================================
const FinalCTASection = () => {
  const whatsappLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icono */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-2xl mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>

        {/* Contenido */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para tener tu página web?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Empieza hoy mismo. Escríbenos por WhatsApp y en 72 horas 
          tendrás tu sitio listo para empezar a vender.
        </p>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 hover:bg-slate-50"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escríbenos ahora
          <span className="ml-1">→</span>
        </a>

        {/* Indicadores */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Respuesta en menos de 1 hora
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Sin compromiso
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Cotización gratis
          </span>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// COMPONENTE: Footer
// =====================================================
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold text-xl">
              Assist<span className="text-emerald-400">Flow</span>MX
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-slate-400 text-sm">
            <a href="#que-ofrecemos" className="hover:text-white transition-colors">Servicios</a>
            <a href="#paquetes" className="hover:text-white transition-colors">Paquetes</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AssistFlowMX. Todos los derechos reservados.
          </p>
        </div>

        {/* Nota final */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">
            Servicio de diseño web para emprendedores y PYMEs en México. 
            No incluimos hosting ni dominio — te entregamos los archivos listos para que los subas donde prefieras.
          </p>
        </div>
      </div>
    </footer>
  );
};

// =====================================================
// COMPONENTE PRINCIPAL: App / Landing Page
// =====================================================
const AssistFlowMXLanding = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Estilos para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>

      {/* Header fijo */}
      <Header />
      
      {/* Secciones principales */}
      <main>
        <HeroSection />
        <WhatWeOfferSection />
        <PricingSection />
        <BenefitsSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default AssistFlowMXLanding;
