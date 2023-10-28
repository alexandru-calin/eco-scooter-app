import { useState } from "react";
import { useMap } from "react-leaflet";
import Form from "./Form";

const Sidebar = ({ points, handleLocationAdd }) => {
  const map = useMap();

  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleClickLocation = (e) => {
    const { key } = e.target.dataset;
    const { lat, lng } = points[key];
    map.flyToBounds([{ lat, lng }]);
    setSelected(points[key]);
  };

  const handleClickBack = () => {
    setSelected(null);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const locations = points.map(({ title }, i) => {
    return (
      <li key={i} data-key={i} onClick={handleClickLocation}>
        {title}
      </li>
    );
  });

  return (
    <div className="side-bar">
      {selected ? (
        <>
          <button onClick={handleClickBack}>Go back</button>
          <h2>{selected.title}</h2>
          <p>lat: {selected.lat}</p>
          <p>lng: {selected.lng}</p>
          <p>scooters: {selected.scooters}</p>
        </>
      ) : (
        <>
          <h2>Available locations</h2>
          <ul>{locations}</ul>
          {showForm ? (
            <Form
              handleLocationAdd={handleLocationAdd}
              handleToggleForm={handleToggleForm}
            />
          ) : (
            <button onClick={handleToggleForm}>add location</button>
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
