import { NutritionistCertifications } from "@/ts/types/nutritionist";
import { TypedSupabaseClient } from "@/ts/types";

export const getNutritionistCertificationsByNutritionistId = async (
  nutritionistId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: nutritionistCertifications, error } = await supabase
    .from("nutritionist_certifications")
    .select("*")
    .eq("nutritionist_id", nutritionistId);

  if (error) {
    console.log("select nutritionist certifications error: ", error.message);
  }

  return nutritionistCertifications as unknown as NutritionistCertifications;
};
