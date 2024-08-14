import { Metadata } from "next";
import { NutritionistsScreen } from "@/modules/static/nutritionists";

export const metadata: Metadata = {
  title: "Nutritionists",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionists, and gyms with clients.",
};
export default function Page() {
  return <NutritionistsScreen />;
}
