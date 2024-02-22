import { SettingsType } from "@/ts/enum";
import { Json } from "@/ts/supabase";

export type Settings = {
  settingsType: SettingsType;
  profileSettings: {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    profilePictureUrl: string | null;
    username: string | null;
  };
};
