/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/uol-web-development-final-project',
  assetPrefix: '/uol-web-development-final-project',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
