import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the trace root so a lockfile higher up the tree is not picked instead.
  outputFileTracingRoot: __dirname,
  images: {
    // Served as-is: every file in /public/images is already a sized WebP/PNG,
    // and the Vercel account's image-optimization quota is used up (402).
    unoptimized: true,
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
