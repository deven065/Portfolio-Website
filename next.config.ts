/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Fix for images not showing in production deployment
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**", // allow all portraits
      },
    ],
    // Add device sizes and image sizes for better optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
