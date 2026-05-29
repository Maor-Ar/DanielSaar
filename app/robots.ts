import type { MetadataRoute } from "next";
import { getBasePath } from "@/lib/base-path";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const siteUrl = getSiteUrl();
const basePath = getBasePath();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: `${basePath || ""}/` },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
