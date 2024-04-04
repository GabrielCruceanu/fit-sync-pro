import { Input } from "@nextui-org/input";
import {
  formatPhoneNumber,
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import {
  OnboardClientSteps,
  OnboardingInputError,
  OnboardingType,
} from "@/ts/enum";
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
import { Calendar } from "@/components/calendar";
import { GenderList } from "@/constants/user";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import { useStore } from "@/store";
import { Button } from "@nextui-org/button";

export function ProfileSettings() {
  const supabase = createClient();
  const { user } = useStore((state) => state);
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
      setUsernameError(OnboardingInputError.InputRequired);
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError(OnboardingInputError.UsernameInvalid);
      return;
    }

    let { data: usernames } = await supabase.from("usernames").select("*");

    const found = usernames?.find((item) => item.username === username);

    if (found) {
      setUsernameError(OnboardingInputError.UsernameIsNotAvailable);
    }
  };

  const handleSetPhoneNumber = (phoneNumber: string) => {
    const clearNumber = formatPhoneNumber(phoneNumber);

    setPhoneError("");
    updateOnboardingDetails({
      ...onboardingDetails,
      phoneNumber: clearNumber,
    });
    setConfirmBtnDisable(false);
    if (handleInputRequired(clearNumber)) {
      setPhoneError(OnboardingInputError.InputRequired);
      return;
    }
    if (!validateIsPhoneNumber(clearNumber)) {
      setPhoneError(OnboardingInputError.OnlyNumbers);
      return;
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
      ? setBirthError(OnboardingInputError.InputRequired)
      : null;
  };

  const inputsAreOk = () => {
    if (!onboardingDetails?.firstname) {
      setFirstNameError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.lastname) {
      setLastNameError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.username) {
      setUsernameError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.birthdate?.full) {
      setBirthError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.gender) {
      setGenderError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!GenderList.includes(onboardingDetails?.gender)) {
      setGenderError(OnboardingInputError.InputRequired);
      updateOnboardingDetails({
        ...onboardingDetails,
        gender: undefined,
      });
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.height) {
      setHeightError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (onboardingDetails.height && onboardingDetails.height <= 50) {
      setHeightError(OnboardingInputError.HeightGreater);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.weight) {
      setWeightError(OnboardingInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (onboardingDetails.weight && onboardingDetails.weight <= 30) {
      setWeightError(OnboardingInputError.WeightGreater);
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
    <div className="grid gap-2">
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-4">
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
                ? setFirstNameError(OnboardingInputError.InputRequired)
                : !validateOnlyLetter(onboardingDetails.firstname!)
                  ? setFirstNameError(OnboardingInputError.OnlyLetter)
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
                ? setLastNameError(OnboardingInputError.InputRequired)
                : !validateOnlyLetter(onboardingDetails.lastname!)
                  ? setLastNameError(OnboardingInputError.OnlyLetter)
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
                ? setUsernameError(OnboardingInputError.InputRequired)
                : !validateUsername(onboardingDetails.username!)
                  ? setUsernameError(OnboardingInputError.UsernameInvalid)
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
                      ? setBirthError(OnboardingInputError.InputRequired)
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
              gender: e.target.value,
            });
            setGenderError("");
            handleInputRequired(onboardingDetails.gender)
              ? setGenderError(OnboardingInputError.InputRequired)
              : null;
            setConfirmBtnDisable(false);
          }}
          color={genderError ? "danger" : "default"}
          errorMessage={genderError}
          isInvalid={!!genderError}
        >
          {GenderList.map((gen) => (
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

        {/*Telefon*/}
        <Input
          id="phone"
          placeholder="0770212948"
          type="text"
          label="Telefon"
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
        {/*Înălțime*/}
        <Input
          id="height"
          placeholder="173 cm"
          type="number"
          label="Înălțime"
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
                ? setHeightError(OnboardingInputError.InputRequired)
                : onboardingDetails.height && onboardingDetails.height <= 50
                  ? setHeightError(OnboardingInputError.HeightGreater)
                  : null;
            }
          }}
        />

        {/*Greutate*/}
        <Input
          id="weight"
          placeholder="75 Kg"
          type="number"
          label="Greutate"
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
                ? setWeightError(OnboardingInputError.InputRequired)
                : onboardingDetails.weight && onboardingDetails.weight <= 30
                  ? setWeightError(OnboardingInputError.WeightGreater)
                  : null;
            }
          }}
        />
      </div>
      <Button
        onClick={() => inputsAreOk()}
        type="button"
        color={"primary"}
        radius={"sm"}
        fullWidth
        disabled={confirmBtnDisable}
      >
        Salvează
      </Button>
    </div>
  );
}
