"use client";
import { OnboardTrainerSteps } from "@/ts/enum";
import { TrainerOnboardingPersonalDetails } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingPersonalDetails";
import { TrainerOnboardingPersonalContact } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingPersonalContact";
import { TrainerOnboardingNutritionExperience } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingNutritionExperience";
import { TrainerOnboardingFitnessExperience } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingFitnessExperience";
import { TrainerOnboardingPhysicalPreferences } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingPhysicalPreferences";
import { TrainerOnboardingOnlinePreferences } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingOnlinePreferences";
import { TrainerOnboardingTrainingAvailability } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingTrainingAvailability";
import { TrainerOnboardingPhysicalLocation } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingPhysicalLocation";
import { TrainerOnboardingOverview } from "@/modules/application/onboarding/trainter/components/TrainerOnboardingOverview";
import { useOnboardingStore } from "@/store/onboarding";

export function TrainerOnboardingScreen() {
  const trainerSteps = useOnboardingStore(
    (state) => state.onboarding.onboardingTrainerDetails.trainerSteps,
  );
  switch (trainerSteps) {
    case OnboardTrainerSteps.PersonalDetails:
      return <TrainerOnboardingPersonalDetails />;
    case OnboardTrainerSteps.Contact:
      return <TrainerOnboardingPersonalContact />;
    case OnboardTrainerSteps.NutritionExperience:
      return <TrainerOnboardingNutritionExperience />;
    case OnboardTrainerSteps.FitnessExperience:
      return <TrainerOnboardingFitnessExperience />;
    case OnboardTrainerSteps.TrainingOnlinePreferences:
      return <TrainerOnboardingOnlinePreferences />;
    case OnboardTrainerSteps.TrainingPhysicalPreferences:
      return <TrainerOnboardingPhysicalPreferences />;
    case OnboardTrainerSteps.Availability:
      return <TrainerOnboardingTrainingAvailability />;
    case OnboardTrainerSteps.Location:
      return <TrainerOnboardingPhysicalLocation />;
    case OnboardTrainerSteps.Overview:
      return <TrainerOnboardingOverview />;
  }
}
