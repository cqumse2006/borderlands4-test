/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports for Vercel
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory
  distDir: 'dist',
  // Enable source maps in production
  productionBrowserSourceMaps: false,
  // Disable ETag generation
  generateEtags: false,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Enable static HTML export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
