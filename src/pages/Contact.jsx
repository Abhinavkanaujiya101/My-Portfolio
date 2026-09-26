import React, { useState } from 'react';
import SketchCard from '../components/SketchCard';
import SketchButton from '../components/SketchButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="container" style={{ paddingTop: '3rem', maxWidth: '850px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in">
        <div className="glass-pill" style={{ marginBottom: '1rem', color: 'var(--accent-emerald)', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
          Let's Connect
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF' }}>
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', color: 'var(--text-secondary)' }}>
          Whether you have an internship opportunity, a project to collaborate on, or just want to chat about C++ & algorithms, feel free to reach out!
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-3" style={{ marginBottom: '2.5rem' }}>
        <a href="mailto:2k24.cs1a.2411680@gmail.com" style={{ textDecoration: 'none' }}>
          <SketchCard style={{ padding: '1.5rem', textAlign: 'center', height: '100%' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✉️</div>
            <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.92rem' }}>Email</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem', wordBreak: 'break-all' }}>
              2k24.cs1a.2411680@gmail.com
            </div>
          </SketchCard>
        </a>

        <a href="tel:+919648121426" style={{ textDecoration: 'none' }}>
          <SketchCard style={{ padding: '1.5rem', textAlign: 'center', height: '100%' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
            <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.92rem' }}>Phone</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
              +91 9648121426
            </div>
          </SketchCard>
        </a>

        <SketchCard hoverable={false} style={{ padding: '1.5rem', textAlign: 'center', height: '100%' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
          <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.92rem' }}>Location</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
            PSIT Kanpur, India
          </div>
        </SketchCard>
      </div>

      {/* Main Glass Form */}
      {isSubmitted ? (
        <SketchCard glow={true} style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(52, 211, 153, 0.2)',
            border: '2px solid rgba(52, 211, 153, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            margin: '0 auto 1.5rem',
            color: '#34D399',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)',
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: '700', marginBottom: '0.75rem' }}>
            Message Transmitted!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Your transmission has been logged successfully. I will get back to you shortly!
          </p>
          <SketchButton onClick={handleReset} variant="primary">
            Send Another Message
          </SketchButton>
        </SketchCard>
      ) : (
        <SketchCard style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-row">
              {/* Name */}
              <div>
                <label className="sketch-label" htmlFor="name">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="glass-input" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                  placeholder="e.g. Linus Torvalds"
                />
              </div>

              {/* Email */}
              <div>
                <label className="sketch-label" htmlFor="email">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="glass-input" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                  placeholder="e.g. linus@kernel.org"
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '2rem' }}>
              <label className="sketch-label" htmlFor="message">Your Message</label>
              <textarea 
                id="message"
                className="glass-input" 
                rows="5"
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required 
                placeholder="Share project details, opportunities, or inquiries..."
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Submit Action */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <SketchButton type="submit" variant="primary" style={{ padding: '0.8rem 2.2rem', fontSize: '1rem' }}>
                Transmit Message 🚀
              </SketchButton>
            </div>
          </form>
        </SketchCard>
      )}

      {/* Social Media Links Block */}
      <div style={{ marginTop: '3.5rem', textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1.25rem', fontWeight: '600' }}>
          Professional Profiles
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/Abhinavkanaujiya101" target="_blank" rel="noopener noreferrer" className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub Profile
          </a>

          <a href="https://www.linkedin.com/in/abhinav-kanaujiya-781422343/" target="_blank" rel="noopener noreferrer" className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn Profile
          </a>

          <a href="mailto:2k24.cs1a.2411680@gmail.com" className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Direct Mail
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
