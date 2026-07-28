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
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '750px' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
        ✉️ Let's Delineate
      </h2>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.05rem', 
        marginBottom: '3rem',
        fontFamily: 'var(--font-mono)'
      }}>
        Drop a line to collaborate, discuss a project blueprint, or just say hello!
      </p>

      {isSubmitted ? (
        <SketchCard variant="strong" style={{ textAlign: 'center', padding: '3rem 2rem', '--box-bg': '#FFF' }} className="wiggle-always">
          <span style={{ fontSize: '3rem' }}>✓</span>
          <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-hand)', margin: '1rem 0' }}>
            Message Logged!
          </h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            Thanks {formData.name}, your blueprint transmission succeeded. I will scribble back shortly!
          </p>
          <SketchButton onClick={handleReset} style={{ '--box-bg': '#F0E6FF' }}>
            ✐ SEND ANOTHER
          </SketchButton>
        </SketchCard>
      ) : (
        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
          <SketchCard variant="medium" hoverable={false} style={{ padding: '2rem', '--box-bg': '#FFF' }}>
            {/* Name Input */}
            <div className="sketch-input-container">
              <label className="sketch-label" htmlFor="name">✐ NAME:</label>
              <input 
                id="name"
                type="text" 
                className="sketch-input" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
                placeholder="e.g. Leonardo da Vinci"
              />
            </div>

            {/* Email Input */}
            <div className="sketch-input-container">
              <label className="sketch-label" htmlFor="email">✐ EMAIL ADDRESS:</label>
              <input 
                id="email"
                type="email" 
                className="sketch-input" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
                placeholder="e.g. leo@renaissance.org"
              />
            </div>

            {/* Message Input */}
            <div className="sketch-input-container">
              <label className="sketch-label" htmlFor="message">✐ TRANSMISSION MESSAGE:</label>
              <textarea 
                id="message"
                className="sketch-input" 
                rows="5"
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required 
                placeholder="Scribble details of your blueprint here..."
                style={{ resize: 'none' }}
              />
            </div>

            {/* Submit layout with hand-drawn arrow pointing to it */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '1.5rem', 
              marginTop: '2rem',
              position: 'relative',
              flexWrap: 'wrap'
            }} className="submit-row">
              
              {/* Direct Info */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textAlign: 'left', lineHeight: '1.5' }}>
                <div>📞 +91 9648121426</div>
                <div>✉️ 2k24.cs1a.2411680@gmail.com</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {/* Hand-drawn arrow SVG */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="arrow-container">
                  <span style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', transform: 'rotate(-5deg)', fontWeight: 'bold' }}>
                    Click to Submit!
                  </span>
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-10deg)' }}>
                    <path d="M 5 10 Q 25 30, 45 20" />
                    <path d="M 35 12 L 47 20 L 40 32" />
                  </svg>
                </div>

                <SketchButton type="submit" style={{ '--box-bg': '#E6F4EA', fontSize: '1.25rem', padding: '0.8rem 1.8rem' }}>
                  ✏ SEND BLUEPRINT
                </SketchButton>
              </div>
            </div>
          </SketchCard>
        </form>
      )}

      {/* Social Links Block */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
          ✐ Network Channels
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/Abhinavkanaujiya101" target="_blank" rel="noopener noreferrer">
            <SketchButton style={{ '--box-bg': '#FFF' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </SketchButton>
          </a>

          <a href="https://www.linkedin.com/in/abhinav-kanaujiya-781422343/" target="_blank" rel="noopener noreferrer">
            <SketchButton style={{ '--box-bg': '#FFF' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </SketchButton>
          </a>

          <a href="mailto:2k24.cs1a.2411680@gmail.com">
            <SketchButton style={{ '--box-bg': '#FFF' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </SketchButton>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .submit-row {
            flex-direction: column-reverse !important;
            align-items: flex-end !important;
          }
          .arrow-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
