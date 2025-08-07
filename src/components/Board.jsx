import { useState } from 'react';
import Column from './Column';

export default function Board({ project, setProject, goBack }) {
  const [newColumnName, setNewColumnName] = useState('');

  const handleAddColumn = () => {
    if (newColumnName.trim() === '') return;

    const newColumn = {
      id: Date.now().toString(),
      name: newColumnName,
      tasks: [],
    };

    setProject({
      ...project,
      columns: [...project.columns, newColumn],
    });

    setNewColumnName('');
  };

  const updateColumn = (updatedColumn) => {
    const updatedColumns = project.columns.map((col) =>
      col.id === updatedColumn.id ? updatedColumn : col
    );

    setProject({
      ...project,
      columns: updatedColumns,
    });
  };

  return (
    <div className="text-white">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{project.name}</h2>
        <button
          onClick={goBack}
          className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm font-medium"
        >
          ← Volver
        </button>
      </div>

      {/* Formulario para agregar columna */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Nombre de columna (Ej. En Proceso)"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddColumn}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
        >
          + Añadir columna
        </button>
      </div>

      {/* Columnas */}
      <div className="flex overflow-x-auto gap-6 pb-4">
        {project.columns.map((col) => (
          <Column key={col.id} column={col} updateColumn={updateColumn} />
        ))}
      </div>
    </div>
  );
}
