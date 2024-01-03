import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PagesLinks } from "@/constants/links";
import ProfileDropDown from "@/modules/layout/components/ProfileDropdown";

export default async function AuthButton() {
  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect(PagesLinks.login.link);
  };

  return (
    <ProfileDropDown>
      <form action={signOut}>
        <button>{PagesLinks.logout.name}</button>
      </form>
    </ProfileDropDown>
  );
}
