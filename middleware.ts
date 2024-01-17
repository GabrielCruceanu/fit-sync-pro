import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ApplicationLinks } from "@/constants/links";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: usersProfile, error } = await supabase
    .from("users")
    .select("hasOnboarding")
    .eq("id", user?.id);

  // if user is signed in and the current path is / redirect the user to /account
  if (
    (user && req.nextUrl.pathname === ApplicationLinks.login.link) ||
    (user && req.nextUrl.pathname === ApplicationLinks.signUp.link) ||
    (user && req.nextUrl.pathname === ApplicationLinks.forgotPassword.link)
  ) {
    return NextResponse.redirect(
      new URL(ApplicationLinks.dashboard.link, req.url),
    );
  }

  // if user is signed in and hasOnboarding redirect to /dashboard
  if (
    user &&
    usersProfile?.length &&
    usersProfile[0].hasOnboarding &&
    req.nextUrl.pathname === ApplicationLinks.onboarding.link
  ) {
    // return NextResponse.redirect(
    //   new URL(ApplicationLinks.dashboard.link, req.url),
    // );
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (
    (!user && req.nextUrl.pathname === ApplicationLinks.dashboard.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.profile.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.messages.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.clientProgress.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.notifications.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.settings.link) ||
    (!user && req.nextUrl.pathname === ApplicationLinks.onboarding.link)
  ) {
    return NextResponse.redirect(new URL(ApplicationLinks.login.link, req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/autentificare",
    "/inregistrare",
    "/resetare-parola",
    "/dashboard",
    "/progress",
    "/profile",
    "/messages",
    "/notifications",
    "/settings",
    "/onboarding",
  ],
};
