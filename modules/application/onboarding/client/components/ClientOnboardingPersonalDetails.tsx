import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardClientSteps, OnboardingType } from "@/ts/enum";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import {
  formatPhoneNumber,
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { genderList } from "@/constants/user";
import { DateInput, Select, SelectItem } from "@nextui-org/react";
import { GenderType } from "@/ts/types";
import { useOnboardingStore } from "@/store/onboarding";
import { CalendarDate } from "@internationalized/date";

export function ClientOnboardingPersonalDetails() {
  const supabase = createClient();
  const onboardingDetails = useOnboardingStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useOnboardingStore(
    (state) => state.updateOnboardingClientDetails,
  );
  const updateOnboardingType = useOnboardingStore(
    (state) => state.updateOnboardingType,
  );

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [birthError, setBirthError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");

  const [isCalendarOpen, setCalendarIsOpen] = React.useState(false);

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

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

  const handleSetPhoneNumber = (phoneNumber: string) => {
    const clearNumber = formatPhoneNumber(phoneNumber);

    setPhoneError("");
    setConfirmBtnDisable(false);
    updateOnboardingDetails({
      ...onboardingDetails,
      phoneNumber: clearNumber,
    });

    if (handleInputRequired(phoneNumber)) {
      setPhoneError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!validateIsPhoneNumber(clearNumber)) {
      setPhoneError(InputError.OnlyNumbers);
      setConfirmBtnDisable(true);
      return;
    }
  };
  const handleBirthChange = (newValue: any) => {
    updateOnboardingDetails({
      ...onboardingDetails,
      birthdate: {
        date: newValue.day,
        month: newValue.month,
        year: newValue.year,
        full: `${newValue.year}-${newValue.month}-${newValue.day}`,
      },
    });

    handleInputRequired(onboardingDetails.birthdate?.full?.toString())
      ? setBirthError(InputError.InputRequired)
      : null;
  };

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
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(InputError.InputRequired);
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
    if (!onboardingDetails?.height) {
      setHeightError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (onboardingDetails.height && onboardingDetails.height <= 50) {
      setHeightError(InputError.HeightGreater);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.weight) {
      setWeightError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (onboardingDetails.weight && onboardingDetails.weight <= 30) {
      setWeightError(InputError.WeightGreater);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      clientSteps: OnboardClientSteps.Goals,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/client.jpg"}
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
          {/*LastName*/}
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
          <DateInput
            label={"Birth date"}
            isRequired
            variant="bordered"
            color={birthError ? "danger" : "default"}
            value={
              new CalendarDate(
                onboardingDetails?.birthdate?.year
                  ? +onboardingDetails.birthdate.year
                  : 1988,
                onboardingDetails?.birthdate?.month
                  ? +onboardingDetails.birthdate.month
                  : 1,
                onboardingDetails?.birthdate?.date
                  ? +onboardingDetails.birthdate.date
                  : 1,
              )
            }
            errorMessage={birthError}
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
            onChange={($event) => {
              handleBirthChange($event);
            }}
          />
          {/*Gender*/}
          <Select
            label="Gender"
            className="bg-background"
            variant="bordered"
            isRequired
            placeholder="Choose"
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
            {genderList.map((gender) => (
              <SelectItem
                key={gender}
                value={gender}
                textValue={gender}
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

          {/*PhoneNumber*/}
          <Input
            id="phone"
            placeholder="+40770212948"
            type="text"
            label="Phone Number"
            value={onboardingDetails.phoneNumber}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            onValueChange={(e) => {
              handleSetPhoneNumber(e);
            }}
            color={phoneError ? "danger" : "default"}
            errorMessage={phoneError}
            isInvalid={!!phoneError}
          />
          {/*Height*/}
          <Input
            id="height"
            placeholder="173"
            type="number"
            label="Height"
            value={onboardingDetails.height?.toString()}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            endContent={"cm"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                height: Number(e),
              });
              setHeightError("");
              setConfirmBtnDisable(false);
            }}
            color={heightError ? "danger" : "default"}
            errorMessage={heightError}
            isInvalid={!!heightError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.height?.toString())
                  ? setHeightError(InputError.InputRequired)
                  : onboardingDetails.height && onboardingDetails.height <= 50
                    ? setHeightError(InputError.HeightGreater)
                    : null;
              }
            }}
          />

          {/*Weight*/}
          <Input
            id="weight"
            placeholder="75"
            type="number"
            label="Weight"
            value={onboardingDetails.weight?.toString()}
            autoCapitalize="none"
            autoComplete="false"
            autoCorrect="off"
            variant="bordered"
            isRequired
            endContent={"Kg"}
            onValueChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                weight: Number(e),
              });
              setWeightError("");
              setConfirmBtnDisable(false);
            }}
            color={weightError ? "danger" : "default"}
            errorMessage={weightError}
            isInvalid={!!weightError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.weight?.toString())
                  ? setWeightError(InputError.InputRequired)
                  : onboardingDetails.weight && onboardingDetails.weight <= 30
                    ? setWeightError(InputError.WeightGreater)
                    : null;
              }
            }}
          />
        </div>
      </div>

      <Button
        onClick={() => inputsAreOk()}
        type="button"
        radius={"sm"}
        fullWidth
        disabled={confirmBtnDisable}
        className="bg-foreground text-background"
      >
        Next
      </Button>
      <Button
        onClick={() => updateOnboardingType(OnboardingType.Welcome)}
        type="button"
        variant={"ghost"}
        radius={"sm"}
        fullWidth
      >
        Back
      </Button>
    </OnboardingLayout>
  );
}
