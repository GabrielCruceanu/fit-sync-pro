"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardClientSteps, InputError } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/shared/ratio-button";
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
      setTrainingLocationError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps:
        onboardingDetails?.trainingLocation === TrainingLocation.Online
          ? OnboardClientSteps.TrainingOnlinePreferences
          : OnboardClientSteps.TrainingInPersonPreferences,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/fitness.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Training Location"}
      body={"Where would you like to train?"}
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
                ? setTrainingLocationError(InputError.NeedOnlyOne)
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

            <RadioButton value={TrainingLocation.InPerson}>
              {TrainingLocation.InPerson}
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
              clientSteps: OnboardClientSteps.FitnessExperience,
            })
          }
          type="button"
          radius={"sm"}
          color={"default"}
          fullWidth
        >
          Back
        </Button>
      </div>
    </OnboardingLayout>
  );
}
