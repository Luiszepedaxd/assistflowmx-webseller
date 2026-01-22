import React, { useState, useEffect } from 'react';

/**
 * Componente: Sección de Testimonios
 * Single Responsibility: Solo renderiza el carrusel de testimonios
 */

const TESTIMONIALS = [
  {
    name: "María González",
    rating: 5,
    testimonial: "Excelente servicio, mi página quedó perfecta y en menos de 72 horas. Ahora tengo clientes contactándome todos los días por WhatsApp. ¡Super recomendado!"
  },
  {
    name: "Carlos Ramírez",
    rating: 5,
    testimonial: "No sabía nada de páginas web y me ayudaron en todo el proceso. La página se ve profesional y ya estoy recibiendo pedidos. Muy contento con el resultado."
  },
  {
    name: "Ana Martínez",
    rating: 4.5,
    testimonial: "El diseño es moderno y se adapta perfecto a mi negocio. La atención fue excelente y el precio muy justo. Definitivamente volveré a trabajar con ellos."
  },
  {
    name: "Roberto Sánchez",
    rating: 5,
    testimonial: "Mi negocio local ahora tiene presencia online. La página carga rápido y se ve increíble en el celular. Los clientes me dicen que se ve muy profesional."
  },
  {
    name: "Laura Fernández",
    rating: 4.5,
    testimonial: "Proceso súper rápido y sin complicaciones. Me entregaron todo listo para subir y me orientaron en cada paso. Muy satisfecha con el servicio."
  },
  {
    name: "José López",
    rating: 5,
    testimonial: "Invertí en mi página web y en menos de una semana ya tenía clientes nuevos. El diseño es atractivo y funciona perfecto con mis anuncios de Facebook."
  },
  {
    name: "Patricia Díaz",
    rating: 5,
    testimonial: "AsistFlowMX transformó mi negocio. Ahora tengo una página profesional que genera confianza en mis clientes. El servicio al cliente es excepcional."
  },
  {
    name: "Miguel Torres",
    rating: 4.5,
    testimonial: "Excelente relación calidad-precio. La página superó mis expectativas y el proceso fue muy sencillo. Ya tengo más clientes gracias a mi presencia online."
  },
  {
    name: "Sofía Hernández",
    rating: 5,
    testimonial: "Mi emprendimiento ahora se ve profesional. La página es responsive y se ve perfecta en todos los dispositivos. Muy recomendado para pequeños negocios."
  },
  {
    name: "Fernando Morales",
    rating: 5,
    testimonial: "Rápido, eficiente y profesional. Me ayudaron desde el inicio hasta el final. La página quedó exactamente como la necesitaba. ¡Excelente trabajo!"
  },
  {
    name: "Gabriela Ruiz",
    rating: 4.5,
    testimonial: "El mejor servicio que he contratado para mi negocio. La página es moderna, funcional y ya está generando resultados. Muy contenta con la inversión."
  },
  {
    name: "Diego Jiménez",
    rating: 5,
    testimonial: "No pensé que fuera tan fácil tener una página web profesional. El equipo fue muy paciente y me explicó todo. Ahora mi negocio tiene mejor presencia online."
  },
  {
    name: "Valeria Castro",
    rating: 5,
    testimonial: "Increíble experiencia. La página quedó hermosa y ya estoy recibiendo consultas diarias. El diseño es moderno y atractivo. Definitivamente lo recomiendo."
  },
  {
    name: "Andrés Vega",
    rating: 4.5,
    testimonial: "Servicio de primera calidad. La página se ve profesional y funciona perfecto. Me ayudaron con todo el proceso y siempre estuvieron disponibles. Excelente!"
  },
  {
    name: "Isabella Mendoza",
    rating: 5,
    testimonial: "Mi página web es el mejor regalo que le pude dar a mi negocio. El diseño es perfecto, el proceso fue rápido y el resultado superó mis expectativas. ¡Gracias!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Reanuda auto-play después de 10 segundos
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <svg className="absolute w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="absolute w-5 h-5 text-yellow-400 overflow-hidden" style={{ width: '50%' }} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Lo que dicen nuestros{' '}
            <span className="text-emerald-600">clientes</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Más de 100 negocios confían en nosotros para tener presencia digital profesional
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor del carrusel */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-8 sm:px-12 py-12 sm:py-16"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    {/* Estrellas */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-slate-600 font-medium">
                        {testimonial.rating}/5
                      </span>
                    </div>

                    {/* Testimonio */}
                    <blockquote className="text-lg sm:text-xl text-slate-700 mb-8 leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Nombre */}
                    <div className="text-slate-900 font-semibold text-lg">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 p-3 rounded-full shadow-lg border border-slate-200 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 p-3 rounded-full shadow-lg border border-slate-200 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Siguiente testimonio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores de puntos */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-emerald-600'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
