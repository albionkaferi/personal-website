import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://albionkaferi.com/projects/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/projects', '/contact', '/uses'].map(
    (route) => ({
      url: `https://albionkaferi.com/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
