import { TypedSupabaseClient } from "@/ts/types";
import { GymImagesGallery } from "@/ts/types/gym";

export const getGymGalleryByGymId = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gallery, error } = await supabase
    .from("gym_gallery")
    .select("*")
    .eq("gym_id", id);

  if (error) {
    console.log("select gym gallery by id error: ", error.message);
  }

  return gallery as unknown as GymImagesGallery;
};
