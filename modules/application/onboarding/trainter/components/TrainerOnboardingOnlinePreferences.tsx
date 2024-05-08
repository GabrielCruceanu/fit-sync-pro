"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardTrainerSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import { TrainingLocation, TrainingOnline } from "@/ts/enum/onboarding.enum";

export function TrainerOnboardingOnlinePreferences() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [trainingOnlinePreferencesError, setTrainingOnlinePreferencesError] =
    useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      onboardingDetails.trainingLocation?.includes(TrainingLocation.Online) &&
      !onboardingDetails.trainingOnlinePreferences
    ) {
      setTrainingOnlinePreferencesError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: onboardingDetails.trainingLocation?.includes(
        TrainingLocation.Physic,
      )
        ? OnboardTrainerSteps.TrainingPhysicalPreferences
        : OnboardTrainerSteps.Availability,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/online.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Antrenament Online"}
      body={
        "Selectați locul pentru care puteți ajută clienții să se antreneze online."
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
                trainingOnlinePreferences: e,
              });
              setTrainingOnlinePreferencesError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={trainingOnlinePreferencesError ? "danger" : "primary"}
            errorMessage={trainingOnlinePreferencesError}
            isInvalid={!!trainingOnlinePreferencesError}
            value={onboardingDetails.trainingOnlinePreferences}
          >
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingOnlinePreferences?.includes(
                    TrainingOnline.Home,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingOnline.Home}>
                  {TrainingOnline.Home}
                </Checkbox>
              </div>

              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingOnlinePreferences?.includes(
                    TrainingOnline.Gym,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingOnline.Gym}>
                  {TrainingOnline.Gym}
                </Checkbox>
              </div>

              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingOnlinePreferences?.includes(
                    TrainingOnline.Outdoor,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingOnline.Outdoor}>
                  {TrainingOnline.Outdoor}
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
          Next
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              trainerSteps: OnboardTrainerSteps.FitnessExperience,
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
