import { NutritionistCertifications } from "@/ts/types/nutritionist";
import { TypedSupabaseClient } from "@/ts/types";
import { TrainerCertifications } from "@/ts/types/trainer";

export const getTrainerCertificationsByTrainerId = async (
  trainerId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainerCertifications, error } = await supabase
    .from("trainer_certifications")
    .select("*")
    .eq("trainer_id", trainerId);

  if (error) {
    console.log("select trainer certifications error: ", error.message);
  }

  return trainerCertifications as unknown as TrainerCertifications;
};
