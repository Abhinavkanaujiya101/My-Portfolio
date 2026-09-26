import React, { useEffect } from 'react';
import SketchButton from './SketchButton';

export default function ProjectModal({ project, onClose }) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{ width: '100%', maxWidth: '680px' }}
        className="fade-in"
      >
        <div 
          className="glass-panel"
          style={{ 
            background: 'rgba(8, 10, 18, 0.45)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            maxHeight: '90vh', 
            overflowY: 'auto',
            padding: '2.25rem',
            boxShadow: 'var(--glass-highlight-strong), 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(99, 102, 241, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', gap: '1rem' }}>
            <div>
              <div className="glass-pill" style={{ marginBottom: '0.6rem', color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                {project.category}
              </div>
              <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', fontWeight: '700' }}>
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
              }}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Project Preview Window Graphic */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              marginBottom: '1.75rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Terminal Window Header dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginLeft: '0.5rem' }}>
                {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.sys
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', lineHeight: '1.6', margin: 0 }}>
              &gt; architecture: verified<br />
              &gt; environment: production_ready<br />
              &gt; core_module: {project.techStack.slice(0, 3).join(' • ')}
            </p>
          </div>

          {/* Details Content */}
          <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.6rem', fontWeight: '600' }}>
            Overview & Key Architecture
          </h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: '600' }}>
            Technologies & Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="glass-pill"
                style={{ 
                  background: 'rgba(99, 102, 241, 0.1)',
                  borderColor: 'rgba(99, 102, 241, 0.25)',
                  color: '#C7D2FE',
                  padding: '0.35rem 0.8rem',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, minWidth: '180px' }}>
                <SketchButton variant="primary" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub Repository ↗
                </SketchButton>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, minWidth: '180px' }}>
                <SketchButton style={{ width: '100%', borderColor: 'rgba(56, 189, 248, 0.4)', color: 'var(--accent-cyan)' }}>
                  Launch Live Demo ↗
                </SketchButton>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
