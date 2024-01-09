import "./globals.css";
import { Providers } from "@/app/providers/NextUiProvider";
import { Inter } from "next/font/google";
import { defaultUrl } from "@/helpers/helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FitSync",
  description: "The fastest way to build apps with Next.js and Supabase",
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
