import { User } from "@supabase/auth-helpers-nextjs";
import { Json } from "@/ts/supabase";
import { TypedSupabaseClient, UserDetails } from "@/ts/types";
import { supabaseClient } from "@/utils/supabase/client-service";

// CREATE
export const createUserName = async ({
  user,
  username,
  supabase,
}: {
  user: User;
  username: string;
  supabase: TypedSupabaseClient;
}) => {
  const { data, error } = await supabase.from("usernames").upsert([
    {
      id: user.id,
      username: username,
    },
  ]);
  if (error) {
    console.log("create username error: ", error.message);
  }
  return data;
};
// UPDATE
export const updateUserName = async (user: User, username: string) => {
  await supabaseClient
    .from("users")
    .update({
      username: username,
    })
    .eq("id", user.id);
};

export const updateUser = async ({
  user,
  username,
  firstName,
  lastName,
  name,
  billingAddress,
  paymentMethod,
  email,
  profile_picture_url,
  userType,
  supabase,
}: {
  user: User;
  username: string;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  billingAddress?: Json;
  paymentMethod?: Json;
  email: string;
  profile_picture_url: string | null;
  userType: UserDetails["userType"];
  supabase: TypedSupabaseClient;
}) => {
  await supabase
    .from("users")
    .update({
      billingAddress: billingAddress,
      paymentMethod: paymentMethod,
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      profilePictureUrl: profile_picture_url,
      name: name,
      userType: userType,
      hasOnboarding: true,
    })
    .eq("id", user.id);
};
