import {
  AvailabilityDays,
  AvailabilityTime,
  FitnessExperience,
  OnboardClientSteps,
  OnboardingType,
  OnboardNutritionistSteps,
  OnboardTrainerSteps,
} from "@/ts/enum";
import { GenderType, UserType } from "./user";
import { NutritionistType } from "./nutritionist";
import { TrainerType } from "./trainer";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import { GymType } from "@/ts/types/gym";

export type ClientFitnessGoalsType =
  | "Weight Loss"
  | "Muscle Gain"
  | "Flexibility"
  | "Health Improvement"
  | "General Fitness";

export type FoodPreferences = "Omnivor" | "Vegetarian" | "Vegan" | "Keto";

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
  type?: UserType;
  foodPreferences?: FoodPreferences[];
  haveFoodAllergies?: boolean;
  foodAllergiesType?: string;
  foodAllergiesDescription?: string;
  fitnessExperience?: FitnessExperience;
  trainingLocation?: string;
  trainingInPersonPreferences?: string;
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

export type OnboardingNutritionistDetails = {
  nutritionistSteps: OnboardNutritionistSteps;
  firstname?: string;
  lastname?: string;
  username?: string;
  phoneNumber?: string;
  birthdate?: Birthdate;
  gender?: GenderType;
  country?: string;
  county?: string;
  city?: string;
  type?: UserType;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  nutritionistType?: NutritionistType;
  nutritionistExperience?: string;
  nutritionistDiets?: string[];
  nutritionLocation?: string[];
  nutritionPhysicalPreferences?: string[];
  nutritionOnlinePreferences?: string[];
  nutritionAvailabilityDays?: string[];
  nutritionAvailabilityTime?: string[];
  cabinetStreet?: string;
  cabinetName?: string;
  notificationsWorkout?: boolean;
  notificationsNutrition?: boolean;
  newsAndActualizations?: boolean;
  offersAndPromotions?: boolean;
};

export type OnboardingGymDetails = {
  gymSteps: OnboardGymSteps;
  username?: string;
  phoneNumber?: string;
  country?: string;
  county?: string;
  city?: string;
  street?: string;
  type?: UserType;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  activePersonalTrainers?: string;
  availabilityDays?: string[];
  availabilityTime?: string[];
  gymName?: string;
  gymType?: GymType;
  notificationsWorkout?: boolean;
  notificationsNutrition?: boolean;
  newsAndActualizations?: boolean;
  offersAndPromotions?: boolean;
};
export type FoodAllergies = {
  id: number;
  tip_alergie: string;
  exemplu_alimente_asociate: string;
  alimente_sigure: string;
};

export type Onboarding = {
  onboardingType: OnboardingType;
  onboardingClientDetails: OnboardingClientDetails;
  onboardingTrainerDetails: OnboardingTrainerDetails;
  onboardingNutritionistDetails: OnboardingNutritionistDetails;
  onboardingGymDetails: OnboardingGymDetails;
};

export type TrainingAvailability = {
  title: string;
  value: string;
};

export type TrainingAvailabilityDays =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type TrainingAvailabilityTime = "Morning" | "Lunch" | "Evening";
