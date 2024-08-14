import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { Client, SettingsNavigation, Trainer, UserDetails } from "@/ts/types";
import { SettingsStep } from "@/ts/enum";

type NutritionistsState = {
  nutritionists: any[];
  filterNutritionists: any[];
  fetchNutritionists: () => Promise<void>;
  fetchFilteredNutritionists: (
    country: string,
    county: string,
    city: string,
    type: string,
  ) => Promise<void>;
};

export const useNutritionistsStore = create<NutritionistsState>()(
  (set, state) => ({
    ...state,

    nutritionists: [],
    filterNutritionists: [],
    fetchNutritionists: async () => {
      const supabase = createClient();
      const { data: nutritionists, error } = await supabase
        .from("nutritionists")
        .select("*");
      if (error) throw error;
      set({ nutritionists });
    },
    fetchFilteredNutritionists: async (country, county, city, type) => {
      console.log("Filtering trainers by:", country, county, city, type);
      const supabase = createClient();
      const { data: nutritionists, error } = await supabase
        .from("nutritionists")
        .select("*")
        .eq("country", country)
        .eq("state", county)
        .eq("city", city)
        .eq("nutritionistType", type);

      if (error) throw error;

      set({ filterNutritionists: nutritionists });
    },
  }),
);
