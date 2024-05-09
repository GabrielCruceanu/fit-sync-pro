import {
  TrainingAvailability,
  TrainingAvailabilityDays,
  TrainingAvailabilityTime,
} from "@/ts/types/onboarding";

export const availabilityDays: TrainingAvailability[] = [
  {
    value: "luni",
    title: "Luni",
  },
  {
    value: "marți",
    title: "Marți",
  },
  {
    value: "miercuri",
    title: "Miercuri",
  },
  {
    value: "joi",
    title: "Joi",
  },
  {
    value: "vineri",
    title: "Vineri",
  },
  {
    value: "sâmbătă",
    title: "Sâmbătă",
  },
  {
    value: "duminică",
    title: "Duminică",
  },
];
export const AvailabilityTime: TrainingAvailability[] = [
  {
    value: "dimineața",
    title: "Dimineața",
  },
  {
    value: "prânz",
    title: "Prânz",
  },
  {
    value: "seara",
    title: "Seara",
  },
];

export const trainingAvailabilityDays: TrainingAvailabilityDays[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const trainingAvailabilityTime: TrainingAvailabilityTime[] = [
  "Morning",
  "Lunch",
  "Evening",
];
