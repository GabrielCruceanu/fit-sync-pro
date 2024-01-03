import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { env } from "@/env.mjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_BASE_URL}${path}`;
}
