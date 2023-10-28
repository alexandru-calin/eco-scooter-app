import { Marker, Popup } from "react-leaflet";

const Markers = ({ markers }) => {
  return markers.map(({ lat, lng, title }, index) => (
    <Marker key={index} position={{ lat, lng }}>
      <Popup>{title}</Popup>
    </Marker>
  ));
};

export default Markers;
