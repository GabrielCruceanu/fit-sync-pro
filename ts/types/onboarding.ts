import {
  AvailabilityDays,
  AvailabilityTime,
  FitnessExperience,
  OnboardClientSteps,
  OnboardingType,
} from "@/ts/enum";
import {
  ClientFitnessGoals,
  ClientFoodPreferences,
} from "@/ts/enum/onboarding.enum";

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
  gender?: string;
  country?: string;
  county?: string;
  city?: string;
  height?: number;
  weight?: number;
  goals?: ClientFitnessGoals;
  foodPreferences?: ClientFoodPreferences;
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

export type AlergiiAlimentare = {
  id: number;
  tip_alergie: string;
  exemplu_alimente_asociate: string;
  alimente_sigure: string;
};
export type Onboarding = {
  onboardingType: OnboardingType;
  onboardingDetails: OnboardingClientDetails;
};

export type TrainingAvailability = {
  title: string;
  value: string;
};
