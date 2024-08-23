import { TypedSupabaseClient, Trainer, Trainers } from "@/ts/types";
import { TrainerAvailabilities, TrainerAvailability } from "@/ts/types/trainer";

export const createTrainerProfile = async (
  trainer: Trainer,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("trainers").upsert([trainer]);

  if (error) {
    console.log("create trainer profile error: ", error.message);
    return false;
  }

  location.reload();
};

export const getAllTrainers = async (supabase: TypedSupabaseClient) => {
  const { data: trainers, error } = await supabase.from("trainers").select("*");

  if (error) {
    console.log("select trainers error: ", error.message);
  }

  return trainers as unknown as Trainers;
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

  return trainers as unknown as Trainer;
};

export const getTrainerProfileByUserName = async (
  username: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainers, error } = await supabase
    .from("trainers")
    .select("*")
    .eq("username", username)
    .single();

  if (error) {
    console.log("select trainer profile by username error: ", error.message);
  }

  return trainers as unknown as Trainer;
};

export const getTrainerAvailabilityById = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: availability, error } = await supabase
    .from("trainer_availability")
    .select("*")
    .eq("trainer_id", id);

  if (error) {
    console.log("select trainer availability by id error: ", error.message);
  }

  return availability as unknown as TrainerAvailabilities;
};
