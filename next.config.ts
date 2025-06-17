/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/shafaf.ca' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/shafaf.ca/' : '',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig
