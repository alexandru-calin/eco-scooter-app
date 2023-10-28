import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";

const MapWrapper = ({ center, points }) => {
  const [map, setMap] = useState(null);

  return (
    <MapContainer
      id="map"
      whenReady={setMap}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers markers={points} />
    </MapContainer>
  );
};

export default MapWrapper;
