import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { Client, SettingsNavigation, Trainer, UserDetails } from "@/ts/types";
import { SettingsStep } from "@/ts/enum";

type TrainersState = {
  trainers: any[];
  filterTrainers: any[];
  fetchTrainers: () => Promise<void>;
  fetchFilteredTrainers: (
    country: string,
    county: string,
    city: string,
    type: string,
  ) => Promise<void>;
};

export const useTrainersStore = create<TrainersState>()((set, state) => ({
  ...state,

  trainers: [],
  filterTrainers: [],
  fetchTrainers: async () => {
    const supabase = createClient();
    const { data: trainers, error } = await supabase
      .from("trainers")
      .select("*");
    if (error) throw error;
    set({ trainers });
  },
  fetchFilteredTrainers: async (country, county, city, type) => {
    console.log("Filtering trainers by:", country, county, city, type);
    const supabase = createClient();
    const { data: trainers, error } = await supabase
      .from("trainers")
      .select("*")
      .eq("country", country)
      .eq("state", county)
      .eq("city", city)
      .eq("trainerType", type);

    if (error) throw error;
    console.log("Trainers:", trainers);
    set({ filterTrainers: trainers });
  },
}));
