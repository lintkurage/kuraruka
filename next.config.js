/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  env: {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN ,
    apiKey: process.env.NEXT_PUBLIC_API_KEY ,
  }
}

module.exports = nextConfig
