/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true
  }
};

module.exports = nextConfig;