import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**", // pattern général pour les images GitHub
      },
    ],
  },
};


export default nextConfig;
