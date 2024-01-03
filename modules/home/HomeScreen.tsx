import HomeHero from "@/modules/home/components/HomeHero";
import HomeFeatures from "@/modules/home/components/HomeFeatures";
import HomeHowItWorks from "@/modules/home/components/HomeHowItWorks";
import HomeBeAPro from "@/modules/home/components/HomeBeAPro";
import HomeFaq from "@/modules/home/components/HomeFaq";

export function HomeScreen() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeHowItWorks />
      <HomeBeAPro />
      <HomeFaq />
    </>
  );
}
