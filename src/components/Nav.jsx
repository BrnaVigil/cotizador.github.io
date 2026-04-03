import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 ${
      isActive ? "bg-white text-black" : "hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-800 text-white print:hidden text-center">
      
      <div className="flex justify-between items-center p-4 mx-auto">
        <span className="font-bold mx-auto">Sistema</span>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <div className={`
        flex-col md:flex md:flex-row md:gap-4 md:px-4 pb-4 md:pb-0
        ${open ? "flex" : "hidden"}
      `}>
        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Inicio</NavLink>
        <NavLink to="/clientes" className={linkClass} onClick={() => setOpen(false)}>Clientes</NavLink>
        <NavLink to="/productos" className={linkClass} onClick={() => setOpen(false)}>Productos</NavLink>
        <NavLink to="/cotizaciones" className={linkClass} onClick={() => setOpen(false)}>Cotizaciones</NavLink>
        <NavLink to="/reportes" className={linkClass} onClick={() => setOpen(false)}>Reportes</NavLink>
      </div>

    </nav>
  );
}

export default Nav;