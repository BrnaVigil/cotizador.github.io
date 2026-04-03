import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaHeart } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
        <footer className='bg-primary px-4 md:px-16 lg:px-28 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-lg font-bold mb-2' >Inicio</h2>
                    <img className='h-28 mb-2 px-2 py-4' src="./img/logo-iniciales.png" alt="" />
                    <p className='text-black'>
                        En DC-3 Cursos de Seguridad Industrial, nos especializamos en capacitar a trabajadores para prevenir riesgos y crear entornos laborales seguros.
                    </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4' >Navegación</h2>
                    <ul>
                        <li className='hover:underline hover:text-slate-950'>
                            <a href="#inicio">INICIO</a>
                        </li>
                        <li className='hover:underline hover:text-slate-950'>
                            <a href="#nosotros">NOSOTROS</a>
                        </li>
                        <li className='hover:underline hover:text-slate-950'>
                            <a href="#servicios">SERVICIOS</a>
                        </li>
                        <li className='hover:underline hover:text-slate-950'>
                            <a href="#contacto">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4' >Siguenos en:</h2>
                    <ul className='flex space-x-4'>

                        <a className='hover:underline hover:text-blue-900 hover:font-semibold my-auto flex items-center' href="https://www.facebook.com/share/1BmDBEhwiU/?mibextid=wwXIfr" target="_blank"  rel="noopener noreferrer">
                            <FaFacebookSquare className='text-[40px] mr-2'/>
                            Facebook
                        </a>

                        <a className='hover:underline hover:text-pink-700 hover:font-semibold my-auto flex items-center' href="">
                            <BsInstagram className='text-[40px] mr-2'/>
                            Instagram
                        </a>
                    </ul>
                    <h2 className='text-lg font-bold mt-2'>Contactanos:</h2>
                    <p>ventas@cursoscsi.com</p>
                    <p>419 115 1352</p>
                </div>
            </div>
            <div className='border-t md:pb-0 pb-16 pt-6 border-gray-300 text-center mt-6'>
                <p>&copy; {new Date().getFullYear()} CSI. Todos los derechos reservados.</p>
                <p className="inline"> 
                Hecho con <FaHeart className="inline text-red-600" /> por{" "} 
                    <a 
                        href={`https://wa.me/5214428070983?text=${encodeURIComponent(
                        `👋 ¡Hola! Vengo de tu sitio web: ${typeof window !== 'undefined' ? window.location.hostname : 'CSI'}. 🚀 Me gustaría recibir más información. ✨`
                        )}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:border-b-2 border-red-600"
                    > 
                        SIITECH 
                    </a> 
                </p>
            </div>
        </footer>
    </>
  )
}

export default Footer;
