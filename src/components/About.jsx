import React from 'react';
import { 
  UserCheck, 
  Code, 
  Cpu, 
  CheckCircle, 
  Target, 
  Zap, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate <span className="text-gradient">MERN Stack</span> Developer
          </h2>
          <p className="section-subtitle">
            Building scalable, efficient, and user-friendly web applications with modern JavaScript technologies.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Bio & Focus */}
          <div className="about-bio-card glass-card">
            <h3 className="card-heading">
              <Sparkles size={20} className="text-cyan" />
              <span>Professional Summary</span>
            </h3>

            <p className="bio-text">
              {personalInfo.summary}
            </p>

            <div className="bio-goals">
              <h4 className="goals-heading">
                <Target size={16} className="text-cyan" />
                <span>My Core Focus</span>
              </h4>
              <ul className="goals-list">
                <li>
                  <CheckCircle size={16} className="text-emerald" />
                  <span>Building end-to-end full-stack web applications with React.js, Node.js, Express.js & MongoDB</span>
                </li>
                <li>
                  <CheckCircle size={16} className="text-emerald" />
                  <span>Designing RESTful APIs, clean CRUD workflows, and structured database models</span>
                </li>
                <li>
                  <CheckCircle size={16} className="text-emerald" />
                  <span>Applying strong problem-solving, analytical, and debugging skills to clean code bases</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Quick Stats & Highlights */}
          <div className="about-highlights-col">
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <div className="stat-icon-box">
                  <Code size={22} className="text-cyan" />
                </div>
                <div className="stat-number">6th</div>
                <div className="stat-label">Semester B.Tech CSE</div>
                <div className="stat-sub">Sagar Group, Bhopal</div>
              </div>

              <div className="stat-card glass-card">
                <div className="stat-icon-box">
                  <Zap size={22} className="text-emerald" />
                </div>
                <div className="stat-number">MERN</div>
                <div className="stat-label">Full Stack Trainee</div>
                <div className="stat-sub">Codewave Solution</div>
              </div>

              <div className="stat-card glass-card">
                <div className="stat-icon-box">
                  <Cpu size={22} className="text-indigo" />
                </div>
                <div className="stat-number">4+</div>
                <div className="stat-label">Core Projects</div>
                <div className="stat-sub">Full Stack Applications</div>
              </div>

              <div className="stat-card glass-card">
                <div className="stat-icon-box">
                  <Award size={22} className="text-amber" />
                </div>
                <div className="stat-number">7.0</div>
                <div className="stat-label">Current CGPA</div>
                <div className="stat-sub">Computer Science</div>
              </div>
            </div>

            {/* Core Competencies Badges */}
            <div className="competencies-card glass-card">
              <h4 className="competencies-title">Key Competencies</h4>
              <div className="competencies-tags">
                {aboutData.coreStack.map((stackItem, idx) => (
                  <span key={idx} className="tech-tag">
                    {stackItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: start;
        }

        .about-bio-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .bio-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .bio-goals {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
        }

        .goals-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .goals-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .goals-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .goals-list svg {
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* Right Stats Grid */
        .about-highlights-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .stat-sub {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .competencies-card {
          padding: 1.5rem;
        }

        .competencies-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .competencies-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .text-indigo { color: #6366f1; }
        .text-amber { color: #f59e0b; }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
