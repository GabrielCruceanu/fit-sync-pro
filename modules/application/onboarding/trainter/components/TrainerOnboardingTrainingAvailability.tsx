"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import {
  OnboardClientSteps,
  OnboardingInputError,
  OnboardTrainerSteps,
} from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import { AvailabilityDays, AvailabilityTime } from "@/constants/availability";
import { TrainingLocation } from "@/ts/enum/onboarding.enum";

export function TrainerOnboardingTrainingAvailability() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [trainingAvailabilityError, setTrainingAvailabilityError] =
    useState("");
  const [trainingAvailabilityTimeError, setTrainingAvailabilityTimeError] =
    useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      !onboardingDetails?.trainingAvailabilityDays ||
      (onboardingDetails?.trainingAvailabilityDays &&
        onboardingDetails?.trainingAvailabilityDays?.length === 0)
    ) {
      setTrainingAvailabilityError(OnboardingInputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      !onboardingDetails?.trainingAvailabilityTime ||
      (onboardingDetails?.trainingAvailabilityTime &&
        onboardingDetails?.trainingAvailabilityTime?.length === 0)
    ) {
      setTrainingAvailabilityTimeError(OnboardingInputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: onboardingDetails.trainingLocation?.includes(
        TrainingLocation.Fizic,
      )
        ? OnboardTrainerSteps.Location
        : OnboardTrainerSteps.Overview,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/availability.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Disponibilitate"}
      body={"Când sunteți cel mai disponibil pentru antrenamente?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Training Days*/}
          <CheckboxGroup
            label="Zile în care puteți antrena"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingAvailabilityDays: e,
              });
              setTrainingAvailabilityError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={trainingAvailabilityError ? "danger" : "primary"}
            errorMessage={trainingAvailabilityError}
            isInvalid={!!trainingAvailabilityError}
            value={onboardingDetails.trainingAvailabilityDays}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
              {AvailabilityDays.map((availability) => (
                <div
                  key={availability.value}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.trainingAvailabilityDays?.includes(
                      availability.value,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={availability.value}>
                    {availability.title}
                  </Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
          {/*Training time*/}
          <CheckboxGroup
            label="Perioada în care puteți antrena"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingAvailabilityTime: e,
              });
              setTrainingAvailabilityTimeError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={trainingAvailabilityTimeError ? "danger" : "primary"}
            errorMessage={trainingAvailabilityTimeError}
            isInvalid={!!trainingAvailabilityTimeError}
            value={onboardingDetails.trainingAvailabilityTime}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2">
              {AvailabilityTime.map((availability) => (
                <div
                  key={availability.value}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.trainingAvailabilityTime?.includes(
                      availability.value,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={availability.value}>
                    {availability.title}
                  </Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
        </div>
      </div>
      <div>
        <Button
          onClick={() => inputsAreOk()}
          type="button"
          color={"primary"}
          fullWidth
          radius={"sm"}
          disabled={confirmBtnDisable}
          className="mb-3"
        >
          Continuă
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              trainerSteps: OnboardTrainerSteps.TrainingPhysicalPreferences,
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
