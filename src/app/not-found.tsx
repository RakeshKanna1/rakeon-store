import React from 'react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#f9f4eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: '4rem', fontWeight: 900, color: '#facc15' }}>404</div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '10px' }}>Slot or Page Not Found</h1>
      <p style={{ color: '#8991a6', marginTop: '8px' }}>The requested telemetry page or subscription slot does not exist.</p>
      <a 
        href="/" 
        style={{ marginTop: '24px', padding: '10px 24px', borderRadius: '9999px', background: '#8b5cf6', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}
      >
        &larr; Return to Subscriptions
      </a>
    </div>
  );
}
