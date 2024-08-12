import { env } from "@/env.mjs";

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
