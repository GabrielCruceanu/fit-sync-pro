import { useStore } from "@/store";
import { OnboardNutritionistSteps } from "@/ts/enum";
import { NutritionistOnboardingPersonalDetails } from "./components/NutritionistOnboardingPersonalDetails";

export function NutritionistOnboardingScreen() {
  const nutritionistSteps = useStore(
    (state) => state.onboarding.onboardingNutritionistDetails.nutritionistSteps,
  );

  switch (nutritionistSteps) {
    case OnboardNutritionistSteps.PersonalDetails:
      return <NutritionistOnboardingPersonalDetails />;
    default:
      return <>Nutritionist Default</>;
  }
}
