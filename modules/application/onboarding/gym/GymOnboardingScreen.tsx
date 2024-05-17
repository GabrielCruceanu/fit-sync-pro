import { useStore } from "@/store";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import { GymOnboardingPersonalDetails } from "@/modules/application/onboarding/gym/components/GymOnboardingPersonalDetails";

export function GymOnboardingScreen() {
  const gymSteps = useStore(
    (state) => state.onboarding.onboardingGymDetails.gymSteps,
  );

  switch (gymSteps) {
    case OnboardGymSteps.PersonalDetails:
      return <GymOnboardingPersonalDetails />;
    // case OnboardGymSteps.Contact:
    //   return <GymOnboardingPersonalContact />;
    // case OnboardGymSteps.Location:
    //   return <GymOnboardingPhysicalLocation />;
    // case OnboardGymSteps.Overview:
    //   return <GymOnboardingOverview />;
  }
}
