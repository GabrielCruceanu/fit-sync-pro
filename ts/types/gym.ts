import { Database } from "../supabase";

export type Gym = Database["public"]["Tables"]["gyms"]["Row"];

export type Gyms = Array<Gym>;

export type GymType = Database["public"]["Enums"]["gym_type"];
