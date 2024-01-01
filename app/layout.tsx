import { GeistSans } from 'geist/font/sans'
import './globals.css'
import {Providers} from "@/app/providers/NextUiProvider";
import { Inter } from "next/font/google";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'FitSync',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="ro" className={GeistSans.className}>
    //   <body className="bg-background text-foreground">
    //     <main className="min-h-screen flex flex-col items-center">
    //       {children}
    //     </main>
    //   </body>
    // </html>
  <html lang="ro">
  <body className={inter.className + "dark text-foreground bg-background"}>
  <Providers>{children}</Providers>
  </body>
  </html>
  )
}
