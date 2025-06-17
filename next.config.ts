/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shafaf.ca',
  assetPrefix: '/shafaf.ca/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
