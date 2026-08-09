import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, aboutData, skillsData, experienceData, projectsData, educationData, extraCurricularData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="modal-top-bar no-print">
          <div className="modal-title">
            <span>ATS Resume Preview — Sourabh Patel</span>
          </div>

          <div className="modal-actions">
            <button 
              onClick={handlePrint} 
              className="btn btn-primary btn-sm"
              title="Print or Save Resume as PDF"
            >
              <Printer size={16} />
              <span>Print / Download PDF</span>
            </button>

            <button 
              onClick={onClose} 
              className="btn-icon"
              title="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable ATS Document Sheet */}
        <div className="resume-paper" id="printable-resume">
          {/* Resume Header */}
          <header className="resume-header">
            <h1 className="r-name">{personalInfo.name}</h1>
            <p className="r-titles">MERN Stack Developer • Full Stack Developer • React.js Developer</p>
            
            <div className="r-contact-row">
              <span>{personalInfo.email}</span>
              <span className="sep">•</span>
              <span>{personalInfo.phone}</span>
              <span className="sep">•</span>
              <span>linkedin.com/in/sourabhpatel01</span>
              <span className="sep">•</span>
              <span>{personalInfo.location}</span>
            </div>
          </header>

          <hr className="r-divider" />

          {/* Professional Summary */}
          <section className="r-section">
            <h2 className="r-heading">Professional Summary</h2>
            <p className="r-text">{personalInfo.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="r-section">
            <h2 className="r-heading">Technical Skills / Technologies</h2>
            <ul className="r-skills-list">
              <li><strong>Languages:</strong> JavaScript, HTML5, CSS3</li>
              <li><strong>Frontend Technologies:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, React Hooks, Responsive Web Design</li>
              <li><strong>Backend Technologies:</strong> Node.js, Express.js, RESTful APIs</li>
              <li><strong>Database:</strong> MongoDB, Mongoose</li>
              <li><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), Asynchronous Programming, Promises, Async/Await, DOM Manipulation, Event Handling, JSON</li>
              <li><strong>Frameworks & Tools:</strong> React.js, Express.js, Node.js, Git, GitHub, VS Code, Postman, npm</li>
              <li><strong>Concepts:</strong> REST APIs, CRUD Operations, MVC Architecture, Authentication, Authorization, JWT, API Integration, Responsive Design, Debugging</li>
            </ul>
          </section>

          {/* Experience */}
          <section className="r-section">
            <h2 className="r-heading">Experience</h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="r-exp-item">
                <div className="r-item-header">
                  <div>
                    <strong className="r-role">{exp.role}</strong>
                    <span className="r-company"> — {exp.company}, {exp.location}</span>
                  </div>
                </div>

                <ul className="r-bullet-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <p className="r-tech-used">
                  <strong>Technologies:</strong> {exp.technologies.join(', ')}
                </p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="r-section">
            <h2 className="r-heading">Projects</h2>
            {projectsData.map((proj) => (
              <div key={proj.id} className="r-proj-item">
                <div className="r-item-header">
                  <strong className="r-proj-title">{proj.title}</strong>
                  <span className="r-proj-tech">
                    {proj.technologies.join(' — ')}
                  </span>
                </div>
                <ul className="r-bullet-list">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="r-section">
            <h2 className="r-heading">Education</h2>
            <div className="r-edu-list">
              {educationData.map((edu) => (
                <div key={edu.id} className="r-edu-row">
                  <div>
                    <strong>{edu.degree} ({edu.field})</strong>
                    <div className="r-subtext">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="r-edu-right">
                    <strong>{edu.grade}</strong>
                    <div className="r-subtext">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Extra-Curricular Activities */}
          <section className="r-section">
            <h2 className="r-heading">Extra-Curricular Activities</h2>
            <ul className="r-bullet-list">
              <li>Regularly share educational content on Java and DSA on social platforms.</li>
              <li>Participate in coding challenges and online programming contests.</li>
              <li>Actively engage in community events and technical blogging.</li>
              <li>Continuously improve Java Backend Development and Problem-Solving skills.</li>
            </ul>
          </section>
        </div>
      </div>

      <style>{`
        .resume-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .resume-modal-content {
          background: #0f172a;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          overflow: hidden;
        }

        .modal-top-bar {
          background: #090d16;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-title {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .resume-paper {
          background: #ffffff;
          color: #1e293b;
          padding: 3rem;
          overflow-y: auto;
          font-family: 'Times New Roman', Georgia, serif;
          line-height: 1.45;
          font-size: 10.5pt;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 0.75rem;
        }

        .r-name {
          font-size: 20pt;
          font-weight: bold;
          letter-spacing: 1px;
          color: #0f172a;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
        }

        .r-titles {
          font-size: 10pt;
          font-style: italic;
          color: #334155;
          margin-bottom: 0.4rem;
        }

        .r-contact-row {
          font-size: 9pt;
          color: #475569;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .sep { color: #94a3b8; }

        .r-divider {
          border: 0;
          border-top: 1px solid #cbd5e1;
          margin: 0.75rem 0 1rem;
        }

        .r-section {
          margin-bottom: 1rem;
        }

        .r-heading {
          font-size: 12pt;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 1px solid #94a3b8;
          padding-bottom: 2px;
          margin-bottom: 0.5rem;
          color: #0f172a;
        }

        .r-text {
          font-size: 10pt;
          color: #334155;
          text-align: justify;
        }

        .r-skills-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 9.5pt;
          color: #334155;
        }

        .r-exp-item, .r-proj-item {
          margin-bottom: 0.75rem;
        }

        .r-item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .r-role, .r-proj-title {
          font-size: 10.5pt;
          color: #0f172a;
        }

        .r-company {
          font-style: italic;
          color: #334155;
        }

        .r-proj-tech {
          font-size: 9pt;
          font-style: italic;
          color: #475569;
        }

        .r-bullet-list {
          padding-left: 1.25rem;
          margin: 0.25rem 0;
        }

        .r-bullet-list li {
          font-size: 9.5pt;
          color: #334155;
          margin-bottom: 0.2rem;
        }

        .r-tech-used {
          font-size: 9pt;
          color: #475569;
          margin-top: 0.25rem;
        }

        .r-edu-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .r-edu-row {
          display: flex;
          justify-content: space-between;
          font-size: 9.5pt;
        }

        .r-edu-right {
          text-align: right;
        }

        .r-subtext {
          font-size: 8.5pt;
          color: #64748b;
          font-style: italic;
        }

        /* Print Media Styles */
        @media print {
          body * {
            visibility: hidden;
          }
          .no-print {
            display: none !important;
          }
          .resume-modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            background: #fff !important;
            padding: 0;
          }
          .resume-modal-content {
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            background: #fff !important;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
