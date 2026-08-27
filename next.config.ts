import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      { source: '/prozess', destination: '/showcase/prozess.html' },
      { source: '/preis', destination: '/showcase/preis.html' },
      { source: '/kontakt', destination: '/showcase/kontakt.html' },
      { source: '/manage', destination: '/showcase/manage.html' },
      { source: '/track', destination: '/showcase/track.html' },
      { source: '/impressum', destination: '/showcase/impressum.html' },
      { source: '/datenschutz', destination: '/showcase/datenschutz.html' },
      { source: '/agb', destination: '/showcase/agb.html' },
      { source: '/styles.css', destination: '/showcase/styles.css' },
      { source: '/scripts/:path*', destination: '/showcase/scripts/:path*' },
    ];
  },
};

export default nextConfig;
