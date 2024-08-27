import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";

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

const supabase = createClient();
export const useNutritionistsStore = create<NutritionistsState>()(
  (set, state) => ({
    ...state,

    nutritionists: [],
    filterNutritionists: [],
    fetchNutritionists: async () => {
      const { data: nutritionists, error } = await supabase
        .from("nutritionists")
        .select("*");
      if (error) throw error;
      set({ nutritionists });
    },
    fetchFilteredNutritionists: async (country, county, city, type) => {
      console.log("Filtering trainers by:", country, county, city, type);
      const { data: nutritionists, error } = await supabase
        .from("nutritionists")
        .select("*")
        .eq("country", country)
        .eq("state", county)
        .eq("city", city);
      // .eq("nutritionistType", type as NutritionistType);

      if (error) throw error;
      console.log("Filtered nutritionist:", nutritionists);
      console.log("Filtered nutritionist error:", error);
      set({ filterNutritionists: nutritionists });
    },
  }),
);
