import {
  AvailabilityDays,
  AvailabilityTime,
  FitnessExperience,
  OnboardClientSteps,
  OnboardingType,
  OnboardTrainerSteps,
} from "@/ts/enum";
import { FoodPreferences } from "@/ts/enum/onboarding.enum";
import { GenderType, UserType } from "./user";
import { NutritionistType } from "./nutritionist";
import { TrainerType } from "./trainer";

export type ClientFitnessGoalsType =
  | "Weight Loss"
  | "Muscle Gain"
  | "Flexibility"
  | "Health Improvement"
  | "General Fitness";

export type Birthdate = {
  date?: string;
  month?: string;
  year?: string;
  full?: Date;
};

export type Location = {
  country?: string;
  county?: string;
  city?: string;
};

export type FitnessAvailability = {
  days: AvailabilityDays;
  when: AvailabilityTime;
};

export type LocationDetails = {
  isCurrentLocationSelected?: boolean;
  latitude?: number;
  longitude?: number;
  isManualLocationSelected?: boolean;
  location: Location;
};

export type Notifications = {
  workout: boolean;
  nutrition: boolean;
  newsAndActualizations: boolean;
  offersAndPromotions: boolean;
};

export type OnboardingClientDetails = {
  clientSteps: OnboardClientSteps;
  firstname?: string;
  lastname?: string;
  username?: string;
  phoneNumber?: string;
  birthdate?: Birthdate;
  gender?: GenderType;
  country?: string;
  county?: string;
  city?: string;
  height?: number;
  weight?: number;
  goals?: string[];
  foodPreferences?: FoodPreferences;
  haveFoodAllergies?: boolean;
  foodAllergiesType?: string;
  foodAllergiesDescription?: string;
  fitnessExperience?: FitnessExperience;
  trainingLocation?: string;
  trainingPhysicalPreferences?: string;
  trainingOnlinePreferences?: string;
  trainingAvailabilityDays?: string[];
  trainingAvailabilityTime?: string[];
  notificationsWorkout?: boolean;
  notificationsNutrition?: boolean;
  newsAndActualizations?: boolean;
  offersAndPromotions?: boolean;
};
export type OnboardingTrainerDetails = {
  trainerSteps: OnboardTrainerSteps;
  firstname?: string;
  lastname?: string;
  username?: string;
  phoneNumber?: string;
  birthdate?: Birthdate;
  gender?: GenderType;
  country?: string;
  county?: string;
  city?: string;
  gymStreet?: string;
  gymName?: string;
  type?: UserType;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  isNutritionist?: boolean;
  nutritionistType?: NutritionistType;
  nutritionistExperience?: string;
  nutritionistDiets?: string[];
  trainingLocation?: string[];
  trainingExperience?: string;
  trainerType?: TrainerType;
  trainingPhysicalPreferences?: string[];
  trainingOnlinePreferences?: string[];
  trainingAvailabilityDays?: string[];
  trainingAvailabilityTime?: string[];
  notificationsWorkout?: boolean;
  notificationsNutrition?: boolean;
  newsAndActualizations?: boolean;
  offersAndPromotions?: boolean;
};

export type AlergiiAlimentare = {
  id: number;
  tip_alergie: string;
  exemplu_alimente_asociate: string;
  alimente_sigure: string;
};
export type Onboarding = {
  onboardingType: OnboardingType;
  onboardingClientDetails: OnboardingClientDetails;
  onboardingTrainerDetails: OnboardingTrainerDetails;
};

export type TrainingAvailability = {
  title: string;
  value: string;
};
