import React from 'react';

export default function SketchButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'default',
  type = 'button', 
  style = {},
  ...props 
}) {
  const variantClass = variant === 'primary' 
    ? 'glass-btn-primary' 
    : variant === 'glow' 
    ? 'glass-btn-glow' 
    : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`glass-btn ${variantClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
