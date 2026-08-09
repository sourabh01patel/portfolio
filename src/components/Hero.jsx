import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Database, 
  Server, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onShowToast }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const heroSnippet = `// Sourabh Patel - MERN Stack Developer
const developer = {
  name: "Sourabh Patel",
  role: "Full Stack Developer",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  education: "B.Tech CSE (6th Semester)",
  location: "Rewa, Madhya Pradesh",
  status: "Available for Internships & Full-time Roles"
};`;

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3200);
    return () => clearInterval(titleInterval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(heroSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    onShowToast("GitHub Link Placeholder: Ready for user repository URL integration.");
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot" />
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero-name">
            {personalInfo.name}
          </h1>

          <div className="hero-title-box">
            <span className="title-prefix">I am a </span>
            <span className="hero-title-dynamic text-gradient">
              {personalInfo.titles[currentTitleIndex]}
            </span>
          </div>

          <p className="hero-tagline">
            Building responsive, scalable, and user-friendly web applications with React.js, Node.js, Express.js, and MongoDB.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a 
              href="#github"
              onClick={handleGithubClick}
              className="btn-icon"
              title="GitHub Placeholder"
            >
              <GithubIcon size={18} />
            </a>
          </div>

          {/* Clean Tech Pills */}
          <div className="hero-stack-pills">
            <span className="pill"><Database size={13} className="icon-mongo" /> MongoDB</span>
            <span className="pill"><Server size={13} className="icon-express" /> Express.js</span>
            <span className="pill"><Layers size={13} className="icon-react" /> React.js</span>
            <span className="pill"><Terminal size={13} className="icon-node" /> Node.js</span>
          </div>
        </div>

        {/* Right Column: Clean Code Card */}
        <div className="hero-visual">
          <div className="clean-code-card">
            <div className="card-topbar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="card-filename">developer.js</span>
              <button onClick={handleCopyCode} className="copy-btn" title="Copy code">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            <pre className="code-body">
              <code>{heroSnippet}</code>
            </pre>

            <div className="card-footer">
              <span className="status-indicator">
                <CheckCircle2 size={12} className="text-emerald" />
                <span>RESTful APIs & CRUD Ready</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 8.5rem 0 5rem;
          min-height: 88vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #34d399;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .hero-name {
          font-size: clamp(2.5rem, 4.5vw, 3.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .hero-title-box {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 700;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .title-prefix {
          color: var(--text-secondary);
        }

        .hero-tagline {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-stack-pills {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .icon-mongo { color: #10b981; }
        .icon-express { color: #94a3b8; }
        .icon-react { color: #38bdf8; }
        .icon-node { color: #22c55e; }

        /* Clean Code Card */
        .clean-code-card {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .card-topbar {
          background: rgba(9, 13, 22, 0.9);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .card-filename {
          font-size: 0.775rem;
          font-family: var(--font-code);
          color: var(--text-muted);
        }

        .copy-btn {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .copy-btn:hover { color: var(--text-primary); }

        .code-body {
          padding: 1.25rem;
          font-family: var(--font-code);
          font-size: 0.8rem;
          line-height: 1.65;
          color: #cbd5e1;
          margin: 0;
          overflow-x: auto;
        }

        .card-footer {
          padding: 0.55rem 1rem;
          background: rgba(9, 13, 22, 0.9);
          border-top: 1px solid var(--border-color);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .text-emerald { color: #10b981; }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-tagline { margin: 0 auto 1.75rem; }
          .hero-actions, .hero-stack-pills, .hero-title-box { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
