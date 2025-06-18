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
    optimizeCss: {
      css: true,
      inlineThreshold: 10240,
      relativeAssets: true
    }
  }
};

module.exports = nextConfig;