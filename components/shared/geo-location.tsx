"use client";
import { useState } from "react";
import axios from "axios";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeResponse {
  results: {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    place_id: string;
    types: string[];
  }[];
  status: string;
}

interface Location {
  country: string;
  county: string;
  city: string;
}

const GeoLocation = () => {
  const [location, setLocation] = useState<Location>({
    country: "",
    county: "",
    city: "",
  });

  const fetchLocationData = async (lat: number, lng: number) => {
    try {
      const response = await axios.get<GeocodeResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_API_KEY}`,
      );

      const addressComponents = response.data.results[0].address_components;

      const country = addressComponents.find((component) =>
        component.types.includes("country"),
      )?.long_name;
      const county = addressComponents.find((component) =>
        component.types.includes("administrative_area_level_1"),
      )?.long_name;
      const city = addressComponents.find((component) =>
        component.types.includes("locality"),
      )?.long_name;

      setLocation({
        country: country || "",
        county: county || "",
        city: city || "",
      });
    } catch (error) {
      console.error("Failed to fetch location data", error);
    }
  };
  return (
    <div>
      <button
        onClick={() => fetchLocationData(40.7128, -74.006)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Location
      </button>
      <div>
        <p>Country: {location.country}</p>
        <p>County: {location.county}</p>
        <p>City: {location.city}</p>
      </div>
    </div>
  );
};

export default GeoLocation;
