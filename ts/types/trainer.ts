import { Database } from "../supabase";

export type Trainer = Database["public"]["Tables"]["trainers"]["Row"];
export type TrainerAvailability =
  Database["public"]["Tables"]["trainer_availability"]["Row"];
export type TrainerImageTransform =
  Database["public"]["Tables"]["trainer_image_transforms"]["Row"];
export type TrainerImageGallery =
  Database["public"]["Tables"]["trainer_gallery"]["Row"];
export type TrainerCertification =
  Database["public"]["Tables"]["trainer_certifications"]["Row"];

export type Trainers = Array<Trainer>;
export type TrainerAvailabilities = Array<TrainerAvailability>;
export type TrainerImageTransforms = Array<TrainerImageTransform>;
export type TrainerImagesGallery = Array<TrainerImageGallery>;
export type TrainerCertifications = Array<TrainerCertification>;

export type TrainerType = Database["public"]["Enums"]["trainer_type"];
