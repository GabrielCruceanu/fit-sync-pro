import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { Client, SettingsNavigation, Trainer, UserDetails } from "@/ts/types";
import { SettingsStep } from "@/ts/enum";

type SettingsState = {
  settings: SettingsNavigation;
  autoSettings: () => void;
  updateSettingsStep: (settingsStep: SettingsStep) => void;
  updateClientSettings: (profileSettings: Client) => void;
};

const supabase = createClient();
export const useSettingsStore = create<SettingsState>()((set, state) => ({
  ...state,
  settings: {
    settingsStep: SettingsStep.Profile,
    clientSettings: {
      birthDate: null,
      birthMonth: null,
      birthYear: null,
      birthday: null,
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
  autoSettings: async () => {
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
      const userAuth = await supabase.auth.getUser();
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userAuth.data.user?.id);

      if (users) {
        const user = users[0] as UserDetails;

        let trainerSettings: Trainer;
        let nutritionistSettings: Trainer;
        let clientSettings: Client;

        switch (user.userType) {
          case "trainer":
            const { data: trainers } = await supabase
              .from("trainers")
              .select("*")
              .eq("id", user.id);

            if (trainers?.length) trainerSettings = trainers[0];
            break;

          case "nutritionist":
            const { data: nutritionists } = await supabase
              .from("nutritionists")
              .select("*")
              .eq("id", user.id);

            if (nutritionists?.length) nutritionistSettings = nutritionists[0];
            break;

          default:
            const { data: clients } = await supabase
              .from("clients")
              .select("*")
              .eq("client_id", user.id);

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
      window.location.reload();
    }
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
}));
