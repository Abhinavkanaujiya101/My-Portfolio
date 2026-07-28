import React from 'react';

export default function SketchButton({ children, onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`sketch-btn wiggle-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
