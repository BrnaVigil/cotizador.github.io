import { useEffect, useState } from "react";
import CotizacionTabla from "./Cotizaciones";

export default function CotizacionPage() {
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const [numCotizacion, setNumCotizacion] = useState("");
  const [fecha, setFecha] = useState("");

  // Cargar clientes
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("clientes")) || [];
    setClientes(data);

    if (data.length === 0) {
      alert("No hay clientes en localStorage");
    }
  }, []);

  // Generar cotización
  useEffect(() => {
    const f = new Date();

    const yy = String(f.getFullYear()).slice(-2);
    const mm = String(f.getMonth() + 1).padStart(2, "0");
    const dd = String(f.getDate()).padStart(2, "0");
    const hh = String(f.getHours()).padStart(2, "0");
    const min = String(f.getMinutes()).padStart(2, "0");

    setNumCotizacion(`REP-${yy}${mm}${dd}-${hh}${min}`);

    setFecha(
      f.toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const seleccionarCliente = (index) => {
    const c = clientes[index];
    setClienteSeleccionado(c);
  };

  const guardarPDF = () => {
    const tituloOriginal = document.title;
    document.title = numCotizacion;
    window.print();
    document.title = tituloOriginal;
  };

  return (
    <div className="md:px-48 px-6 print:px-14 print:p-6">

      {/* BOTONES */}
      <div className="text-center mb-4 print:hidden">
        <button
          onClick={guardarPDF}
          className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        >
          Guardar PDF
        </button>
      </div>

      {/* HEADER */}
      <div className="mx-5">
        <table className="w-full font-bold">
          <tbody>
            <tr>
              <td rowSpan="3" className="md:w-40 w-24 print:w-40">
                <img
                  src="./img/siitech rojo - negro.png"
                  className="w-36 mx-auto"
                  alt="Logo"
                />
              </td>
              <td className="text-right text-xl" colSpan="2">
                REPORTE DE SERVICIO
              </td>
            </tr>

            <tr>
              <td
                colSpan="2"
                className="text-center text-base md:text-2xl print:text-2xl leading-tight"
              >
                SISTEMAS INTEGRALES INFORMÁTICOS <br />
                & SERVICIO TECNICO
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CONTENIDO */}
      <div className="mt-4">

        {/* GRID 2 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4">

          {/* IZQUIERDA */}
          <div className="text-left">
            <h4 className="font-bold">{numCotizacion}</h4>
            <p>{fecha}</p>

            <h3 className="mt-4 print:hidden">Buscar Cliente</h3>

            <div className="mt-2 print:hidden">
              <label>Seleccionar cliente</label>
              <select
                className="w-full border p-2 rounded"
                onChange={(e) => seleccionarCliente(e.target.value)}
              >
                <option value="">-- Selecciona un cliente --</option>
                {clientes.map((c, i) => (
                  <option key={i} value={i}>
                    {c.nombre}
                  </option>
                ))}
              </select>
            </div>

            <hr className="my-3 print:hidden" />

            {/* FORMATO TEXTO */}
            <div className="space-y-1 mt-5">
              <p><span className="font-semibold">Nombre:</span> {clienteSeleccionado?.nombre || ""}</p>
              <p><span className="font-semibold">Correo:</span> {clienteSeleccionado?.correo || ""}</p>
              <p><span className="font-semibold">Teléfono:</span> {clienteSeleccionado?.telefono || ""}</p>
            </div>
          </div>

          {/* DERECHA */}
          <div className="text-right">
            <h4 className="font-bold">EMPRESA</h4>
            <p>PASEO DE LAS CAMPANAS 104-8B, 76116</p>
            <p>SANTA ANA, EX HACIENDA SANTANA</p>
            <p>QUERÉTARO, QRO.</p>
            <p>442 807 09 83</p>
            <p>bernavigilw@gmail.com</p>
          </div>

        </div>
      </div>

      {/* Observaciones */}
      <div className="mt-4">
        <label className="font-bold">Observaciones:</label>
        <textarea
          className="w-full border-0 p-2 rounded resize-none print:placeholder-transparent"
          rows="2"
          placeholder="Escribe tus notas..."
        />
      </div>

      {/* TABLA (ANTES ERA IFRAME) */}
      <CotizacionTabla />

    </div>
  );
}