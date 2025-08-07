import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

export default function TaskCard({ task, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      onDelete(task.id);
    }
  };

  return (
    <>
      <div className="bg-slate-700 rounded-lg shadow p-4 relative group">
        <h4 className="text-white font-semibold text-md mb-1">{task.title}</h4>
        <p className="text-slate-300 text-sm">{task.description}</p>

        {/* Botón editar (hover) */}
        <button
          onClick={() => setShowEdit(true)}
          title="Editar tarea"
          className="absolute top-2 right-8 text-white opacity-0 group-hover:opacity-100 transition"
        >
          ✏️
        </button>

        {/* Botón eliminar (hover) */}
        <button
          onClick={handleDelete}
          title="Eliminar tarea"
          className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition"
        >
          🗑️
        </button>
      </div>

      {/* Modal de edición */}
      {showEdit && (
        <EditTaskModal
          task={task}
          onClose={() => setShowEdit(false)}
          onSave={(updatedTask) => {
            onEdit(updatedTask);
            setShowEdit(false);
          }}
        />
      )}
    </>
  );
}
