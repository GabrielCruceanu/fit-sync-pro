import NutritionistsHero from "@/modules/static/nutritionists/components/nutritionists-hero";
import NutritionistsList from "@/modules/static/nutritionists/components/nutritionists-list";

export async function NutritionistsScreen() {
  return (
    <>
      <NutritionistsHero />
      <NutritionistsList />
    </>
  );
}
