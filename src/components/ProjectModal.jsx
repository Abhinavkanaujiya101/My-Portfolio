import React, { useEffect } from 'react';
import SketchCard from './SketchCard';
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
        backgroundColor: 'rgba(26, 26, 26, 0.4)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{ width: '100%', maxWidth: '650px' }}
      >
        <SketchCard 
          variant="strong" 
          hoverable={false}
          style={{ 
            '--box-bg': '#FBF9F1', 
            maxHeight: '90vh', 
            overflowY: 'auto',
            padding: '2rem'
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.2rem' }}>{project.title}</h2>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {project.category}
              </span>
            </div>
            <SketchButton onClick={onClose} style={{ padding: '0.3rem 0.7rem', fontSize: '0.9rem' }}>
              [ X ] CLOSE
            </SketchButton>
          </div>

          {/* Wireframe Box Placeholder */}
          <div className="sketch-placeholder-x mb-4 flex-center" style={{ height: '220px' }}>
            <span style={{ 
              fontFamily: 'var(--font-hand)', 
              fontSize: '1.5rem', 
              color: 'rgba(26, 26, 26, 0.3)',
              transform: 'rotate(-5deg)',
              zIndex: 2
            }}>
              [ {project.title} Sketch / Design Diagram ]
            </span>
          </div>

          {/* Details Content */}
          <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Description</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            {project.description}
          </p>

          <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="hatch-bg" 
                style={{ 
                  border: '1.5px solid var(--color-ink)',
                  borderRadius: '3px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links Footer */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <SketchButton style={{ '--box-bg': '#E6F4EA' }}>
                📂 GITHUB REPO
              </SketchButton>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                🚀 LIVE DEMO
              </a>
            )}
          </div>
        </SketchCard>
      </div>
    </div>
  );
}
