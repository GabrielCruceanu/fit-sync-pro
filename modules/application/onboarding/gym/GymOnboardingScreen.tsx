import { useStore } from "@/store";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import { GymOnboardingPersonalDetails } from "@/modules/application/onboarding/gym/components/GymOnboardingPersonalDetails";
import { GymOnboardingOverview } from "@/modules/application/onboarding/gym/components/GymOnboardingOverview";
import { GymOnboardingPersonalContact } from "@/modules/application/onboarding/gym/components/GymOnboardingPersonalContact";

export function GymOnboardingScreen() {
  const gymSteps = useStore(
    (state) => state.onboarding.onboardingGymDetails.gymSteps,
  );

  switch (gymSteps) {
    case OnboardGymSteps.PersonalDetails:
      return <GymOnboardingPersonalDetails />;
    case OnboardGymSteps.Contact:
      return <GymOnboardingPersonalContact />;
    // case OnboardGymSteps.Location:
    //   return <GymOnboardingPhysicalLocation />;
    default:
      return <GymOnboardingOverview />;
  }
}
