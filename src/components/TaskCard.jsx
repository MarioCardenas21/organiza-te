import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm cursor-grab hover:shadow-md transition duration-200"
    >
      <h4 className="font-semibold text-indigo-700 text-sm mb-1">{task.title}</h4>
      <p className="text-sm text-slate-700">{task.description}</p>
    </div>
  );
}
