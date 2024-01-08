import HomeHero from "./components/HomeHero";
import HomeFeatures from "./components/HomeFeatures";
import HomeHowItWorks from "./components/HomeHowItWorks";
import HomeBeAPro from "./components/HomeBeAPro";
import HomeFaq from "./components/HomeFaq";

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
