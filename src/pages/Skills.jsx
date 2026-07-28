import React from 'react';
import SketchCard from '../components/SketchCard';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "#FFF7E6",
      skills: [
        { name: "C++ (OOP & Systems)", level: 90 },
        { name: "C Language", level: 85 },
        { name: "Python (Intermediate)", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      color: "#E6F4EA",
      skills: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 & CSS3", level: 80 }
      ]
    },
    {
      title: "Core Concepts",
      color: "#E8F0FE",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "Object-Oriented Programming", level: 90 }
      ]
    },
    {
      title: "Other Competencies",
      color: "#FCE8E6",
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Cloud Foundations (Oracle)", level: 80 },
        { name: "Verbal Communication", level: 85 }
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
        ⚔️ Skill Sketchpad
      </h2>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.05rem', 
        maxWidth: '650px', 
        margin: '0 auto 3rem',
        fontFamily: 'var(--font-mono)'
      }}>
        A wireframe breakdown of my technical capability. Skill levels are depicted as hand-shaded pencil hatching bars.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="skills-grid">
        {skillCategories.map((category, idx) => (
          <SketchCard 
            key={idx} 
            variant="medium" 
            style={{ 
              '--box-bg': '#FFF', 
              padding: '1.8rem',
              transform: idx % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)'
            }}
          >
            {/* Category header styled with a check box checkmark indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', borderBottom: '2.5px solid var(--color-ink)', paddingBottom: '0.5rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                border: '2px solid var(--color-ink)',
                borderRadius: '3px',
                padding: '0.1rem 0.5rem',
                backgroundColor: category.color,
                filter: 'url(#sketch-subtle)',
                transform: 'rotate(2deg)'
              }}>
                [X]
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-hand)' }}>
                {category.title}
              </h3>
            </div>

            {/* List of skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 'bold' }}>✐ {skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  {/* Sketchy hand-hatched progress bar */}
                  <div className="sketch-progress-container">
                    <div 
                      className="sketch-progress-bar hatch-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: category.color 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </SketchCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
