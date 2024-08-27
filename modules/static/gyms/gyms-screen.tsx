import GymsList from "@/modules/static/gyms/components/gyms-list";
import { getAllGyms } from "@/utils/supabase/gym/gym-service";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GymsScreen() {
  const gyms = await getAllGyms(createClient(cookies()));
  return (
    <>
      <GymsList gyms={gyms} />
    </>
  );
}
