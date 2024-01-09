export enum OnboardingType {
  Welcome = "WELCOME",
  Client = "CLIENT",
  Trainer = "TRAINER",
  Nutritionist = "NUTRITIONIST",
  Gym = "GYM",
}
export enum OnboardClientSteps {
  PersonalDetails = "PERSONAL_DETAILS",
  Goals = "GOALS",
  FoodPreferences = "FOOD_PREFERENCES",
  FitnessExperience = "FITNESS_EXPERIENCE",
  TrainingPreferences = "TRAINING_PREFERENCES",
  Availability = "AVAILABILITY",
  Location = "LOCATION",
  Notifications = "NOTIFICATIONS",
  Overview = "OVERVIEW",
}

export enum FitnessExperience {
  Beginner = "BEGINNER",
  Medium = "MEDIUM",
  Advanced = "ADVANCED",
}

export enum FitnessPreferences {
  Home = "HOME",
  Gym = "GYM",
  Outdoor = "OUTDOOR",
  GroupClass = "GROUP_CLASS",
  OneToOne = "ONE_TO_ONE",
}

export enum AvailabilityDays {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

export enum AvailabilityTime {
  Morning = "MORNING",
  Afternoon = "AFTERNOON",
  Evening = "EVENING",
}
