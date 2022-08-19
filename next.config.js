const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
}

module.exports = withMarkdoc()(nextConfig)
