/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/shafaf.ca' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/shafaf.ca/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
