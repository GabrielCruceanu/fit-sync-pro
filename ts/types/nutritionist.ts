import { Database } from "../supabase";

export type Nutritionist = Database["public"]["Tables"]["nutritionists"]["Row"];
export type NutritionistAvailability =
  Database["public"]["Tables"]["nutritionist_availability"]["Row"];

export type NutritionistImageTransform =
  Database["public"]["Tables"]["nutritionist_image_transforms"]["Row"];
export type NutritionistImageGallery =
  Database["public"]["Tables"]["nutritionist_gallery"]["Row"];
export type NutritionistCertification =
  Database["public"]["Tables"]["nutritionist_certifications"]["Row"];

export type Nutritionists = Array<Nutritionist>;
export type NutritionistAvailabilities = Array<NutritionistAvailability>;
export type NutritionistImagesTransform = Array<NutritionistImageTransform>;
export type NutritionistImagesGallery = Array<NutritionistImageGallery>;
export type NutritionistCertifications = Array<NutritionistCertification>;

export type NutritionistType = Database["public"]["Enums"]["nutritionist_type"];
