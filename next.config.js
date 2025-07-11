/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/shafaf.ca',
  assetPrefix: '/shafaf.ca/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  reactStrictMode: true,
  trailingSlash: true,
}
