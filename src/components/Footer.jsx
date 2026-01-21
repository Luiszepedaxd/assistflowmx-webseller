const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AssistFlowMX
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Páginas web estáticas para tu negocio. Listas para anunciarse.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enlaces
            </h3>
            <nav className="flex flex-col gap-4">
              <a 
                href="#inicio" 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
              >
                Servicios
              </a>
              <a 
                href="#precios" 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
              >
                Precios
              </a>
              <a 
                href="#beneficios" 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium hover:translate-x-2 transform transition-transform"
              >
                Beneficios
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Información
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-lg font-medium">
                Páginas web estáticas
              </p>
              <p className="text-gray-300 text-lg font-medium">
                HTML/CSS/JS
              </p>
              <p className="text-gray-300 text-lg font-medium">
                Sin hosting ni dominio incluido
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} AssistFlowMX. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
