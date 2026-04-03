import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTimes } from 'react-icons/fa';

const Servicios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 1,
      title: 'TRABAJOS EN ALTURAS',
      description:
        'Capacitación para realizar trabajos en alturas de forma segura, utilizando técnicas adecuadas de acceso, trabajo y rescate',
      image: 'https://images.unsplash.com/photo-1727097729041-8203da53ecd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: 'NOM-009-STPS-2011',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO ',
      moreInfo2: [
        'MEDIDAS GENERALES DE SEGURIDAD PARA REALIZAR TRABAJOS EN ALTURA SISTEMAS PERSONALES PARA TRABAJOS EN ALTURA ANDAMIOS TIPO TORRE, ESTRUCTURA Y SUSPENDIDOS.',
        'PLATAFORMAS DE ELEVACION ESCALERAS Y REDES PLAN DE RESPUESTA A EMERGENCIAS'
      ]
    },
    {
      id: 2,
      title: 'BLOQUEO DE ENERGÍAS PELIGROSAS (LOTO)',
      description:
        'Procedimiento para bloquear y etiquetar las fuentes de energía peligrosas antes de realizar trabajos de mantenimiento o reparación.                                    ',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: 'NOM-004-STPS-1999 OSHA 1910.147',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'PROGRAMA ESPECIFICO DE SEGURIDAD E HIGIENE PARA OPERACIÓN Y MANTENIMIENTO DE LA MAQUINARIA Y EQUIPO PROTECTORES, DISPOSITIVOS DE SEGURIDAD Y TARJETAS DE AVISO TIPOS DE ENERGIA VALVULAS Y DISPOSITIVOS DE ENCENDIDO.'
      ]
    },
    {
      id: 3,
      title: 'SEGURIDAD EN MANIOBRAS DE IZAJE',
      description:
        'Capacitación sobre cómo realizar operaciones de izaje de manera segura, utilizando equipos adecuados.',
      image: 'https://images.unsplash.com/photo-1684874869373-11321e2ed39f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: 'NOM-006-STPS-2014, OSHA Y NORMAS ASME B30 ',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        ' MANEJO Y ALMACENAMIENTO DE MATERIALES POR MEDIO DEL USO DE MAQUINARIA TIPOS DE GRUA Y EQUIPOS PARA REALIZAR IZAJES MEDIDAS GENERALES DE SEGURIDAD MEDIDAS DE SEGURIDAD EN EL USO DE POLIPASTOS, GRUAS, MONTACARGAS, ESLINGAS, GRILLETES Y ACCESORIOS AUXILIARES PLAN DE IZAJE FUNCIONES DEL OPERADOR DE GRUA, MANIOBRISTA, SUPERVISOR Y APAREJADORES.'
      ]
    },
    {
      id: 4,
      title: 'MANEJO DE DISPOSITIVOS DE ELEVACION',
      description:
        'Capacitación en el uso seguro de dispositivos de elevación para manipular cargas.',
      image: 'https://st2.depositphotos.com/16060054/48144/i/450/depositphotos_481440694-stock-photo-modern-mobile-self-propelled-hydraulic.jpg',
      subtema: 'NOM-009-STPS-2011',
      moreInfo: ' TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        ' TIPOS DE PLATAFORMAS DE ELEVACION COMPONENTES DE LAS PLATAFORMAS DE ELEVACION MEDIDAS DE SEGURIDAD EN EL MANEJO DE PLATAFORMAS DE ELEVACION EPP ESPECIFICO PARA USO DE PLATAFORMAS DE ELEVACION'
      ]
    },
    
    {
      id: 5,
      title: 'CORTE Y SOLDADURA',
      description:
        'Capacitación en herramientas de corte y soldadura para trabajos de ensamblaje de metales.',
      image: 'https://images.pexels.com/photos/2480481/pexels-photo-2480481.jpeg',
      subtema: 'NOM-027-STPS-2008',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'CONDICIONES DE SEGURIDAD E HIGIENE EN LAS ACTIVIDADES DE CORTE Y SOLDADURA METODOS DE CORTE Y SOLDADURA EQUIPO DE PROTECCION PERSONAL ESPECÍFICO PARA LAS DIFERENTES ACTIVIDADES DE CORTE Y SOLDADURA.'
      ]
    },
    {
      id: 6,
      title: 'SEGURIDAD EN OPERACIÓN DE MONTACARGAS',
      description:
        'Capacitación para operar montacargas en diferentes modalidades. (SENTADO, HOMBRE A PIE, PATINETA HIDRAULICA, TODO TERRENO).',
      image: 'https://images.pexels.com/photos/6026765/pexels-photo-6026765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subtema: 'NOM-006-STPS-2014, ANSI-ITSDF B56.1-2020',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'TIPO DE MONTACARGAS, REQUERIMIENTOS PARA LOS MONTACARGAS, MEDIDAS DE SEGURIDAD PARA LA OPERACIÓN DE MONTACARGAS, MEDIDAS DE SEGURIDAD PARA LA REVISIÓN DE MONTACARGAS.'
      ]
    },
    {
      id: 7,
      title: ['SUPERVISOR DE MANIOBRAS','DE IZAJE'],
      description:
        'Persona encargada de la distribución de las responsabilidades dentro del personal de una operación de izaje de cargas.',
      image: 'https://plus.unsplash.com/premium_photo-1681992176275-a1a591dbec58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: 'NOM-006-STPS-2014, ASME B30 Y NORMATIVIDAD OSHA',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'TIPOS DE GRUA, EQUIPOS Y MAQUINARIA PARA REALIZAR IZAJES, TIPOS DE IZAJE, FUNCIONES DEL SUPERVISOR, MANIOBRISTA, OPERADOR Y APAREJADOR EN LOS IZAJES, CALCULO DE IZAJE, CINEMATICA DE IZAJE, CONDICIONES DE SEGURIDAD PARA REALIZAR IZAJES.'
      ]
    },
    {
      id: 8,
      title: 'SEGURIDAD EN  ELEVACION Y CARGAS CON GRUA PORTICO Y ELEVADAS',
      description:
        'Grúas pórtico y elevadas, puente monoriel polipasto móvil con carro.',
      image: 'https://images.unsplash.com/photo-1674558064172-7b6119ebbc41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: 'NOM-006-STPS-2014, OSHA Y NORMAS ASME B30.2 2022 Y B30.16',
      moreInfo: ' TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'MANEJO Y ALMACENAMIENTO DE MATERIALES CON POLIPASTOS Y GRUAS MONORIEL O VIAJERAS.',
        'MEDIDAS GENERALES DE SEGURIDAD MEDIDAS DE SEGURIDAD EN EL USO DE POLIPASTOS, GRUAS VIAJERAS, ESLINGAS, GRILLETES Y ACCESORIOS AUXILIARES, PLAN DE IZAJE'
      ]
    },
    {
      id: 9,
      title: 'SEGURIDAD EN TRABAJOS ELECTRICOS',
      description:
        'Capacitar a los trabajadores para protegerlos contra los riesgos laborales derivados de la operación de maquinaria.',
      image: 'https://plus.unsplash.com/premium_photo-1678766819153-b3f7307c5127?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: ' NOM-029-STPS-2011, NOM-001-SEDE-2012, OSHA 1926 SUBPARTE K Y- NORMA NFPA 70E',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'LAS 5 REGLAS DE ORO PARA REALIZAR TRABAJOS ELECTRICOS, AISLAMIENTO DE ENERGIAS, MEDIDAS DE SEGURIDAD PARA REALIZAR MANTENIMIENTO EN INSTALACIONES ELECTRICAS ENERIZADAS, AEREAS Y SUBTERRANEAS'
      ]
    },
    {
      id: 10,
      title: 'MANEJO A LA DEFENSIVA',
      description:
        'Los participantes comprenderán y aplicarán sus conocimientos teórico prácticos para la correcta conducción.',
      image: 'https://images.unsplash.com/photo-1636012474705-b91610743811?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      subtema: '',
      moreInfo: 'TEMAS PRINCIPALES DEL CURSO',
      moreInfo2: [
        'Los participantes comprenderán y aplicarán sus conocimientos teórico prácticos para la correcta conducción, identificando las prácticas inseguras e inadecuadas, estando a la defensiva en el contexto urbano, con un enfoque  centrado en la Seguridad al manejar su vehículo'
      ]
    },
    // Agrega más servicios con `moreInfo2` como array si lo deseas
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section className="py-36 bg-gray-100" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">
          SERVICIOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover object-center transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center pl-4">{service.title}</h3>
              <p className="mt-2 text-gray-600 mx-4">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="mt-4 w-full button py-2 transition-colors hover:bg-opacity-90"
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full mx-4 bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contenido del texto */}
            <div
              className={`p-6 transform transition-all duration-300 ${
                isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedService?.title}</h3>
              <p className="text-gray-600 mb-4 text-right font-extrabold">{selectedService?.subtema}</p>
              <p className="text-gray-700 font-semibold mb-4">{selectedService?.moreInfo}</p>
              {selectedService?.moreInfo2 && (
                <ul className="text-gray-700 list-disc list-inside mb-6">
                  {selectedService.moreInfo2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <a
                href='https://web.whatsapp.com/send?phone=524191151352&text=Hola%20quiero%20más%20información'
                className="button py-2 px-10 transition-colors"
              >
                Contactar
              </a>
            </div>
            {/* Imagen */}
            <div className="">
              <img
                src={selectedService?.image}
                alt={selectedService?.title}
                className="w-full h-[200px] object-cover object-bottom md:h-[450px] md:object-center md:object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicios;