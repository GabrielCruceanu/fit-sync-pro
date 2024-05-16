import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { OnboardClientSteps, InputError, OnboardingType } from "@/ts/enum";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import {
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { genderList } from "@/constants/user";
import { Calendar } from "@/components/shared/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { GenderType } from "@/ts/types";

export function ClientOnboardingPersonalDetails() {
  const supabase = createClient();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingClientDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingClientDetails,
  );
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);

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
    // const clearNumber = formatPhoneNumber(phoneNumber);

    setPhoneError("");
    setConfirmBtnDisable(false);
    if (handleInputRequired(phoneNumber)) {
      setPhoneError(InputError.InputRequired);
      return;
    }
    if (!validateIsPhoneNumber(phoneNumber)) {
      setPhoneError(InputError.OnlyNumbers);
      return;
    }
    updateOnboardingDetails({
      ...onboardingDetails,
      phoneNumber: phoneNumber,
    });
  };
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
          <div>
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
            placeholder="173 cm"
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
            placeholder="75 Kg"
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
