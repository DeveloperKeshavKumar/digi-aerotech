import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/tr/**',
      },
    ],
  },
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
