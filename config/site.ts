export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FitSyncPro - Connection between clients and professionals",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
  ogImage: "https://fitsync.pro/twitter-cards/fitsyncpro.jpeg",
  author: "KaapoStudio",
  email: "kaapostudio@gmail.com",
  siteUrl: "https://kaapo.studio",
  creator: "@kaapo.studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitsync.pro",
    siteName: "FitSyncPro",
    description:
      "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
    images: [
      {
        url: "https://fitsync.pro/twitter-cards/fitsyncpro.jpeg",
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
    image: "https://fitsync.pro/twitter-cards/fitsyncpro.jpeg",
    creator: "@KaapoStudio",
  },
  links: {
    portfolio: "https://kaapo.studio",
  },
};
