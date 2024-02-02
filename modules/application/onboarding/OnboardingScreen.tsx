"use client";
import { Welcome } from "@/modules/application/onboarding/components/Welcome";
import { useStore } from "@/store";
import { OnboardingType } from "@/ts/enum";
import { ClientOnboardingScreen } from "@/modules/application/onboarding/client";
import { useEffect, useState } from "react";
import { OnboardingSkeleton } from "@/modules/application/onboarding/components/OnboardingSkeleton";
import { TrainerOnboardingScreen } from "@/modules/application/onboarding/trainter";
import { createClient } from "@/utils/supabase/create-client";

export function OnboardingScreen() {
  const supabase = createClient();
  const [isClient, setIsClient] = useState(false);
  const { onboarding } = useStore();
  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user && sessionStorage.getItem("fit-sync-storage")) {
      sessionStorage.removeItem("fit-sync-storage");
    }
  };
  useEffect(() => {
    setIsClient(true);
    getUser();
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
    case OnboardingType.Trainer:
      return <TrainerOnboardingScreen />;
    default:
      return <Welcome />;
  }
}
