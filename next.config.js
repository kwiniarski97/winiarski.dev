/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://placekitten.com/'],
  },
  sassOptions: {
    includePaths: ['components'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog/1',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blog/1',
        permanent: true,
      },
    ];
  },
};
