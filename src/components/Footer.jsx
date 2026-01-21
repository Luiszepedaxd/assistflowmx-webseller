import React from 'react';

/**
 * Componente: Footer
 * Single Responsibility: Solo renderiza el footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            © {currentYear} AssistFlowMX. Todos los derechos reservados.
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

export default Footer;
