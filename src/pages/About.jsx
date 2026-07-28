import React from 'react';
import SketchCard from '../components/SketchCard';

export default function About() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2.5rem' }}>
        📖 Profile & Objective
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2.5rem', alignItems: 'start' }} className="about-grid">
        {/* Left Side: Avatar Card */}
        <div style={{ textAlign: 'center' }}>
          <SketchCard variant="strong" hoverable={true} style={{ padding: '2rem 1.5rem', '--box-bg': '#FFF' }}>
            <div 
              className="hatch-bg flex-center"
              style={{ 
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                border: '3px solid var(--color-ink)',
                filter: 'url(#sketch-strong)',
                margin: '0 auto 1.5rem',
                backgroundColor: '#FFF'
              }}
            >
              <svg viewBox="0 0 100 100" width="90" height="90" stroke="var(--color-ink)" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-3deg)' }}>
                {/* Hair/Head sketch */}
                <circle cx="50" cy="42" r="16" fill="#FFF" />
                <path d="M 32 38 C 34 22, 66 22, 68 38" strokeWidth="4" />
                {/* Glasses */}
                <rect x="37" y="38" width="10" height="8" rx="1" />
                <rect x="53" y="38" width="10" height="8" rx="1" />
                <path d="M 47 42 L 53 42" />
                {/* Smile */}
                <path d="M 45 49 Q 50 54, 55 49" />
                {/* Body sketch */}
                <path d="M 22 88 C 25 70, 35 66, 50 66 C 65 66, 75 70, 78 88" fill="#FFF" />
                {/* Neck */}
                <path d="M 46 58 L 46 66 M 54 58 L 54 66" />
              </svg>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-hand)', marginBottom: '0.3rem' }}>Abhinav Kanaujiya</h3>
            <p style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', opacity: 0.8 }}>
              CS Student & Developer
            </p>
            <p style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', opacity: 0.8, marginTop: '0.2rem' }}>
              📍 PSIT, Kanpur
            </p>
          </SketchCard>
        </div>

        {/* Right Side: Objective & Bio Details */}
        <div>
          <SketchCard variant="medium" hoverable={false} style={{ padding: '2rem', '--box-bg': '#FFF' }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-hand)', marginBottom: '1rem', borderBottom: '2px dashed var(--color-ink)', paddingBottom: '0.5rem' }}>
              Professional Objective
            </h3>
            <p style={{ lineHeight: '1.7', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Motivated and detail-oriented Computer Science student with a strong foundation in C, C++, and Object-Oriented Programming (OOP). Skilled in applying Data Structures and Algorithms (DSA) to build efficient and optimized solutions. Eager to contribute technical expertise to core system development and software engineering projects.
            </p>

            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-hand)', marginBottom: '0.8rem' }}>
              Key Accomplishments
            </h3>
            <ul className="sketch-list">
              <li className="sketch-list-check"><strong>B.Tech in CSE</strong>: Currently pursuing at Pranveer Singh Institute of Technology, Kanpur (CGPA: 7.7).</li>
              <li className="sketch-list-check"><strong>Oracle Certified</strong>: Foundations Associate (Cloud Infrastructure) & Generative AI Certified Associate.</li>
              <li className="sketch-list-check"><strong>HackerRank Badges</strong>: 3★ Badge in Problem Solving and 3★ Badge in C++ Language.</li>
              <li className="sketch-list-check"><strong>Problem Solving</strong>: Solved 150+ algorithmic questions on LeetCode.</li>
            </ul>
          </SketchCard>
        </div>
      </div>

      {/* Stats Summary Section */}
      <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-hand)', textAlign: 'center', marginTop: '4rem', marginBottom: '1.5rem' }}>
        ✐ Core Stats & Metrics
      </h3>
      
      <div className="grid grid-cols-3">
        <SketchCard variant="subtle" style={{ textAlign: 'center', '--box-bg': '#FFF' }}>
          <h4 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-hand)', fontWeight: 'bold' }}>7.7</h4>
          <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>B.Tech CGPA</p>
          <div className="hatch-bg" style={{ height: '8px', border: '1.5px solid var(--color-ink)', marginTop: '0.8rem', borderRadius: '3px' }} />
        </SketchCard>

        <SketchCard variant="subtle" style={{ textAlign: 'center', '--box-bg': '#FFF' }}>
          <h4 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-hand)', fontWeight: 'bold' }}>150+</h4>
          <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>LeetCode Solved</p>
          <div className="hatch-bg" style={{ height: '8px', border: '1.5px solid var(--color-ink)', marginTop: '0.8rem', borderRadius: '3px' }} />
        </SketchCard>

        <SketchCard variant="subtle" style={{ textAlign: 'center', '--box-bg': '#FFF' }}>
          <h4 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-hand)', fontWeight: 'bold' }}>2</h4>
          <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>Oracle Cloud Certs</p>
          <div className="hatch-bg" style={{ height: '8px', border: '1.5px solid var(--color-ink)', marginTop: '0.8rem', borderRadius: '3px' }} />
        </SketchCard>
      </div>

      {/* Educational Timelines */}
      <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-hand)', textAlign: 'center', marginTop: '4rem', marginBottom: '1.5rem' }}>
        ✐ Academic Details
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <SketchCard variant="subtle" hoverable={false} style={{ '--box-bg': '#FFF', padding: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontFamily: 'var(--font-hand)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Bachelor of Technology in Computer Science and Engineering</h4>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>[ Current ]</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            Pranveer Singh Institute of Technology, Kanpur | CGPA: 7.7
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', opacity: 0.8 }}>
            Relevant Coursework: Data Structures, Algorithms.
          </p>
        </SketchCard>

        <SketchCard variant="subtle" hoverable={false} style={{ '--box-bg': '#FFF', padding: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontFamily: 'var(--font-hand)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Senior Secondary (Class XII)</h4>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>[ 2024 ]</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            S.S Inter College, UP Board | Score: 81%
          </p>
        </SketchCard>

        <SketchCard variant="subtle" hoverable={false} style={{ '--box-bg': '#FFF', padding: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontFamily: 'var(--font-hand)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Secondary (Class X)</h4>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>[ 2022 ]</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            S.S Inter College, UP Board | Score: 83%
          </p>
        </SketchCard>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
