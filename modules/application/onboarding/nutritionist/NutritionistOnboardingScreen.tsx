import { useStore } from "@/store";
import { OnboardNutritionistSteps } from "@/ts/enum";
import { NutritionistOnboardingPersonalDetails } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingPersonalDetails";
import { NutritionistOnboardingPersonalContact } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingPersonalContact";

export function NutritionistOnboardingScreen() {
  const nutritionistSteps = useStore(
    (state) => state.onboarding.onboardingNutritionistDetails.nutritionistSteps,
  );

  switch (nutritionistSteps) {
    case OnboardNutritionistSteps.PersonalDetails:
      return <NutritionistOnboardingPersonalDetails />;
    case OnboardNutritionistSteps.Contact:
      return <NutritionistOnboardingPersonalContact />;
    default:
      return <>Nutritionist Default</>;
  }
}
