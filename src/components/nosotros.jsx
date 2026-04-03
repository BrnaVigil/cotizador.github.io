import React, { useEffect } from 'react';
import AOS from 'aos'; // Importación correcta del módulo
import 'aos/dist/aos.css'; // Importación del archivo CSS

const AcercaDeNosotros = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos (opcional)
      once: true, // La animación ocurre solo una vez al hacer scroll (opcional)
    });
  }, []); // Array vacío para que se ejecute solo al montar el componente
  // URL de la imagen desde internet
  const imagenDesdeInternet = 'https://images.unsplash.com/photo-1684874869373-11321e2ed39f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <section className="w-full py-36 bg-gray-100" id='nosotros'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Acerca de Nosotros
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Somos un equipo apasionado comprometido con ofrecer soluciones innovadoras y de calidad.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Conocenos
            </h3>
            <p className="text-gray-600 leading-relaxed">
              En DC-3 Cursos de Seguridad Industrial, nos especializamos en capacitar a trabajadores para prevenir riesgos y crear entornos laborales seguros.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Ofrecemos cursos como Trabajos en Alturas, Bloqueo de Energías Peligrosas (LOTO), Seguridad en Maniobras de Izaje, Manejo de Dispositivos de Elevación, Corte y Soldadura, Seguridad en Operación de Montacargas, Supervisor de Maniobras de Izaje, Seguridad en Elevación de Cargas, Seguridad en Trabajos Eléctricos y Manejo a la Defensiva, alineados a normativas vigentes, con el fin de promover una cultura de seguridad efectiva.
            </p>
          </div>

          {/* Imagen desde internet */}
          <div className="relative" data-aos="zoom-in-down">
            <img
              src={imagenDesdeInternet}
              alt="Equipo trabajando"
              className="w-full h-64 md:h-96 rounded-lg shadow-lg object-cover object-center"
            />
          </div>
        </div>

        {/* Valores o estadísticas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div data-aos="flip-up">
            <h4 className="text-6xl font-bold text-primary">5+</h4>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div data-aos="flip-up">
            <h4 className="text-6xl font-bold text-primary">50+</h4>
            <p className="text-gray-600">Proyectos completados</p>
          </div>
          <div data-aos="flip-up">
            <h4 className="text-6xl font-bold text-primary">100%</h4>
            <p className="text-gray-600">Satisfacción del cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeNosotros;