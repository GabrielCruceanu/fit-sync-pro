import { Nutritionist, TypedSupabaseClient } from "@/ts/types";

export const createNutritionistProfile = async (
  nutritionist: Nutritionist,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from("nutritionists").upsert([nutritionist]);

  if (error) {
    console.log("create nutritionist profile error: ", error.message);
    return false;
  }

  location.reload();
};

export const getAllNutritionists = async (supabase: TypedSupabaseClient) => {
  const { data: nutritionists, error } = await supabase
    .from("nutritionists")
    .select("*");

  if (error) {
    console.log("select nutritionists error: ", error.message);
  }

  console.log("select nutritionists data:", nutritionists);
  return nutritionists as unknown as Nutritionist[];
};

export const getNutritionistProfile = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: nutritionist, error } = await supabase
    .from("nutritionists")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log("select nutritionist profile error: ", error.message);
  }

  return nutritionist as unknown as Nutritionist;
};

export const getNutritionistProfileByUserName = async (
  username: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: nutritionist, error } = await supabase
    .from("nutritionists")
    .select("*")
    .eq("username", username)
    .single();

  if (error) {
    console.log(
      "select nutritionist profile by username error: ",
      error.message,
    );
  }

  console.log("select nutritionist profile by username data:", nutritionist);
  return nutritionist as unknown as Nutritionist;
};
