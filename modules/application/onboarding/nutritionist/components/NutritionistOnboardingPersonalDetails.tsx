import { createClient } from "@/utils/supabase/create-client";
import { useStore } from "@/store";
import React, { useState } from "react";
import {
  handleInputRequired,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import {
  InputError,
  OnboardingType,
  OnboardNutritionistSteps,
} from "@/ts/enum";
import { genderList } from "@/constants/user";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/shared/calendar";
import { Button } from "@nextui-org/button";
import { GenderType } from "@/ts/types";

/**
 * This component handles the onboarding process for a nutritionist's personal contact details.
 * It collects information about the nutritionist's first name, last name, username, birthdate, and gender.
 * The component uses the `useStore` hook to get and update onboarding details.
 * It also uses local state for error handling and to disable the confirm button when necessary.
 * The component returns a form for the nutritionist to fill out their personal details.
 */
export function NutritionistOnboardingPersonalDetails() {
  const supabase = createClient();

  // Using the store to get and update onboarding details
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingNutritionistDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingNutritionistDetails,
  );
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);

  // State variables for error handling
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [birthError, setBirthError] = useState("");

  // State variable to open and close the calendar
  const [isCalendarOpen, setCalendarIsOpen] = React.useState(false);

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
   * This function handles the input of the birthdate.
   * It validates the input and updates the onboarding details accordingly.
   * @param {any} newValue - The input birthdate.
   */
  const handleBirthChange = (newValue: any) => {
    const dateLanding = new Date(newValue);
    const date = dateLanding.getDate().toString();
    const month = (dateLanding.getMonth() + 1).toString();
    const year = dateLanding.getFullYear().toString();

    updateOnboardingDetails({
      ...onboardingDetails,
      birthdate: {
        date,
        month,
        year,
        full: dateLanding,
      },
    });

    handleInputRequired(newValue.startDate === null ? "" : newValue.startDate)
      ? setBirthError(InputError.InputRequired)
      : null;
  };

  /**
   * This function checks if the inputs are valid and updates the onboarding details accordingly.
   */
  const inputsAreOk = () => {
    if (!onboardingDetails?.firstname) {
      setFirstNameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.lastname) {
      setLastNameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.username) {
      setUsernameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.birthdate?.full) {
      setBirthError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.gender) {
      setGenderError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!genderList.includes(onboardingDetails?.gender)) {
      setGenderError(InputError.InputRequired);
      updateOnboardingDetails({
        ...onboardingDetails,
        gender: undefined,
      });
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      nutritionistSteps: OnboardNutritionistSteps.Contact,
    });
  };

  // The component returns a form for the nutritionist to fill out their personal details
  return (
    <OnboardingLayout
      image={"/images/onboarding/details.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Personal Details"}
      body={
        "Let's get to know you better! Please fill in the following details."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          {/*FirstName*/}
          <Input
            id="firstname"
            placeholder="Jon"
            type="text"
            label="First Name"
            value={onboardingDetails.firstname}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                firstname: e,
              });
              setFirstNameError("");
              !validateOnlyLetter(onboardingDetails.firstname!);
              setConfirmBtnDisable(false);
            }}
            color={firstNameError ? "danger" : "default"}
            errorMessage={firstNameError}
            isInvalid={!!firstNameError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.firstname!)
                  ? setFirstNameError(InputError.InputRequired)
                  : !validateOnlyLetter(onboardingDetails.firstname!)
                    ? setFirstNameError(InputError.OnlyLetter)
                    : null;
              }
            }}
          />
          {/*FirstName*/}
          <Input
            id="lastname"
            placeholder="Doe"
            type="text"
            label="Last Name"
            value={onboardingDetails.lastname}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                lastname: e,
              });
              setLastNameError("");
              !validateOnlyLetter(onboardingDetails.lastname!);
              setConfirmBtnDisable(false);
            }}
            color={lastNameError ? "danger" : "default"}
            errorMessage={lastNameError}
            isInvalid={!!lastNameError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.firstname!)
                  ? setLastNameError(InputError.InputRequired)
                  : !validateOnlyLetter(onboardingDetails.lastname!)
                    ? setLastNameError(InputError.OnlyLetter)
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
          {/*Birthday*/}
          <div className="group flex flex-col w-full h-full">
            <Popover
              isOpen={isCalendarOpen}
              onOpenChange={(open) => setCalendarIsOpen(open)}
            >
              <PopoverTrigger>
                <Input
                  id="birth"
                  placeholder="Choose a date"
                  type="date"
                  value={
                    onboardingDetails.birthdate?.full
                      ? format(onboardingDetails.birthdate.full, "PPP")
                      : "Birthday"
                  }
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  variant="bordered"
                  isRequired
                  startContent={
                    <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  color={birthError ? "danger" : "default"}
                  errorMessage={birthError}
                  className="h-full"
                  isInvalid={!!birthError}
                  onFocusChange={(e) => {
                    if (!e) {
                      setBirthError("");
                      handleInputRequired(
                        onboardingDetails.birthdate?.full?.toString(),
                      )
                        ? setBirthError(InputError.InputRequired)
                        : null;
                      setConfirmBtnDisable(false);
                    }
                  }}
                />
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background">
                <Calendar
                  mode="single"
                  selected={onboardingDetails.birthdate?.full}
                  onSelect={($event) => {
                    handleBirthChange($event);
                    setCalendarIsOpen(false);
                    setBirthError("");
                  }}
                  initialFocus
                  required
                />
              </PopoverContent>
            </Popover>
          </div>
          {/*Gender*/}
          <Select
            label="Gender"
            className="bg-background"
            variant="bordered"
            placeholder="Choose"
            isRequired
            defaultSelectedKeys={
              onboardingDetails.gender ? [onboardingDetails.gender] : []
            }
            value={onboardingDetails.gender}
            onChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                gender: e.target.value as GenderType,
              });
              setGenderError("");
              handleInputRequired(onboardingDetails.gender)
                ? setGenderError(InputError.InputRequired)
                : null;
              setConfirmBtnDisable(false);
            }}
            color={genderError ? "danger" : "default"}
            errorMessage={genderError}
            isInvalid={!!genderError}
          >
            {genderList.map((gender: string) => (
              <SelectItem
                key={gender}
                value={gender}
                className="bg-background"
                onClick={() => {
                  setGenderError("");
                  setConfirmBtnDisable(false);
                }}
              >
                {gender}
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
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </OnboardingLayout>
  );
}
