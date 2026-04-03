import { useEffect, useState } from "react";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
  });

  const [toast, setToast] = useState({
    show: false,
    mensaje: "",
    color: "bg-green-500",
  });

  // Cargar localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(data);
  }, []);

  const mostrarToast = (mensaje, color = "bg-green-500") => {
    setToast({ show: true, mensaje, color });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 2500);
  };

  const abrirCrear = () => {
    setForm({ nombre: "", descripcion: "", precio: "" });
    setEditIndex(null);
    setModalOpen(true);
  };

  const guardarProducto = () => {
    if (!form.nombre || !form.descripcion || !form.precio) {
      mostrarToast("Todos los campos son obligatorios", "bg-red-500");
      return;
    }

    const nuevo = { ...form };

    if (editIndex === null) {
      setProductos((prev) => {
        const nuevos = [...prev, nuevo];
        localStorage.setItem("productos", JSON.stringify(nuevos)); // 🔥 guardar aquí
        return nuevos;
      });

      mostrarToast("Producto agregado correctamente");
    } else {
      setProductos((prev) => {
        const nuevos = [...prev];
        nuevos[editIndex] = nuevo;
        localStorage.setItem("productos", JSON.stringify(nuevos));
        return nuevos;
      });

      mostrarToast("Producto actualizado", "bg-blue-500");
    }

    setForm({ nombre: "", descripcion: "", precio: "" });
    setEditIndex(null);
    setModalOpen(false);
  };

  const editar = (i) => {
    setForm(productos[i]);
    setEditIndex(i);
    setModalOpen(true);
  };

  const eliminar = (i) => {
    if (confirm("¿Eliminar producto?")) {
      setProductos((prev) => {
        const nuevos = prev.filter((_, index) => index !== i);
        localStorage.setItem("productos", JSON.stringify(nuevos));
        return nuevos;
      });

      mostrarToast("Producto eliminado", "bg-red-500");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Productos</h3>

          <div className="space-x-2">
            <button
              onClick={abrirCrear}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Agregar Producto
            </button>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full border">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-20 p-2 text-center w-[30%]">Nombre</th>
                <th className="px-20 p-2 text-center w-[40%]">Descripción</th>
                <th className="px-20 p-2 text-center w-[10%]">Precio</th>
                <th className="px-20 p-2 text-center w-[20%]">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productos.map((p, i) => (
                <tr key={i} className="text-center">
                  <td className="border p-2">{p.nombre}</td>
                  <td className="border p-2">{p.descripcion}</td>
                  <td className="border p-2">${p.precio}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => editar(i)}
                      className="bg-yellow-400 px-2 py-1 rounded text-sm"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminar(i)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm"
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
                  {editIndex === null ? "Nuevo Producto" : "Editar Producto"}
                </h2>
                <button onClick={() => setModalOpen(false)}>✕</button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  guardarProducto();
                }}
                className="p-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  className="w-full border p-2 rounded"
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({ ...form, nombre: e.target.value })
                  }
                />

                <textarea
                  required
                  placeholder="Descripción"
                  className="w-full border p-2 rounded"
                  value={form.descripcion}
                  onChange={(e) =>
                    setForm({ ...form, descripcion: e.target.value })
                  }
                />

                <input
                  type="number"
                  required
                  placeholder="Precio"
                  className="w-full border p-2 rounded"
                  value={form.precio}
                  onChange={(e) =>
                    setForm({ ...form, precio: e.target.value })
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