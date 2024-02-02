export enum OnboardingInputError {
  UsernameInvalid = 'Caractere invalide, poti folosi doar "a-z", "0-9" si "_"',
  UsernameIsNotAvailable = "Numele de utilizator este luat.",
  InputRequired = "Acest camp este obligatoriu",
  NeedOnlyOne = "Este necesar sa selectati unul din aceste campuri",
  OnlyLetter = 'Caractere invalide sau prea putine, foloseste doar "a-z"',
  OnlyNumbers = 'Caractere invalide sau prea putine, foloseste doar "0-9"',
  HeightGreater = "Inaltimea treabuie sa fie mai mare de 50 cm",
  WeightGreater = "Greutatea treabuie sa fie mai mare de 30 Kg",
  Website = "Link-ul trebuie se fie www.example.ro",
  Facebook = "Link-ul trebuie se fie www.facebook.ro/username",
  Twitter = "Link-ul trebuie se fie www.twitter.ro/username",
  Instagram = "Link-ul trebuie se fie www.instagram.ro/username",
}

export enum OnboardingType {
  Welcome = "Welcome",
  Client = "Client",
  Trainer = "Trainer",
  Nutritionist = "Nutritionist",
  Gym = "Sala",
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
  PierdereInGreutate = "Pierdere în greutate",
  CrestereMusculara = "Creștere musculară",
  FlexibilitateSiMobilitate = "Flexibilitate și mobilitate",
  ImbunatatireaSanatatii = "Îmbunătățirea sănătății",
  IntretinereGeneralaDeFitness = "Întreținere generală de fitness",
}

export enum FitnessExperience {
  Incepator = "Începător (Pana intr-un an)",
  Intermediar = "Intermediar (1-2 ani de sala)",
  Avansat = "Avansat (peste 2 ani)",
}

export enum TrainingLocation {
  Online = "Online",
  Fizic = "Fizic",
}

export enum TrainingOnline {
  Acasa = "Acasă",
  Gym = "La o sală",
  Outdoor = "Activități în aer liber",
}

export enum TrainingPhysic {
  UnuLaUnu = "Antrenament unu-la-unu",
  Grup = "Antrenamente de grup",
}

export enum FoodPreferences {
  Omnivor = "Omnivor",
  Vegetarian = "Vegetarian",
  Vegan = "Vegan",
  Keto = "Keto",
}

export enum FoodAllergiesType {
  CerealeCareContinGluten = "Cereale care contin gluten",
  Crustacee = "Crustacee",
  Oua = "Ouă",
  Peste = "Peste",
  Arahide = "Arahide",
  Soia = "Soia",
  LapteSiProduseDerivate = "Lapte și produse derivate",
  FructeCuCoaja = "Fructe cu coajă",
  MustarSiProduseDerivate = "Muștar și produse derivate",
  SeminţeDeSusanSiProduseDerivate = "Seminţe de susan și produse derivate",
  DioxidDeSulfSiSulfiti = "Dioxid de sulf și sulfiţi",
  LupinSiProduseDerivate = "Lupin și produse derivate",
  MolușteSiProduseDerivate = "Moluște și produse derivate",
  TelinaSiProduseDerivate = "Telina și produse derivate",
  Altele = "Altele",
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

export enum OnboardTrainerSteps {
  PersonalDetails = "PERSONAL_DETAILS",
  Contact = "Contact",
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

export enum IsOrNot {
  Is = "Da",
  Not = "Nu",
}
