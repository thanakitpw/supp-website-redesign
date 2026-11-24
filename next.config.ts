import { readFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";
import { site } from "./lib/site";

type Redirect = { source: string; destination: string; statusCode: 301 };

// Every old WordPress URL → new path, 301 in a single hop. The CSV is the
// single source of truth (CLAUDE.md hard rule 2). Paths are stored
// percent-encoded with WordPress's trailing slash.
//
// Each row is registered with and without the trailing slash, in upper- and
// lower-case percent-encoding (matching is case-sensitive: browsers send
// upper case, WordPress links and Google's index use lower case), and — for
// posts — with WordPress's `/feed/` suffix. Destinations are absolute so a
// request on www lands on the apex in the same hop.
function legacyRedirects(): Redirect[] {
  const csv = readFileSync(
    path.join(__dirname, "migration/redirect-map.csv"),
    "utf8",
  );
  return csv
    .trim()
    .split("\n")
    .slice(1)
    .flatMap((line) => {
      const [oldPath, , newPath, , note = ""] = line.split(",");
      const base = oldPath.replace(/\/$/, "");
      const lower = base.replace(/%[0-9A-F]{2}/g, (e) => e.toLowerCase());
      const isPost = note.startsWith("interim") || newPath.startsWith("/blog/");
      const bases = [...new Set([base, lower])];
      const sources = bases.flatMap((b) => [
        b,
        `${b}/`,
        ...(isPost ? [`${b}/feed`, `${b}/feed/`] : []),
      ]);
      const destination =
        newPath === "/" ? site.url : `${site.url}${newPath}`;
      return sources.map((source) => ({
        source,
        destination,
        statusCode: 301 as const,
      }));
    });
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the trace root so a lockfile higher up the tree is not picked instead.
  outputFileTracingRoot: __dirname,
  images: {
    // No runtime optimizer on Cloudflare Workers: the loader points srcset at
    // the pre-sized copies from scripts/image-variants.py. Keep these two
    // lists equal to WIDTHS in that script.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 828, 1200, 1600, 2048],
    imageSizes: [160, 256, 320, 384],
  },
  poweredByHeader: false,
  // Next's built-in trailing-slash redirect is a 308 that runs before the
  // legacy map, which turned every old URL into a two-hop chain. The slash is
  // handled below instead: legacy rows match with the slash, everything else
  // gets one 301 to the slashless URL.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...legacyRedirects(),
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yourgoalswesupp.com" }],
        destination: `${site.url}/:path*`,
        statusCode: 301,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        statusCode: 301,
      },
    ];
  },
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
