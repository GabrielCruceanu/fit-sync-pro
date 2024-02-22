import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import {
  OnboardingClientDetails,
  Settings,
  TypedUserDetails,
} from "@/ts/types";
import { Onboarding, OnboardingTrainerDetails } from "@/ts/types/onboarding";
import {
  OnboardClientSteps,
  OnboardingType,
  OnboardTrainerSteps,
  SettingsType,
} from "@/ts/enum";
import { createJSONStorage, persist } from "zustand/middleware";
import { useRouter } from "next/navigation";

type State = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isGoogleLoading: boolean;
  setIsGoogleLoading: (loading: boolean) => void;
  isFacebookLoading: boolean;
  setIsFacebookLoading: (loading: boolean) => void;
  user: TypedUserDetails | null;
  setUser: (user: any) => void;
  autoLogin: () => void;
  signOut: () => void;
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
  settings: Settings;
  updateSettingsType: (settingsType: SettingsType) => void;
};

const supabase = createClient();
export const useStore = create<State>()(
  persist(
    (set, state) => ({
      ...state,
      isLoading: false,
      setIsLoading: (isLoading) =>
        set((state) => ({ ...state, isLoading: isLoading })),
      isGoogleLoading: false,
      setIsGoogleLoading: (loading) =>
        set((state) => ({ ...state, isGoogleLoading: loading })),
      isFacebookLoading: false,
      setIsFacebookLoading: (loading) =>
        set((state) => ({ ...state, isFacebookLoading: loading })),
      user: null,
      setUser: (user: TypedUserDetails) => set((state) => ({ ...state, user })),
      autoLogin: async () => {
        const canInitSupabaseClient = () => {
          // This function is just for the interactive tutorial.
          // Feel free to remove it once you have Supabase connected.
          try {
            createClient();
            return true;
          } catch (e) {
            return false;
          }
        };

        const isSupabaseConnected = canInitSupabaseClient();
        if (isSupabaseConnected) {
          const { data: users, error } = await supabase
            .from("users")
            .select("*");

          if (users) {
            const user = users[0] as TypedUserDetails;
            console.log("userDetails", user);
            set((state) => ({ ...state, user }));
          }
        } else {
          const { error } = await supabase.auth.signOut();
          if (error) throw error;
          sessionStorage.removeItem("fit-sync-storage");
          console.log("sign out");
          window.location.reload();
        }
      },
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        sessionStorage.removeItem("fit-sync-storage");
        console.log("sign out");
        window.location.reload();
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
      settings: {
        settingsType: SettingsType.Profile,
      },
      updateSettingsType: (updatedSettingsType: SettingsType) =>
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            settingsType: updatedSettingsType,
          },
        })),
    }),
    {
      name: "fit-sync-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
