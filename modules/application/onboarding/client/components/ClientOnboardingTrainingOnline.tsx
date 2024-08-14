"use client";
import { useStore } from "@/store/auth";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardClientSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/shared/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import { TrainingOnline } from "@/ts/enum/onboarding.enum";

export function ClientOnboardingTrainingOnline() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [trainingOnlineError, setTrainingOnlineError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.trainingOnlinePreferences) {
      setTrainingOnlineError(InputError.NeedOnlyOne);
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
      title={"Training Online"}
      body={"Where would you like to train online?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*TrainingOnline*/}
          <RadioGroup
            name={"training-online"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingOnlinePreferences: e,
                trainingInPersonPreferences: undefined,
              });
              setTrainingOnlineError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setTrainingOnlineError(InputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={trainingOnlineError ? "danger" : "primary"}
            errorMessage={trainingOnlineError}
            isInvalid={!!trainingOnlineError}
            value={onboardingDetails.trainingOnlinePreferences}
          >
            <RadioButton value={TrainingOnline.Home}>
              {TrainingOnline.Home}
            </RadioButton>

            <RadioButton value={TrainingOnline.Gym}>
              {TrainingOnline.Gym}
            </RadioButton>

            <RadioButton value={TrainingOnline.Outdoor}>
              {TrainingOnline.Outdoor}
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
