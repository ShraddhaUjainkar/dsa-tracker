/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dsa-progress",
  assetPrefix: "/dsa-progress/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
