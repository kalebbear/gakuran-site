import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const routes = ["", "/guides", "/controls", "/fighting-styles", "/character", "/trello"];
  return routes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : route === "/guides" ? 0.9 : 0.8 }));
}
