import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={
        process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : ""
      }
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
