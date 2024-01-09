import { create } from "zustand";
import { createClient } from "@/utils/supabase/client";
import { OnboardingClientDetails, TypedUserDetails } from "@/ts/types";
import { Onboarding } from "@/ts/types/onboarding";
import { OnboardClientSteps, OnboardingType } from "@/ts/enum";
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
  updateOnboardingDetails: (onboardingDetails: OnboardingClientDetails) => void;
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
        onboardingDetails: {
          clientSteps: OnboardClientSteps.PersonalDetails,
          username: undefined,
          phoneNumber: undefined,
          birthdate: undefined,
          gender: undefined,
          height: undefined,
          weight: undefined,
          goals: undefined,
          foodPreferences: undefined,
          isFoodAllergies: undefined,
          foodAllergiesDescription: undefined,
          fitnessExperience: undefined,
          fitnessPreferences: undefined,
          fitnessAvailability: undefined,
          locationDetails: undefined,
          notifications: undefined,
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
      updateOnboardingDetails: (
        updatedOnboardingDetails: OnboardingClientDetails,
      ) =>
        set((state) => ({
          ...state,
          onboarding: {
            ...state.onboarding,
            onboardingDetails: {
              ...state.onboarding.onboardingDetails,
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
