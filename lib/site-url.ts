const DEFAULT_SITE_URL = "https://danielsaar.co.il";

/** Canonical site URL for metadata, sitemap, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return DEFAULT_SITE_URL;
}
