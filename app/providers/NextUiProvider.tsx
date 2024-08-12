"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { Toaster } from "@/components/shared/toast/toaster";
import { Analytics } from "@/components/shared/analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
        <Analytics />
        <Toaster />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
