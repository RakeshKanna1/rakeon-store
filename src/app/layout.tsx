import React from 'react';

export const metadata = {
  title: 'RAKEXURA | Subscription & Account Slot Management Control Center',
  description: 'Automated subscription control center for Xbox Game Pass Ultimate & NVIDIA GeForce NOW. Precision timing validation from 1 to 12 months, private profile PIN locks, and live telemetry.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  );
}
