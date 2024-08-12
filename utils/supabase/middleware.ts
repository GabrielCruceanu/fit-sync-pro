import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { ApplicationLinks } from "@/constants/links";

export async function updateSession(request: NextRequest) {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const protectedPaths = [
    ApplicationLinks.dashboard.link,
    ApplicationLinks.profile.link,
    ApplicationLinks.messages.link,
    ApplicationLinks.clientProgress.link,
    ApplicationLinks.notifications.link,
    ApplicationLinks.settings.link,
    ApplicationLinks.onboarding.link,
  ];

  if (!user && protectedPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL(ApplicationLinks.login.link, request.url),
    );
  }

  const authPaths = [
    ApplicationLinks.login.link,
    ApplicationLinks.signUp.link,
    ApplicationLinks.forgotPassword.link,
  ];

  if (user && authPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL(ApplicationLinks.dashboard.link, request.url),
    );
  }
  console.log("user:", user);

  const onboardingPaths = [
    ApplicationLinks.dashboard.link,
    ApplicationLinks.profile.link,
    ApplicationLinks.messages.link,
    ApplicationLinks.clientProgress.link,
    ApplicationLinks.notifications.link,
    ApplicationLinks.settings.link,
  ];
  if (user) {
    let { data: usersProfile, error } = await supabase
      .from("users")
      .select("hasOnboarding")
      .eq("id", user?.id);
    console.log("usersProfile:", usersProfile);
    console.log("error:", error);
    const userProfile = usersProfile?.length ? usersProfile[0] : null;
    console.log("userProfile", userProfile);

    if (
      user &&
      !userProfile?.hasOnboarding &&
      (request.nextUrl.pathname === ApplicationLinks.onboarding.link ||
        onboardingPaths.includes(request.nextUrl.pathname))
    ) {
      return NextResponse.redirect(
        new URL(
          request.nextUrl.pathname === ApplicationLinks.onboarding.link
            ? ApplicationLinks.dashboard.link
            : ApplicationLinks.onboarding.link,
          request.url,
        ),
      );
    }
  }

  return supabaseResponse;
}
