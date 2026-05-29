/** Path prefix for GitHub Pages project sites (e.g. /DanielSaar). Empty in local dev. */
export function getBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!raw || raw === "/") return "";
  return raw.startsWith("/") ? raw.replace(/\/$/, "") : `/${raw.replace(/\/$/, "")}`;
}

/** Prefix root-relative public asset paths for <img src> and similar. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = getBasePath();
  return base ? `${base}${path}` : path;
}

/** Recursively prefix asset paths in the figma map. */
export function withAssetPrefix<T>(value: T): T {
  if (typeof value === "string") {
    return (value.startsWith("/") ? withBasePath(value) : value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => withAssetPrefix(item)) as T;
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, withAssetPrefix(nested)]),
    ) as T;
  }
  return value;
}
