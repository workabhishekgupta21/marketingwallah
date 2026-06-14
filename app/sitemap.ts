import type { MetadataRoute } from "next";

const baseUrl = "https://marketingwallah.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/industries", "/case-studies", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
