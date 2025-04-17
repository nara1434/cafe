// MapComponent.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 17.4469404,
  lng: 78.386181,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDt_4uMGVorXV5oNrQsQ5Nj4GMynE5WcMY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
