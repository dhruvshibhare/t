/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shopvix',
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
    legacyBrowsers: false,
    scrollRestoration: true
  }
};

module.exports = nextConfig;