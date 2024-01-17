import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { TypedClientDetails, TypedSupabaseClient } from "@/ts/types";
import { Database } from "@/ts/supabase";

export const supabaseClient = createClientComponentClient<Database>();

// CREATE ------------------------

export const createClientProfile = async (
  user: User,
  client: TypedClientDetails,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("clients").upsert([client]);

  if (error) {
    console.log("create client profile error: ", error.message);
    return false;
  }
};

// UPDATE ------------------------

// READ ------------------------
// READ ALL ROWS
export const getClient = async ({
  supabase,
}: {
  supabase: TypedSupabaseClient;
}) => {
  let { data: clients, error } = await supabase.from("clients").select("*");
  if (error) {
    console.log("get client error: ", error.message);
  }
  return clients;
};

// DELETE ------------------------
export const deleteClient = async ({
  user,
  supabase,
}: {
  user: User;
  supabase: TypedSupabaseClient;
}) => {
  const { error } = await supabase
    .from("clients")
    .delete()
    .eq("client_id", user.id);

  if (error) {
    console.log("get client error: ", error.message);
  }
};
