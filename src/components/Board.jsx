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

  const updateAllColumns = (updatedColumns) => {
    setProject({
      ...project,
      columns: updatedColumns,
    });
  };

  return (
    <div className="text-white">
      {/* Encabezado del proyecto */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">{project.name}</h2>
        <button
          onClick={goBack}
          className="bg-slate-700 hover:bg-slate-600 text-sm px-4 py-2 rounded font-medium transition"
        >
          ← Volver a proyectos
        </button>
      </div>

      {/* Agregar columna */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Nueva columna (Ej. En proceso)"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddColumn}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded transition"
        >
          + Añadir columna
        </button>
      </div>

      {/* Listado de columnas */}
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        {project.columns.map((col) => (
          <Column
            key={col.id}
            column={col}
            allColumns={project.columns}
            updateAllColumns={updateAllColumns}
          />
        ))}
      </div>
    </div>
  );
}
