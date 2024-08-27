import { TypedSupabaseClient } from "@/ts/types";
import { TrainerImagesGallery } from "@/ts/types/trainer";

export const getTrainerGalleryByTrainerId = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gallery, error } = await supabase
    .from("trainer_gallery")
    .select("*")
    .eq("trainer_id", id);

  if (error) {
    console.log("select trainer gallery by id error: ", error.message);
  }

  return gallery as unknown as TrainerImagesGallery;
};
