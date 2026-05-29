import { getBasePath } from "@/lib/base-path";

const DEFAULT_GH_PAGES_URL = "https://maor-ar.github.io/DanielSaar";

/** Canonical site URL for metadata, sitemap, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const base = getBasePath();
  if (base) return `https://maor-ar.github.io${base}`;

  return DEFAULT_GH_PAGES_URL;
}
