"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardClientSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/shared/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import { TrainingPhysic } from "@/ts/enum/onboarding.enum";
import { useOnboardingStore } from "@/store/onboarding";

export function ClientOnboardingTrainingInPerson() {
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [trainingPhysicalError, setTrainingPhysicalError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.trainingInPersonPreferences) {
      setTrainingPhysicalError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.Availability,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Training In Person"}
      body={"How would you like to train in person?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*TrainingPhysical*/}
          <RadioGroup
            name={"training-physical"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingInPersonPreferences: e,
                trainingOnlinePreferences: undefined,
              });
              setTrainingPhysicalError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setTrainingPhysicalError(InputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={trainingPhysicalError ? "danger" : "primary"}
            errorMessage={trainingPhysicalError}
            isInvalid={!!trainingPhysicalError}
            value={onboardingDetails.trainingInPersonPreferences}
          >
            <RadioButton value={TrainingPhysic.OneToOne}>
              {TrainingPhysic.OneToOne}
            </RadioButton>

            <RadioButton value={TrainingPhysic.Group}>
              {TrainingPhysic.Group}
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
              clientSteps: OnboardClientSteps.TrainingLocation,
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
