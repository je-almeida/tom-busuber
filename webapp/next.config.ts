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
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "busuber-api.n3zvwn.easypanel.host",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
