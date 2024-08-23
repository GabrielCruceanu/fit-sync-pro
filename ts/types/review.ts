import { Database } from "@/ts/supabase";

export type Review = Database["public"]["Tables"]["reviews"]["Row"];
export type Reviews = Array<Review>;
