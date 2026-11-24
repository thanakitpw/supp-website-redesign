import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";
import { site } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

const routes: {
  path: string;
  priority: number;
  changeFrequency: Entry["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/join-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles();
  const buildTime = new Date();
  // The blog index changes when a post does, not on every deploy.
  const latestPost = articles[0]?.updated_at;

  const pages: Entry[] = routes.map((route) => ({
    url: route.path === "/" ? site.url : `${site.url}${route.path}`,
    lastModified:
      route.path === "/blog" && latestPost ? new Date(latestPost) : buildTime,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts: Entry[] = articles.map((article) => ({
    url: `${site.url}/blog/${article.slug}`,
    lastModified: new Date(article.updated_at),
    changeFrequency: "monthly",
    priority: 0.7,
    ...(article.cover_url ? { images: [article.cover_url] } : {}),
  }));

  return [...pages, ...posts];
}
