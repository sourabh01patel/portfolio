import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';
import { Info, CheckCircle2 } from 'lucide-react';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <div className="portfolio-app-root">
      {/* Background Ambient Glow Orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onShowToast={showToast} />
        <About />
        <Skills />
        <Experience />
        <Projects onShowToast={showToast} />
        <Education />
        <ExtraCurricular />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Printable ATS Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast">
            <Info size={18} className="text-cyan flex-shrink-0" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
