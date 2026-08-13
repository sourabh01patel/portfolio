import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
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

  // Shorter lines so nothing overflows on any screen width
  const heroSnippet = `// Sourabh Patel - MERN Dev
const developer = {
  name: "Sourabh Patel",
  role: "Full Stack Developer",
  stack: [
    "MongoDB", "Express.js",
    "React.js", "Node.js"
  ],
  edu: "B.Tech CSE (6th Sem)",
  location: "Rewa, MP",
  open: true
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
    if (onShowToast) onShowToast("Code snippet copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
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
            Building responsive, scalable web apps with React.js, Node.js, Express.js & MongoDB.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Contact Me</span>
            </a>

            <div className="hero-icon-btns">
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
                href={personalInfo.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Tech Pills */}
          <div className="hero-stack-pills">
            <span className="pill"><Database size={13} className="icon-mongo" /> MongoDB</span>
            <span className="pill"><Server size={13} className="icon-express" /> Express.js</span>
            <span className="pill"><Layers size={13} className="icon-react" /> React.js</span>
            <span className="pill"><Terminal size={13} className="icon-node" /> Node.js</span>
          </div>
        </div>

        {/* Right Column: Code Card */}
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

            <pre className="code-body"><code>{heroSnippet}</code></pre>

            <div className="card-footer">
              <span className="status-indicator">
                <CheckCircle2 size={12} className="text-emerald" />
                <span>RESTful APIs &amp; CRUD Ready</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 7rem 0 4rem;
          min-height: 90vh;
          display: flex;
          align-items: center;
          width: 100%;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: center;
          width: 100%;
          min-width: 0;
        }

        .hero-content {
          min-width: 0;
          width: 100%;
          overflow: hidden;
        }

        .hero-visual {
          min-width: 0;
          width: 100%;
          overflow: hidden;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #34d399;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.1rem;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          flex-shrink: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-name {
          font-size: clamp(1.75rem, 5.5vw, 3.75rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin-bottom: 0.5rem;
          color: #ffffff;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .hero-title-box {
          font-size: clamp(0.95rem, 3.8vw, 1.45rem);
          font-weight: 700;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
          line-height: 1.35;
        }

        .title-prefix {
          color: var(--text-secondary);
        }

        .hero-title-dynamic {
          display: inline-block;
          min-width: 0;
          word-break: break-word;
        }

        .hero-tagline {
          font-size: clamp(0.875rem, 1.8vw, 1rem);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 480px;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          flex-shrink: 0;
        }

        .hero-icon-btns {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .hero-stack-pills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1.1rem;
          border-top: 1px solid var(--border-color);
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .icon-mongo { color: #10b981; }
        .icon-express { color: #94a3b8; }
        .icon-react { color: #38bdf8; }
        .icon-node { color: #22c55e; }

        /* Code Card */
        .clean-code-card {
          background: rgba(13, 19, 34, 0.9);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .card-topbar {
          background: rgba(9, 13, 22, 0.95);
          padding: 0.6rem 0.9rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          gap: 0.5rem;
        }

        .window-dots { display: flex; gap: 5px; flex-shrink: 0; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .card-filename {
          font-size: 0.75rem;
          font-family: var(--font-code);
          color: var(--text-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .copy-btn {
          color: var(--text-muted);
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .copy-btn:hover { color: var(--text-primary); }

        .code-body {
          display: block;
          padding: 1rem;
          font-family: var(--font-code);
          font-size: 0.78rem;
          line-height: 1.65;
          color: #cbd5e1;
          margin: 0;
          white-space: pre;
          overflow-x: auto;
          overflow-y: hidden;
          max-width: 100%;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
        }

        .code-body code {
          display: inline-block;
          min-width: 100%;
          box-sizing: border-box;
        }

        .card-footer {
          padding: 0.5rem 0.9rem;
          background: rgba(9, 13, 22, 0.95);
          border-top: 1px solid rgba(255,255,255,0.07);
          font-size: 0.73rem;
          color: var(--text-muted);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .text-emerald { color: #10b981; }

        /* === RESPONSIVE BREAKPOINTS === */

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions,
          .hero-stack-pills,
          .hero-title-box {
            justify-content: center;
          }
          .hero-icon-btns {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 5.5rem 0 2.5rem;
            min-height: auto;
          }
          .hero-name {
            font-size: clamp(1.65rem, 9vw, 2.6rem);
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 0.6rem;
          }
          .hero-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          .pill {
            font-size: 0.73rem;
            padding: 0.25rem 0.55rem;
          }
        }

        @media (max-width: 500px) {
          .code-body {
            font-size: clamp(0.68rem, 3.2vw, 0.75rem);
            padding: 0.75rem 0.6rem;
            white-space: pre-wrap;
            word-break: break-word;
            overflow-wrap: break-word;
          }
          .code-body code {
            display: block;
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 400px) {
          .hero-name {
            font-size: 1.55rem;
          }
          .card-topbar {
            padding: 0.5rem 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
