"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardTrainerSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, Select, SelectItem } from "@nextui-org/react";
import { TrainingLocation } from "@/ts/enum/onboarding.enum";
import { experienceList } from "@/constants/user";
import trainerTypes from "@/constants/trainer";
import { TrainerType } from "@/ts/types";
import { cn } from "@/lib/cn";
import { useOnboardingStore } from "@/store/onboarding";

export function TrainerOnboardingFitnessExperience() {
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [trainerLocationError, setTrainerLocationError] = useState("");
  const [trainerExperienceError, setTrainerExperienceError] = useState("");
  const [trainerTypeError, setTrainerTypeError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails.trainingLocation) {
      setTrainerLocationError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.trainingExperience) {
      setTrainerExperienceError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.trainerType) {
      setTrainerTypeError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: onboardingDetails.trainingLocation.includes(
        TrainingLocation.Online,
      )
        ? OnboardTrainerSteps.TrainingOnlinePreferences
        : OnboardTrainerSteps.TrainingPhysicalPreferences,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/trainer.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Fitness Experience"}
      body={
        "Please provide your fitness experience below. This will help us match you with the right clients."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/*TrainingType*/}
            <Select
              label="Training Type"
              className="bg-background"
              variant="bordered"
              placeholder="Choose"
              isRequired
              value={
                onboardingDetails.trainerType
                  ? onboardingDetails.trainerType
                  : ""
              }
              defaultSelectedKeys={
                onboardingDetails.trainerType
                  ? [onboardingDetails.trainerType]
                  : []
              }
              onChange={(event) => {
                updateOnboardingDetails({
                  ...onboardingDetails,
                  trainerType: event.target.value as TrainerType,
                });
                setTrainerTypeError("");
                setConfirmBtnDisable(false);
              }}
              color={trainerTypeError ? "danger" : "primary"}
              errorMessage={trainerTypeError}
              isInvalid={!!trainerTypeError}
            >
              {trainerTypes.map((trainer: TrainerType) => (
                <SelectItem
                  key={trainer}
                  value={trainer}
                  className="bg-background"
                >
                  {trainer}
                </SelectItem>
              ))}
            </Select>
            {/*NutritionistExperience*/}
            <Select
              label="Experience (years)"
              className="bg-background"
              variant="bordered"
              placeholder="Choose"
              isRequired
              value={
                onboardingDetails.trainingExperience
                  ? onboardingDetails.trainingExperience
                  : ""
              }
              defaultSelectedKeys={
                onboardingDetails.trainingExperience
                  ? [onboardingDetails.trainingExperience]
                  : []
              }
              onChange={(event) => {
                updateOnboardingDetails({
                  ...onboardingDetails,
                  trainingExperience: event.target.value,
                });
                setTrainerExperienceError("");
                setConfirmBtnDisable(false);
              }}
              color={trainerExperienceError ? "danger" : "primary"}
              errorMessage={trainerExperienceError}
              isInvalid={!!trainerExperienceError}
            >
              {experienceList.map((experience) => (
                <SelectItem
                  key={experience}
                  value={experience}
                  className="bg-background"
                >
                  {experience}
                </SelectItem>
              ))}
            </Select>
          </div>
          {/*TrainingLocation*/}
          <CheckboxGroup
            label="Choose how you would like to train your clients."
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                trainingLocation: e,
              });
              setTrainerLocationError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={trainerLocationError ? "danger" : "primary"}
            errorMessage={trainerLocationError}
            isInvalid={!!trainerLocationError}
            value={onboardingDetails.trainingLocation}
          >
            <div className="grid grid-cols-2 gap-2 w-full">
              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingLocation?.includes(
                    TrainingLocation.Online,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingLocation.Online}>
                  {TrainingLocation.Online}
                </Checkbox>
              </div>{" "}
              <div
                className={cn(
                  "w-full border-2 rounded p-2",
                  onboardingDetails?.trainingLocation?.includes(
                    TrainingLocation.InPerson,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingLocation.InPerson}>
                  {TrainingLocation.InPerson}
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
              trainerSteps: OnboardTrainerSteps.NutritionExperience,
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
