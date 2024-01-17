"use client";
import { Welcome } from "@/modules/application/onboarding/components/Welcome";
import { useStore } from "@/store";
import { OnboardingType } from "@/ts/enum";
import { ClientOnboardingScreen } from "@/modules/application/onboarding/client";
import { useEffect, useState } from "react";
import { OnboardingSkeleton } from "@/modules/application/onboarding/components/OnboardingSkeleton";

export function OnboardingScreen() {
  const [isClient, setIsClient] = useState(false);
  const { onboarding } = useStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <OnboardingSwitch onboardingType={onboarding.onboardingType} />
  ) : (
    <OnboardingSkeleton />
  );
}

export function OnboardingSwitch({
  onboardingType,
}: {
  onboardingType: OnboardingType | null;
}) {
  switch (onboardingType) {
    case OnboardingType.Client:
      return <ClientOnboardingScreen />;
    default:
      return <Welcome />;
  }
}
