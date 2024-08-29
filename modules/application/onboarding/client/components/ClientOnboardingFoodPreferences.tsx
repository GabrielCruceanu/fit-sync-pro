"use client";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardClientSteps } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Select,
  SelectItem,
  Switch,
  Selection,
} from "@nextui-org/react";
import { clientFoodAllergies } from "@/constants/client";
import { cn } from "@/lib/cn";
import { FoodPreferences } from "@/ts/types";
import { foodPreferences } from "@/constants/foods";
import { useOnboardingStore } from "@/store/onboarding";

export function ClientOnboardingFoodPreferences() {
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingClientDetails,
  );
  const [foodAllergiesType, setFoodAllergiesType] = useState<Selection>(
    new Set(
      onboardingDetails.foodAllergiesType
        ? onboardingDetails.foodAllergiesType
        : [],
    ),
  );
  const [foodPreferencesError, setFoodPreferencesError] = useState("");
  const [foodAllergiesError, setFoodAllergiesError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const setFoodAllergiesTypeOnBlur = () => {
    console.log("foodValues", foodAllergiesType);
    updateOnboardingDetails({
      ...onboardingDetails,
      foodAllergiesType: Array.from(foodAllergiesType).map(
        (value) => value as string,
      ),
    });
    setFoodPreferencesError("");
    setConfirmBtnDisable(false);
  };
  const inputsAreOk = () => {
    if (
      !onboardingDetails?.foodPreferences ||
      onboardingDetails.foodPreferences?.length === 0
    ) {
      setFoodPreferencesError(InputError.NeedLeastOne);
      setConfirmBtnDisable(true);
      return;
    }
    if (
      onboardingDetails?.haveFoodAllergies &&
      !onboardingDetails.foodAllergiesType
    ) {
      setFoodAllergiesError(InputError.NeedOnlyOne);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.FitnessExperience,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Food Preferences"}
      body={"Select your food preferences and allergies if you have any."}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*FoodPreferences*/}
          <CheckboxGroup
            label="Food Preferences"
            orientation="horizontal"
            name={"food-preferences"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                foodPreferences: e as FoodPreferences[],
              });
              setFoodPreferencesError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={foodPreferencesError ? "danger" : "primary"}
            errorMessage={foodPreferencesError}
            isInvalid={!!foodPreferencesError}
            value={onboardingDetails.foodPreferences}
          >
            <div className="grid grid-cols-2 gap-2 w-full">
              {foodPreferences.map((preference) => (
                <div
                  key={preference}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails.foodPreferences?.includes(preference)
                      ? "border-primary"
                      : "border-default",
                  )}
                >
                  <Checkbox value={preference}>{preference}</Checkbox>
                </div>
              ))}
            </div>
          </CheckboxGroup>
          <Switch
            isSelected={onboardingDetails.haveFoodAllergies}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                haveFoodAllergies: e,
              });
              setFoodPreferencesError("");
              setConfirmBtnDisable(false);
            }}
          >
            Have food allergies?
          </Switch>

          {/*Allergies*/}
          {onboardingDetails.haveFoodAllergies && (
            <Select
              label="Allergies"
              className="bg-background"
              variant="bordered"
              placeholder="Select your allergies"
              isRequired
              selectedKeys={foodAllergiesType}
              color={foodAllergiesError ? "danger" : "default"}
              errorMessage={foodAllergiesError}
              isInvalid={!!foodAllergiesError}
              selectionMode="multiple"
              onSelectionChange={setFoodAllergiesType}
              onBlur={setFoodAllergiesTypeOnBlur}
            >
              {clientFoodAllergies.map((allergy) => (
                <SelectItem key={allergy} value={allergy} textValue={allergy}>
                  {allergy}
                </SelectItem>
              ))}
            </Select>
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
              clientSteps: OnboardClientSteps.Goals,
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
