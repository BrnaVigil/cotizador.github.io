import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "524191151352"; // Reemplaza con tu número real
  const message = "Gracias por contactar a CSI, ¿¿como podemos ayudarte??";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Mostrar el texto al cargar la página con un pequeño retraso
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Aparece después de 0.5 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed 
        bottom-4
        right-4
        bg-gradient-to-r 
        from-green-500 
        to-green-600 
        text-white 
        p-4 
        rounded-full 
        shadow-xl 
        hover:shadow-2xl 
        transition-all 
        duration-300 
        z-50 
        flex 
        items-center 
        justify-center
      `}
    >
      <FaWhatsapp size={34} className="relative z-10" />
      
      {/* Texto visible por defecto */}
      <span
        className={`
          absolute 
          right-full 
          mr-3 
          bg-white
          text-gray-900 
          text-xl
          font-medium 
          py-2 
          px-4 
          rounded-se-lg
          rounded-l-lg
          whitespace-nowrap
          transition-all 
          duration-500
          transform
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
        `}
      >
        <span className="inline-flex items-center">
          Chatea con nosotros
          <span className="ml-2 inline-flex">
            <span className="animate-typing text-green-400">.</span>
            <span className="animate-typing delay-150 text-green-400">.</span>
            <span className="animate-typing delay-300 text-green-400">.</span>
          </span>
        </span>
      </span>
    </a>
  );
};

export default Whatsapp;