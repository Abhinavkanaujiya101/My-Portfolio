import React from 'react';

export default function SketchCard({ 
  children, 
  className = '', 
  variant = 'medium', 
  hoverable = true, 
  glow = false,
  style = {}, 
  ...props 
}) {
  const hoverClass = hoverable ? 'glass-card-hover' : '';
  const glowStyle = glow ? {
    boxShadow: 'var(--glass-highlight), var(--glass-shadow), 0 0 25px rgba(99, 102, 241, 0.15)',
    borderColor: 'rgba(165, 180, 252, 0.2)'
  } : {};

  return (
    <div
      className={`glass-card ${hoverClass} ${className}`}
      style={{
        ...glowStyle,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
