"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import {
  FoodPreferences,
  OnboardClientSteps,
  InputError,
  OnboardTrainerSteps,
} from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import {
  Checkbox,
  CheckboxGroup,
  cn,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { FoodAllergies, FoodDiets } from "@/constants/foods";
import { AvailabilityDays } from "@/constants/availability";
import { IsNutritionist } from "@/ts/enum/onboarding.enum";
import { experienceList } from "@/constants/user";
import nutritionistTypes from "@/constants/nutritionists";
import { NutritionistType } from "@/ts/types";

export function TrainerOnboardingNutritionExperience() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [isNutritionistError, setIsNutritionistError] = useState("");
  const [nutritionistTypeError, setNutritionistTypeError] = useState("");
  const [nutritionistDietsError, setNutritionistDietsError] = useState("");
  const [nutritionistExperienceError, setNutritionistExperienceError] =
    useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (
      onboardingDetails?.isNutritionist &&
      !onboardingDetails.nutritionistType
    ) {
      setNutritionistTypeError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      onboardingDetails?.isNutritionist &&
      !onboardingDetails.nutritionistExperience
    ) {
      setNutritionistExperienceError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      (onboardingDetails?.isNutritionist &&
        !onboardingDetails.nutritionistDiets) ||
      (onboardingDetails?.isNutritionist &&
        onboardingDetails.nutritionistDiets?.length === 0)
    ) {
      setNutritionistDietsError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: OnboardTrainerSteps.FitnessExperience,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/food.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Despre Nutriție"}
      body={
        'Ați studiat nutriția? Selectați "Da" dacă aveți experiență în analiza și interpretarea nevoilor nutriționale ale clienților.'
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*IsNutritionist*/}
          <RadioGroup
            name={"is-nutritionist"}
            onValueChange={(e) => {
              setIsNutritionistError("");
              setNutritionistTypeError("");
              setNutritionistExperienceError("");
              setNutritionistDietsError("");
              updateOnboardingDetails({
                ...onboardingDetails,
                isNutritionist: e === IsNutritionist.Is,
                nutritionistType: undefined,
                nutritionistExperience: undefined,
                nutritionistDiets: undefined,
              });
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setIsNutritionistError(InputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={isNutritionistError ? "danger" : "primary"}
            errorMessage={isNutritionistError}
            isInvalid={!!isNutritionistError}
            value={
              onboardingDetails.isNutritionist
                ? IsNutritionist.Is
                : IsNutritionist.Not
            }
          >
            <div className="grid grid-cols-2 gap-3">
              <RadioButton value={IsNutritionist.Is}>
                {IsNutritionist.Is}
              </RadioButton>

              <RadioButton value={IsNutritionist.Not}>
                {IsNutritionist.Not}
              </RadioButton>
            </div>
          </RadioGroup>

          {onboardingDetails.isNutritionist && (
            <>
              <div className="grid grid-cols-2 gap-3">
                {/*NutritionistType*/}
                <Select
                  label="Tip nutriționist"
                  className="bg-background"
                  variant="bordered"
                  placeholder="Alege"
                  isRequired
                  value={
                    onboardingDetails.nutritionistType
                      ? onboardingDetails.nutritionistType
                      : ""
                  }
                  defaultSelectedKeys={
                    onboardingDetails.nutritionistType
                      ? [onboardingDetails.nutritionistType]
                      : []
                  }
                  onChange={(event) => {
                    updateOnboardingDetails({
                      ...onboardingDetails,
                      nutritionistType: event.target.value as NutritionistType,
                    });
                    setNutritionistTypeError("");
                    setConfirmBtnDisable(false);
                  }}
                  color={nutritionistTypeError ? "danger" : "primary"}
                  errorMessage={nutritionistTypeError}
                  isInvalid={!!nutritionistTypeError}
                >
                  {nutritionistTypes.map((nutritionist: NutritionistType) => (
                    <SelectItem
                      key={nutritionist}
                      value={nutritionist}
                      className="bg-background"
                    >
                      {nutritionist}
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
                    onboardingDetails.nutritionistExperience
                      ? onboardingDetails.nutritionistExperience
                      : ""
                  }
                  defaultSelectedKeys={
                    onboardingDetails.nutritionistExperience
                      ? [onboardingDetails.nutritionistExperience]
                      : []
                  }
                  onChange={(event) => {
                    updateOnboardingDetails({
                      ...onboardingDetails,
                      nutritionistExperience: event.target.value,
                    });
                    setNutritionistExperienceError("");
                    setConfirmBtnDisable(false);
                  }}
                  color={nutritionistExperienceError ? "danger" : "primary"}
                  errorMessage={nutritionistExperienceError}
                  isInvalid={!!nutritionistExperienceError}
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
              {/*NutritionistDiets*/}
              <CheckboxGroup
                label="Selectați următoarele moduri de alimentație pentru care puteți oferii diete:"
                orientation="horizontal"
                onValueChange={(e) => {
                  updateOnboardingDetails({
                    ...onboardingDetails,
                    nutritionistDiets: e,
                  });
                  setNutritionistDietsError("");
                  setConfirmBtnDisable(false);
                }}
                isRequired
                color={nutritionistDietsError ? "danger" : "primary"}
                errorMessage={nutritionistDietsError}
                isInvalid={!!nutritionistDietsError}
                value={onboardingDetails.nutritionistDiets}
              >
                <div className="grid grid-cols-2 gap-2 w-full">
                  {FoodDiets.map((diet) => (
                    <div
                      key={diet}
                      className={cn(
                        "w-full border-2 rounded p-2",
                        onboardingDetails?.nutritionistDiets?.includes(diet)
                          ? "border-primary"
                          : "border-default",
                      )}
                    >
                      <Checkbox value={diet}>{diet}</Checkbox>
                    </div>
                  ))}
                </div>
              </CheckboxGroup>
            </>
          )}
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
              trainerSteps: OnboardTrainerSteps.Contact,
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
