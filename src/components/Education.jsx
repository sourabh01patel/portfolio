import React from 'react';
import { GraduationCap, BookOpen, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal education in Computer Science Engineering and academic milestones.
          </p>
        </div>

        {/* Education Cards Timeline */}
        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card glass-card">
              <div className="edu-card-top">
                <div className="edu-icon-box">
                  {edu.id === 1 && <GraduationCap size={24} className="text-cyan" />}
                  {edu.id === 2 && <BookOpen size={24} className="text-emerald" />}
                  {edu.id === 3 && <Award size={24} className="text-amber" />}
                </div>

                <div className="edu-grade-badge">
                  <span>{edu.grade}</span>
                </div>
              </div>

              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-field">{edu.field}</h4>

                <div className="edu-institution-box">
                  <span className="edu-institution">{edu.institution}</span>
                </div>

                <div className="edu-meta-list">
                  <div className="edu-meta-item">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="edu-meta-item">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="edu-status-footer">
                  <CheckCircle size={14} className="text-emerald" />
                  <span>{edu.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          width: 100%;
        }

        .education-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 0;
          width: 100%;
        }

        .edu-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edu-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-grade-badge {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--accent-cyan);
          font-weight: 700;
          font-size: 0.875rem;
          font-family: var(--font-code);
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          min-width: 0;
        }

        .edu-degree {
          font-size: clamp(1.1rem, 3vw, 1.25rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          word-break: break-word;
        }

        .edu-field {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .edu-institution-box {
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          display: inline-block;
          margin: 0.25rem 0;
          max-width: 100%;
        }

        .edu-institution {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
          word-break: break-word;
        }

        .edu-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 0.5rem;
        }

        .edu-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .edu-status-footer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: #34d399;
          font-weight: 600;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-color);
          margin-top: 0.5rem;
        }

        @media (max-width: 992px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .education-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
      `}</style>
    </section>
  );
};

export default Education;
