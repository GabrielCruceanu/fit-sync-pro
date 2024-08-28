import NutritionistsList from "@/modules/static/nutritionists/components/nutritionists-list";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { getAllNutritionists } from "@/utils/supabase/nutritionist/nutritionist-service";

export async function NutritionistsScreen() {
  const nutritionists = await getAllNutritionists(createClient(cookies()));
  return (
    <>
      <NutritionistsList nutritionists={nutritionists} />
    </>
  );
}
