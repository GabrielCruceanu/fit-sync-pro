import { TypedSupabaseClient } from "@/ts/types";
import { TrainerImagesGallery } from "@/ts/types/trainer";
import { NutritionistImagesGallery } from "@/ts/types/nutritionist";

export const getNutritionistGalleryByNutritionistId = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gallery, error } = await supabase
    .from("nutritionist_gallery")
    .select("*")
    .eq("nutritionist_id", id);

  if (error) {
    console.log("select nutritionist gallery by id error: ", error.message);
  }

  return gallery as unknown as NutritionistImagesGallery;
};
