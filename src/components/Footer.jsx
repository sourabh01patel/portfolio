import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ onShowToast }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };



  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="logo-icon-box">
                <Code2 size={20} className="logo-icon" />
              </div>
              <span className="logo-text">
                SOURABH<span className="logo-dot">.PATEL</span>
              </span>
            </div>
            <p className="footer-tagline">
              MERN Stack Developer • Full Stack Developer • React.js Developer
            </p>
            <p className="footer-subtext">
              Building scalable, responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-nav-list">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((id) => (
                <li key={id}>
                  <button 
                    onClick={() => scrollToSection(id)}
                    className="footer-nav-link"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-buttons">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalInfo.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Sourabh Patel. All rights reserved.
          </p>

          <p className="built-with">
            Designed & Built with <Heart size={14} className="text-pink" /> using React.js & Modern CSS
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #060911;
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-tagline {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .footer-subtext {
          font-size: 0.875rem;
          color: var(--text-muted);
          max-width: 400px;
        }

        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-nav-link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.2s;
          text-align: left;
        }

        .footer-nav-link:hover {
          color: var(--accent-cyan);
        }

        .footer-social-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .built-with {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .text-pink {
          color: #ec4899;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
