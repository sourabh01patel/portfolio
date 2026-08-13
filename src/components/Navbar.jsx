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
  Home,
  Sparkles
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
      setIsScrolled(window.scrollY > 30);
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 180;
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
            <Code2 size={isMobile ? 18 : 20} className="logo-icon" />
          </div>
          <div className="logo-text-group">
            <span className="logo-text">
              SOURABH<span className="logo-dot">.PATEL</span>
            </span>
            <span className="logo-tag">MERN Dev</span>
          </div>
        </a>

        {/* Desktop Nav Floating Glass Capsule */}
        {!isMobile && (
          <nav className="desktop-nav-capsule">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && <span className="active-pill-bg" />}
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
              className="premium-resume-btn"
              title="View & Download Resume PDF"
            >
              <div className="btn-glow-layer" />
              <Download size={15} />
              <span>Resume</span>
              <Sparkles size={13} className="btn-sparkle" />
            </button>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-logo">
            <div className="logo-icon-box">
              <Code2 size={18} className="logo-icon" />
            </div>
            <span className="logo-text">SOURABH<span className="logo-dot">.PATEL</span></span>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={22} />
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
                  <Icon size={18} className="nav-item-icon" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
            className="premium-resume-btn full-width"
          >
            <Download size={16} />
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
          padding: 1.1rem 0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        .navbar-header.scrolled {
          padding: 0.7rem 0;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-width: 0;
        }

        /* Logo Styling */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          flex-shrink: 0;
          outline: none;
        }

        .logo-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #090d16;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .nav-logo:hover .logo-icon-box {
          transform: scale(1.05) rotate(-3deg);
          box-shadow: 0 0 22px rgba(56, 189, 248, 0.5);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-text {
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          white-space: nowrap;
        }

        .logo-dot {
          color: #38bdf8;
        }

        .logo-tag {
          font-size: 0.65rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Floating Capsule Desktop Navigation */
        .desktop-nav-capsule {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          padding: 4px 6px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none !important;
          list-style-type: none !important;
          margin: 0;
          padding: 0;
        }

        .nav-list li {
          list-style: none !important;
          list-style-type: none !important;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem 1rem;
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.25s ease;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          cursor: pointer;
          font-family: inherit;
          border-radius: 9999px;
          text-decoration: none;
          z-index: 1;
        }

        .nav-link:hover {
          color: #f8fafc;
        }

        .nav-link.active {
          color: #38bdf8;
          font-weight: 600;
        }

        .active-pill-bg {
          position: absolute;
          inset: 0;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 9999px;
          z-index: -1;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.15);
          animation: pillFadeIn 0.2s ease-out;
        }

        @keyframes pillFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Actions & Resume Button */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .premium-resume-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.15rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(129, 140, 248, 0.12) 100%);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.1);
        }

        .premium-resume-btn:hover {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
          color: #090d16;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(56, 189, 248, 0.35);
        }

        .btn-sparkle {
          opacity: 0.75;
          transition: transform 0.3s ease;
        }

        .premium-resume-btn:hover .btn-sparkle {
          transform: rotate(45deg) scale(1.15);
          opacity: 1;
        }

        .premium-resume-btn.full-width {
          width: 100%;
          justify-content: center;
          padding: 0.75rem 1.25rem;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8fafc;
          padding: 0.5rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.3);
          color: #38bdf8;
        }

        /* Mobile Nav Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: min(310px, 85vw);
          height: 100vh;
          height: 100dvh;
          background: #090d16;
          z-index: 1100;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 1.25rem;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          list-style: none !important;
          list-style-type: none !important;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-list li {
          list-style: none !important;
          list-style-type: none !important;
        }

        .mobile-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          color: #94a3b8;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          outline: none !important;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
          color: #ffffff;
        }

        .mobile-nav-link.active {
          background: rgba(56, 189, 248, 0.12) !important;
          border-color: rgba(56, 189, 248, 0.3) !important;
          color: #38bdf8 !important;
        }

        .nav-item-icon {
          color: #64748b;
          transition: color 0.2s;
        }

        .mobile-nav-link.active .nav-item-icon,
        .mobile-nav-link:hover .nav-item-icon {
          color: #38bdf8;
        }

        .mobile-drawer-footer {
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: auto;
        }

        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1050;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

