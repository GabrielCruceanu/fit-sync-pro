"use client";
import React, { useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { handleInputRequired } from "@/helpers/helpers";
import { InputError } from "@/ts/enum";
import { GymType, NutritionistType } from "@/ts/types";
import { CitiesData } from "@/constants/location";
import nutritionistTypes from "@/constants/nutritionists";
import { useNutritionistsStore } from "@/store/nutritionists";
import { handleScrollTo } from "@/helpers/scroll-to";
import gymTypes from "@/constants/gym";
import { useGymsStore } from "@/store/gyms";

export const GymsSearchForm = () => {
  const [country, setCountry] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [gymType, setGymType] = useState<GymType | null>(null);
  const [currentCountryError, setCurrentCountryError] = useState<string>("");
  const [currentCountyError, setCurrentCountyError] = useState<string>("");
  const [currentCityError, setCurrentCityError] = useState<string>("");
  const [gymTypeError, setGymTypeError] = useState<string>("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState<boolean>(false);
  const { fetchFilteredGyms } = useGymsStore((state) => state);

  const inputsAreOk = () => {
    if (!country) {
      setCurrentCountryError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!county) {
      setCurrentCountyError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!city) {
      setCurrentCityError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    if (!gymType) {
      setGymTypeError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    fetchFilteredGyms(country, county, city, gymType).finally(() => {
      setConfirmBtnDisable(false);
      handleScrollTo("list");
    });
  };

  let countries: string[];
  let currentCounties: string[] = [];
  let currentCites: string[] = [];
  const duplicateCountries = CitiesData.map((city) => city.country);
  const duplicateCounties = CitiesData.map((city) => {
    if (city.country === country) {
      return city.county;
    } else {
      return "";
    }
  });
  const duplicateCities = CitiesData.map((city) => {
    if (city.county === county) {
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
    <>
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-4">
        {/*Country*/}
        <Select
          label="Country"
          variant="bordered"
          placeholder="Choose"
          isRequired
          defaultSelectedKeys={country ? [country] : []}
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setCurrentCountryError("");
            handleInputRequired(country)
              ? setCurrentCountryError(InputError.InputRequired)
              : null;
            setConfirmBtnDisable(false);
          }}
          color={currentCountryError ? "danger" : "default"}
          errorMessage={currentCountryError}
          isInvalid={!!currentCountryError}
        >
          {countries.map((country) => (
            <SelectItem
              color={"default"}
              key={country}
              value={country}
              textValue={country}
              onClick={() => {
                currentCounties = [];
                currentCites = [];
                setCurrentCountryError("");
                setConfirmBtnDisable(false);
              }}
            >
              {country}
            </SelectItem>
          ))}
        </Select>
        {/*County*/}
        <Select
          label="State/County"
          variant="bordered"
          placeholder="Choose"
          isRequired
          defaultSelectedKeys={county ? [county] : []}
          value={county}
          onChange={(e) => {
            currentCounties = [];
            currentCites = [];
            setCounty(e.target.value);
            setCurrentCountyError("");
            handleInputRequired(county)
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
              textValue={county}
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
          label="City"
          variant="bordered"
          placeholder="Choose"
          isRequired
          defaultSelectedKeys={city ? [city] : []}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setCurrentCityError("");
            handleInputRequired(city)
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
              textValue={city}
              onClick={() => {
                setCurrentCityError("");
                setConfirmBtnDisable(false);
              }}
            >
              {city}
            </SelectItem>
          ))}
        </Select>
        {/*Gym Type*/}
        <Select
          label="Gym Type"
          className="bg-background"
          variant="bordered"
          placeholder="Choose"
          isRequired
          value={gymType ? gymType : ""}
          defaultSelectedKeys={gymType ? [gymType] : []}
          onChange={(event) => {
            setGymType(event.target.value as GymType);
            setGymTypeError("");
            setConfirmBtnDisable(false);
          }}
          color={gymTypeError ? "danger" : "primary"}
          errorMessage={gymTypeError}
          isInvalid={!!gymTypeError}
        >
          {gymTypes.map((gym: GymType) => (
            <SelectItem
              key={gym}
              value={gym}
              textValue={gym}
              className="bg-background"
            >
              {gym}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="mt-4">
        <Button
          onClick={() => inputsAreOk()}
          type="button"
          color={"primary"}
          radius={"sm"}
          fullWidth
          disabled={confirmBtnDisable}
          className="mb-3"
        >
          Search
        </Button>
      </div>
    </>
  );
};
