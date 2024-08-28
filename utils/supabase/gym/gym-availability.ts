import { TypedSupabaseClient } from "@/ts/types";
import { GymAvailabilities } from "@/ts/types/gym";

export const getGymAvailabilityById = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: availability, error } = await supabase
    .from("gym_availability")
    .select("*")
    .eq("gym_id", id);

  if (error) {
    console.log("select gym availability by id error: ", error.message);
  }

  return availability as unknown as GymAvailabilities;
};
