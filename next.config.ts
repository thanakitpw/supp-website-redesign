import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the trace root so a lockfile higher up the tree is not picked instead.
  outputFileTracingRoot: __dirname,
  images: {
    // Static export-friendly formats; all art is served from /public.
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
