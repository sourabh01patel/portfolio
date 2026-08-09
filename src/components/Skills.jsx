import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  "Languages": Code2,
  "Frontend": Layers,
  "Backend": Server,
  "Database": Database,
  "Core Concepts": Cpu,
  "Tools": Wrench,
  "Development Concepts": SlidersHorizontal
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Frontend', 'Backend', 'Database', 'Core Concepts', 'Tools', 'Development Concepts'];

  const filteredCategories = selectedFilter === 'All' 
    ? skillsData 
    : skillsData.filter(cat => cat.category === selectedFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my frontend, backend, database, and computer science competencies.
          </p>

          {/* Filter Bar */}
          <div className="skills-filter-bar">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`skill-filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Categorized Grid */}
        <div className="skills-grid">
          {filteredCategories.map((categoryObj, idx) => {
            const CategoryIcon = categoryIcons[categoryObj.category] || Cpu;
            return (
              <div key={idx} className="skill-category-card glass-card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <CategoryIcon size={18} />
                  </div>
                  <h3 className="category-title">{categoryObj.category}</h3>
                </div>

                <div className="skills-tags-wrapper">
                  {categoryObj.skills.map((skill, sIdx) => (
                    <div key={sIdx} className={`clean-skill-pill ${skill.isCore ? 'core' : ''}`}>
                      <CheckCircle2 size={13} className={skill.isCore ? "text-cyan" : "text-muted"} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .skill-filter-btn {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.825rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .skill-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .skill-filter-btn.active {
          background: rgba(56, 189, 248, 0.1);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          width: 100%;
        }

        .skill-category-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
          width: 100%;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .category-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .category-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .clean-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .clean-skill-pill:hover {
          color: var(--text-primary);
          border-color: var(--border-highlight);
          background: rgba(56, 189, 248, 0.04);
        }

        .clean-skill-pill.core {
          border-color: rgba(56, 189, 248, 0.2);
          color: var(--text-primary);
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-muted { color: var(--text-muted); }

        @media (max-width: 850px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .skill-filter-btn {
            font-size: 0.775rem;
            padding: 0.35rem 0.8rem;
          }
          .clean-skill-pill {
            font-size: 0.8rem;
            padding: 0.35rem 0.65rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
