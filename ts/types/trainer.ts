import { Database } from "../supabase";

export type Trainer = Database["public"]["Tables"]["trainers"]["Row"];

export type Trainers = Array<Trainer>;

export type TrainerType = Database["public"]["Enums"]["trainer_type"];
