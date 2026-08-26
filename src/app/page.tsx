'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
      <iframe
        src="/showcase/index.html"
        title="Eduard Bodak — Webdesigner & Webflow Experte aus Köln"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          backgroundColor: '#000',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </main>
  );
}
