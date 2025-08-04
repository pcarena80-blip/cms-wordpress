/** @type {import('next').NextConfig} */
const nextConfig = {
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
