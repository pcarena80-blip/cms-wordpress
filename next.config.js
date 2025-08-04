/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 👈 Enable support for app directory inside /src
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
