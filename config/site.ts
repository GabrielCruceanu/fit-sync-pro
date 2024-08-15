export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FitSyncPro - Connection between clients and professionals",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
  ogImage: "https://fitsync.pro/twitter-cards/fitsyncpro.jpeg",
  author: "KaapoStudio",
  email: "kaapostudio@gmail.com",
  siteUrl: "https://kaapo.studio",
  metadataBase: new URL("https://fitsync.pro"),
  creator: "@kaapo.studio",
  canonical: new URL("https://fitsync.pro"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL("https://fitsync.pro"),
    siteName: "FitSyncPro",
    description:
      "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
    images: [
      {
        url: "/twitter-cards/fitsyncpro.jpeg",
        width: 1200,
        height: 630,
        alt: "FitSyncPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitSyncPro - Connection between clients and professionals",
    description:
      "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
    image: "/twitter-cards/fitsyncpro.jpeg",
    creator: "@KaapoStudio",
  },
  links: {
    portfolio: "https://kaapo.studio",
  },
};
