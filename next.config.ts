import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },
  allowedDevOrigins: ['preview-chat-15c441ca-22f4-46d1-b5ed-c8cd3f87c396.space.z.ai'],
};

export default nextConfig;
