import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { InputError, OnboardClientSteps } from "@/ts/enum";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { cn } from "@/lib/cn";
import { clientFitnessGoalsType } from "@/constants/client";
import { useOnboardingStore } from "@/store/onboarding";

export function ClientOnboardingGoals() {
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingClientDetails,
  );

  const [goalsError, setGoalsError] = useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.goals || onboardingDetails.goals?.length === 0) {
      setGoalsError(InputError.NeedLeastOne);
      setConfirmBtnDisable(true);
      return;
    }

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.FoodPreferences,
    });
    setConfirmBtnDisable(false);
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Your Fitness Goals"}
      body={"What are your fitness goals? Select one or more options below."}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Goals*/}
          <CheckboxGroup
            label="Goals"
            orientation="horizontal"
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                goals: e,
              });
              setGoalsError("");
              setConfirmBtnDisable(false);
            }}
            isRequired
            color={goalsError ? "danger" : "primary"}
            errorMessage={goalsError}
            isInvalid={!!goalsError}
            value={onboardingDetails.goals}
          >
            <div className="grid grid-cols-2 gap-2 w-full">
              {clientFitnessGoalsType.map((goal) => (
                <div
                  key={goal}
                  className={cn(
                    "w-full border-2 rounded p-2",
                    onboardingDetails.goals?.includes(goal)
                      ? ""
                      : "border-divider",
                  )}
                >
                  <Checkbox value={goal}>{goal}</Checkbox>
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
          radius={"sm"}
          fullWidth
          disabled={confirmBtnDisable}
          className="mb-3 bg-foreground text-background"
        >
          Next
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              clientSteps: OnboardClientSteps.PersonalDetails,
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
