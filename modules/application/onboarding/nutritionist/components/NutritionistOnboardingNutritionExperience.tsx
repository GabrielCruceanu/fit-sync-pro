/**
 * "use client" is a directive that specifies the code should be run on the client side.
 */
"use client";

// Importing necessary modules and components
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardNutritionistSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { Checkbox, CheckboxGroup, Select, SelectItem } from "@nextui-org/react";
import { foodPreferences } from "@/constants/foods";
import { experienceList } from "@/constants/user";
import nutritionistTypes from "@/constants/nutritionists";
import { NutritionistType } from "@/ts/types";
import { NutritionistLocation } from "@/ts/enum/onboarding.enum";
import { cn } from "@/lib/cn";
import { useOnboardingStore } from "@/store/onboarding";

/**
 * This function component handles the onboarding process for a nutritionist.
 * It collects information about the nutritionist's experience and diet preferences.
 */
export function NutritionistOnboardingNutritionExperience() {
  // Using the store to get and update onboarding details
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingNutritionistDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingNutritionistDetails,
  );

  // State variables for error handling and button disabling
  const [nutritionistTypeError, setNutritionistTypeError] = useState("");
  const [nutritionistDietsError, setNutritionistDietsError] = useState("");
  const [nutritionistExperienceError, setNutritionistExperienceError] =
    useState("");
  const [nutritionistLocationError, setNutritionistLocationError] =
    useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  /**
   * This function checks if the inputs are valid and updates the onboarding details accordingly.
   */
  const inputsAreOk = () => {
    // Error handling for nutritionist experience and diet preferences
    if (!onboardingDetails.nutritionistExperience) {
      setNutritionistExperienceError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      !onboardingDetails.nutritionistDiets ||
      onboardingDetails.nutritionistDiets?.length === 0
    ) {
      setNutritionistDietsError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    if (!onboardingDetails.nutritionLocation) {
      setNutritionistLocationError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    // If inputs are valid, update the onboarding details and enable the confirm button
    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      nutritionistSteps: OnboardNutritionistSteps.Availability,
    });
  };

  // The component returns a form for the nutritionist to fill out their details
  return (
    <OnboardingLayout
      image={"/images/onboarding/nutritionist.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Nutrition Experience"}
      body={"Please provide information about your nutritionist experience."}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          <>
            <div className="grid grid-cols-2 gap-3">
              {/*NutritionistType*/}
              <Select
                label="Nutritionist Type"
                className="bg-background"
                variant="bordered"
                placeholder="Choose"
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
                    textValue={nutritionist}
                    className="bg-background"
                  >
                    {nutritionist}
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
                    textValue={experience}
                    className="bg-background"
                  >
                    {experience}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {/*NutritionistDiets*/}
            <CheckboxGroup
              label="Diets you can provide"
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
                {foodPreferences.map((diet) => (
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
            {/*TrainingLocation*/}
            <CheckboxGroup
              label="Choose how you would like to consult your clients."
              orientation="horizontal"
              onValueChange={(e) => {
                updateOnboardingDetails({
                  ...onboardingDetails,
                  nutritionLocation: e,
                });
                setNutritionistLocationError("");
                setConfirmBtnDisable(false);
              }}
              isRequired
              color={nutritionistLocationError ? "danger" : "primary"}
              errorMessage={nutritionistLocationError}
              isInvalid={!!nutritionistLocationError}
              value={onboardingDetails.nutritionLocation}
            >
              <div className="grid grid-cols-2 gap-2 w-full">
                <div
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.nutritionLocation?.includes(
                      NutritionistLocation.Online,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={NutritionistLocation.Online}>
                    {NutritionistLocation.Online}
                  </Checkbox>
                </div>{" "}
                <div
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails?.nutritionLocation?.includes(
                      NutritionistLocation.AtCabinet,
                    )
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={NutritionistLocation.AtCabinet}>
                    {NutritionistLocation.AtCabinet}
                  </Checkbox>
                </div>
              </div>
            </CheckboxGroup>
          </>
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
              nutritionistSteps: OnboardNutritionistSteps.Contact,
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
