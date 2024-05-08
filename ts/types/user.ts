import { Database } from "../supabase";

export type UserDetails = Database["public"]["Tables"]["users"]["Row"];

export type UsersDetails = Array<UserDetails>;

export type UserType = Database["public"]["Enums"]["user_type"];

export type GenderType = Database["public"]["Enums"]["gender_type"];
