import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;


