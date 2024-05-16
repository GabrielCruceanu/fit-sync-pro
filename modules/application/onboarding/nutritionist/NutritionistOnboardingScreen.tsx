import { useStore } from "@/store";
import { OnboardNutritionistSteps } from "@/ts/enum";
import { NutritionistOnboardingPersonalDetails } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingPersonalDetails";
import { NutritionistOnboardingPersonalContact } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingPersonalContact";
import { NutritionistOnboardingNutritionExperience } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingNutritionExperience";
import { NutritionistOnboardingAvailability } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingAvailability";
import { NutritionistOnboardingLocation } from "@/modules/application/onboarding/nutritionist/components/NutritionistOnboardingLocation";

export function NutritionistOnboardingScreen() {
  const nutritionistSteps = useStore(
    (state) => state.onboarding.onboardingNutritionistDetails.nutritionistSteps,
  );

  switch (nutritionistSteps) {
    case OnboardNutritionistSteps.PersonalDetails:
      return <NutritionistOnboardingPersonalDetails />;
    case OnboardNutritionistSteps.Contact:
      return <NutritionistOnboardingPersonalContact />;
    case OnboardNutritionistSteps.NutritionExperience:
      return <NutritionistOnboardingNutritionExperience />;
    case OnboardNutritionistSteps.Availability:
      return <NutritionistOnboardingAvailability />;
    case OnboardNutritionistSteps.Location:
      return <NutritionistOnboardingLocation />;
    default:
      return <h1>Default component</h1>;
  }
}
