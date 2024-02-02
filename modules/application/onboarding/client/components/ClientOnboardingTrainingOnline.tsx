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
      setTrainingOnlineError(OnboardingInputError.NeedOnlyOne);
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
      image={"/images/onboarding/online.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Preferințe de antrenament online"}
      body={"Cum preferi să te antrenezi online?"}
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
                trainingPhysicalPreferences: undefined,
              });
              setTrainingOnlineError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setTrainingOnlineError(OnboardingInputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={trainingOnlineError ? "danger" : "primary"}
            errorMessage={trainingOnlineError}
            isInvalid={!!trainingOnlineError}
            value={onboardingDetails.trainingOnlinePreferences}
          >
            <RadioButton value={TrainingOnline.Acasa}>
              {TrainingOnline.Acasa}
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
          Continuă
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
          Înapoi
        </Button>
      </div>
    </OnboardingLayout>
  );
}
