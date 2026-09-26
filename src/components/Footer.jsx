import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(255, 255, 255, 0.01)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '2.5rem 1.5rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        textAlign: 'center',
      }}>
        {/* Availability Badge */}
        <div className="glass-pill" style={{ padding: '0.4rem 1rem' }}>
          <span className="status-dot" />
          <span>Open to Software Engineering & Internship Opportunities</span>
        </div>

        {/* Brand line & Copyright */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          margin: 0,
        }}>
          Crafted with modern dark glassmorphism & React by <span style={{ color: '#FFFFFF', fontWeight: '600' }}>Abhinav Kanaujiya</span>
        </p>

        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          margin: 0,
        }}>
          © {new Date().getFullYear()} Abhinav Kanaujiya. Built with hardware-accelerated CSS & Vite.
        </p>
      </div>
    </footer>
  );
}
