/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.wpgraphql.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
