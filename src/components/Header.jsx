import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SketchCard from './SketchCard';
import SketchButton from './SketchButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    border: isActive ? '2px solid var(--color-ink)' : '2px solid transparent',
    fontFamily: 'var(--font-hand)',
    fontSize: '1.15rem',
    fontWeight: 'bold',
    transition: 'all 0.1s ease',
  });

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--color-bg)',
      borderBottom: '2.5px solid var(--color-ink)',
      zIndex: 999,
      boxShadow: '0 4px 0px rgba(26, 26, 26, 0.05)',
      filter: 'url(#sketch-subtle)', // Add visual wobble to header line
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem 1.5rem',
        minHeight: '70px',
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'inline-flex' }}>
          <SketchCard 
            variant="subtle"
            hoverable={true}
            style={{ 
              padding: '0.4rem 1rem', 
              '--box-bg': '#FFF',
              transform: 'rotate(-2deg)'
            }}
          >
            <h1 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-hand)', fontWeight: 'bold' }}>
              ✐ sketch.dev
            </h1>
          </SketchCard>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.75rem' }} className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <SketchButton 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle"
          style={{ padding: '0.3rem 0.6rem', display: 'none' }}
        >
          {isOpen ? '[ X ]' : '[ MENU ]'}
        </SketchButton>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          borderTop: '2px solid var(--color-ink)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          backgroundColor: 'var(--color-bg)'
        }} className="mobile-drawer">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'hatch-bg-active' : ''} style={linkStyle}>
            Contact
          </NavLink>
        </div>
      )}

      {/* Mobile CSS adjustments */}
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
