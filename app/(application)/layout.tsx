import { LayoutScreen } from "@/modules/application/layout";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: users } = await supabase.from("users").select();
  const user = users ? users[0] : null;
  return <LayoutScreen user={user}>{children}</LayoutScreen>;
}
