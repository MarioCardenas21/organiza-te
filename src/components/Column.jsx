import { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ column, allColumns, updateAllColumns }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      description: newTaskDescription.trim(),
    };

    const updatedColumns = allColumns.map((col) =>
      col.id === column.id
        ? { ...col, tasks: [...col.tasks, newTask] }
        : col
    );

    updateAllColumns(updatedColumns);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleEditTask = (updatedTask) => {
    const updatedColumns = allColumns.map((col) =>
      col.id === column.id
        ? {
            ...col,
            tasks: col.tasks.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            ),
          }
        : col
    );
    updateAllColumns(updatedColumns);
  };

  const handleDeleteTask = (taskId) => {
    const updatedColumns = allColumns.map((col) =>
      col.id === column.id
        ? { ...col, tasks: col.tasks.filter((task) => task.id !== taskId) }
        : col
    );
    updateAllColumns(updatedColumns);
  };

  const handleMoveTask = (taskId, targetColumnId) => {
    if (targetColumnId === column.id) return;

    const taskToMove = column.tasks.find((t) => t.id === taskId);
    if (!taskToMove) return;

    const updatedColumns = allColumns.map((col) => {
      if (col.id === column.id) {
        return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
      } else if (col.id === targetColumnId) {
        return { ...col, tasks: [...col.tasks, taskToMove] };
      } else {
        return col;
      }
    });

    updateAllColumns(updatedColumns);
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
          <div key={task.id} className="relative">
            <TaskCard
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
            <div className="flex justify-end mt-1">
              <select
                className="bg-slate-700 text-white text-sm rounded px-2 py-1"
                value={column.id}
                onChange={(e) => handleMoveTask(task.id, e.target.value)}
              >
                {allColumns.map((col) => (
                  <option key={col.id} value={col.id}>
                    Mover a: {col.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
