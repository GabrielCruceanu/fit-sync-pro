import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/ts/supabase";

export type { AuthState, AuthUser, AuthError } from "./auth";

export type { UserDetails, UsersDetails, UserType, GenderType } from "./user";

export type { Client, Clients, PhysicalDetails } from "./client";

export type {
  Nutritionist,
  Nutritionists,
  NutritionistType,
} from "./nutritionist";

export type { Trainer, Trainers, TrainerType } from "./trainer";

export type { Gym, Gyms, GymType } from "./gym";

export type { DashboardConfig, UserLayout } from "./dashboard";

export type { NavItem, SidebarNavItem, MainNavItem } from "./navigation";

export type {
  ClientFitnessGoalsType,
  OnboardingClientDetails,
  Location,
  LocationDetails,
  Birthdate,
  FitnessAvailability,
  Notifications,
  FoodAllergies as AlergiiAlimentare,
  FoodPreferences,
  TrainingAvailabilityDays,
  TrainingAvailabilityTime,
  OnboardingNutritionistDetails,
} from "./onboarding";
export type { Faq, Faqs } from "./faq";

export type { SettingsNavigation } from "./settings";

export type { Country, City, County } from "./location";

export type TypedSupabaseClient = SupabaseClient<Database>;

export type TypedPhysicalDetails =
  Database["public"]["Tables"]["physical_details"]["Row"];

export type TypedReviews = Database["public"]["Tables"]["reviews"]["Row"];
