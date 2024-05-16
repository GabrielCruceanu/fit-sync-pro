"use client";
import { OnboardClientSteps } from "@/ts/enum";
import { useStore } from "@/store";
import {
  ClientOnboardingPersonalDetails,
  ClientOnboardingGoals,
  ClientOnboardingFoodPreferences,
  ClientOnboardingFitnessExperience,
  ClientOnboardingTrainingLocation,
  ClientOnboardingTrainingOnline,
  ClientOnboardingTrainingInPerson,
  ClientOnboardingTrainingAvailability,
  ClientOnboardingLocation,
} from "@/modules/application/onboarding/client";
import { ClientOnboardingNotifications } from "@/modules/application/onboarding/client/components/ClientOnboardingNotifications";
import { ClientOnboardingOverview } from "@/modules/application/onboarding/client/components/ClientOnboardingOverview";
export function ClientOnboardingScreen() {
  const clientSteps = useStore(
    (state) => state.onboarding.onboardingClientDetails.clientSteps,
  );
  switch (clientSteps) {
    case OnboardClientSteps.PersonalDetails:
      return <ClientOnboardingPersonalDetails />;
    case OnboardClientSteps.Goals:
      return <ClientOnboardingGoals />;
    case OnboardClientSteps.FoodPreferences:
      return <ClientOnboardingFoodPreferences />;
    case OnboardClientSteps.FitnessExperience:
      return <ClientOnboardingFitnessExperience />;
    case OnboardClientSteps.TrainingLocation:
      return <ClientOnboardingTrainingLocation />;
    case OnboardClientSteps.TrainingOnlinePreferences:
      return <ClientOnboardingTrainingOnline />;
    case OnboardClientSteps.TrainingInPersonPreferences:
      return <ClientOnboardingTrainingInPerson />;
    case OnboardClientSteps.Availability:
      return <ClientOnboardingTrainingAvailability />;
    case OnboardClientSteps.Location:
      return <ClientOnboardingLocation />;
    case OnboardClientSteps.Notifications:
      return <ClientOnboardingNotifications />;
    case OnboardClientSteps.Overview:
      return <ClientOnboardingOverview />;
  }
}
