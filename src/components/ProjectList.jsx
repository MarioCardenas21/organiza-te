import { useState } from 'react';

export default function ProjectList({ projects, onCreate, onSelect }) {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() === '') return;
    onCreate(projectName.trim());
    setProjectName('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl font-bold text-white text-center mb-8">Mis Proyectos</h1>

      {/* Lista de Proyectos */}
      <div className="grid gap-4 mb-10">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project.id)}
            className="block w-full text-left px-6 py-4 rounded-lg bg-slate-700 hover:bg-slate-600 text-white shadow transition"
          >
            <span className="text-lg font-medium">{project.name}</span>
          </button>
        ))}
      </div>

      {/* Formulario para crear proyecto */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
      >
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Nuevo nombre de proyecto"
          className="flex-1 px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded transition"
        >
          + Crear Proyecto
        </button>
      </form>
    </div>
  );
}
