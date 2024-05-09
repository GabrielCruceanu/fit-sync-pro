import { Database } from "../supabase";

export type Client = Database["public"]["Tables"]["clients"]["Row"];
export type Clients = Array<Client>;

export type PhysicalDetails =
  Database["public"]["Tables"]["physical_details"]["Row"];
