import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ApplicationLinks } from "@/constants/links";
import { Database } from "@/ts/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { TypedUserDetails } from "@/ts/types";
import ProfileDropDown from "@/modules/static/layout/components/ProfileDropdown";

export default async function AuthButton() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: users } = await supabase.from("users").select("*");
  const user = users?.length ? (users[0] as TypedUserDetails) : null;
  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    <ProfileDropDown user={user}>
      <form action={signOut}>
        <button>{ApplicationLinks.logout.name}</button>
      </form>
    </ProfileDropDown>
  );
}
