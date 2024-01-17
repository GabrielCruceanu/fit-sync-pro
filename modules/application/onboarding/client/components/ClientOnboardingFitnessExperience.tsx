"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import {
  FitnessExperience,
  OnboardClientSteps,
  OnboardingInputError,
} from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";

export function ClientOnboardingFitnessExperience() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingDetails,
  );

  const [fitnessExperienceError, setFitnessExperienceError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.fitnessExperience) {
      setFitnessExperienceError(OnboardingInputError.NeedOnlyOne);
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
      image={"/images/onboarding/fitness.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Experiența anterioară de fitness"}
      body={"Selectați experiența dvs. de fitness."}
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
                ? setFitnessExperienceError(OnboardingInputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={fitnessExperienceError ? "danger" : "primary"}
            errorMessage={fitnessExperienceError}
            isInvalid={!!fitnessExperienceError}
            value={onboardingDetails.fitnessExperience}
          >
            <RadioButton value={FitnessExperience.Incepator}>
              {FitnessExperience.Incepator}
            </RadioButton>

            <RadioButton value={FitnessExperience.Intermediar}>
              {FitnessExperience.Intermediar}
            </RadioButton>

            <RadioButton value={FitnessExperience.Avansat}>
              {FitnessExperience.Avansat}
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
          Continuă
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
          Înapoi
        </Button>
      </div>
    </OnboardingLayout>
  );
}
