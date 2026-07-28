import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '2rem 1.5rem',
      borderTop: '2.5px solid var(--color-ink)',
      backgroundColor: 'var(--color-bg)',
      filter: 'url(#sketch-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        textAlign: 'center'
      }}>
        <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', fontWeight: 'bold' }}>
          ✎ designed & hand-coded with pencil & ink.
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} sketch.dev | All sketches are CSS + SVG.
        </p>
      </div>
    </footer>
  );
}
