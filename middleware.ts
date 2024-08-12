import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/login",
    "/sign-up",
    "/reset-password",
    "/update-password",
    "/dashboard",
    "/progress",
    "/profile",
    "/messages",
    "/notifications",
    "/settings",
    "/onboarding",
  ],
};
