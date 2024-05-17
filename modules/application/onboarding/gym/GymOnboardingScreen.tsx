import { useStore } from "@/store";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import { GymOnboardingPersonalDetails } from "@/modules/application/onboarding/gym/components/GymOnboardingPersonalDetails";
import { GymOnboardingOverview } from "@/modules/application/onboarding/gym/components/GymOnboardingOverview";
import { GymOnboardingPersonalContact } from "@/modules/application/onboarding/gym/components/GymOnboardingPersonalContact";
import { GymOnboardingLocation } from "@/modules/application/onboarding/gym/components/GymOnboardingLocation";
import { GymOnboardingAvailability } from "@/modules/application/onboarding/gym/components/GymOnboardingAvailability";

export function GymOnboardingScreen() {
  const gymSteps = useStore(
    (state) => state.onboarding.onboardingGymDetails.gymSteps,
  );

  switch (gymSteps) {
    case OnboardGymSteps.PersonalDetails:
      return <GymOnboardingPersonalDetails />;
    case OnboardGymSteps.Contact:
      return <GymOnboardingPersonalContact />;
    case OnboardGymSteps.Availability:
      return <GymOnboardingAvailability />;
    case OnboardGymSteps.Location:
      return <GymOnboardingLocation />;
    default:
      return <GymOnboardingOverview />;
  }
}
