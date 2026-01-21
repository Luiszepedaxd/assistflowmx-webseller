const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} AssistFlowMX. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
            <a 
              href="#inicio" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Servicios
            </a>
            <a 
              href="#precios" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Precios
            </a>
            <a 
              href="#beneficios" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Beneficios
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Páginas web estáticas • HTML/CSS/JS • Sin hosting ni dominio incluido
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
