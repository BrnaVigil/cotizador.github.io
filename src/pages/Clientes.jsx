import { useEffect, useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });

  const [toast, setToast] = useState({
    show: false,
    mensaje: "",
    color: "bg-green-500",
  });

  // 🔥 Cargar localStorage UNA VEZ
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("clientes"));
      if (data) {
        setClientes(data);
      }
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
    }
  }, []);

  const mostrarToast = (mensaje, color = "bg-green-500") => {
    setToast({ show: true, mensaje, color });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2000);
  };

  const abrirCrear = () => {
    setForm({ nombre: "", correo: "", telefono: "" });
    setEditIndex(null);
    setModalOpen(true);
  };

  const guardarCliente = () => {
    const nuevoCliente = { ...form };

    if (editIndex === null) {
      setClientes((prev) => {
        const nuevos = [...prev, nuevoCliente];

        // 🔥 guardar AQUÍ con datos correctos
        localStorage.setItem("clientes", JSON.stringify(nuevos));

        return nuevos;
      });

      mostrarToast("Cliente creado");
    } else {
      setClientes((prev) => {
        const nuevos = [...prev];
        nuevos[editIndex] = nuevoCliente;

        localStorage.setItem("clientes", JSON.stringify(nuevos));

        return nuevos;
      });

      mostrarToast("Cliente actualizado", "bg-blue-500");
    }

    setForm({ nombre: "", correo: "", telefono: "" });
    setEditIndex(null);
    setModalOpen(false);
  };

  const editarCliente = (i) => {
    setForm(clientes[i]);
    setEditIndex(i);
    setModalOpen(true);
  };

  const eliminarCliente = (i) => {
    if (confirm("¿Eliminar cliente?")) {
      setClientes((prev) => {
        const nuevos = prev.filter((_, index) => index !== i);

        localStorage.setItem("clientes", JSON.stringify(nuevos));

        return nuevos;
      });

      mostrarToast("Cliente eliminado", "bg-red-500");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Clientes</h3>

          <button
            onClick={abrirCrear}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Nuevo Cliente
          </button>
        </div>

        {/* Tabla */}
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-20 p-2 text-center w-[25%]">Nombre</th>
                <th className="px-20 p-2 text-center w-[25%]">Correo</th>
                <th className="px-20 p-2 text-center w-[25%]">Teléfono</th>
                <th className="px-20 p-2 text-center w-[25%]">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {clientes.map((c, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2 text-center">{c.nombre}</td>
                  <td className="p-2 text-center">{c.correo}</td>
                  <td className="p-2 text-center">{c.telefono}</td>
                  <td className="p-2 text-center space-x-2">
                    <button
                      onClick={() => editarCliente(i)}
                      className="bg-yellow-400 px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarCliente(i)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded shadow w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b p-3">
                <h2 className="font-semibold">
                  {editIndex === null ? "Nuevo Cliente" : "Editar Cliente"}
                </h2>
                <button onClick={() => setModalOpen(false)}>✕</button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  guardarCliente();
                }}
                className="p-4 space-y-3"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full border p-2 rounded"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({ ...form, nombre: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Correo"
                  required
                  className="w-full border p-2 rounded"
                  value={form.correo}
                  onChange={(e) =>
                    setForm({ ...form, correo: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  required
                  pattern="[0-9]{10}"
                  className="w-full border p-2 rounded"
                  value={form.telefono}
                  onChange={(e) =>
                    setForm({ ...form, telefono: e.target.value })
                  }
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Toast */}
        {toast.show && (
          <div className="fixed top-5 right-5">
            <div className={`${toast.color} text-white px-4 py-2 rounded shadow`}>
              {toast.mensaje}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}