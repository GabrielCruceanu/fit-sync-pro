import { Database } from "../supabase";

export type Gym = Database["public"]["Tables"]["gyms"]["Row"];
export type GymAvailability =
  Database["public"]["Tables"]["gym_availability"]["Row"];
export type GymImageGallery =
  Database["public"]["Tables"]["gym_gallery"]["Row"];

export type Gyms = Array<Gym>;
export type GymAvailabilities = Array<GymAvailability>;
export type GymImagesGallery = Array<GymImageGallery>;

export type GymType = Database["public"]["Enums"]["gym_type"];
