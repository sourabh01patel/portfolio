import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  ChevronRight,
  Code
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Work Experience</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on full-stack trainee experience developing real-world MERN applications and API integrations.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>

              <div className="timeline-content glass-card">
                <div className="exp-top-bar">
                  <div className="exp-role-info">
                    <span className="exp-badge">Trainee Program</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-box">
                      <Building2 size={16} className="text-cyan" />
                      <span className="exp-company">{exp.company}</span>
                    </div>
                  </div>

                  <div className="exp-meta-info">
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-details">
                  <h4 className="details-title">Key Responsibilities & Achievements:</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <ChevronRight size={16} className="text-cyan resp-arrow" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="exp-tech-stack">
                  <div className="stack-label">
                    <Code size={14} />
                    <span>Technologies Used:</span>
                  </div>
                  <div className="stack-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          width: 100%;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 1.5rem;
          position: relative;
          width: 100%;
        }

        .timeline-content {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 0;
          width: 100%;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1.5rem;
        }

        .marker-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-cyan);
          box-shadow: 0 0 15px var(--accent-cyan);
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--accent-cyan), rgba(56, 189, 248, 0.05));
          margin-top: 0.5rem;
        }

        .exp-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .exp-role-info {
          min-width: 0;
        }

        .exp-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
          margin-bottom: 0.4rem;
        }

        .exp-role {
          font-size: clamp(1.2rem, 3.5vw, 1.5rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          word-break: break-word;
        }

        .exp-company-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.35rem;
          flex-wrap: wrap;
        }

        .exp-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .exp-meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          align-items: flex-end;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .details-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .responsibilities-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .resp-arrow {
          margin-top: 3px;
          flex-shrink: 0;
        }

        .exp-tech-stack {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .stack-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .timeline-item {
            grid-template-columns: 1fr;
          }
          .timeline-marker {
            display: none;
          }
          .timeline-content {
            padding: 1.5rem;
          }
          .exp-top-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .exp-meta-info {
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .timeline-content {
            padding: 1.25rem;
          }
          .responsibilities-list li {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
