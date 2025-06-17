/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig
