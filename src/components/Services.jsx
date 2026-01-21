const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      title: "Páginas Estáticas",
      description: "HTML/CSS/JS puro, sin complicaciones. Páginas rápidas que cargan en segundos y funcionan perfectamente."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Totalmente Responsive",
      description: "Tu página se verá perfecta en celulares, tablets y computadoras. Diseño adaptado a todos los dispositivos."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      ),
      title: "Botones de WhatsApp",
      description: "Incluye botones de llamada o WhatsApp para que tus clientes te contacten directamente desde tu página."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Enfoque en Conversión",
      description: "Diseño pensado para vender. Cada elemento está pensado para convertir visitantes en clientes."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Entrega Rápida",
      description: "Tu página lista en 72 horas. Sin esperas, sin complicaciones. Empieza a recibir clientes ya."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Sin Backend",
      description: "Páginas simples que no necesitan servidores complicados. Solo sube tus archivos y listo."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Características
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir AssistFlowMX?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro servicio combina diseño profesional con tecnología simple para ofrecer páginas web estáticas listas para anunciarse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para tener tu página web?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en AssistFlowMX para tener su página web lista para anunciarse.
            </p>
            <a 
              href="https://wa.me/5213322705363" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
