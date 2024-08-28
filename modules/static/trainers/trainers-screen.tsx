import TrainersList from "@/modules/static/trainers/components/trainers-list";
import { getAllTrainers } from "@/utils/supabase/trainer/trainer-service";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function TrainersScreen() {
  const trainers = await getAllTrainers(createClient(cookies()));
  return (
    <>
      <TrainersList trainers={trainers} />
    </>
  );
}
