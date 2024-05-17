"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import {
  trainingAvailabilityDays,
  trainingAvailabilityTime,
} from "@/constants/availability";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";

export function GymOnboardingAvailability() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingGymDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingGymDetails,
  );

  const [availabilityError, setAvailabilityError] = useState("");
  const [availabilityTimeError, setAvailabilityTimeError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      !onboardingDetails?.availabilityDays ||
      (onboardingDetails?.availabilityDays &&
        onboardingDetails?.availabilityDays?.length === 0)
    ) {
      setAvailabilityError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      !onboardingDetails?.availabilityTime ||
      (onboardingDetails?.availabilityTime &&
        onboardingDetails?.availabilityTime?.length === 0)
    ) {
      setAvailabilityTimeError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      gymSteps: OnboardGymSteps.Location,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/nutritionist.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Availability"}
      body={
        "Please select the days and time you are available to consult clients"
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Training Days*/}
          <CheckboxGroup
            label="Days you are available"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                availabilityDays: e,
              });
              setAvailabilityError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={availabilityError ? "danger" : "primary"}
            errorMessage={availabilityError}
            isInvalid={!!availabilityError}
            value={onboardingDetails.availabilityDays}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
              {trainingAvailabilityDays.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.availabilityDays?.includes(availability)
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
            label="Time you are available"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                availabilityTime: e,
              });
              setAvailabilityTimeError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={availabilityTimeError ? "danger" : "primary"}
            errorMessage={availabilityTimeError}
            isInvalid={!!availabilityTimeError}
            value={onboardingDetails.availabilityTime}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2">
              {trainingAvailabilityTime.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.availabilityTime?.includes(availability)
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
              gymSteps: OnboardGymSteps.Contact,
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
