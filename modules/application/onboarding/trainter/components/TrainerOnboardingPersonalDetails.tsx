import { createClient } from "@/utils/supabase/create-client";
import { useStore } from "@/store";
import React, { useState } from "react";
import {
  handleInputRequired,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { InputError, OnboardingType, OnboardTrainerSteps } from "@/ts/enum";
import { genderList } from "@/constants/user";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Input } from "@nextui-org/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/shared/calendar";
import { Button } from "@nextui-org/button";
import { GenderType } from "@/ts/types";

export function TrainerOnboardingPersonalDetails() {
  const supabase = createClient();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );
  const updateOnboardingType = useStore((state) => state.updateOnboardingType);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [birthError, setBirthError] = useState("");

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
      trainerSteps: OnboardTrainerSteps.Contact,
    });
  };
  return (
    <OnboardingLayout
      image={"/images/onboarding/details.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Detalii personale"}
      body={"Povestește-ne mai multe despre tine."}
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          {/*FirstName*/}
          <Input
            id="firstname"
            placeholder="Jon"
            type="text"
            label="Prenume"
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
            label="Nume"
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
            label="Nume de utilizator"
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
                  placeholder="Alege o data"
                  type="date"
                  value={
                    onboardingDetails.birthdate?.full
                      ? format(onboardingDetails.birthdate.full, "PPP", {
                          locale: ro,
                        })
                      : "Data nașterii"
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
            label="Gen"
            className="bg-background"
            variant="bordered"
            placeholder="Alege"
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
            {genderList.map((gen: string) => (
              <SelectItem
                key={gen}
                value={gen}
                className="bg-background"
                onClick={() => {
                  setGenderError("");
                  setConfirmBtnDisable(false);
                }}
              >
                {gen}
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
