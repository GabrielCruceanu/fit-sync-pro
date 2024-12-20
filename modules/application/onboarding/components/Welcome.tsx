"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardingType } from "@/ts/enum";
import { useOnboardingStore } from "@/store/onboarding";

export function Welcome() {
  const updateOnboardingType = useOnboardingStore(
    (state) => state.updateOnboardingType,
  );
  return (
    <OnboardingLayout
      image={"/images/onboarding/welcome.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Welcome to FitSyncPro!"}
      body={"What type of account would you like to create?"}
    >
      <ul className="md:container px-3 mb-6 flex flex-wrap items-center justify-center">
        <li className="mt-3 h-fit w-full">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Client)}
            type="button"
            variant={"ghost"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Client.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Trainer)}
            type="button"
            variant={"ghost"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Trainer.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Nutritionist)}
            type="button"
            variant={"ghost"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Nutritionist.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Gym)}
            type="button"
            variant={"ghost"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Gym.toLowerCase()}
          </Button>
        </li>
      </ul>
    </OnboardingLayout>
  );
}
