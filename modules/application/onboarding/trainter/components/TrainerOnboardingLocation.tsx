"use client";
import { useStore } from "@/store";
import { OnboardingLayout } from "@/modules/application/onboarding/components/OnboardingLayout";
import { Button } from "@nextui-org/button";
import { InputError, OnboardTrainerSteps } from "@/ts/enum";
import { useState } from "react";
import { handleInputRequired } from "@/helpers/helpers";
import { Select, SelectItem } from "@nextui-org/react";
import { CitiesData } from "@/constants/location";

export function ClientOnboardingLocation() {
  const onboardingDetails = useStore(
    (state) => state.onboarding.onboardingTrainerDetails,
  );
  const updateOnboardingDetails = useStore(
    (state) => state.updateOnboardingTrainerDetails,
  );

  const [currentCountryError, setCurrentCountryError] = useState("");
  const [currentCountyError, setCurrentCountyError] = useState("");
  const [currentCityError, setCurrentCityError] = useState("");

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const inputsAreOk = () => {
    if (!onboardingDetails.country) {
      setCurrentCountryError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.county) {
      setCurrentCountyError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!onboardingDetails.city) {
      setCurrentCityError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    setConfirmBtnDisable(false);

    updateOnboardingDetails({
      ...onboardingDetails,
      trainerSteps: OnboardTrainerSteps.Notifications,
    });
  };

  let countries: string[];
  let currentCounties: string[] = [];
  let currentCites: string[] = [];
  const duplicateCountries = CitiesData.map((city) => city.country);
  const duplicateCounties = CitiesData.map((city) => {
    if (city.country === onboardingDetails.country) {
      return city.county;
    } else {
      return "";
    }
  });
  const duplicateCities = CitiesData.map((city) => {
    if (city.county === onboardingDetails.county) {
      return city.name;
    } else {
      return "";
    }
  });

  // @ts-ignore
  countries = [...new Set(duplicateCountries)].sort();

  // @ts-ignore
  currentCounties = [...new Set(duplicateCounties)].sort();

  // @ts-ignore
  currentCites = [...new Set(duplicateCities)].sort();

  return (
    <OnboardingLayout
      image={"/images/onboarding/location.jpg"}
      author={"Ray Lewis, American Football Player"}
      quote={
        "But effort? Nobody can judge that because effort is between you and you."
      }
      title={"Locație"}
      body={
        "Stabilește locația unde antrenezi pentru a putea fi găsit de clientii din apropierea ta."
      }
    >
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-x-3 gap-y-4">
          {/*Country*/}
          <Select
            label="Tara"
            variant="bordered"
            placeholder="Alege"
            isRequired
            defaultSelectedKeys={
              onboardingDetails.country ? [onboardingDetails.country] : []
            }
            value={onboardingDetails.country ? onboardingDetails.country : ""}
            onChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                country: e.target.value,
                county: undefined,
                city: undefined,
              });
              setCurrentCountryError("");
              handleInputRequired(onboardingDetails.country)
                ? setCurrentCountryError(InputError.InputRequired)
                : null;
              setConfirmBtnDisable(false);
            }}
            color={currentCountryError ? "danger" : "primary"}
            errorMessage={currentCountryError}
            isInvalid={!!currentCountryError}
          >
            {countries.map((gen) => (
              <SelectItem
                color={"primary"}
                key={gen}
                value={gen}
                onClick={() => {
                  currentCounties = [];
                  currentCites = [];
                  setCurrentCountryError("");
                  setConfirmBtnDisable(false);
                }}
              >
                {gen}
              </SelectItem>
            ))}
          </Select>
          {/*County*/}
          <Select
            label="Judet"
            variant="bordered"
            placeholder="Alege"
            isRequired
            defaultSelectedKeys={
              onboardingDetails.county ? [onboardingDetails.county] : []
            }
            value={onboardingDetails.county ? onboardingDetails.county : ""}
            onChange={(e) => {
              currentCounties = [];
              currentCites = [];
              updateOnboardingDetails({
                ...onboardingDetails,
                county: e.target.value,
                city: undefined,
              });
              setCurrentCountyError("");
              handleInputRequired(onboardingDetails.county)
                ? setCurrentCountyError(InputError.InputRequired)
                : null;
              setConfirmBtnDisable(false);
            }}
            color={currentCountyError ? "danger" : "primary"}
            errorMessage={currentCountyError}
            isInvalid={!!currentCountyError}
          >
            {currentCounties.map((county) => (
              <SelectItem
                color={"primary"}
                key={county}
                value={county}
                onClick={() => {
                  setCurrentCountyError("");
                  setConfirmBtnDisable(false);
                }}
              >
                {county}
              </SelectItem>
            ))}
          </Select>
          {/*City*/}
          <Select
            label="Oras"
            variant="bordered"
            placeholder="Alege"
            isRequired
            defaultSelectedKeys={
              onboardingDetails.city ? [onboardingDetails.city] : []
            }
            value={onboardingDetails.city ? onboardingDetails.city : ""}
            onChange={(e) => {
              updateOnboardingDetails({
                ...onboardingDetails,
                city: e.target.value,
              });
              setCurrentCityError("");
              handleInputRequired(onboardingDetails.city)
                ? setCurrentCityError(InputError.InputRequired)
                : null;
              setConfirmBtnDisable(false);
            }}
            color={currentCityError ? "danger" : "primary"}
            errorMessage={currentCityError}
            isInvalid={!!currentCityError}
          >
            {currentCites.map((city) => (
              <SelectItem
                color={"primary"}
                key={city}
                value={city}
                onClick={() => {
                  setCurrentCityError("");
                  setConfirmBtnDisable(false);
                }}
              >
                {city}
              </SelectItem>
            ))}
          </Select>
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
          Next
        </Button>
        <Button
          onClick={() =>
            updateOnboardingDetails({
              ...onboardingDetails,
              trainerSteps: OnboardTrainerSteps.Availability,
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
