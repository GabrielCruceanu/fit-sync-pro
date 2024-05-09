import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { Client, TypedSupabaseClient } from "@/ts/types";
import { Database } from "@/ts/supabase";

export const supabaseClient = createClientComponentClient<Database>();

// CREATE ------------------------

export const createClientProfile = async (
  client: Client,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("clients").upsert([client]);

  if (error) {
    console.log("create client profile error: ", error.message);
    return false;
  }
};

// UPDATE ------------------------
// UPDATE ALL ROWS
export const updateClient = async ({
  supabase,
  client,
}: {
  supabase: TypedSupabaseClient;
  client: Client;
}) => {
  const { error } = await supabase
    .from("clients")
    .update({ ...client })
    .eq("client_id", client.client_id)
    .select();

  if (error) console.log("update client error:", error.message);
};
// READ ------------------------
// READ ALL ROWS
export const getClients = async ({
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
