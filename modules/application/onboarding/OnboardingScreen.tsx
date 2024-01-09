"use client";
import { Welcome } from "@/modules/application/onboarding/components/Welcome";
import { useStore } from "@/store";
import { OnboardingType } from "@/ts/enum";
import { ClientOnboarding } from "@/modules/application/onboarding/components/ClientOnboarding";
import { useEffect, useState } from "react";

export function OnboardingScreen() {
  const [isClient, setIsClient] = useState(false);
  const { onboarding } = useStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <OnboardingSwitch onboardingType={onboarding.onboardingType} />
  ) : (
    <h1>Loading</h1>
  );
}

export function OnboardingSwitch({
  onboardingType,
}: {
  onboardingType: OnboardingType | null;
}) {
  switch (onboardingType) {
    case OnboardingType.Client:
      return <ClientOnboarding />;
    default:
      return <Welcome />;
  }
}
