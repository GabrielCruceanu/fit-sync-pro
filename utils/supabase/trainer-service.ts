import { TypedSupabaseClient, TypedTrainerDetails } from "@/ts/types";
import { User } from "@supabase/auth-helpers-nextjs";

export const createTrainerProfile = async (
  user: User,
  trainer: TypedTrainerDetails,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("trainers").upsert([trainer]);

  if (error) {
    console.log("create trainer profile error: ", error.message);
    return false;
  }
  console.log("create  trainer profile data:");
  location.reload();
};

export const getAllTrainers = async (supabase: TypedSupabaseClient) => {
  const { data: trainers, error } = await supabase.from("trainers").select("*");

  if (error) {
    console.log("select trainers error: ", error.message);
  }

  console.log("select trainers data:", trainers);
  return trainers as unknown as TypedTrainerDetails[];
};

export const getTrainerProfile = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainers, error } = await supabase
    .from("trainers")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log("select trainer profile error: ", error.message);
  }

  console.log("select trainer profile data:", trainers);
  return trainers as unknown as TypedTrainerDetails;
};

export const getTrainerProfileByUserName = async (
  usernamr: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainers, error } = await supabase
    .from("trainers")
    .select("*")
    .eq("username", usernamr)
    .single();

  if (error) {
    console.log("select trainer profile by username error: ", error.message);
  }

  console.log("select trainer profile by username data:", trainers);
  return trainers as unknown as TypedTrainerDetails;
};
