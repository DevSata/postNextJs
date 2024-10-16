/** @type {import('next').NextConfig} */
const { version } = require("./package.json");
module.exports = {
  experimental: {
    //appDir: true,
  },
  publicRuntimeConfig: {
    version,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
