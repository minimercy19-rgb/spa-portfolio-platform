import ProjectCard from './ProductCard';

function ProjectList({ projects, onDeleteProject }) {
  if (projects.length === 0) {
    return <p className="empty-message">No projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDeleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;