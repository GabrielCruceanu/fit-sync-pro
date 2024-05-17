"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardClientSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import {
  trainingAvailabilityDays,
  trainingAvailabilityTime,
} from "@/constants/availability";

export function ClientOnboardingTrainingAvailability() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
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
      setTrainingAvailabilityError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      !onboardingDetails?.trainingAvailabilityTime ||
      (onboardingDetails?.trainingAvailabilityTime &&
        onboardingDetails?.trainingAvailabilityTime?.length === 0)
    ) {
      setTrainingAvailabilityTimeError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.Location,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Availability"}
      body={
        "Please select the days and time when you are available for training"
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Training Days*/}
          <CheckboxGroup
            label="Days you are available for training"
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
              {trainingAvailabilityDays.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.trainingAvailabilityDays?.includes(
                      availability,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={availability}>{availability}</Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
          {/*Training time*/}
          <CheckboxGroup
            label="Time you are available for training"
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
              {trainingAvailabilityTime.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.trainingAvailabilityTime?.includes(
                      availability,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={availability}>{availability}</Checkbox>
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
