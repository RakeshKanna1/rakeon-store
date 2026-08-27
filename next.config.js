/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/validation', destination: '/validation.html' },
      { source: '/pricing', destination: '/pricing.html' },
      { source: '/support', destination: '/support.html' },
      { source: '/track', destination: '/track.html' },
      { source: '/manage', destination: '/manage.html' },
      { source: '/terms', destination: '/terms.html' },
      { source: '/privacy', destination: '/privacy.html' },
      { source: '/imprint', destination: '/imprint.html' },
      // Legacy backward-compatibility aliases
      { source: '/prozess', destination: '/validation.html' },
      { source: '/preis', destination: '/pricing.html' },
      { source: '/kontakt', destination: '/support.html' },
      { source: '/agb', destination: '/terms.html' },
      { source: '/datenschutz', destination: '/privacy.html' },
      { source: '/impressum', destination: '/terms.html' },
    ];
  },
};

module.exports = nextConfig;
