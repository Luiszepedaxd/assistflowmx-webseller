import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-lg">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white">AssistFlowMX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-white hover:text-blue-200 font-medium transition-colors">Inicio</a>
            <a href="#servicios" className="text-white hover:text-blue-200 font-medium transition-colors">Servicios</a>
            <a href="#precios" className="text-white hover:text-blue-200 font-medium transition-colors">Precios</a>
            <a href="#beneficios" className="text-white hover:text-blue-200 font-medium transition-colors">Beneficios</a>
            <a href="#proceso" className="text-white hover:text-blue-200 font-medium transition-colors">Proceso</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5213322705363" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#inicio" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#precios" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Precios</a>
            <a href="#beneficios" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
            <a href="#proceso" className="block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Proceso</a>
            <a 
              href="https://wa.me/5213322705363" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
