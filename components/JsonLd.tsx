import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "דניאל סער — סטוריטלינג עסקי ואישי",
        description: "כתיבה, עריכה ותכנון תוכן לעסקים ולאנשים פרטיים",
        inLanguage: "he-IL",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "דניאל סער",
        jobTitle: "כותבת תוכן וסטוריטלינג",
        url: siteUrl,
        knowsLanguage: "he",
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
