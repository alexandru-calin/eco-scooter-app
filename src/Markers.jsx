import { Marker, Popup, useMap } from "react-leaflet";

const Markers = ({ markers }) => {
  const map = useMap();

  return markers.map(({ lat, lng, title }, index) => (
    <Marker
      key={index}
      position={{ lat, lng }}
      eventHandlers={{
        click(e) {
          const location = e.target.getLatLng();
          console.log(location);
          map.flyToBounds([location]);
        },
      }}
    >
      <Popup>{title}</Popup>
    </Marker>
  ));
};

export default Markers;
