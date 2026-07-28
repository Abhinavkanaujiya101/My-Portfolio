import React from 'react';

export default function SketchCard({ children, className = '', variant = 'medium', hoverable = true, ...props }) {
  const variantClass = variant === 'subtle' ? 'sketch-subtle' : variant === 'strong' ? 'sketch-strong' : '';
  const hoverClass = hoverable ? 'sketch-card' : '';
  return (
    <div
      className={`sketch-box ${variantClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
