"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { Toaster } from "@/components/toaster";
import { Analytics } from "@/components/analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
        <Analytics />
        <Toaster />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
