import { Database } from "../supabase";

export type Nutritionist = Database["public"]["Tables"]["nutritionists"]["Row"];

export type Nutritionists = Array<Nutritionist>;

export type NutritionistType = Database["public"]["Enums"]["nutritionist_type"];
