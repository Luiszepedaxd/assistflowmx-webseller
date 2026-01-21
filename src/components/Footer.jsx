const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">Assist<span className="text-blue-500">Flow</span>MX</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Páginas web estáticas para tu negocio. Listas para anunciarse. Conectamos tu negocio con clientes mediante tecnología simple y efectiva.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a className="text-gray-300 hover:text-white transition-colors duration-300" href="#inicio">Inicio</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors duration-300" href="#servicios">Servicios</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors duration-300" href="#precios">Precios</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors duration-300" href="#beneficios">Beneficios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Páginas Estáticas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Landing Pages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Páginas Publicitarias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Diseño Responsive</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AssistFlowMX. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
