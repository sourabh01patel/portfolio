import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = ({ onShowToast }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'MERN Stack', 'Authentication', 'Utilities'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Full-Stack <span className="text-gradient">MERN Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications built with React.js, Node.js, Express.js, and MongoDB featuring RESTful APIs and clean architecture.
          </p>

          {/* Filter Bar */}
          <div className="projects-filter-bar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`project-filter-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid-2 projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onShowToast={onShowToast} 
            />
          ))}
        </div>
      </div>

      <style>{`
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .project-filter-btn {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .project-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .project-filter-btn.active {
          background: rgba(56, 189, 248, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          font-weight: 600;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
        }

        .projects-grid {
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
