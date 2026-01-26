/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dsa-tracker",
  assetPrefix: "/dsa-tracker/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
