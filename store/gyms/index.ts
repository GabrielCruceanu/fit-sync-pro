import { create } from "zustand";
import { createClient } from "@/utils/supabase/create-client";
import { GymType, NutritionistType } from "@/ts/types";

type GymsState = {
  gyms: any[];
  filterGyms: any[];
  fetchGyms: () => Promise<void>;
  fetchFilteredGyms: (
    country: string,
    county: string,
    city: string,
    type: GymType,
  ) => Promise<void>;
};

const supabase = createClient();

export const useGymsStore = create<GymsState>()((set, state) => ({
  ...state,

  gyms: [],
  filterGyms: [],
  fetchGyms: async () => {
    const { data: gyms, error } = await supabase.from("gyms").select("*");
    if (error) throw error;
    set({ gyms });
  },
  fetchFilteredGyms: async (country, county, city, type) => {
    const { data: gyms, error } = await supabase
      .from("gyms")
      .select("*")
      .eq("country", country)
      .eq("state", county)
      .eq("city", city)
      .eq("gymType", type);

    if (error) throw error;

    set({ filterGyms: gyms });
  },
}));
