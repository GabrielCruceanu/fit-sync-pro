"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardingInputError, OnboardTrainerSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  cn,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { TrainingLocation } from "@/ts/enum/onboarding.enum";
import { ExperienceList } from "@/constants/user";
import { TrainerTypeList } from "@/constants/trainer";

export function TrainerOnboardingFitnessExperience() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [trainerLocationError, setTrainerLocationError] = useState("");
  const [trainerExperienceError, setTrainerExperienceError] = useState("");
  const [trainerTypeError, setTrainerTypeError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails.trainingLocation) {
      setTrainerLocationError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.trainingExperience) {
      setTrainerExperienceError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.trainingType) {
      setTrainerTypeError(OnboardingInputError.InputRequired);
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
      image={"/images/onboarding/fitness.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Despre Fitness"}
      body={
        "Spuneți-ne mai multe despre experiența dumneavoastră în fitness și cum puteți ajuta clienții."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/*TrainingType*/}
            <Select
              label="Tip antrenor"
              className="bg-background"
              variant="bordered"
              placeholder="Alege"
              isRequired
              value={
                onboardingDetails.trainingType
                  ? onboardingDetails.trainingType
                  : ""
              }
              defaultSelectedKeys={
                onboardingDetails.trainingType
                  ? [onboardingDetails.trainingType]
                  : []
              }
              onChange={(event) => {
                updateOnboardingDetails({
                  ...onboardingDetails,
                  trainingType: event.target.value,
                });
                setTrainerTypeError("");
                setConfirmBtnDisable(false);
              }}
              color={trainerTypeError ? "danger" : "primary"}
              errorMessage={trainerTypeError}
              isInvalid={!!trainerTypeError}
            >
              {TrainerTypeList.map((trainer) => (
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
              label="Ani de experiență"
              className="bg-background"
              variant="bordered"
              placeholder="Alege"
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
              {ExperienceList.map((experience) => (
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
            label="Selectați modul în care vreți să antrenați clienții:"
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
                  onboardingDetails?.trainingPhysicalPreferences?.includes(
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
                  onboardingDetails?.trainingPhysicalPreferences?.includes(
                    TrainingLocation.Fizic,
                  )
                    ? "border-primary"
                    : "border-default",
                )}
              >
                <Checkbox value={TrainingLocation.Fizic}>
                  {TrainingLocation.Fizic}
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
              trainerSteps: OnboardTrainerSteps.NutritionExperience,
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
