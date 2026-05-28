import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import { ClientOverlays } from "@/components/ClientOverlays";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielsaar.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "דניאל סער | סטוריטלינג עסקי ואישי",
    template: "%s | דניאל סער",
  },
  description:
    "כתיבה, עריכה ותכנון תוכן לעסקים ולאנשים פרטיים. סטוריטלינג עסקי, כתיבת סיפור אישי, תוכן שיווקי ומורשת משפחתית.",
  keywords: ["סטוריטלינג", "כתיבת תוכן", "סיפור אישי", "תוכן לעסקים", "דניאל סער"],
  authors: [{ name: "דניאל סער" }],
  creator: "דניאל סער",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: "דניאל סער",
    title: "דניאל סער | סטוריטלינג עסקי ואישי",
    description: "כתיבה, עריכה ותכנון תוכן לעסקים ולאנשים פרטיים.",
  },
  twitter: {
    card: "summary_large_image",
    title: "דניאל סער | סטוריטלינג עסקי ואישי",
    description: "כתיבה, עריכה ותכנון תוכן לעסקים ולאנשים פרטיים.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const a11yBoot = `(function(){try{var r=document.documentElement;var f=localStorage.getItem('a11y-font-scale');var c=localStorage.getItem('a11y-high-contrast');var m=localStorage.getItem('a11y-reduce-motion');var u=localStorage.getItem('a11y-underline-links');r.dataset.fontScale=f==='large'?'large':'normal';r.dataset.highContrast=c==='true'?'true':'false';r.dataset.reduceMotion=m==='true'?'true':'false';r.dataset.underlineLinks=u==='true'?'true':'false';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yBoot }} />
        <JsonLd />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main-content" className="skip-link">
          דילוג לתוכן הראשי
        </a>
        {children}
        <ClientOverlays />
      </body>
    </html>
  );
}
