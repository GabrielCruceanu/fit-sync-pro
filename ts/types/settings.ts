import { SettingsType } from "@/ts/enum";

export type Settings = {
  settingsType: SettingsType;
  profileSettings: {
    username: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    profilePictureUrl: string | null;
    activeClients: string | null;
    birthDate: string | null;
    birthMonth: string | null;
    birthYear: string | null;
    phoneNumber: string | null;
    city: string | null;
    country: string | null;
    state: string | null;
  };
  trainerSettings: {
    description: string | null;
    gallery: string[] | null;
    certificate: boolean | null;
    completedClients: string | null;
    facebook: string | null;
    gymName: string | null;
    gymStreet: string | null;
    hasPremium: boolean | null;
    id: string;
    instagram: string | null;
    isNutritionist: boolean | null;
    joined: string;
    nutritionistDiets: string[] | null;
    nutritionistExperience: string | null;
    nutritionistType: string | null;
    trainerType: string | null;
    trainingAvailabilityDays: string[] | null;
    trainingAvailabilityTime: string[] | null;
    trainingExperience: string | null;
    trainingLocation: string[] | null;
    trainingOnlinePreferences: string[] | null;
    trainingPhysicalPreferences: string[] | null;
    twitter: string | null;
    type: string | null;
    website: string | null;
  };
};
