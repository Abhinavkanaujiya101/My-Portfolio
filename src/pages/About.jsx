import React from 'react';
import SketchCard from '../components/SketchCard';

export default function About() {
  const accomplishments = [
    { title: "B.Tech in CSE", desc: "Pranveer Singh Institute of Technology, Kanpur (CGPA: 7.7)", icon: "🎓" },
    { title: "Oracle Certified Cloud Associate", desc: "Oracle Cloud Infrastructure (OCI) Foundations", icon: "☁️" },
    { title: "Oracle Certified GenAI Associate", desc: "Generative AI Foundations & Architecture", icon: "🧠" },
    { title: "HackerRank 3★ Badges", desc: "Problem Solving & C++ Language Mastery", icon: "⭐" },
    { title: "LeetCode 150+ Problems", desc: "Optimized solutions across DSA, arrays, trees & dynamic programming", icon: "⚡" },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
      period: "2024 — Present",
      grade: "CGPA: 7.7",
      details: "Focused on Data Structures, Algorithms, Object-Oriented Programming, and Computer Systems Architecture."
    },
    {
      degree: "Senior Secondary Education (Class XII)",
      institution: "S.S Inter College, UP Board",
      period: "Completed 2024",
      grade: "Score: 81%",
      details: "Science stream with specialization in Mathematics and Physics."
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "S.S Inter College, UP Board",
      period: "Completed 2022",
      grade: "Score: 83%",
      details: "Foundation in science, mathematics, and analytical reasoning."
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in">
        <div className="glass-pill" style={{ marginBottom: '1rem', color: 'var(--accent-purple)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
          Profile & Background
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF' }}>
          About <span className="text-gradient">Me</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', color: 'var(--text-secondary)' }}>
          Passionate software engineer and computer science undergraduate dedicated to building robust and performant software solutions.
        </p>
      </div>

      {/* Main Grid: Profile Card & Objective */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', alignItems: 'start', marginBottom: '3.5rem' }} className="about-grid">
        {/* Left Side: Avatar Card */}
        <SketchCard glow={true} style={{ padding: '2.25rem 1.75rem', textAlign: 'center' }}>
          <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 1.5rem' }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.4) 100%)',
              border: '2px solid rgba(165, 180, 252, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.75rem',
              boxShadow: '0 0 25px rgba(99, 102, 241, 0.35)',
            }}>
              👨‍💻
            </div>
            <div style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#0B0F19',
              border: '2px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
            }}>
              ⚡
            </div>
          </div>

          <h2 style={{ fontSize: '1.45rem', color: '#FFFFFF', fontWeight: '700', marginBottom: '0.25rem' }}>
            Abhinav Kanaujiya
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
            CS Student & Software Engineer
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div>📍 Kanpur, Uttar Pradesh, India</div>
            <div>🏫 PSIT Kanpur</div>
          </div>
        </SketchCard>

        {/* Right Side: Objective & Accomplishments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <SketchCard style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.85rem', fontWeight: '700' }}>
              Professional Objective
            </h3>
            <p style={{ lineHeight: '1.75', fontSize: '0.96rem', color: 'var(--text-secondary)' }}>
              Motivated and detail-oriented Computer Science student with a strong foundation in <strong style={{ color: '#FFF' }}>C, C++, and Object-Oriented Programming (OOP)</strong>. Skilled in applying Data Structures and Algorithms (DSA) to build efficient and optimized computational solutions. Eager to contribute technical expertise to core system development and software engineering projects.
            </p>
          </SketchCard>

          <SketchCard style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1.25rem', fontWeight: '700' }}>
              Key Accomplishments & Credentials
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {accomplishments.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  <div>
                    <strong style={{ color: '#FFFFFF', fontSize: '0.92rem', display: 'block' }}>{item.title}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SketchCard>
        </div>
      </div>

      {/* Metrics Counter Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', textAlign: 'center', color: '#FFFFFF', marginBottom: '1.75rem', fontWeight: '700' }}>
          Performance Metrics
        </h2>
        <div className="grid grid-cols-3">
          <SketchCard style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: '800',
              fontFamily: 'var(--font-sans)',
              background: 'var(--grad-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              marginBottom: '0.5rem',
            }}>
              7.7
            </div>
            <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.95rem' }}>B.Tech CGPA</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Computer Science & Eng.</div>
          </SketchCard>

          <SketchCard style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: '800',
              fontFamily: 'var(--font-sans)',
              background: 'var(--grad-cyan-blue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              marginBottom: '0.5rem',
            }}>
              150+
            </div>
            <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.95rem' }}>LeetCode Solved</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Data Structures & Algorithms</div>
          </SketchCard>

          <SketchCard style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: '800',
              fontFamily: 'var(--font-sans)',
              background: 'var(--grad-violet-emerald)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              marginBottom: '0.5rem',
            }}>
              2x
            </div>
            <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.95rem' }}>Oracle Certified</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Cloud & Generative AI</div>
          </SketchCard>
        </div>
      </div>

      {/* Educational Milestones Timeline */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', textAlign: 'center', color: '#FFFFFF', marginBottom: '2rem', fontWeight: '700' }}>
          Academic Journey
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {education.map((edu, idx) => (
            <SketchCard key={idx} hoverable={false} style={{ padding: '1.75rem 2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: '700' }}>
                  {edu.degree}
                </h3>
                <span className="glass-pill" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                  {edu.period}
                </span>
              </div>
              <p style={{ color: 'var(--text-bright)', fontSize: '0.92rem', marginBottom: '0.4rem', fontWeight: '500' }}>
                {edu.institution} • <span style={{ color: 'var(--accent-emerald)' }}>{edu.grade}</span>
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                {edu.details}
              </p>
            </SketchCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
