const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const withPreval = require('next-plugin-preval/config')();

/** @type {import('next').NextConfig} */
module.exports = withPreval(
  withMDX({
    reactStrictMode: true,
    images: {
      domains: ['placekitten.com'],
    },
    sassOptions: {
      includePaths: ['components'],
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false, os: false };

      return config;
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    async redirects() {
      return [
        {
          source: '/',
          destination: '/1',
          permanent: true,
        },
      ];
    },
  })
);
