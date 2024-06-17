import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 12,
  lng: 112,
};

function Map() {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    />
  );
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY_HERE",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map />
    </div>
  );
}
