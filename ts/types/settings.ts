import { SettingsStep } from "@/ts/enum";
import { Birthdate, Client, Gym, Nutritionist, Trainer } from "@/ts/types";

export type SettingsNavigation = {
  settingsStep: SettingsStep;
  clientSettings: Client;
  trainerSettings: Trainer;
  // nutritionistSettings: Nutritionist;
  // gymSettings: Gym;
};

export type ProfileSettings = {
  username?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  profilePictureUrl?: string;
  activeClients?: string;
  birthdate?: Birthdate;
  phoneNumber?: string;
  city?: string;
  country?: string;
  state?: string;
};
