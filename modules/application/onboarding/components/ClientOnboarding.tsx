"use client";
import { OnboardClientSteps } from "@/ts/enum";
import { useStore } from "@/store";
import { ClientOnboardingPersonalDetails } from "@/modules/application/onboarding/components/ClientOnboardingPersonalDetails";
import * as React from "react";
export function ClientOnboarding() {
  const clientSteps = useStore(
    (state) => state.onboarding.onboardingDetails.clientSteps,
  );
  switch (clientSteps) {
    case OnboardClientSteps.PersonalDetails:
      return <ClientOnboardingPersonalDetails />;
  }
}
