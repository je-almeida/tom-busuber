import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "sv.golffox.com.br",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
