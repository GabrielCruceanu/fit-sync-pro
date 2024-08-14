import HomeHero from "./components/home-hero";
import HomeFeatures from "./components/home-features";
import HomeHowItWorks from "./components/home-how-it-works";
import HomeBeAPro from "./components/home-be-a-pro";
import HomeFaqs from "./components/home-faqs";

export function HomeScreen() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeHowItWorks />
      <HomeFaqs />
      <HomeBeAPro />
    </>
  );
}
