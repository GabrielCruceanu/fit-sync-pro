import { Gym, TypedSupabaseClient } from "@/ts/types";

export const createGymProfile = async (
  gym: Gym,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("gyms").upsert([gym]);

  if (error) {
    console.log("create gym profile error: ", error.message);
    return false;
  }
  location.reload();
};

export const getAllGyms = async (supabase: TypedSupabaseClient) => {
  const { data: gyms, error } = await supabase.from("gyms").select("*");

  if (error) {
    console.log("select gyms error: ", error.message);
  }

  return gyms as unknown as Gym[];
};

export const getGymProfile = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gym, error } = await supabase
    .from("gyms")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log("select gym profile error: ", error.message);
  }

  return gym as unknown as Gym;
};

export const getGymProfileByUserName = async (
  username: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gym, error } = await supabase
    .from("gyms")
    .select("*")
    .eq("username", username)
    .single();

  if (error) {
    console.log("select gym profile by username error: ", error.message);
  }

  return gym as unknown as Gym;
};
