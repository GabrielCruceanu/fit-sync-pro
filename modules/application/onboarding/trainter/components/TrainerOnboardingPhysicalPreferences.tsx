"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardingInputError, OnboardTrainerSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import { TrainingLocation, TrainingPhysic } from "@/ts/enum/onboarding.enum";

export function TrainerOnboardingPhysicalPreferences() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [
    trainingPhysicalPreferencesError,
    setTrainingPhysicalPreferencesError,
  ] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      onboardingDetails.trainingLocation?.includes(TrainingLocation.Fizic) &&
      !onboardingDetails.trainingPhysicalPreferences
    ) {
      setTrainingPhysicalPreferencesError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: OnboardTrainerSteps.Availability,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/client/trainer-desktop.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Antrenament Fizic"}
      body={
        "Selectați modul în care puteți ajuta clienții să se antreneze fizic."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*trainingOnlinePreferences*/}
          <CheckboxGroup
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingPhysicalPreferences: e,
              });
              setTrainingPhysicalPreferencesError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={trainingPhysicalPreferencesError ? "danger" : "primary"}
            errorMessage={trainingPhysicalPreferencesError}
            isInvalid={!!trainingPhysicalPreferencesError}
            value={onboardingDetails.trainingPhysicalPreferences}
          >
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingPhysicalPreferences?.includes(
                    TrainingPhysic.UnuLaUnu,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingPhysic.UnuLaUnu}>
                  {TrainingPhysic.UnuLaUnu}
                </Checkbox>
              </div>

              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingPhysicalPreferences?.includes(
                    TrainingPhysic.Grup,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingPhysic.Grup}>
                  {TrainingPhysic.Grup}
                </Checkbox>
              </div>
            </div>
          </CheckboxGroup>
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
              trainerSteps: onboardingDetails.trainingLocation?.includes(
                TrainingLocation.Online,
              )
                ? OnboardTrainerSteps.TrainingOnlinePreferences
                : OnboardTrainerSteps.FitnessExperience,
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
