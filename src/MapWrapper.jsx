import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import Sidebar from "./Sidebar";

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
      <Sidebar points={points} />
      <Markers markers={points} />
    </MapContainer>
  );
};

export default MapWrapper;
