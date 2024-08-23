import "./globals.css";
// Import Swiper styles
import "swiper/css";
import { Providers } from "@/app/providers/NextUiProvider";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["fitness", "sync", "pro", "trainer", "nutritionist", "gym"],
  metadataBase: siteConfig.metadataBase,
  alternates: {
    canonical: siteConfig.canonical,
    types: {
      "application/rss+xml": [
        { url: "https://fitsync.pro/feed.xml", title: "FitSyncPro RSS Feed" },
      ],
    },
    languages: {
      en: "https://fitsync.pro",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "kaapo.studio",
      url: "https://kaapo.studio",
    },
  ],
  creator: siteConfig.creator,
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
