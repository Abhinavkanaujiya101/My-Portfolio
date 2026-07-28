import React from 'react';
import { Link } from 'react-router-dom';
import SketchCard from '../components/SketchCard';

export default function Home() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
      {/* Hero section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="wiggle-always" style={{ 
          fontSize: '3rem', 
          fontFamily: 'var(--font-hand)', 
          marginBottom: '1rem',
          transform: 'rotate(-1deg)'
        }}>
          Hello, I'm Abhinav Kanaujiya
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          maxWidth: '650px', 
          margin: '0 auto 2rem', 
          lineHeight: '1.6',
          fontFamily: 'var(--font-mono)'
        }}>
          Computer Science Student at Pranveer Singh Institute of Technology. I specialize in C, C++, Object-Oriented Programming, and Data Structures & Algorithms. Welcome to my wireframe sketchbook portfolio!
        </p>
      </div>

      {/* Central visual workspace sketch */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '4rem' 
      }}>
        <SketchCard variant="strong" hoverable={false} style={{ 
          padding: '1.5rem', 
          '--box-bg': '#FFF', 
          maxWidth: '500px',
          width: '100%',
          transform: 'rotate(1deg)'
        }}>
          {/* Sketch Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg viewBox="0 0 400 250" width="100%" height="250" style={{ maxWidth: '400px', filter: 'url(#sketch-medium)' }} stroke="var(--color-ink)" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Sketch of desk workspace">
              {/* Desk surface line */}
              <path d="M 10 220 L 390 220" />
              
              {/* Computer stand */}
              <path d="M 180 220 L 185 180 L 215 180 L 220 220" />
              <path d="M 170 220 L 230 220" />
              
              {/* Monitor body */}
              <rect x="100" y="40" width="200" height="140" rx="5" />
              <rect x="105" y="45" width="190" height="110" rx="3" />
              
              {/* Inner screen code sketch */}
              <path d="M 120 60 L 160 60 M 120 75 L 210 75 M 120 90 L 180 90 M 140 105 L 220 105 M 120 120 L 150 120" strokeWidth="2" stroke="rgba(26,26,26,0.6)" />
              
              {/* Coffee mug */}
              <path d="M 320 220 L 320 185 C 320 180, 345 180, 345 185 L 345 220" />
              {/* Coffee mug handle */}
              <path d="M 345 190 C 360 190, 360 210, 345 210" />
              {/* Steaming lines */}
              <path d="M 327 175 Q 330 165, 327 155 M 335 177 Q 338 167, 335 157" strokeWidth="1.5" stroke="rgba(26,26,26,0.4)" />
              
              {/* Notepad on desk */}
              <polygon points="40,220 90,220 85,200 45,200" />
              <path d="M 50 205 L 80 205 M 48 210 L 83 210 M 47 215 L 85 215" strokeWidth="1" stroke="rgba(26,26,26,0.5)" />
            </svg>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', borderTop: '1.5px dashed var(--color-ink)', paddingTop: '0.8rem' }}>
            fig 1.0: [ workspace_wireframe.sketch ]
          </div>
        </SketchCard>
      </div>

      {/* Banner Arrow Quick Nav links */}
      <h3 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
        Flip to Pages:
      </h3>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '1.5rem', 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        <Link to="/about" className="sketch-arrow-banner" style={{ '--box-bg': '#FFF7E6' }}>
          📖 About & Objectives
        </Link>
        <Link to="/skills" className="sketch-arrow-banner" style={{ '--box-bg': '#E6F4EA' }}>
          ⚔️ Core Skills
        </Link>
        <Link to="/projects" className="sketch-arrow-banner" style={{ '--box-bg': '#E8F0FE' }}>
          🎨 Projects & Games
        </Link>
        <Link to="/contact" className="sketch-arrow-banner" style={{ '--box-bg': '#FCE8E6' }}>
          ✉️ Contact Channels
        </Link>
      </div>
    </div>
  );
}
