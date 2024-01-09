import React from "react";
import { LayoutNavigation } from "@/modules/application/layout";
import { TypedUserDetails } from "@/ts/types";

export function LayoutScreen({
  children,
  user,
}: {
  children: React.ReactNode;
  user: TypedUserDetails | null;
}) {
  return <LayoutNavigation user={user}>{children}</LayoutNavigation>;
}
