import React from 'react';
import SketchCard from '../components/SketchCard';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      accentColor: "#6366F1",
      skills: [
        { name: "C++ (5★ HackerRank Gold Badge & Systems)", level: 95 },
        { name: "C Language (Low-Level Systems)", level: 85 },
        { name: "Python (Intermediate & Scripting)", level: 75 },
      ]
    },
    {
      title: "Core CS Concepts",
      icon: "🧠",
      accentColor: "#38BDF8",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 90 },
        { name: "Object-Oriented Programming (OOP)", level: 92 },
        { name: "Computer Systems & Architecture", level: 82 },
      ]
    },
    {
      title: "Web & Full-Stack Technologies",
      icon: "🌐",
      accentColor: "#8B5CF6",
      skills: [
        { name: "JavaScript (ES6+, Async, DOM)", level: 85 },
        { name: "Node.js & Express Architecture", level: 80 },
        { name: "HTML5, CSS3 & Glassmorphism", level: 88 },
      ]
    },
    {
      title: "Cloud & Analytical Competencies",
      icon: "⚡",
      accentColor: "#34D399",
      skills: [
        { name: "Problem Solving (3★ HackerRank Badge)", level: 92 },
        { name: "Oracle Cloud Infrastructure (OCI)", level: 82 },
        { name: "Generative AI Foundations", level: 80 },
      ]
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in">
        <div className="glass-pill" style={{ marginBottom: '1rem', color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
          Technical Proficiency
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF' }}>
          Skills & <span className="text-gradient">Competencies</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', color: 'var(--text-secondary)' }}>
          A breakdown of languages, systems programming concepts, algorithmic capabilities, and developer tools.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2" style={{ marginBottom: '4rem' }}>
        {skillCategories.map((category, idx) => (
          <SketchCard 
            key={idx} 
            hoverable={true} 
            style={{ padding: '2rem' }}
          >
            {/* Category Header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.85rem', 
              marginBottom: '1.75rem', 
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
              paddingBottom: '1rem' 
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `rgba(255, 255, 255, 0.05)`,
                border: `1px solid rgba(255, 255, 255, 0.12)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}>
                {category.icon}
              </div>
              <h2 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: '700' }}>
                {category.title}
              </h2>
            </div>

            {/* Skill Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.5rem', 
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Glowing Glass Progress Bar */}
                  <div className="glass-progress-track">
                    <div 
                      className="glass-progress-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${category.accentColor}, #38bdf8)`,
                        boxShadow: `0 0 10px ${category.accentColor}88`,
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </SketchCard>
        ))}
      </div>

      {/* Tools & Tech Chips Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', textAlign: 'center', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: '700' }}>
          Technologies & Toolchain
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', maxWidth: '800px', margin: '0 auto' }}>
          {[
            "C++20", "C17", "Python", "Data Structures", "Algorithms", "Object-Oriented Design",
            "Node.js", "Express.js", "React.js", "JavaScript ES6+", "HTML5 & CSS3",
            "Git & GitHub", "Oracle Cloud (OCI)", "Generative AI", "VS Code", "Vite"
          ].map((tool, idx) => (
            <span 
              key={idx}
              className="glass-pill"
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.88rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#F4F4F5',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
