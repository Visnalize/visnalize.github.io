import matter from "gray-matter";
import imageSize from "image-size";
import { cwd } from "process";
import { UserConfig } from "vitepress";
import decapitalize from "voca/decapitalize";
import { getLatestVersion } from "../../.content/misc.data";
import { apps } from "../../.content/simulated-apps.data";
import { OG, ORIGIN } from "../theme/constants";
import { getAppImage } from "../theme/utils/images";

export const transformPageData: UserConfig["transformPageData"] = (data) => {
  if (data.params?.tag) {
    const { tag } = data.params;
    data.title = `Posts with tag "${tag}"`;
    data.description = `Here you can find all posts with the tag "${tag}". Discover helpful insights, sharing, tips and tricks on various topics from Visnalize.`;
  }

  if (data.params?.app) {
    const { app: slug } = data.params;
    const app = apps.find((a) => a.slug === slug);
    const imageUrl = getAppImage(slug);
    if (!app) throw new Error(`App not found: ${slug}`);
    data.title = app.title + " in Win7 Simu";
    data.description =
      data.title + " in Win7 Simu " + decapitalize(app.description);
    data.frontmatter = { ...data.frontmatter, ...app };
    data.frontmatter.image = ORIGIN + imageUrl;
    data.frontmatter.imageData = imageSize(`${cwd()}/public` + imageUrl);
  }

  if (data.relativePath.match(/(win7simu|brick1100)\/about/)) {
    const [app] = data.relativePath.split("/");
    data.frontmatter.appVersion = getLatestVersion(app);
  }

  if (data.relativePath.startsWith("blog")) {
    data.frontmatter.sidebar = false;
  }

  const transformedPath = data.relativePath
    .replace(/\.md$/, ".html")
    .replace(/index\.html$/, "");
  const canonicalUrl = `${ORIGIN}/${transformedPath}`;
  const { content } = matter.read(data.filePath);
  const firstImage = content.match(/!\[.*?\]\((.*?)\)/)?.[1];
  const metaImage =
    data.frontmatter.image || firstImage || `${OG}/${transformedPath}`;

  data.frontmatter.head ??= [];
  data.frontmatter.head.push(
    ["link", { rel: "canonical", href: canonicalUrl }],
    ["meta", { name: "title", content: data.title }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: canonicalUrl }],
    ["meta", { property: "og:title", content: data.title }],
    ["meta", { property: "og:description", content: data.description }],
    ["meta", { property: "og:image", content: metaImage }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: canonicalUrl }],
    ["meta", { property: "twitter:title", content: data.title }],
    ["meta", { property: "twitter:description", content: data.description }],
    ["meta", { property: "twitter:image", content: metaImage }]
  );
};