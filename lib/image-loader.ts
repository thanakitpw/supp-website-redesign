import manifest from "./image-manifest.json";

/**
 * next/image loader for pre-sized variants (no runtime optimizer on Workers).
 * `scripts/image-variants.py` writes /images/_v/<name>-<width>.<ext> for every
 * width in next.config's deviceSizes + imageSizes that is smaller than the
 * original; anything else (originals, remote URLs) is served as-is.
 */
const originals: Record<string, number> = manifest;

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const original = originals[src];
  if (!original || width >= original) return src;

  const dot = src.lastIndexOf(".");
  return `/images/_v/${src.slice("/images/".length, dot)}-${width}${src.slice(dot)}`;
}
