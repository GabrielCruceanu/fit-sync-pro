import TrainersHero from "@/modules/static/trainers/components/trainers-hero";
import TrainersList from "@/modules/static/trainers/components/trainers-list";

export async function TrainersScreen() {
  return (
    <>
      <TrainersHero />
      <TrainersList />
    </>
  );
}
