import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { OnboardingClientDetails, TypedUserDetails } from "@/ts/types";
import { Onboarding, OnboardingTrainerDetails } from "@/ts/types/onboarding";
import {
  OnboardClientSteps,
  OnboardingType,
  OnboardTrainerSteps,
} from "@/ts/enum";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  user: TypedUserDetails | null;
  userActions: {
    updateUser: (updatedUser: any) => void;
    fetchUser: () => Promise<void>;
  };
  trainers: any[];
  trainerActions: {
    fetchTrainers: () => Promise<void>;
  };
  onboarding: Onboarding;
  updateOnboardingType: (onboardingType: OnboardingType) => void;
  updateOnboardingClientDetails: (
    onboardingDetails: OnboardingClientDetails,
  ) => void;
  updateOnboardingTrainerDetails: (
    onboardingDetails: OnboardingTrainerDetails,
  ) => void;
};

export const useStore = create<State>()(
  persist(
    (set) => ({
      isLoading: false,
      setLoading: (loading) =>
        set((state) => ({ ...state, isLoading: loading })),
      user: null,
      userActions: {
        updateUser: (updatedUser) =>
          set((state) => ({
            user: {
              ...state.user,
              ...updatedUser,
            },
          })),
        fetchUser: async () => {
          const supabase = createClient();

          set((state) => ({
            ...state,
            isLoading: true,
          }));

          const { data: users, error } = await supabase
            .from("users")
            .select("*");

          if (users) {
            set((state) => ({
              ...state,
              user: users[0],
            }));
          }

          set((state) => ({
            ...state,
            isLoading: false,
          }));
        },
      },
      trainers: [],
      trainerActions: {
        fetchTrainers: async () => {
          const supabase = createClient();
          const { data: trainers, error } = await supabase
            .from("trainers")
            .select("*");
          if (error) throw error;
          set({ trainers });
        },
      },
      onboarding: {
        onboardingType: OnboardingType.Welcome,
        onboardingClientDetails: {
          clientSteps: OnboardClientSteps.PersonalDetails,
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
          trainingPhysicalPreferences: undefined,
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
    }),
    {
      name: "fit-sync-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
