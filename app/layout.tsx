import "./globals.css";
import { Providers } from "@/app/providers/NextUiProvider";
import { Inter } from "next/font/google";
import { defaultUrl } from "@/helpers/helpers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FitSyncPro",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
  keywords: ["fitness", "sync", "pro", "trainer", "nutritionist", "gym"],
  referrer: "origin",
  publisher: "FitSyncPro",
  openGraph: {
    type: "website",
    url: "https:// Fit Sync. pro ",
    title: "FitSyncPro",
    description:
      "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
    siteName: "FitSyncPro",
    images: [{ url: "https://fitSync.pro/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://fitSync.pro/opengraph-image.png",
  },
  appleWebApp: {
    capable: true,
    title: "FitSyncPro",
    statusBarStyle: "black-translucent",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className + "dark text-foreground bg-background"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
