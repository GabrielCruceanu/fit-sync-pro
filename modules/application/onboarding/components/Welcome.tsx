"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardingType } from "@/ts/enum";
import { useStore } from "@/store";

export function Welcome() {
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);
  return (
    <OnboardingLayout
      image={"/images/onboarding/welcome.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Bun venit la FitSync!"}
      body={"Ce tip de cont ați dori să aveți?"}
    >
      <ul className="md:container px-3 mb-6 flex flex-wrap items-center justify-center">
        <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Client)}
            type="button"
            color={"primary"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Client.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Trainer)}
            type="button"
            color={"primary"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Trainer.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Nutritionist)}
            type="button"
            color={"primary"}
            fullWidth
            className="capitalize"
          >
            {OnboardingType.Nutritionist.toLowerCase()}
          </Button>
        </li>
        <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
          <Button
            onClick={() => updateOnboardingType(OnboardingType.Gym)}
            type="button"
            color={"primary"}
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
