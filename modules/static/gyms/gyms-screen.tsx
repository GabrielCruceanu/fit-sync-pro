import GymsList from "@/modules/static/gyms/components/gyms-list";
import GymsHero from "@/modules/static/gyms/components/gyms-hero";

export async function GymsScreen() {
  return (
    <>
      <GymsHero />
      <GymsList />
    </>
  );
}
