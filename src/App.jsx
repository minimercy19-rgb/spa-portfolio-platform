import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './App.css';

const initialProjects = [
  {
    id: '1',
    title: 'WeatherNow',
    description: 'Weather dashboard that displays real-time forecasts, hourly updates, and location-based weather alerts.',
  },
  {
    id: '2',
    title: 'Document Management System',
    description: 'A Document Management System that allows users to upload, organize, search, and securely share files with role-based access control and version tracking.',
  },
  {
    id: '3',
    title: 'Travello',
    description: 'A travel planning app that helps users discover destinations, create itineraries, book accommodations, and share trip experiences with friends.',
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProjectList
          projects={filteredProjects}
          onDeleteProject={handleDeleteProject}
        />
      </main>
    </div>
  );
}

export default App;