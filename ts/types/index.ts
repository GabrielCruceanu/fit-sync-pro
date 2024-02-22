import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/ts/supabase";

export type { AuthState, AuthUser, AuthError } from "./auth";

export type { DashboardConfig, UserLayout } from "./dashboard";

export type { NavItem, SidebarNavItem, MainNavItem } from "./navigation";

export type { TrainerDetails, NutritionistDetails } from "./details";

export type {
  OnboardingClientDetails,
  Location,
  LocationDetails,
  Birthdate,
  FitnessAvailability,
  Notifications,
  AlergiiAlimentare,
} from "./onboarding";

export type { Settings } from "./settings";

export type { Country, City, County } from "./location";

export type TypedSupabaseClient = SupabaseClient<Database>;

export type TypedUserDetails = Database["public"]["Tables"]["users"]["Row"];

export type TypedClientDetails = Database["public"]["Tables"]["clients"]["Row"];

export type TypedTrainerDetails =
  Database["public"]["Tables"]["trainers"]["Row"];

export type TypedNutritionistDetails =
  Database["public"]["Tables"]["nutritionists"]["Row"];

export type TypedGymDetails = Database["public"]["Tables"]["gyms"]["Row"];

export type TypedPhysicalDetails =
  Database["public"]["Tables"]["physical_details"]["Row"];

export type TypedReviews = Database["public"]["Tables"]["reviews"]["Row"];
