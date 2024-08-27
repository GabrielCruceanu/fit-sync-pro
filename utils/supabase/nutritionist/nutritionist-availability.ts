import { TypedSupabaseClient } from "@/ts/types";
import { TrainerAvailabilities } from "@/ts/types/trainer";
import { NutritionistAvailabilities } from "@/ts/types/nutritionist";

export const getNutritionistAvailabilityById = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: availability, error } = await supabase
    .from("nutritionist_availability")
    .select("*")
    .eq("nutritionist_id", id);

  if (error) {
    console.log(
      "select nutritionist availability by id error: ",
      error.message,
    );
  }

  return availability as unknown as NutritionistAvailabilities;
};
