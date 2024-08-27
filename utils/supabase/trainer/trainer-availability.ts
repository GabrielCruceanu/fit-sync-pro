import { TypedSupabaseClient } from "@/ts/types";
import { TrainerAvailabilities } from "@/ts/types/trainer";

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
