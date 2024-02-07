"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardClientSteps, OnboardingInputError } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import { TrainingLocation } from "@/ts/enum/onboarding.enum";

export function ClientOnboardingTrainingLocation() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [trainingLocationError, setTrainingLocationError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.trainingLocation) {
      setTrainingLocationError(OnboardingInputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps:
        onboardingDetails?.trainingLocation === TrainingLocation.Online
          ? OnboardClientSteps.TrainingOnlinePreferences
          : OnboardClientSteps.TrainingPhysicalPreferences,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/fitness.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Preferințe de antrenament"}
      body={"Cum preferați să vă antrenați?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*TrainingLocation*/}
          <RadioGroup
            name={"training-location"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingLocation: e,
              });
              setTrainingLocationError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setTrainingLocationError(OnboardingInputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={trainingLocationError ? "danger" : "primary"}
            errorMessage={trainingLocationError}
            isInvalid={!!trainingLocationError}
            value={onboardingDetails.trainingLocation}
          >
            <RadioButton value={TrainingLocation.Online}>
              {TrainingLocation.Online}
            </RadioButton>

            <RadioButton value={TrainingLocation.Fizic}>
              {TrainingLocation.Fizic}
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
              clientSteps: OnboardClientSteps.FitnessExperience,
            })
          }
          type="button"
          radius={"sm"}
          color={"default"}
          fullWidth
        >
          Înapoi
        </Button>
      </div>
    </OnboardingLayout>
  );
}