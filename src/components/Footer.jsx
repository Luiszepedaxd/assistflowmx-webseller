const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">AssistFlowMX</span>
            </div>
            <p className="text-gray-400 text-lg">
              Páginas web estáticas para tu negocio. Listas para anunciarse.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-3">
              <a 
                href="#inicio" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
              >
                Servicios
              </a>
              <a 
                href="#precios" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
              >
                Precios
              </a>
              <a 
                href="#beneficios" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
              >
                Beneficios
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Información</h3>
            <p className="text-gray-400 text-lg mb-2">
              Páginas web estáticas
            </p>
            <p className="text-gray-400 text-lg mb-2">
              HTML/CSS/JS
            </p>
            <p className="text-gray-400 text-lg">
              Sin hosting ni dominio incluido
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} AssistFlowMX. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
