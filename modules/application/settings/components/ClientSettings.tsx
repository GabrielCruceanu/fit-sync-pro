"use client";
import { Input } from "@nextui-org/input";
import {
  formatPhoneNumber,
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from "@/helpers/helpers";
import { InputError } from "@/ts/enum";
import { Select, SelectItem } from "@nextui-org/react";
import { genderList } from "@/constants/user";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/create-client";
import { useAuthStore } from "@/store/auth";
import { Button } from "@nextui-org/button";
import { updateClient } from "@/utils/supabase/client-service";
import { GenderType } from "@/ts/types";
import { useSettingsStore } from "@/store/settings";
import { useOnboardingStore } from "@/store/onboarding";

export function ProfileSettings() {
  const supabase = createClient();
  const { user } = useAuthStore((state) => state);
  const clientSettings = useSettingsStore(
    (state) => state.settings.clientSettings,
  );
  const updateClientSettings = useSettingsStore(
    (state) => state.updateClientSettings,
  );
  const updateOnboardingType = useOnboardingStore(
    (state) => state.updateOnboardingType,
  );

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [birthError, setBirthError] = useState("");

  const birthDate = parseInt(
    clientSettings?.birthDate ? clientSettings.birthDate : "",
  );
  const birthMonth =
    parseInt(clientSettings?.birthMonth ? clientSettings.birthMonth : "") - 1; // Months are zero-based in JavaScript Date object
  const birthYear = parseInt(
    clientSettings?.birthYear ? clientSettings.birthYear : "",
  );

  const birthDateFull = new Date(birthYear, birthMonth, birthDate);

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
    updateClientSettings({
      ...clientSettings,
      phone: clearNumber,
    });
    setConfirmBtnDisable(false);
    if (handleInputRequired(clearNumber)) {
      setPhoneError(InputError.InputRequired);
      return;
    }
    if (!validateIsPhoneNumber(clearNumber)) {
      setPhoneError(InputError.OnlyNumbers);
      return;
    }
  };
  const handleBirthChange = (newValue: any) => {
    const dateLanding = new Date(newValue);
    const date = dateLanding.getDate().toString();
    const month = (dateLanding.getMonth() + 1).toString();
    const year = dateLanding.getFullYear().toString();

    updateClientSettings({
      ...clientSettings,
      birthMonth: month,
      birthDate: date,
      birthYear: year,
    });

    handleInputRequired(newValue.startDate === null ? "" : newValue.startDate)
      ? setBirthError(InputError.InputRequired)
      : null;
  };

  const inputsAreOk = () => {
    if (!clientSettings?.firstName) {
      setFirstNameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!clientSettings?.lastName) {
      setLastNameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!clientSettings?.username) {
      setUsernameError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!clientSettings?.birthDate) {
      setBirthError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!clientSettings?.phone) {
      setPhoneError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!clientSettings?.gender) {
      setGenderError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!genderList.includes(clientSettings?.gender)) {
      setGenderError(InputError.InputRequired);
      updateClientSettings({
        ...clientSettings,
        gender: null,
      });
      setConfirmBtnDisable(true);
      return;
    }

    updateClient({ client: clientSettings, supabase });

    setConfirmBtnDisable(false);
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
          value={clientSettings?.firstName ? clientSettings.firstName : ""}
          autoCapitalize="none"
          autoComplete="false"
          autoCorrect="off"
          variant="bordered"
          isRequired
          onValueChange={(e) => {
            updateClientSettings({
              ...clientSettings,
              firstName: e,
            });
            setFirstNameError("");
            !validateOnlyLetter(clientSettings.firstName!);
            setConfirmBtnDisable(false);
          }}
          color={firstNameError ? "danger" : "default"}
          errorMessage={firstNameError}
          isInvalid={!!firstNameError}
          onFocusChange={(e) => {
            if (!e) {
              handleInputRequired(clientSettings.firstName!)
                ? setFirstNameError(InputError.InputRequired)
                : !validateOnlyLetter(clientSettings.firstName!)
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
          value={clientSettings?.lastName ? clientSettings.lastName : ""}
          autoCapitalize="none"
          autoComplete="false"
          autoCorrect="off"
          variant="bordered"
          isRequired
          onValueChange={(e) => {
            updateClientSettings({
              ...clientSettings,
              lastName: e,
            });
            setLastNameError("");
            !validateOnlyLetter(clientSettings.lastName!);
            setConfirmBtnDisable(false);
          }}
          color={lastNameError ? "danger" : "default"}
          errorMessage={lastNameError}
          isInvalid={!!lastNameError}
          onFocusChange={(e) => {
            if (!e) {
              handleInputRequired(clientSettings.lastName!)
                ? setLastNameError(InputError.InputRequired)
                : !validateOnlyLetter(clientSettings.lastName!)
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
          value={clientSettings?.username ? clientSettings.username : ""}
          autoCapitalize="none"
          autoComplete="false"
          autoCorrect="off"
          variant="bordered"
          isRequired
          onValueChange={(e) => {
            updateClientSettings({
              ...clientSettings,
              username: e.toLowerCase(),
            });
            setUsernameError("");
            !validateUsername(clientSettings.username!);
            setConfirmBtnDisable(false);
          }}
          color={usernameError ? "danger" : "default"}
          errorMessage={usernameError}
          isInvalid={!!usernameError}
          onFocusChange={(e) => {
            if (!e) {
              handleInputRequired(clientSettings.username!)
                ? setUsernameError(InputError.InputRequired)
                : !validateUsername(clientSettings.username!)
                  ? setUsernameError(InputError.UsernameInvalid)
                  : null;
              handleSearchUsername(clientSettings.username!);
            }
          }}
        />
        {/*Birthday*/}
        <div>
          {/*<Popover*/}
          {/*  isOpen={isCalendarOpen}*/}
          {/*  onOpenChange={(open) => setCalendarIsOpen(open)}*/}
          {/*>*/}
          {/*  <PopoverTrigger>*/}
          {/*    <Input*/}
          {/*      id="birth"*/}
          {/*      placeholder="Alege o data"*/}
          {/*      type="date"*/}
          {/*      value={*/}
          {/*        birthDateFull ? format(birthDateFull, "PPP") : "Data nașterii"*/}
          {/*      }*/}
          {/*      autoCapitalize="none"*/}
          {/*      autoComplete="false"*/}
          {/*      autoCorrect="off"*/}
          {/*      variant="bordered"*/}
          {/*      isRequired*/}
          {/*      startContent={*/}
          {/*        <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />*/}
          {/*      }*/}
          {/*      color={birthError ? "danger" : "default"}*/}
          {/*      errorMessage={birthError}*/}
          {/*      isInvalid={!!birthError}*/}
          {/*      onFocusChange={(e) => {*/}
          {/*        if (!e) {*/}
          {/*          setBirthError("");*/}
          {/*          handleInputRequired(birthDateFull.toString())*/}
          {/*            ? setBirthError(InputError.InputRequired)*/}
          {/*            : null;*/}
          {/*          setConfirmBtnDisable(false);*/}
          {/*        }*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </PopoverTrigger>*/}
          {/*  <PopoverContent className="w-auto p-0 bg-background">*/}
          {/*    <Calendar*/}
          {/*      mode="single"*/}
          {/*      selected={birthDateFull}*/}
          {/*      onSelect={($event) => {*/}
          {/*        handleBirthChange($event);*/}
          {/*        setCalendarIsOpen(false);*/}
          {/*        setBirthError("");*/}
          {/*      }}*/}
          {/*      initialFocus*/}
          {/*      required*/}
          {/*    />*/}
          {/*  </PopoverContent>*/}
          {/*</Popover>*/}
        </div>
        {/*Gender*/}
        <Select
          label="Gen"
          className="bg-background"
          variant="bordered"
          placeholder="Alege"
          isRequired
          defaultSelectedKeys={
            clientSettings?.gender ? [clientSettings.gender] : []
          }
          value={clientSettings?.gender ? clientSettings.gender : ""}
          onChange={(e) => {
            updateClientSettings({
              ...clientSettings,
              gender: e.target.value as GenderType,
            });
            setGenderError("");
            handleInputRequired(
              clientSettings.gender ? clientSettings.gender : undefined,
            )
              ? setGenderError(InputError.InputRequired)
              : null;
            setConfirmBtnDisable(false);
          }}
          color={genderError ? "danger" : "default"}
          errorMessage={genderError}
          isInvalid={!!genderError}
        >
          {genderList.map((gen) => (
            <SelectItem
              key={gen}
              value={gen}
              textValue={gen}
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
          placeholder="+40770212948"
          type="text"
          label="Telefon"
          value={clientSettings?.phone ? clientSettings.phone : ""}
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
        {/* <Input
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
                ? setHeightError(InputError.InputRequired)
                : onboardingDetails.height && onboardingDetails.height <= 50
                  ? setHeightError(InputError.HeightGreater)
                  : null;
            }
          }}
        /> */}

        {/*Greutate*/}
        {/* <Input
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
                ? setWeightError(InputError.InputRequired)
                : onboardingDetails.weight && onboardingDetails.weight <= 30
                  ? setWeightError(InputError.WeightGreater)
                  : null;
            }
          }}
        /> */}
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
