import { Metadata } from "next";
import { OnboardingScreen } from "@/modules/application/onboarding";

export const metadata: Metadata = {
  title: "Integrare | FitSync",
  description:
    "FitSync este o platformă care dorește să îmbunătățească experiența clienților cu antrenorii și să facă munca antrenorilor mai ușoară oferindu-le mai multe unelte prin care își pot gestiona clienții mai ușor.",
};
export default function OnboardingPage() {
  return <OnboardingScreen />;
}
