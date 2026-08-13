import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Download, 
  Menu, 
  X, 
  User, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  GraduationCap, 
  Mail,
  Home
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="nav-logo"
        >
          <div className="logo-icon-box">
            <Code2 size={isMobile ? 18 : 22} className="logo-icon" />
          </div>
          <span className="logo-text">
            SOURABH<span className="logo-dot">.PATEL</span>
          </span>
        </a>

        {/* Desktop Nav Links — hidden on mobile */}
        {!isMobile && (
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                    {activeSection === item.id && <span className="active-indicator" />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Right side actions */}
        <div className="nav-actions">
          {/* Download Resume — desktop only */}
          {!isMobile && (
            <button
              onClick={onOpenResume}
              className="btn btn-primary btn-resume"
              title="View & Download Resume PDF"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-logo">
            <Code2 size={20} className="logo-icon" />
            <span className="logo-text">SOURABH<span className="logo-dot">.PATEL</span></span>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
            className="btn btn-primary btn-full"
          >
            <Download size={18} />
            <span>Download Resume (PDF)</span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.65rem 0;
          background: rgba(9, 13, 22, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          font-size: clamp(0.85rem, 4vw, 1.05rem);
          letter-spacing: -0.01em;
          color: var(--text-primary);
          text-decoration: none;
          flex-shrink: 0;
          min-width: 0;
        }

        .logo-text {
          white-space: nowrap;
          font-size: inherit;
        }

        .logo-icon-box {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 10px;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          flex-shrink: 0;
        }

        .logo-dot {
          color: var(--accent-cyan);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          padding: 0.5rem 0.8rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--accent-cyan);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .btn-resume {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          padding: 0.45rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          flex-shrink: 0;
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: min(300px, 85vw);
          height: 100vh;
          height: 100dvh;
          background: #0d1322;
          z-index: 1100;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 1px solid var(--border-color);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
          overflow-y: auto;
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.25rem;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
        }

        .mobile-drawer-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1050;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
