import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate frontend submission processing
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        onShowToast("Message received on frontend! Ready for Formspree/EmailJS connection.");
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project or opportunity in mind? I’m open to internships, entry-level opportunities, and exciting software development projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <div className="info-icon-box">
                <Mail size={22} className="text-cyan" />
              </div>
              <div className="info-text">
                <span className="info-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="info-value">
                  {personalInfo.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="copy-btn"
                title="Copy Email"
              >
                {copiedItem === 'Email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-box">
                <Phone size={22} className="text-emerald" />
              </div>
              <div className="info-text">
                <span className="info-label">Phone Number</span>
                <a href={`tel:${personalInfo.phone}`} className="info-value">
                  {personalInfo.phone}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="copy-btn"
                title="Copy Phone Number"
              >
                {copiedItem === 'Phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-box">
                <LinkedinIcon size={22} className="text-indigo" />
              </div>
              <div className="info-text">
                <span className="info-label">LinkedIn Profile</span>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="info-value"
                >
                  linkedin.com/in/sourabhpatel01
                </a>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-box">
                <MapPin size={22} className="text-amber" />
              </div>
              <div className="info-text">
                <span className="info-label">Location</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col glass-card">
            {submitted ? (
              <div className="success-message-box">
                <div className="success-icon-box">
                  <CheckCircle2 size={48} className="text-emerald" />
                </div>
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-text">
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your message and get back to you promptly.
                </p>
                <div className="form-integration-note">
                  <span>ℹ️ Frontend form validated. Easily connectable to Formspree / EmailJS or custom backend API.</span>
                </div>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3 className="form-heading">
                  <MessageSquare size={20} className="text-cyan" />
                  <span>Send a Direct Message</span>
                </h3>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Full-stack inquiry"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                  />
                  {errors.subject && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.subject}</span>
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sourabh, we would like to discuss..."
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  />
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary btn-full"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          align-items: start;
          width: 100%;
        }

        .contact-info-col, .contact-form-col {
          min-width: 0;
          width: 100%;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.35rem 1.5rem;
          min-width: 0;
        }

        .info-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .info-label {
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.2s;
        }

        a.info-value:hover {
          color: var(--accent-cyan);
        }

        .copy-btn {
          color: var(--text-muted);
          padding: 0.4rem;
          border-radius: 6px;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .copy-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        /* Form */
        .contact-form-col {
          padding: 2.25rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-heading {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          background: rgba(9, 13, 22, 0.8);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
        }

        .form-input.error {
          border-color: #ef4444;
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.2rem;
        }

        .success-message-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1rem;
          gap: 1.25rem;
        }

        .success-icon-box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .success-text {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 450px;
          line-height: 1.6;
        }

        .form-integration-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .contact-form-col {
            padding: 1.25rem;
          }
          .info-card {
            padding: 1rem;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
      `}</style>
    </section>
  );
};

export default Contact;
