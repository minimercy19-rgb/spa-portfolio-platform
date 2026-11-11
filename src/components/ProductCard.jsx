import { useState } from 'react';

function ProjectCard({ project, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const MAX_LENGTH = 20;
  const isLong = project.description.length > MAX_LENGTH;

  const displayText = isExpanded || !isLong
    ? project.description
    : project.description.slice(0, MAX_LENGTH) + '...';

  const handleDelete = () => {
    onDelete(project.id);
    setShowConfirm(false);
  };

  return (
    <>
      <div className="project-card">
        <button
          className="btn-delete"
          onClick={() => setShowConfirm(true)}
          aria-label="Delete project"
        >
          X
        </button>

        <div className="project-content">
          <h3>{project.title}</h3>
          <p>
            {displayText}
            {isLong && (
              <button
                className="btn-readmore"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? ' Show less' : ' Read more'}
              </button>
            )}
          </p>
        </div>
      </div>

      
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Project?</h3>
            <p>
              Are you sure you want to delete <strong>{project.title}</strong>?
              This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className="btn-confirm-delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;