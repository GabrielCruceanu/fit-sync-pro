import ProHero from "@/modules/static/pro/components/pro-hero";
import ProHowItWorks from "@/modules/static/pro/components/pro-how-it-works";
import ProFeatures from "@/modules/static/pro/components/pro-features";
import ProFaqs from "@/modules/static/pro/components/pro-faqs";
import ProPrices from "@/modules/static/pro/components/pro-prices";

export function ProScreen() {
  return (
    <>
      <ProHero />
      <ProFeatures />
      <ProHowItWorks />
      <ProPrices />
      <ProFaqs />
    </>
  );
}
