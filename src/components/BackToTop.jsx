import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="back-to-top-btn"
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp size={20} />

      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(56, 189, 248, 0.2);
          transition: all 0.3s ease;
          animation: floatUp 0.3s ease-out;
        }

        .back-to-top-btn:hover {
          background: var(--accent-cyan);
          color: #000;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);
        }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 1.5rem;
            left: 1.5rem;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </button>
  );
};

export default BackToTop;
