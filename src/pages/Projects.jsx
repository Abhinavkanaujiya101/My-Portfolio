import React, { useState } from 'react';
import SketchCard from '../components/SketchCard';
import SketchButton from '../components/SketchButton';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Full-Stack Secure Chat Application",
      category: "Full-Stack Web App",
      description: "A real-time chat application built with a Node.js backend and a React frontend interface. Features instant messaging powered by Socket.io, Gmail SMTP Nodemailer OTP verification for secure user authentication, responsive design for desktop and mobile, and a decoupled dual architecture.",
      techStack: ["React.js", "Node.js", "Express", "Socket.io", "Nodemailer", "Gmail SMTP"],
      repoUrl: "https://github.com/Abhinavkanaujiya101/Secure-chat-app",
      liveUrl: null,
      icon: "💬",
    },
    {
      id: 2,
      title: "OmniBridge 🌉",
      category: "AI Gateway Platform",
      description: "High-performance, real-time AI orchestration gateway designed to bridge multi-provider LLM and generative model APIs (Google Gemini, OpenAI, Together AI, Luma Dream Machine) into a unified, low-latency streaming pipeline with PostgreSQL/Supabase persistence and dynamic telemetry dashboarding.",
      techStack: ["Node.js", "Express", "Next.js", "WebSockets", "Gemini API", "OpenAI", "Supabase"],
      repoUrl: "https://github.com/Abhinavkanaujiya101/OmniBridge",
      liveUrl: null,
      icon: "🌉",
    },
    {
      id: 3,
      title: "GitBoy ⚡",
      category: "Developer Analytics & Dashboard",
      description: "A real-time GitHub activity and portfolio analytics dashboard transforming GitHub profiles into interactive visual metrics, 52-week contribution heatmaps, dynamic SVG stat badges, and open-source impact scoring.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Recharts", "GitHub REST/GraphQL API"],
      repoUrl: "https://github.com/Abhinavkanaujiya101/GitBoy",
      liveUrl: null,
      icon: "⚡",
    },
    {
      id: 4,
      title: "AlphaForge 📈",
      category: "Quantitative Strategy & Backtesting",
      description: "An intelligent quantitative research and backtesting wizard for financial markets (such as NIFTY 50 and NSE Indices). Features multi-step hypothesis formulation, strategy parameter definition, backtesting simulations, and trade insights.",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Financial Modeling"],
      repoUrl: "https://github.com/Abhinavkanaujiya101/AlphaForge",
      liveUrl: null,
      icon: "📈",
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="fade-in">
        <div className="glass-pill" style={{ marginBottom: '1rem', color: 'var(--accent-purple)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
          Portfolio Showcase
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF' }}>
          Featured <span className="text-gradient">Projects</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', color: 'var(--text-secondary)' }}>
          A curated collection of full-stack web applications, AI gateways, developer analytics, and quantitative financial platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2" style={{ marginBottom: '4rem' }}>
        {projectsData.map((project) => (
          <SketchCard 
            key={project.id}
            hoverable={true}
            style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Top Meta Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="glass-pill" style={{ fontSize: '0.78rem' }}>
                  {project.category}
                </span>
                <span style={{ fontSize: '1.5rem' }}>{project.icon}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.45rem', color: '#FFFFFF', fontWeight: '700', marginBottom: '0.75rem' }}>
                {project.title}
              </h2>

              {/* Description */}
              <p style={{ 
                fontSize: '0.92rem', 
                lineHeight: '1.6', 
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
              }}>
                {project.description}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      color: 'var(--text-bright)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
              <SketchButton 
                onClick={() => setSelectedProject(project)}
                variant="primary"
                style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.9rem' }}
              >
                Architecture & Details ↗
              </SketchButton>
              {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-btn"
                  style={{ padding: '0.65rem 1rem' }}
                  aria-label={`View ${project.title} repository`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}
            </div>
          </SketchCard>
        ))}
      </div>

      {/* Project Modal Dialog */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
