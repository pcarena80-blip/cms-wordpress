/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  // ADD THIS:
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

module.exports = nextConfig;

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
