import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { PagesLinks } from "@/constants/links";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user);
  console.log(
    "user && req.nextUrl.pathname === /autentificare",
    user && req.nextUrl.pathname === "/autentificare",
  );
  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === PagesLinks.login.link) {
    return NextResponse.redirect(new URL(PagesLinks.account.link, req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname === PagesLinks.account.link) {
    return NextResponse.redirect(new URL(PagesLinks.login.link, req.url));
  }

  return res;
}

export const config = {
  matcher: ["/autentificare", "/cont"],
};
