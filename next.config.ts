import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "www.samsung.com",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
    ],
  },
};

export default nextConfig;