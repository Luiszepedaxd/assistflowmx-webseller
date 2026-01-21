import React from 'react';
import { WHATSAPP_BASE_URL, WHATSAPP_MESSAGES } from '../constants/whatsapp';

/**
 * Sección Hero principal
 */
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

export default HeroSection;
