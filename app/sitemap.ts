export default async function sitemap() {
  const routes = ["", "/projects"].map((route) => ({
    url: `https://albionkaferi.com/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
