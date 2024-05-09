"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { FoodPreferences, OnboardClientSteps, InputError } from "@/ts/enum";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/shared/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import { Select, SelectItem, Switch } from "@nextui-org/react";
import { FoodAllergies } from "@/constants/foods";

export function ClientOnboardingFoodPreferences() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [foodPreferencesError, setFoodPreferencesError] = useState("");
  const [foodAllergiesError, setFoodAllergiesError] = useState("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.foodPreferences) {
      setFoodPreferencesError(InputError.NeedOnlyOne);
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
      image={"/images/onboarding/food.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Preferințe alimentare"}
      body={"Există preferințe alimentare pe care ar trebui să le cunoaștem?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*FoodPreferences*/}
          <RadioGroup
            name={"food-preferences"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                foodPreferences: e as FoodPreferences,
              });
              setFoodPreferencesError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setFoodPreferencesError(InputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={foodPreferencesError ? "danger" : "primary"}
            errorMessage={foodPreferencesError}
            isInvalid={!!foodPreferencesError}
            value={onboardingDetails.foodPreferences}
          >
            <RadioButton value={FoodPreferences.Omnivor}>
              {FoodPreferences.Omnivor}
            </RadioButton>

            <RadioButton value={FoodPreferences.Vegetarian}>
              {FoodPreferences.Vegetarian}
            </RadioButton>

            <RadioButton value={FoodPreferences.Vegan}>
              {FoodPreferences.Vegan}
            </RadioButton>

            <RadioButton value={FoodPreferences.Keto}>
              {FoodPreferences.Keto}
            </RadioButton>
          </RadioGroup>
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
            Am alergii
          </Switch>

          {/*Alergii*/}
          {onboardingDetails.haveFoodAllergies && (
            <Select
              label="Alergii"
              className="bg-background"
              variant="bordered"
              placeholder="Alege"
              isRequired
              value={
                onboardingDetails.foodAllergiesType
                  ? onboardingDetails.foodAllergiesType
                  : ""
              }
              defaultSelectedKeys={
                onboardingDetails.foodAllergiesType
                  ? [onboardingDetails.foodAllergiesType]
                  : []
              }
              color={foodAllergiesError ? "danger" : "primary"}
              errorMessage={foodAllergiesError}
              isInvalid={!!foodAllergiesError}
            >
              {FoodAllergies.map((alergie) => (
                <SelectItem
                  key={alergie.tip_alergie}
                  value={alergie.tip_alergie}
                  className="bg-background"
                  onClick={() => {
                    updateOnboardingDetails({
                      ...onboardingDetails,
                      foodAllergiesType: alergie.tip_alergie,
                      foodAllergiesDescription:
                        alergie.exemplu_alimente_asociate,
                    });
                    setFoodAllergiesError("");
                    handleInputRequired(onboardingDetails.foodAllergiesType)
                      ? setFoodAllergiesError(InputError.InputRequired)
                      : null;
                  }}
                >
                  {alergie.tip_alergie}
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
