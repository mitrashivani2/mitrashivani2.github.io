const fallbackOwner = "mitrashivani2";

const repositoryFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? process.env.NEXT_PUBLIC_GITHUB_REPO ?? "";
const ownerFromEnv = process.env.GITHUB_REPOSITORY_OWNER ?? process.env.NEXT_PUBLIC_GITHUB_OWNER ?? fallbackOwner;
const userSiteRepository = `${ownerFromEnv.toLowerCase()}.github.io`;

export const githubOwner = ownerFromEnv;
export const repositoryName = repositoryFromEnv;
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (repositoryFromEnv && repositoryFromEnv.toLowerCase() !== userSiteRepository ? `/${repositoryFromEnv}` : "");

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? `https://${githubOwner}.github.io${basePath}`).replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return basePath ? `${basePath}${path}` : path;
}

export function absoluteUrl(path = "") {
  if (!path) return siteUrl;
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteAsset(path: string) {
  return absoluteUrl(withBasePath(path));
}
