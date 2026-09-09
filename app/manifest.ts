import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.legalName}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f3f3",
    theme_color: "#ad1919",
    lang: "th",
    icons: [
      {
        src: "/images/logo-red.png",
        sizes: "615x195",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
