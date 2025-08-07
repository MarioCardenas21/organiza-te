import { useState } from 'react';
import ProjectList from './components/ProjectList';
import Board from './components/Board';
import Navbar from './components/Navbar';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleCreateProject = (name) => {
    setProjects([...projects, { id: Date.now().toString(), name, columns: [] }]);
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0c0c0c] text-gray-100 font-sans">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        {!selectedProjectId ? (
          <ProjectList
            projects={projects}
            onCreate={handleCreateProject}
            onSelect={handleSelectProject}
          />
        ) : (
          <Board
            project={selectedProject}
            setProject={(updatedProject) => {
              setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
            }}
            goBack={() => setSelectedProjectId(null)}
          />
        )}
      </main>
    </div>
  );
}

