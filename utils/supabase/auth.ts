import { AuthProvider } from "@/ts/enum";
import { SupabaseClient } from "@supabase/supabase-js";

export const AuthProviderService = (
  authProvider: AuthProvider,
  supabase: SupabaseClient,
) => {
  switch (authProvider) {
    case AuthProvider.Apple:
      return supabase.auth.signInWithOAuth({
        provider: "apple",
      });
    case AuthProvider.Google:
      return supabase.auth.signInWithOAuth({
        provider: "google",
      });
    case AuthProvider.Facebook:
      return supabase.auth.signInWithOAuth({
        provider: "facebook",
      });
  }
};
