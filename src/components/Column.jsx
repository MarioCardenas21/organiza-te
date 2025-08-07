import { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ column, updateColumn }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
    };

    const updatedColumn = {
      ...column,
      tasks: [...column.tasks, newTask],
    };

    updateColumn(updatedColumn);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div className="bg-slate-800 rounded-xl shadow-md p-4 w-80 min-w-[300px] flex-shrink-0">
      <h3 className="text-lg font-semibold text-slate-100 mb-4">{column.name}</h3>

      {/* Formulario para nueva tarea */}
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Título"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Descripción"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="w-full px-3 py-2 rounded bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          onClick={handleAddTask}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium transition"
        >
          + Añadir Tarea
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="space-y-3">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}


