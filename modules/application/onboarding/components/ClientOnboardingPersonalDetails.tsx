import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { AuthInputError, OnboardClientSteps, OnboardingType } from "@/ts/enum";
import { Input } from "@nextui-org/input";
import * as React from "react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { GenderList } from "@/constants/user";
import { Calendar } from "@/components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ro } from "date-fns/locale";

export function ClientOnboardingPersonalDetails() {
  const supabase = createClient();
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingDetails,
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
      setUsernameError(AuthInputError.InputRequired);
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError(AuthInputError.UsernameInvalid);
      return;
    }

    let { data: usernames } = await supabase.from("usernames").select("*");

    const found = usernames?.find((item) => item.username === username);

    if (found) {
      setUsernameError(AuthInputError.UsernameIsNotAvailable);
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
      ? setBirthError(AuthInputError.InputRequired)
      : null;
  };

  const inputsAreOk = () => {
    if (!onboardingDetails?.firstname) {
      setFirstNameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.lastname) {
      setLastNameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.username) {
      setUsernameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.birthdate?.full) {
      setBirthError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.phoneNumber) {
      setPhoneError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.gender) {
      setGenderError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.height) {
      setHeightError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails?.weight) {
      setWeightError(AuthInputError.InputRequired);
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
      image={"/images/auth/forgot-password.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Detalii personale"}
      body={
        "Povestește-ne mai multe despre tine pentru o experiență de fitness personalizată."
      }
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
                  ? setUsernameError(AuthInputError.InputRequired)
                  : !validateOnlyLetter(onboardingDetails.firstname!)
                    ? setFirstNameError(AuthInputError.OnlyLetter)
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
                  ? setUsernameError(AuthInputError.InputRequired)
                  : !validateOnlyLetter(onboardingDetails.lastname!)
                    ? setFirstNameError(AuthInputError.OnlyLetter)
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
                  ? setUsernameError(AuthInputError.InputRequired)
                  : !validateUsername(onboardingDetails.username!)
                    ? setUsernameError(AuthInputError.UsernameInvalid)
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
                    if (e) {
                      setBirthError("");
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
            value={onboardingDetails.gender}
            color={genderError ? "danger" : "default"}
            errorMessage={genderError}
            isInvalid={!!genderError}
            onChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                gender: e.target.value,
              });
              setGenderError("");
              handleInputRequired(e.target.value)
                ? setGenderError(AuthInputError.InputRequired)
                : null;
            }}
          >
            {GenderList.map((gen) => (
              <SelectItem key={gen} value={gen} className="bg-background">
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
              updateOnboardingDetails({
                ...onboardingDetails,
                phoneNumber: e,
              });
              setPhoneError("");
              !validateIsPhoneNumber(onboardingDetails.phoneNumber);
              setConfirmBtnDisable(false);
            }}
            color={phoneError ? "danger" : "default"}
            errorMessage={phoneError}
            isInvalid={!!phoneError}
            onFocusChange={(e) => {
              if (!e) {
                handleInputRequired(onboardingDetails.phoneNumber)
                  ? setPhoneError(AuthInputError.InputRequired)
                  : !validateIsPhoneNumber(onboardingDetails.phoneNumber)
                    ? setPhoneError(AuthInputError.OnlyNumbers)
                    : null;
              }
            }}
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
                  ? setHeightError(AuthInputError.InputRequired)
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
                  ? setWeightError(AuthInputError.InputRequired)
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
        fullWidth
        disabled={confirmBtnDisable}
      >
        Continuă
      </Button>
      <Button
        onClick={() => updateOnboardingType(OnboardingType.Welcome)}
        type="button"
        color={"default"}
        fullWidth
      >
        Înapoi
      </Button>
    </OnboardingLayout>
  );
}
