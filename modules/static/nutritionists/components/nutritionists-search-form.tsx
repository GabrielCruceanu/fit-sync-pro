"use client";
import React, { useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { handleInputRequired } from "@/helpers/helpers";
import { InputError } from "@/ts/enum";
import { NutritionistType } from "@/ts/types";
import { CitiesData } from "@/constants/location";
import nutritionistTypes from "@/constants/nutritionists";
import { useNutritionistsStore } from "@/store/nutritionists";
import { handleScrollTo } from "@/helpers/scroll-to";

type Props = {
  onClick: () => void;
};

export const NutritionistsSearchForm = ({ onClick }: Props) => {
  const [country, setCountry] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [nutritionistType, setNutritionistType] = useState<string>("");
  const [currentCountryError, setCurrentCountryError] = useState<string>("");
  const [currentCountyError, setCurrentCountyError] = useState<string>("");
  const [currentCityError, setCurrentCityError] = useState<string>("");
  const [nutritionistTypeError, setNutritionistTypeError] =
    useState<string>("");
  const [confirmBtnDisable, setConfirmBtnDisable] = useState<boolean>(false);
  const { fetchFilteredNutritionists } = useNutritionistsStore(
    (state) => state,
  );

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

    if (!nutritionistType) {
      setNutritionistTypeError(InputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    fetchFilteredNutritionists(country, county, city, nutritionistType).finally(
      () => {
        setConfirmBtnDisable(false);
        handleScrollTo("list");
      },
    );
    onClick();
  };

  let countries: string[];
  let currentCounties: string[] = [];
  let currentCites: string[] = [];
  const duplicateCountries = CitiesData.map((city) =>
    city.country === "Romania" ? city.country : "",
  );
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4">
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
          color={currentCountyError ? "danger" : "default"}
          errorMessage={currentCountyError}
          isInvalid={!!currentCountyError}
        >
          {currentCounties.map((county) => (
            <SelectItem
              color={"default"}
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
          color={currentCityError ? "danger" : "default"}
          errorMessage={currentCityError}
          isInvalid={!!currentCityError}
        >
          {currentCites.map((city) => (
            <SelectItem
              color={"default"}
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
        {/*Nutritionist Type*/}
        <Select
          label="Nutritionist Type"
          variant="bordered"
          placeholder="Choose"
          isRequired
          value={nutritionistType}
          defaultSelectedKeys={nutritionistType ? [nutritionistType] : []}
          onChange={(event) => {
            setNutritionistType(event.target.value);
            setNutritionistTypeError("");
            setConfirmBtnDisable(false);
          }}
          color={nutritionistTypeError ? "danger" : "default"}
          errorMessage={nutritionistTypeError}
          isInvalid={!!nutritionistTypeError}
        >
          {nutritionistTypes.map((nutritionist: NutritionistType) => (
            <SelectItem
              key={nutritionist}
              value={nutritionist}
              textValue={nutritionist}
              color={"default"}
            >
              {nutritionist}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="mt-4 lg:max-w-80 lg:mx-auto">
        <Button
          onClick={() => inputsAreOk()}
          type="button"
          radius={"sm"}
          fullWidth
          disabled={confirmBtnDisable}
          className="mb-3 bg-foreground text-background"
        >
          Search
        </Button>
      </div>
    </>
  );
};
