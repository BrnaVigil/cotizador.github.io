import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numeroWhatsApp = '5214191151352'; // ← TU NÚMERO

    const texto = `
Hola, me gustaría más información:

👤 Nombre: ${formData.nombre}
📧 Correo: ${formData.email}
📞 Teléfono: ${formData.telefono}
📝 Mensaje: ${formData.mensaje}
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="py-32 bg-gray-100" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Contáctanos
        </h2>
        <p className='text-center mb-8'>Ingresa tus datos y pronto nos pondremos en contacto.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white p-6 shadow-lg">
            <form data-aos="fade-right" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Nombre</label>
                <input
                  required
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Correo</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border"
                  placeholder="tu@correo.com"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">Teléfono</label>
                <input
                  required
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border"
                  placeholder="+52..."
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Mensaje</label>
                <textarea
                  required
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border resize-y"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full button py-2 font-semibold"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Imagen */}
          <div className="w-full">
            <img
              data-aos="fade-up-right"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Contacto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
