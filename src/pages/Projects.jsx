import React, { useState } from 'react';
import SketchCard from '../components/SketchCard';
import SketchButton from '../components/SketchButton';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Secure One-Time Chat Application",
      category: "Full-Stack Web Application",
      description: "Developed a secure real-time chat application with unique 6-digit access codes that become invalid after first use. Built a full-stack solution implementing one-time authentication, real-time messaging, and room management to ensure extreme transmission privacy.",
      techStack: ["Node.js", "Express", "React", "Socket.io", "One-Time Auth"],
      repoUrl: "https://github.com/Abhinavkanaujiya101",
      liveUrl: null
    },
    {
      id: 2,
      title: "Dragon Towards Pointer",
      category: "2D Interactive Game",
      description: "A 2D interactive game built using JavaScript and Python. Designed game logic, physics computations, and canvas-based animations to enhance user interaction. Implemented efficient event-handling and responsive keyboard controls for smooth gameplay loop.",
      techStack: ["JavaScript", "Python", "HTML5 Canvas", "Game Physics", "Event Handling"],
      repoUrl: "https://github.com/Abhinavkanaujiya101",
      liveUrl: null
    }
  ];

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
        🎨 Project Blueprints
      </h2>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.05rem', 
        maxWidth: '650px', 
        margin: '0 auto 3rem',
        fontFamily: 'var(--font-mono)'
      }}>
        A grid of layouts mapping out my coding accomplishments. Hover over cards to see wireframe highlights and click details to open the sketch panels.
      </p>

      {/* Grid of Projects */}
      <div className="grid grid-cols-2">
        {projectsData.map((project) => (
          <SketchCard 
            key={project.id}
            variant="medium"
            style={{ 
              '--box-bg': '#FFF', 
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: project.id % 2 === 0 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)'
            }}
          >
            <div>
              {/* Category tag */}
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                opacity: 0.7, 
                textTransform: 'uppercase', 
                marginBottom: '0.4rem',
                letterSpacing: '1px'
              }}>
                [ {project.category} ]
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-hand)', marginBottom: '1rem' }}>
                {project.title}
              </h3>

              {/* Wireframe Placeholder Image (X frame box) */}
              <div className="sketch-placeholder-x mb-4 flex-center">
                <span style={{ 
                  fontFamily: 'var(--font-hand)', 
                  fontSize: '1.2rem', 
                  color: 'rgba(26, 26, 26, 0.25)', 
                  transform: 'rotate(-5deg)',
                  zIndex: 2
                }}>
                  [ Wireframe Image Placeholder ]
                </span>
              </div>

              {/* Brief Intro */}
              <p style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                lineHeight: '1.5', 
                marginBottom: '1.5rem',
                opacity: 0.9 
              }}>
                {project.description.slice(0, 120)}...
              </p>
            </div>

            {/* View Details Button */}
            <div style={{ marginTop: 'auto' }}>
              <SketchButton 
                onClick={() => setSelectedProject(project)}
                style={{ width: '100%', '--box-bg': '#F0E6FF', justifyContent: 'center' }}
              >
                🔍 VIEW DETAILS
              </SketchButton>
            </div>
          </SketchCard>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
