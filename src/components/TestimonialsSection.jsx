import React, { useState, useEffect } from 'react';

/**
 * Componente: Sección de Testimonios
 * Single Responsibility: Solo renderiza el carrusel de testimonios
 */

const TESTIMONIALS = [
  {
    name: "María González",
    business: "Panadería Artesanal",
    rating: 5,
    testimonial: "La página quedó lista en 3 días exactos. Ahora recibo 5-8 pedidos diarios por WhatsApp que antes no tenía. La inversión se pagó sola en el primer mes. ¡Vale totalmente la pena!",
    avatar: "MG"
  },
  {
    name: "Carlos Ramírez",
    business: "Taller Mecánico",
    rating: 5,
    testimonial: "No tenía idea de cómo hacer una página web. El equipo me explicó todo paso a paso y me ayudaron a subirla. Ahora mis clientes me encuentran en Google y me llaman directo. Increíble.",
    avatar: "CR"
  },
  {
    name: "Ana Martínez",
    business: "Boutique de Ropa",
    rating: 4.5,
    testimonial: "El diseño es moderno y se adapta perfecto a mi estilo. La atención fue excelente, aunque tardaron un día más de lo prometido (pero valió la pena). El precio es justo para lo que recibes.",
    avatar: "AM"
  },
  {
    name: "Roberto Sánchez",
    business: "Restaurante Local",
    rating: 5,
    testimonial: "Mi restaurante ahora tiene menú online y los clientes pueden ver fotos de nuestros platillos. La página carga súper rápido en el celular y ya tengo reservaciones por WhatsApp. Totalmente recomendado.",
    avatar: "RS"
  },
  {
    name: "Laura Fernández",
    business: "Salón de Belleza",
    rating: 4.5,
    testimonial: "Proceso rápido y sin complicaciones. Me entregaron todo listo y me orientaron para subirlo a Vercel (que es gratis). Ahora muestro mi trabajo y recibo citas por WhatsApp todos los días.",
    avatar: "LF"
  },
  {
    name: "José López",
    business: "Servicios de Plomería",
    rating: 5,
    testimonial: "Invertí $2,200 y en menos de una semana ya tenía 3 clientes nuevos que me encontraron en Google. La página funciona perfecto con mis anuncios de Facebook. ROI inmediato.",
    avatar: "JL"
  },
  {
    name: "Patricia Díaz",
    business: "Gimnasio Local",
    rating: 5,
    testimonial: "Transformaron mi negocio completamente. Antes solo tenía Facebook, ahora tengo una página profesional que genera confianza. Mis nuevos clientes dicen que se ve muy seria la operación.",
    avatar: "PD"
  },
  {
    name: "Miguel Torres",
    business: "Ferretería",
    rating: 4.5,
    testimonial: "Excelente relación calidad-precio. La página superó mis expectativas. El único detalle es que tuve que aprender a subirla yo mismo, pero me dieron instrucciones claras. Ya tengo más clientes.",
    avatar: "MT"
  },
  {
    name: "Sofía Hernández",
    business: "Clases de Yoga",
    rating: 5,
    testimonial: "Mi emprendimiento ahora se ve profesional. La página es responsive y se ve perfecta en todos los dispositivos. Mis alumnos me dicen que se ve muy bonita. Muy recomendado para pequeños negocios.",
    avatar: "SH"
  },
  {
    name: "Fernando Morales",
    business: "Servicios de Limpieza",
    rating: 5,
    testimonial: "Rápido, eficiente y profesional. Me ayudaron desde el inicio hasta el final, incluso me explicaron cómo conseguir un dominio barato. La página quedó exactamente como la necesitaba.",
    avatar: "FM"
  },
  {
    name: "Gabriela Ruiz",
    business: "Consultoría Nutricional",
    rating: 4.5,
    testimonial: "El mejor servicio que he contratado para mi negocio. La página es moderna y funcional. Ya está generando resultados - tengo 3 consultas nuevas esta semana. Muy contenta con la inversión.",
    avatar: "GR"
  },
  {
    name: "Diego Jiménez",
    business: "Tienda de Mascotas",
    rating: 5,
    testimonial: "No pensé que fuera tan fácil tener una página web profesional. El equipo fue muy paciente con todas mis preguntas. Ahora mi negocio tiene mejor presencia online y más clientes.",
    avatar: "DJ"
  },
  {
    name: "Valeria Castro",
    business: "Fotografía de Eventos",
    rating: 5,
    testimonial: "Increíble experiencia. La página quedó hermosa y muestra mi portafolio perfectamente. Ya estoy recibiendo consultas diarias por WhatsApp. El diseño es moderno y atractivo. Definitivamente lo recomiendo.",
    avatar: "VC"
  },
  {
    name: "Andrés Vega",
    business: "Servicios de Jardinería",
    rating: 4.5,
    testimonial: "Servicio de primera calidad. La página se ve profesional y funciona perfecto. Me ayudaron con todo el proceso y siempre estuvieron disponibles para resolver dudas. Excelente atención al cliente.",
    avatar: "AV"
  },
  {
    name: "Isabella Mendoza",
    business: "Pastelería Casera",
    rating: 5,
    testimonial: "Mi página web es el mejor regalo que le pude dar a mi negocio. El diseño es perfecto, el proceso fue rápido (72 horas exactas) y el resultado superó mis expectativas. ¡Gracias por hacerlo tan fácil!",
    avatar: "IM"
  }
];

// Función para generar color de avatar basado en iniciales
const getAvatarColor = (initials) => {
  const colors = [
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-indigo-500',
    'bg-teal-500'
  ];
  const index = initials.charCodeAt(0) % colors.length;
  return colors[index];
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  // Funciones para swipe en mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
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
          <div 
            className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-6 sm:px-12 py-10 sm:py-16"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 ${getAvatarColor(testimonial.avatar)} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                    </div>

                    {/* Estrellas */}
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-slate-600 font-medium text-sm">
                        {testimonial.rating}/5
                      </span>
                    </div>

                    {/* Testimonio */}
                    <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed px-2">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Nombre y negocio */}
                    <div>
                      <div className="text-slate-900 font-semibold text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación - Solo visibles en desktop */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 p-3 rounded-full shadow-lg border border-slate-200 transition-all duration-200 hover:scale-110 z-10 items-center justify-center"
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 p-3 rounded-full shadow-lg border border-slate-200 transition-all duration-200 hover:scale-110 z-10 items-center justify-center"
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
