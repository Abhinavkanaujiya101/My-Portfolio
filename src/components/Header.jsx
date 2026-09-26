import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: '1rem',
      zIndex: 100,
      margin: '0 auto',
      width: 'calc(100% - 2rem)',
      maxWidth: '1140px',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '9999px',
        boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.6rem 1.4rem',
      }}>
        {/* Brand Monogram / Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(56, 189, 248, 0.3) 100%)',
            border: '1px solid rgba(165, 180, 252, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            fontSize: '0.85rem',
            color: '#FFFFFF',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.3)',
          }}>
            AK
          </div>
          <span style={{ 
            fontFamily: 'var(--font-sans)', 
            fontWeight: '700', 
            fontSize: '1.05rem', 
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
          }}>
            Abhinav <span style={{ color: 'var(--text-muted)', fontWeight: '400', fontSize: '0.9rem' }}>• Dev</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: '500',
                fontFamily: 'var(--font-sans)',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                background: isActive ? 'rgba(255, 255, 255, 0.14)' : 'transparent',
                border: isActive ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid transparent',
                boxShadow: isActive ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3)' : 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action: GitHub & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href="https://github.com/Abhinavkanaujiya101"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill desktop-nav"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '9999px',
              padding: '0.45rem 0.85rem',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Glass Sheet) */}
      {isOpen && (
        <div
          style={{
            marginTop: '0.5rem',
            background: 'rgba(5, 7, 14, 0.55)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: 'var(--glass-shadow-lg)',
          }}
          className="mobile-drawer fade-in"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                padding: '0.7rem 1.2rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: isActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
              })}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://github.com/Abhinavkanaujiya101"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '0.5rem',
              padding: '0.7rem 1.2rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.95rem',
              color: 'var(--accent-cyan)',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            View GitHub Profile ↗
          </a>
        </div>
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
