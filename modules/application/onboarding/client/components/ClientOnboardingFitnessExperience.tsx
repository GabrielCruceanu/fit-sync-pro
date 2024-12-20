"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { FitnessExperience, InputError, OnboardClientSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/shared/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import { useOnboardingStore } from "@/store/onboarding";

export function ClientOnboardingFitnessExperience() {
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [fitnessExperienceError, setFitnessExperienceError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.fitnessExperience) {
      setFitnessExperienceError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.TrainingLocation,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Fitness Experience"}
      body={"How would you describe your fitness experience level?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*FoodPreferences*/}
          <RadioGroup
            name={"food-preferences"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                fitnessExperience: e as FitnessExperience,
              });
              setFitnessExperienceError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setFitnessExperienceError(InputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={fitnessExperienceError ? "danger" : "primary"}
            errorMessage={fitnessExperienceError}
            isInvalid={!!fitnessExperienceError}
            value={onboardingDetails.fitnessExperience}
          >
            <RadioButton value={FitnessExperience.Beginner}>
              {FitnessExperience.Beginner}
            </RadioButton>

            <RadioButton value={FitnessExperience.Intermediate}>
              {FitnessExperience.Intermediate}
            </RadioButton>

            <RadioButton value={FitnessExperience.Advanced}>
              {FitnessExperience.Advanced}
            </RadioButton>
          </RadioGroup>
        </div>
      </div>
      <div>
        <Button
          onClick={() => inputsAreOk()}
          type="button"
          color={"primary"}
          radius={"sm"}
          fullWidth
          disabled={confirmBtnDisable}
          className="mb-3"
        >
          Next
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              clientSteps: OnboardClientSteps.FoodPreferences,
            })
          }
          type="button"
          color={"default"}
          radius={"sm"}
          fullWidth
        >
          Back
        </Button>
      </div>
    </OnboardingLayout>
  );
}
