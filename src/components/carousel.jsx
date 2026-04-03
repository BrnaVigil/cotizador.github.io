import React, { useState, useEffect } from 'react';

const Carousel = () => {
  // Array de objetos con imágenes y textos personalizados
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Capacitación en Seguridad Industrial',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661932816149-291a447e3022?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Protege tu equipo, salva vidas',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2014/10/20/15/10/construction-worker-495373_1280.jpg',
      text: 'Cursos prácticos y certificados',
    },
  ];

  // Estado para controlar la diapositiva actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la diapositiva anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Transición automática
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen del carrusel */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        {/* Capa de superposición */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            {slides[currentIndex].text}
          </h1>
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❮ {/* Flecha izquierda */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❯ {/* Flecha derecha */}
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;