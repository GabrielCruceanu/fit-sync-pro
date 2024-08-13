import { Metadata } from "next";
import { OnboardingScreen } from "@/modules/application/onboarding";

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "Welcome to FitSyncPro! Get started by creating an account and setting up your profile.",
};
export default function OnboardingPage() {
  return <OnboardingScreen />;
}
