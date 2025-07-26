import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
};

// ✅ Use CommonJS export for Vercel compatibility
module.exports = nextConfig;
