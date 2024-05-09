import React from "react";
import { LayoutNavigation } from "@/modules/application/layout";

export function LayoutScreen({ children }: { children: React.ReactNode }) {
  return <LayoutNavigation>{children}</LayoutNavigation>;
}
