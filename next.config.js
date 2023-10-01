/** @type {import('next').NextConfig} */
// const images = {
//   domains: ["cdn.traction.one"]
// }

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig

