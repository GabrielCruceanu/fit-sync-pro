import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import {
  Client,
  OnboardingClientDetails,
  SettingsNavigation,
  Trainer,
  UserDetails,
} from "@/ts/types";
import {
  Onboarding,
  OnboardingNutritionistDetails,
  OnboardingTrainerDetails,
} from "@/ts/types/onboarding";
import {
  OnboardClientSteps,
  OnboardingType,
  OnboardNutritionistSteps,
  OnboardTrainerSteps,
  SettingsStep,
} from "@/ts/enum";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isGoogleLoading: boolean;
  setIsGoogleLoading: (loading: boolean) => void;
  isFacebookLoading: boolean;
  setIsFacebookLoading: (loading: boolean) => void;
  user: UserDetails | null;
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
  updateOnboardingNutritionistDetails: (
    onboardingDetails: OnboardingNutritionistDetails,
  ) => void;
  settings: SettingsNavigation;
  updateSettingsStep: (settingsStep: SettingsStep) => void;
  updateClientSettings: (profileSettings: Client) => void;
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
      setUser: (user: UserDetails) => set((state) => ({ ...state, user })),
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
            const user = users[0] as UserDetails;
            console.log("userDetails", user);

            let trainerSettings: Trainer;
            let nutritionistSettings: Trainer;
            let clientSettings: Client;

            switch (user.userType) {
              case "trainer":
                const { data: trainers } = await supabase
                  .from("trainers")
                  .select("*")
                  .eq("id", user.id);
                console.log("trainers", trainers);

                if (trainers?.length) trainerSettings = trainers[0];
                break;

              case "nutritionist":
                const { data: nutritionists } = await supabase
                  .from("nutritionists")
                  .select("*")
                  .eq("id", user.id);
                console.log("nutritionists", nutritionists);

                if (nutritionists?.length)
                  nutritionistSettings = nutritionists[0];
                break;

              default:
                const { data: clients } = await supabase
                  .from("clients")
                  .select("*")
                  .eq("client_id", user.id);
                console.log("clients", clients);

                if (clients?.length) clientSettings = clients[0];
                break;
            }

            set((state) => ({
              ...state,
              user,
              settings: {
                ...state.settings,
                clientSettings: clientSettings,
                trainerSettings: trainerSettings,
              },
            }));
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
      settings: {
        settingsStep: SettingsStep.Profile,
        clientSettings: {
          birthDate: null,
          birthMonth: null,
          birthYear: null,
          city: null,
          client_id: "",
          country: null,
          email: null,
          firstName: null,
          fitnessExperience: null,
          foodAllergiesDescription: null,
          foodAllergiesType: null,
          foodPreferences: null,
          gender: null,
          goals: null,
          haveFoodAllergies: null,
          height: null,
          joined: "",
          lastName: null,
          phone: null,
          profilePictureUrl: null,
          state: null,
          trainingAvailabilityDays: null,
          trainingAvailabilityTime: null,
          trainingLocation: null,
          trainingOnlinePreferences: null,
          trainingPhysicalPreferences: null,
          username: null,
          userType: null,
          weight: null,
        },
        trainerSettings: {
          activeClients: null,
          biography: null,
          birthDate: null,
          birthMonth: null,
          birthYear: null,
          certificate: null,
          city: null,
          completedClients: null,
          country: null,
          email: null,
          facebook: null,
          firstName: null,
          gallery: null,
          gender: null,
          gymName: null,
          gymStreet: null,
          hasPremium: null,
          id: "",
          instagram: null,
          isNutritionist: null,
          joined: "",
          lastName: null,
          nutritionistDiets: null,
          nutritionistExperience: null,
          nutritionistType: null,
          phoneNumber: null,
          profilePictureUrl: null,
          state: null,
          trainerType: null,
          trainingAvailabilityDays: null,
          trainingAvailabilityTime: null,
          trainingExperience: null,
          trainingLocation: null,
          trainingOnlinePreferences: null,
          trainingPhysicalPreferences: null,
          twitter: null,
          type: null,
          username: null,
          website: null,
        },
      },
      updateSettingsStep: (updatedSettingsStep: SettingsStep) =>
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            settingsStep: updatedSettingsStep,
          },
        })),
      updateClientSettings: (updatedClientSettings: Client) =>
        set((state) => ({
          ...state,
          settings: {
            ...state.settings,
            clientSettings: {
              ...state.settings?.clientSettings,
              ...updatedClientSettings,
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
