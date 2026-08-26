import React from 'react';

export const metadata = {
  title: 'Webdesigner aus Köln | Design | Webflow | Animationen | Barrierefreiheit',
  description: 'Als Webdesigner helfe ich designorientierten Unternehmen, alle ihre Wünsche wahr werden zu lassen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-DE" style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  );
}
