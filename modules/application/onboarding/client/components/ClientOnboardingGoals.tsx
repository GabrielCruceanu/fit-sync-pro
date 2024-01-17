import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@nextui-org/radio";
import { RadioButton } from "@/components/ratio-button";
import { handleInputRequired } from "@/helpers/helpers";
import {
  ClientFitnessGoals,
  OnboardClientSteps,
  OnboardingInputError,
} from "@/ts/enum";

export function ClientOnboardingGoals() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingDetails,
  );

  const [goalsError, setGoalsError] = useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails?.goals) {
      setGoalsError(OnboardingInputError.NeedOnlyOne);
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
      image={"/images/onboarding/fitness.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Stabilește obiective de fitness"}
      body={"Care sunt obiectivele tale de fitness?"}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Goals*/}
          <RadioGroup
            name={"goals"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                goals: e as ClientFitnessGoals,
              });
              setGoalsError("");
              setConfirmBtnDisable(false);
              handleInputRequired(e)
                ? setGoalsError(OnboardingInputError.NeedOnlyOne)
                : null;
            }}
            isRequired
            color={goalsError ? "danger" : "primary"}
            errorMessage={goalsError}
            isInvalid={!!goalsError}
            value={onboardingDetails.goals}
          >
            <RadioButton value={ClientFitnessGoals.PierdereInGreutate}>
              {ClientFitnessGoals.PierdereInGreutate}
            </RadioButton>
            <RadioButton value={ClientFitnessGoals.CrestereMusculara}>
              {ClientFitnessGoals.CrestereMusculara}
            </RadioButton>
            <RadioButton value={ClientFitnessGoals.FlexibilitateSiMobilitate}>
              {ClientFitnessGoals.FlexibilitateSiMobilitate}
            </RadioButton>
            <RadioButton value={ClientFitnessGoals.ImbunatatireaSanatatii}>
              {ClientFitnessGoals.ImbunatatireaSanatatii}
            </RadioButton>
            <RadioButton
              value={ClientFitnessGoals.IntretinereGeneralaDeFitness}
            >
              {ClientFitnessGoals.IntretinereGeneralaDeFitness}
            </RadioButton>
          </RadioGroup>
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
              clientSteps: OnboardClientSteps.PersonalDetails,
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
