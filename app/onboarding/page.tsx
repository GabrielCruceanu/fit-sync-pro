import { Metadata } from "next";
import { OnboardingScreen } from "@/modules/application/onboarding";

export const metadata: Metadata = {
  title: "Onboarding | FitSync",
  description:
    "Welcome to FitSync! Get started by creating an account and setting up your profile.",
};
export default function OnboardingPage() {
  return <OnboardingScreen />;
}
