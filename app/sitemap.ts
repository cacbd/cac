import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllQuizzes } from "@/lib/quizzes";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const quizzes = getAllQuizzes();

  const quizEntries: MetadataRoute.Sitemap = quizzes.map((q) => ({
    url: `https://cac.bd/mock-tests/${q.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://cac.bd/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: "https://cac.bd",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://cac.bd/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://cac.bd/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://cac.bd/mock-tests",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: "https://cac.bd/#courses",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://cac.bd/#why-us",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://cac.bd/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...quizEntries,
    ...blogEntries,
  ];
}
