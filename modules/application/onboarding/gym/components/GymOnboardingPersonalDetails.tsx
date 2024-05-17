import { createClient } from "@/utils/supabase/create-client";
import { useStore } from "@/store";
import React, { useState } from "react";
import {
  handleInputRequired,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { InputError, OnboardingType } from "@/ts/enum";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { GymType } from "@/ts/types";
import { OnboardGymSteps } from "@/ts/enum/onboarding.enum";
import gymTypes, { gymActivePersonalTrainers } from "@/constants/gym";

/**
 * This component handles the onboarding process for a gym's personal contact details.
 * It collects information about the nutritionist's first name, last name, username, birthdate, and gender.
 * The component uses the `useStore` hook to get and update onboarding details.
 * It also uses local state for error handling and to disable the confirm button when necessary.
 * The component returns a form for the nutritionist to fill out their personal details.
 */
export function GymOnboardingPersonalDetails() {
  const supabase = createClient();

  // Using the store to get and update onboarding details
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingGymDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingGymDetails,
  );
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);

  // State variables for error handling
  const [gymNameError, setGymNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [gymTypeError, setGymTypeError] = useState("");
  const [activePersonalTrainersError, setActivePersonalTrainersError] =
    useState("");

  // State variable to disable the confirm button
  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  /**
   * This function handles the input of the username.
   * It validates the input and updates the onboarding details accordingly.
   * @param {string} username - The input username.
   */
  const handleSearchUsername = async (username: string) => {
    if (handleInputRequired(username)) {
      setUsernameError(InputError.InputRequired);
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError(InputError.UsernameInvalid);
      return;
    }

    let { data: usernames } = await supabase.from("usernames").select("*");

    const found = usernames?.find((item) => item.username === username);

    if (found) {
      setUsernameError(InputError.UsernameIsNotAvailable);
    }
  };

  /**
   * This function checks if the inputs are valid and updates the onboarding details accordingly.
   */
  const inputsAreOk = () => {
    if (!onboardingDetails?.gymName) {
      setGymNameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.username) {
      setUsernameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.gymType) {
      setGymTypeError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.activePersonalTrainers) {
      setActivePersonalTrainersError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      gymSteps: OnboardGymSteps.Contact,
    });
  };

  // The component returns a form for the nutritionist to fill out their personal details
  return (
    <OnboardingLayout
      image={"/images/onboarding/gym.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Gym Details"}
      body={
        "Let's get to know you better! Please fill in the following details."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          {/*GymName*/}
          <Input
            id="gymname"
            placeholder="Kaapo Gym"
            type="text"
            label="Gym Name"
            value={onboardingDetails.gymName}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                gymName: e,
              });
              setGymNameError("");
              !validateOnlyLetter(onboardingDetails.gymName!);
              setConfirmBtnDisable(false);
            }}
            color={gymNameError ? "danger" : "default"}
            errorMessage={gymNameError}
            isInvalid={!!gymNameError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.gymName!)
                  ? setGymNameError(InputError.InputRequired)
                  : !validateOnlyLetter(onboardingDetails.gymName!)
                    ? setGymNameError(InputError.OnlyLetter)
                    : null;
              }
            }}
          />
          {/*Username*/}
          <Input
            id="username"
            placeholder="jon_doe"
            type="text"
            label="Username"
            value={onboardingDetails.username}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                username: e.toLowerCase(),
              });
              setUsernameError("");
              !validateUsername(onboardingDetails.username!);
              setConfirmBtnDisable(false);
            }}
            color={usernameError ? "danger" : "default"}
            errorMessage={usernameError}
            isInvalid={!!usernameError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.username!)
                  ? setUsernameError(InputError.InputRequired)
                  : !validateUsername(onboardingDetails.username!)
                    ? setUsernameError(InputError.UsernameInvalid)
                    : null;
                handleSearchUsername(onboardingDetails.username!);
              }
            }}
          />

          <Select
            label="Gym Type"
            className="bg-background"
            variant="bordered"
            placeholder="Choose"
            isRequired
            value={onboardingDetails.gymType ? onboardingDetails.gymType : ""}
            defaultSelectedKeys={
              onboardingDetails.gymType ? [onboardingDetails.gymType] : []
            }
            onChange={(event) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                gymType: event.target.value as GymType,
              });
              setGymTypeError("");
              setConfirmBtnDisable(false);
            }}
            color={gymTypeError ? "danger" : "primary"}
            errorMessage={gymTypeError}
            isInvalid={!!gymTypeError}
          >
            {gymTypes.map((gym: GymType) => (
              <SelectItem key={gym} value={gym} className="bg-background">
                {gym}
              </SelectItem>
            ))}
          </Select>
          {/*Active Personal Trainers*/}
          <Select
            label="Active Personal Trainers"
            className="bg-background"
            variant="bordered"
            placeholder="Choose"
            isRequired
            value={
              onboardingDetails.activePersonalTrainers
                ? onboardingDetails.activePersonalTrainers
                : ""
            }
            defaultSelectedKeys={
              onboardingDetails.activePersonalTrainers
                ? [onboardingDetails.activePersonalTrainers]
                : []
            }
            onChange={(event) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                activePersonalTrainers: event.target.value,
              });
              setActivePersonalTrainersError("");
              setConfirmBtnDisable(false);
            }}
            color={activePersonalTrainersError ? "danger" : "primary"}
            errorMessage={activePersonalTrainersError}
            isInvalid={!!activePersonalTrainersError}
          >
            {gymActivePersonalTrainers.map((personal) => (
              <SelectItem
                key={personal}
                value={personal}
                className="bg-background"
              >
                {personal}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <Button
        onClick={() => inputsAreOk()}
        type="button"
        color={"primary"}
        radius={"sm"}
        fullWidth
        disabled={confirmBtnDisable}
      >
        Next
      </Button>
      <Button
        onClick={() => updateOnboardingType(OnboardingType.Welcome)}
        type="button"
        color={"default"}
        variant={"ghost"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </OnboardingLayout>
  );
}
