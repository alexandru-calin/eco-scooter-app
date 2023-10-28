import { useEffect } from "react";
import { useMap } from "react-leaflet";

const Location = () => {
  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
    });
  }, [map]);
};

export default Location;
