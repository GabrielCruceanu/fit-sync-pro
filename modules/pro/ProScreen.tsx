import ProHeader from "@/modules/pro/components/ProHeader";
import ProBenefits from "@/modules/pro/components/ProBenefits";
import ProPrices from "@/modules/pro/components/ProPrices";
import ProFaq from "@/modules/pro/components/ProFaq";

export function ProScreen() {
  return (
    <>
      <ProHeader />
      <ProBenefits />
      <ProPrices />
      <ProFaq />
    </>
  );
}
