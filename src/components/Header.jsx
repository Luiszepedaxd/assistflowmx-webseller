import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#inicio" className="text-2xl font-bold text-gray-900">
            Assist<span className="text-blue-600">Flow</span>MX
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#proceso" className="text-gray-600 hover:text-blue-600 transition-colors">Proceso</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/5213322705363" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="https://wa.me/5213322705363" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 p-2"
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
            <a href="#inicio" className="block text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="block text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#precios" className="block text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Precios</a>
            <a href="#beneficios" className="block text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
            <a href="#proceso" className="block text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Proceso</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
