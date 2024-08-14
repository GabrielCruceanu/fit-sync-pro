import {
  OnboardClientSteps,
  OnboardingType,
  OnboardNutritionistSteps,
  OnboardTrainerSteps,
} from "@/ts/enum";
import {
  OnboardingClientDetails,
  OnboardingNutritionistDetails,
} from "@/ts/types";
import {
  Onboarding,
  OnboardingGymDetails,
  OnboardingTrainerDetails,
} from "@/ts/types/onboarding";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";

type OnboardingState = {
  onboarding: Onboarding;
  updateOnboardingType: (onboardingType: OnboardingType) => void;
  updateOnboardingClientDetails: (
    onboardingDetails: OnboardingClientDetails,
  ) => void;
  updateOnboardingTrainerDetails: (
    onboardingDetails: OnboardingTrainerDetails,
  ) => void;
  updateOnboardingNutritionistDetails: (
    onboardingDetails: OnboardingNutritionistDetails,
  ) => void;
  updateOnboardingGymDetails: (onboardingDetails: OnboardingGymDetails) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, state) => ({
      ...state,
      onboarding: {
        onboardingType: OnboardingType.Welcome,
        onboardingClientDetails: {
          clientSteps: OnboardClientSteps.PersonalDetails,
          type: OnboardingType.Client,
          firstname: undefined,
          lastname: undefined,
          username: undefined,
          phoneNumber: undefined,
          birthdate: undefined,
          gender: undefined,
          country: undefined,
          county: undefined,
          city: undefined,
          height: undefined,
          weight: undefined,
          goals: undefined,
          foodPreferences: undefined,
          haveFoodAllergies: undefined,
          foodAllergiesType: undefined,
          foodAllergiesDescription: undefined,
          fitnessExperience: undefined,
          trainingLocation: undefined,
          trainingInPersonPreferences: undefined,
          trainingOnlinePreferences: undefined,
          trainingAvailabilityDays: undefined,
          trainingAvailabilityTime: undefined,
          notificationsWorkout: true,
          notificationsNutrition: true,
          newsAndActualizations: true,
          offersAndPromotions: true,
        },
        onboardingTrainerDetails: {
          trainerSteps: OnboardTrainerSteps.PersonalDetails,
          firstname: undefined,
          lastname: undefined,
          username: undefined,
          phoneNumber: undefined,
          birthdate: undefined,
          gender: undefined,
          country: undefined,
          county: undefined,
          city: undefined,
          type: OnboardingType.Trainer,
          website: undefined,
          facebook: undefined,
          twitter: undefined,
          instagram: undefined,
          experience: undefined,
          proType: undefined,
          gymStreet: undefined,
          gymName: undefined,
          isNutritionist: undefined,
          nutritionistType: undefined,
          nutritionistExperience: undefined,
          nutritionistDiets: undefined,
          trainingLocation: undefined,
          trainingPhysicalPreferences: undefined,
          trainingOnlinePreferences: undefined,
          trainingAvailabilityDays: undefined,
          trainingAvailabilityTime: undefined,
          notificationsWorkout: true,
          notificationsNutrition: true,
          newsAndActualizations: true,
          offersAndPromotions: true,
        },
        onboardingNutritionistDetails: {
          nutritionistSteps: OnboardNutritionistSteps.PersonalDetails,
          type: OnboardingType.Nutritionist,
          notificationsWorkout: true,
          notificationsNutrition: true,
          newsAndActualizations: true,
          offersAndPromotions: true,
        },
        onboardingGymDetails: {
          gymSteps: OnboardGymSteps.PersonalDetails,
          type: OnboardingType.Gym,
          notificationsWorkout: true,
          notificationsNutrition: true,
          newsAndActualizations: true,
          offersAndPromotions: true,
        },
      },
      updateOnboardingType: (updatedOnboardingType) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingType: updatedOnboardingType,
          },
        })),
      updateOnboardingClientDetails: (
        updatedOnboardingDetails: OnboardingClientDetails,
      ) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingClientDetails: {
              ...state.onboarding.onboardingClientDetails,
              ...updatedOnboardingDetails,
            },
          },
        })),
      updateOnboardingTrainerDetails: (
        updatedOnboardingDetails: OnboardingTrainerDetails,
      ) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingTrainerDetails: {
              ...state.onboarding.onboardingTrainerDetails,
              ...updatedOnboardingDetails,
            },
          },
        })),
      updateOnboardingNutritionistDetails: (
        updatedOnboardingDetails: OnboardingNutritionistDetails,
      ) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingNutritionistDetails: {
              ...state.onboarding.onboardingNutritionistDetails,
              ...updatedOnboardingDetails,
            },
          },
        })),
      updateOnboardingGymDetails: (
        updatedOnboardingDetails: OnboardingGymDetails,
      ) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingGymDetails: {
              ...state.onboarding.onboardingGymDetails,
              ...updatedOnboardingDetails,
            },
          },
        })),
    }),
    {
      name: "fit-sync-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
