import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["crypto-js"],
  //disable lint on build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
