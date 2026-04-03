import { useEffect, useState } from "react";

export default function Cotizacion() {
  const [productos, setProductos] = useState([]);
  const [filas, setFilas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    mensaje: "",
    color: "bg-green-500",
  });

  // cargar productos
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(data);
  }, []);

  const formato = (num) => {
    return "$" + parseFloat(num || 0).toFixed(2);
  };

  const mostrarToast = (mensaje, color = "bg-green-500") => {
    setToast({ show: true, mensaje, color });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2000);
  };

  const agregarFila = () => {
    if (productos.length === 0) {
      mostrarToast("No hay productos guardados", "bg-red-500");
      return;
    }

    setFilas((prev) => [
      ...prev,
      {
        productoIndex: "",
        descripcion: "",
        precio: 0,
        cantidad: 1,
        total: 0,
      },
    ]);

    mostrarToast("Producto agregado");
  };

  const actualizarFila = (index, campo, valor) => {
    const nuevas = [...filas];
    nuevas[index][campo] = valor;

    if (campo === "productoIndex") {
      const p = productos[valor];
      if (p) {
        nuevas[index].descripcion = p.descripcion;
        nuevas[index].precio = parseFloat(p.precio);
      }
    }

    // calcular total fila
    const precio = nuevas[index].precio || 0;
    const cantidad = nuevas[index].cantidad || 1;
    nuevas[index].total = precio * cantidad;

    setFilas(nuevas);
  };

  const eliminarFila = (index) => {
    if (confirm("¿Vas a quitar este producto?")) {
      const nuevas = filas.filter((_, i) => i !== index);
      setFilas(nuevas);
      mostrarToast("Producto eliminado", "bg-red-500");
    }
  };

  const limpiarTabla = () => {
    setFilas([]);
    mostrarToast("Tabla limpia", "bg-yellow-500");
  };

  const subtotal = filas.reduce((acc, f) => acc + f.total, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div className="md:p-6 p-0 print:p-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">

        <h3 className="text-xl font-bold print:hidden">Cotización</h3>

        <div className="flex w-full sm:w-auto gap-2 print:hidden">

          <button
            onClick={agregarFila}
            className="bg-blue-500 text-white py-2 px-2 rounded w-1/2 sm:w-auto"
          >
            Agregar Producto
          </button>

          <button
            onClick={limpiarTabla}
            className="bg-red-500 text-white py-2 px-2 rounded w-1/2 sm:w-auto"
          >
            Limpiar
          </button>

        </div>
      </div>

      {/* TABLA */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full text-center border text-xs">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-10 md:px-0 print:px-0 p-2 border w-[20%]">Producto</th>
              <th className="px-24 md:px-0 print:px-0 p-2 border w-[50%]">Descripción</th>
              <th className="px-10 md:px-0 print:px-0 p-2 border w-[10%]">Precio</th>
              <th className="px-10 md:px-0 print:px-0 p-2 border w-[10%]">Cant.</th>
              <th className="px-10 md:px-0 print:px-0 p-2 border w-[10%]">Total</th>
              <th className="px-10 md:px-0 print:px-0 p-2 border print:hidden">Acción</th>
            </tr>
          </thead>

          <tbody className="border-l-0 border-r-0">
            {filas.map((fila, i) => (
              <tr key={i}>
                <td className="border border-l-0 border-r-0">
                  <select
                    className="appearance-auto print:appearance-none w-full border-0 text-center"
                    value={fila.productoIndex}
                    onChange={(e) =>
                      actualizarFila(i, "productoIndex", e.target.value)
                    }
                  >
                    <option value="">Seleccionar</option>
                    {productos.map((p, index) => (
                      <option key={index} value={index}>
                        {p.nombre}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="border border-l-0 border-r-0">{fila.descripcion}</td>
                <td className="border border-l-0 border-r-0">{formato(fila.precio)}</td>

                <td className="border border-l-0 border-r-0">
                  <input
                    type="number"
                    min="1"
                    value={fila.cantidad}
                    className="w-full text-center border-0"
                    onChange={(e) =>
                      actualizarFila(i, "cantidad", e.target.value)
                    }
                  />
                </td>

                <td className="border border-l-0 border-r-0">{formato(fila.total)}</td>

                <td className="border border-l-0 border-r-0 print:hidden">
                  <button
                    onClick={() => eliminarFila(i)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TOTALES */}
      <div className="flex justify-end mt-4">
        <div className="w-72 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formato(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>IVA (16%):</span>
            <span>{formato(iva)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>{formato(total)}</span>
          </div>
        </div>
      </div>

      {/* NOTAS */}
      <div className="mt-4">
        <label className="font-bold">Notas:</label>
        <textarea
          className="w-full border-0 p-2 rounded resize-none print:placeholder-transparent"
          rows="3"
          placeholder="Escribe tus notas..."
        />
      </div>

      {/* TOAST */}
      {toast.show && (
        <div className="fixed top-5 right-5">
          <div className={`${toast.color} text-white px-4 py-2 rounded shadow`}>
            {toast.mensaje}
          </div>
        </div>
      )}
    </div>
  );
}