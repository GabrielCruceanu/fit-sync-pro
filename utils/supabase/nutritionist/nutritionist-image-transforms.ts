import { TypedSupabaseClient } from "@/ts/types";
import { TrainerImageTransforms } from "@/ts/types/trainer";
import { NutritionistImagesTransform } from "@/ts/types/nutritionist";

export const getNutritionistImageTransformsByNutritionistId = async (
  nutritionistId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: nutritionistImageTransforms, error } = await supabase
    .from("nutritionist_image_transforms")
    .select("*")
    .eq("nutritionist_id", nutritionistId);

  if (error) {
    console.log("select nutritionist image transforms error: ", error.message);
  }

  return nutritionistImageTransforms as unknown as NutritionistImagesTransform;
};
