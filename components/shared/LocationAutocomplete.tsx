"use client";
import React, { useState, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

interface LocationDetails {
  city: string;
  county: string;
  country: string;
}

const LocationAutocomplete = () => {
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({
    city: "",
    county: "",
    country: "",
  });
  const autocompleteRef = useRef<google.maps.places.Autocomplete>();

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place) {
      let city = "";
      let county = "";
      let country = "";

      place.address_components?.forEach((component) => {
        if (component.types.includes("locality")) {
          city = component.long_name;
        }
        if (component.types.includes("administrative_area_level_2")) {
          county = component.long_name;
        }
        if (component.types.includes("country")) {
          country = component.long_name;
        }
      });
      setLocationDetails({
        city,
        county,
        country,
      });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_API_KEY || ""}
      libraries={["places"]}
    >
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter your location"
          className="text-lx w-full p-2 border border-gray-300 rounded-md"
        />
      </Autocomplete>
      <div>
        <p>City: {locationDetails.city}</p>
        <p>County: {locationDetails.county}</p>
        <p>Country: {locationDetails.country}</p>
      </div>
    </LoadScript>
  );
};
export default LocationAutocomplete;
