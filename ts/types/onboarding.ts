import {
  AvailabilityDays,
  AvailabilityTime,
  FitnessExperience,
  FitnessPreferences,
  OnboardClientSteps,
  OnboardingType,
} from "@/ts/enum";

export type Birthdate = {
  date?: string;
  month?: string;
  year?: string;
  full?: Date;
};

export type Location = {
  country: string;
  county: string;
  city: string;
};

export type FitnessAvailability = {
  days: AvailabilityDays;
  when: AvailabilityTime;
};

export type LocationDetails = {
  isCurrentLocationSelected: boolean;
  latitude: number;
  longitude: number;
  isManualLocationSelected: boolean;
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
  height?: number;
  weight?: number;
  goals?: string[];
  foodPreferences?: string[];
  isFoodAllergies?: boolean;
  foodAllergiesDescription?: string;
  fitnessExperience?: FitnessExperience;
  fitnessPreferences?: FitnessPreferences;
  fitnessAvailability?: FitnessAvailability;
  locationDetails?: LocationDetails;
  notifications?: Notifications;
};

export type Onboarding = {
  onboardingType: OnboardingType;
  onboardingDetails: OnboardingClientDetails;
};
