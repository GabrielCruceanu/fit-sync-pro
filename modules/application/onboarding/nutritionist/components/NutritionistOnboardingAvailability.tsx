"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardNutritionistSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import {
  trainingAvailabilityDays,
  trainingAvailabilityTime,
} from "@/constants/availability";

export function NutritionistOnboardingAvailability() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingNutritionistDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingNutritionistDetails,
  );

  const [nutritionAvailabilityError, setNutritionAvailabilityError] =
    useState("");
  const [nutritionAvailabilityTimeError, setNutritionAvailabilityTimeError] =
    useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      !onboardingDetails?.nutritionAvailabilityDays ||
      (onboardingDetails?.nutritionAvailabilityDays &&
        onboardingDetails?.nutritionAvailabilityDays?.length === 0)
    ) {
      setNutritionAvailabilityError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      !onboardingDetails?.nutritionAvailabilityTime ||
      (onboardingDetails?.nutritionAvailabilityTime &&
        onboardingDetails?.nutritionAvailabilityTime?.length === 0)
    ) {
      setNutritionAvailabilityTimeError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      nutritionistSteps: OnboardNutritionistSteps.Location,
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
            label="Days you are available to consult clients"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                nutritionAvailabilityDays: e,
              });
              setNutritionAvailabilityError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={nutritionAvailabilityError ? "danger" : "primary"}
            errorMessage={nutritionAvailabilityError}
            isInvalid={!!nutritionAvailabilityError}
            value={onboardingDetails.nutritionAvailabilityDays}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
              {trainingAvailabilityDays.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.nutritionAvailabilityDays?.includes(
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
            label="Time you are available to consult clients"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                nutritionAvailabilityTime: e,
              });
              setNutritionAvailabilityTimeError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={nutritionAvailabilityTimeError ? "danger" : "primary"}
            errorMessage={nutritionAvailabilityTimeError}
            isInvalid={!!nutritionAvailabilityTimeError}
            value={onboardingDetails.nutritionAvailabilityTime}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2">
              {trainingAvailabilityTime.map((availability) => (
                <div
                  key={availability}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.nutritionAvailabilityTime?.includes(
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
              nutritionistSteps: OnboardNutritionistSteps.NutritionExperience,
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
