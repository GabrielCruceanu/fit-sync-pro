export enum OnboardingType {
  Welcome = "Welcome",
  Client = "client",
  Trainer = "trainer",
  Nutritionist = "nutritionist",
  Gym = "gym",
}

export enum OnboardClientSteps {
  PersonalDetails = "PERSONAL_DETAILS",
  Goals = "GOALS",
  FoodPreferences = "FOOD_PREFERENCES",
  FitnessExperience = "FITNESS_EXPERIENCE",
  TrainingLocation = "TRAINING_LOCATION",
  TrainingOnlinePreferences = "TRAINING_ONLINE_PREFERENCES",
  TrainingPhysicalPreferences = "TRAINING_PHYSICAL_PREFERENCES",
  Availability = "AVAILABILITY",
  Location = "LOCATION",
  Notifications = "NOTIFICATIONS",
  Overview = "OVERVIEW",
}

export enum ClientFitnessGoals {
  WeightLoss = "Weight Loss",
  MuscleGain = "Muscle Gain",
  Flexibility = "Flexibility",
  HealthImprovement = "Health Improvement",
  GeneralFitness = "General Fitness",
}

export enum FitnessExperience {
  Beginner = "Beginner (Up to a year)",
  Intermediate = "Intermediate (1-2 years)",
  Advanced = "Advanced (Over 2 years)",
}

export enum FitnessPreferences {
  Home = "Home",
  Gym = "Gym",
  Outdoor = "Outdoor",
  GroupClass = "Group Class",
  OneToOne = "One To One",
}

export enum TrainingLocation {
  Online = "Online",
  InPerson = "In-Person",
}

export enum TrainingOnline {
  Home = "Home",
  Gym = "Gym",
  Outdoor = "Outdoor",
}

export enum TrainingPhysic {
  OneToOne = "One to One",
  Group = "Group",
}

export enum AvailabilityDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum AvailabilityTime {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Evening = "Evening",
}

export enum FoodPreferences {
  Omnivor = "Omnivor",
  Vegetarian = "Vegetarian",
  Vegan = "Vegan",
  Keto = "Keto",
}

export enum FoodAllergiesType {
  CerealsContainingGluten = "Cereals containing gluten",
  Crustaceans = "Crustaceans",
  Eggs = "Eggs",
  Fish = "Fish",
  Peanuts = "Peanuts",
  Soybeans = "Soybeans",
  MilkAndDairyProducts = "Milk and dairy products",
  Nuts = "Nuts",
  MustardAndDerivedProducts = "Mustard and derived products",
  SesameSeedsAndDerivedProducts = "Sesame seeds and derived products",
  SulfurDioxideAndSulfites = "Sulfur dioxide and sulfites",
  LupineAndDerivedProducts = "Lupine and derived products",
  MolluscsAndDerivedProducts = "Molluscs and derived products",
  CeleryAndDerivedProducts = "Celery and derived products",
  Others = "Others",
}

export enum OnboardTrainerSteps {
  PersonalDetails = "PERSONAL_DETAILS",
  Contact = "CONTACT",
  NutritionExperience = "NUTRITION_EXPERIENCE",
  FitnessExperience = "FITNESS_EXPERIENCE",
  TrainingLocation = "TRAINING_LOCATION",
  TrainingOnlinePreferences = "TRAINING_ONLINE_PREFERENCES",
  TrainingPhysicalPreferences = "TRAINING_PHYSICAL_PREFERENCES",
  Availability = "AVAILABILITY",
  Location = "LOCATION",
  Notifications = "NOTIFICATIONS",
  Overview = "OVERVIEW",
}

export enum IsNutritionist {
  Is = "Is",
  Not = "Not",
}
