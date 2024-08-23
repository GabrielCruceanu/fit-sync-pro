import { TypedSupabaseClient } from "@/ts/types";
import { TrainerImageTransforms } from "@/ts/types/trainer";

export const getTrainerImageTransformsByTrainerId = async (
  trainerId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainerImageTransforms, error } = await supabase
    .from("trainer_image_transforms")
    .select("*")
    .eq("trainer_id", trainerId);

  if (error) {
    console.log("select trainer image transforms error: ", error.message);
  }

  return trainerImageTransforms as unknown as TrainerImageTransforms;
};
