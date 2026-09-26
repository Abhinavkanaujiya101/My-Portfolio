import React from 'react';
import { Link } from 'react-router-dom';
import SketchCard from '../components/SketchCard';
import SketchButton from '../components/SketchButton';

export default function Home() {
  const profileCppCode = `// abhinav@engine - profile.cpp
#include <iostream>
#include <string>

class AbhinavKanaujiya {
private:
    std::string role = "B.Tech CSE @ PSIT Kanpur";
    std::string focus = "Full-Stack & AI Systems";

public:
    void getIntroduction() {
        std::cout << "Name: Abhinav Kanaujiya\\n";
        std::cout << "Role: " << role << "\\n";
        std::cout << "Core: C++, DSA, React, Node.js\\n";
        std::cout << "Projects: Apex OS, OmniBridge\\n";
    }
};

int main() {
    AbhinavKanaujiya dev;
    dev.getIntroduction();
    return 0;
}`;

  return (
    <div className="container" style={{ paddingTop: '3.5rem' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }} className="fade-in">
        {/* Status Pill */}
        <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <div className="glass-pill" style={{ padding: '0.45rem 1.1rem', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
            <span className="status-dot" />
            <span style={{ color: 'var(--text-bright)' }}>Available for Software Roles & Projects</span>
          </div>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
          fontWeight: '800',
          lineHeight: '1.12',
          marginBottom: '1.5rem',
          letterSpacing: '-0.03em',
        }}>
          Hi, I'm <span className="text-gradient">Abhinav Kanaujiya</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          lineHeight: '1.65',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
        }}>
          Computer Science student at <strong style={{ color: '#FFFFFF' }}>PSIT Kanpur</strong> with a passion for building high-performance systems in <strong style={{ color: 'var(--accent-cyan)' }}>C++</strong>, crafting algorithms with <strong style={{ color: 'var(--accent-violet)' }}>DSA</strong>, and architecting modern full-stack web applications.
        </p>

        {/* Action CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/projects">
            <SketchButton variant="primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Explore Projects ↗
            </SketchButton>
          </Link>
          <Link to="/contact">
            <SketchButton style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
              Get In Touch ✉️
            </SketchButton>
          </Link>
        </div>
      </div>

      {/* Interactive Glass Code / Terminal Visual */}
      <div style={{ maxWidth: '820px', margin: '0 auto 4.5rem' }} className="fade-in">
        <div 
          className="glass-panel" 
          style={{ 
            borderRadius: 'var(--radius-md)', 
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: 'var(--glass-highlight), 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.15)',
          }}
        >
          {/* Terminal Title Bar */}
          <div style={{
            background: 'rgba(10, 12, 22, 0.8)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)', 
                fontFamily: 'var(--font-mono)', 
                marginLeft: '0.5rem',
              }}>
                abhinav@engine ~ profile.cpp
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="glass-pill" style={{ fontSize: '0.74rem', padding: '0.2rem 0.65rem', color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                C++20
              </span>
            </div>
          </div>

          {/* Terminal Code Body */}
          <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(5, 7, 14, 0.75)' }}>
            <pre style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              lineHeight: '1.6',
              color: '#E2E8F0',
              overflowX: 'auto',
            }}>
              <code>{profileCppCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <h2 style={{
        fontSize: '1.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'var(--text-primary)',
        fontWeight: '700',
      }}>
        Explore Focus Areas
      </h2>

      <div className="grid grid-cols-4" style={{ marginBottom: '3rem' }}>
        <Link to="/about">
          <SketchCard style={{ padding: '1.75rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              👤
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>About Me</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Academic background, certifications, and engineering philosophy.
            </p>
          </SketchCard>
        </Link>

        <Link to="/skills">
          <SketchCard style={{ padding: '1.75rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Core Skills</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Proficiency breakdown across C++, DSA, Python, and web frameworks.
            </p>
          </SketchCard>
        </Link>

        <Link to="/projects">
          <SketchCard style={{ padding: '1.75rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              🚀
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Projects</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Full-Stack Secure Chat, OmniBridge AI, GitBoy, and AlphaForge.
            </p>
          </SketchCard>
        </Link>

        <Link to="/contact">
          <SketchCard style={{ padding: '1.75rem 1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(52, 211, 153, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              ✉️
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Contact</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Connect directly via email, LinkedIn, or send a quick transmission.
            </p>
          </SketchCard>
        </Link>
      </div>
    </div>
  );
}
