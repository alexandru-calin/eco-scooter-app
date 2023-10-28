import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import Sidebar from "./Sidebar";

const MapWrapper = ({ center }) => {
  const [map, setMap] = useState(null);
  const [points, setPoints] = useState([
    {
      lat: 45.74807260622888,
      lng: 21.23212516357711,
      title: "Universitatea de Vest",
      scooters: 10,
    },
    {
      lat: 45.75519952575813,
      lng: 21.22620284624511,
      title: "Centru Timisoara",
      scooters: 5,
    },
    {
      lat: 45.76747485777342,
      lng: 21.22817695243303,
      title: "Iulius Town",
      scooters: 20,
    },
    {
      lat: 45.758732703143394,
      lng: 21.22869193616293,
      title: "Piata Unirii",
      scooters: 10,
    },
  ]);

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
