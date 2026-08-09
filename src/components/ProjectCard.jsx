import React from 'react';
import { 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const ProjectCard = ({ project, onShowToast }) => {
  const handleActionClick = (type) => {
    onShowToast(`${type} link placeholder for "${project.title}". Ready for repository URL integration.`);
  };

  return (
    <div className="project-card glass-card">
      <div className="project-top">
        <span className="project-badge">{project.badge}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      <p className="project-description">
        {project.description}
      </p>

      {/* Features List */}
      <div className="project-features">
        <ul className="features-list">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx}>
              <CheckCircle2 size={13} className="text-cyan flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Badges */}
      <div className="project-tech-tags">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="project-actions">
        <button 
          onClick={() => handleActionClick('GitHub Repository')}
          className="btn btn-secondary btn-sm"
          title="GitHub Repository (Placeholder)"
        >
          <GithubIcon size={15} />
          <span>GitHub</span>
        </button>

        <button 
          onClick={() => handleActionClick('Live Demo')}
          className="btn btn-outline btn-sm"
          title="Live Demo Preview (Placeholder)"
        >
          <ExternalLink size={15} />
          <span>Live Demo</span>
        </button>
      </div>

      <style>{`
        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .project-top {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .project-badge {
          align-self: flex-start;
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.08);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .project-subtitle {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .project-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-features {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1rem;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .btn-sm {
          padding: 0.55rem 1rem;
          font-size: 0.825rem;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
